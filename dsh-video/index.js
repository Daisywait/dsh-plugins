// dsh-video · Host 半区
// 职责：
//   - 用 @remotion/renderer 把「视频」标签页里的合成渲染成 MP4
//   - HTTP 路由：状态 / 渲染任务（进度轮询、取消）/ 输出文件 / 独立工作室页
// 依赖：@remotion/bundler + @remotion/renderer（装在插件自己的 node_modules，
//       缺失时在 /video/status 与渲染接口给出可操作的提示）。
import { createReadStream, existsSync, mkdirSync, readdirSync, readFileSync, rmSync, statSync } from 'node:fs'
import { createHash } from 'node:crypto'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const PLUGIN_DIR = dirname(fileURLToPath(import.meta.url))
const REMOTION_DIR = join(PLUGIN_DIR, 'remotion')
const ENTRY_POINT = join(REMOTION_DIR, 'src', 'index.ts')
const OUT_DIR = join(PLUGIN_DIR, 'output')
const BUNDLE_DIR = join(PLUGIN_DIR, '.bundle')
const STUDIO_DIR = join(PLUGIN_DIR, 'studio')
const OUTPUT_KEEP = 20

mkdirSync(OUT_DIR, { recursive: true })

const state = {
  ready: false,
  depsError: null,
  lastError: null
}

let remo = null
async function getRemotion() {
  if (remo) return remo
  try {
    const [bundler, renderer] = await Promise.all([
      import('@remotion/bundler'),
      import('@remotion/renderer')
    ])
    remo = { bundler, renderer }
    state.ready = true
    state.depsError = null
    return remo
  } catch (e) {
    state.ready = false
    state.depsError = String((e && e.message) || e)
    throw new Error(
      'Remotion 依赖未安装：请先在插件目录运行依赖安装脚本再重启 DSH。\n' +
      '  cd "' + PLUGIN_DIR + '" 然后运行  .\\scripts\\install-deps.ps1\n' +
      '（原始错误：' + state.depsError.slice(0, 200) + '）'
    )
  }
}

/** remotion/src 内容哈希（bundle 缓存键）。 */
function dirHash(dir) {
  const h = createHash('sha1')
  const walk = (d) => {
    let items = []
    try { items = readdirSync(d, { withFileTypes: true }) } catch (e) { return }
    items.sort((a, b) => (a.name < b.name ? -1 : 1))
    for (const it of items) {
      if (it.name === 'node_modules') continue
      const p = join(d, it.name)
      if (it.isDirectory()) walk(p)
      else if (it.isFile()) {
        h.update(p.replace(/\\/g, '/'))
        h.update('\0')
        try { h.update(readFileSync(p)) } catch (e) {}
      }
    }
  }
  walk(dir)
  return h.digest('hex')
}

let bundleCache = null
async function getServeUrl(job) {
  const r = await getRemotion()
  const hash = dirHash(REMOTION_DIR)
  if (bundleCache && bundleCache.hash === hash) return bundleCache.url
  if (job) { job.status = 'bundling'; job.progress = 0 }
  const url = await r.bundler.bundle({
    entryPoint: ENTRY_POINT,
    outDir: BUNDLE_DIR,
    onProgress: (p) => { if (job && jobs.has(job.id)) job.bundleProgress = p }
  })
  bundleCache = { hash, url }
  return url
}

// ---- 渲染任务 -------------------------------------------------------------

const jobs = new Map()
let renderQueue = Promise.resolve()

function snapshotJob(job) {
  const out = {
    id: job.id,
    status: job.status,
    progress: typeof job.progress === 'number' ? job.progress : 0,
    bundleProgress: job.bundleProgress || null,
    browserProgress: job.browserProgress || null,
    error: job.error || null,
    outputUrl: job.outputUrl || null,
    composition: job.composition || null,
    width: job.width || null,
    height: job.height || null,
    startedAt: job.startedAt,
    doneAt: job.doneAt
  }
  return out
}

function listJobs() {
  return [...jobs.values()]
    .sort((a, b) => (a.startedAt < b.startedAt ? 1 : -1))
    .slice(0, 12)
    .map(snapshotJob)
}

async function runJob(job, opts) {
  job.startedAt = new Date().toISOString()
  try {
    const r = await getRemotion()
    const serveUrl = await getServeUrl(job)
    job.status = 'preparing'
    job.progress = 0
    const composition = await r.renderer.selectComposition({
      serveUrl,
      id: opts.composition,
      inputProps: opts.props,
      onBrowserDownload: () => ({
        onProgress: ({ downloadedBytes, totalBytes }) => {
          if (!jobs.has(job.id)) return
          job.status = 'downloading-browser'
          job.browserProgress = totalBytes ? downloadedBytes / totalBytes : 0
        },
        version: null
      })
    })
    if (job.cancelled) {
      job.status = 'cancelled'
      job.doneAt = new Date().toISOString()
      return
    }
    const videoConfig = { ...composition, width: opts.width, height: opts.height }
    const outputPath = join(OUT_DIR, job.id + '.mp4')
    job.status = 'rendering'
    await r.renderer.renderMedia({
      composition: videoConfig,
      serveUrl,
      codec: 'h264',
      outputLocation: outputPath,
      inputProps: opts.props,
      overwrite: true,
      cancelSignal: job.cancelSignal,
      onProgress: (p) => {
        if (!jobs.has(job.id)) return
        job.progress = typeof p.progress === 'number' ? p.progress : 0
        job.renderedFrames = p.renderedFrames
        job.encodedFrames = p.encodedFrames
      }
    })
    if (job.cancelled) {
      job.status = 'cancelled'
      try { rmSync(outputPath, { force: true }) } catch (e) {}
    } else {
      job.status = 'done'
      job.progress = 1
      job.outputUrl = '/video/output/' + job.id + '.mp4'
    }
  } catch (e) {
    if (job.cancelled) {
      job.status = 'cancelled'
    } else {
      job.status = 'error'
      job.error = String((e && e.message) || e).slice(0, 800)
    }
  }
  job.doneAt = new Date().toISOString()
  // 清理：只保留最近的输出
  try {
    const files = readdirSync(OUT_DIR).filter((f) => f.endsWith('.mp4')).sort()
    for (const f of files.slice(0, Math.max(0, files.length - OUTPUT_KEEP))) {
      rmSync(join(OUT_DIR, f), { force: true })
    }
  } catch (e) {}
}

function startRender(opts) {
  const cs = remo ? remo.renderer.makeCancelSignal() : null
  const id = 'v' + Date.now().toString(36) + Math.random().toString(36).slice(2, 6)
  const job = {
    id,
    status: 'queued',
    progress: 0,
    composition: opts.composition,
    width: opts.width,
    height: opts.height,
    cancelled: false,
    cancelSignal: cs ? cs.cancelSignal : undefined,
    cancelFn: cs ? cs.cancel : undefined,
    startedAt: new Date().toISOString()
  }
  jobs.set(id, job)
  renderQueue = renderQueue.then(() => runJob(job, opts))
  return job
}

// ---- HTTP 路由 ------------------------------------------------------------

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.map': 'application/json; charset=utf-8',
  '.mp4': 'video/mp4',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
  '.woff2': 'font/woff2',
  '.ico': 'image/x-icon'
}

function apply(ctx) {
  ctx.inject(['webServer'], (httpCtx) => {
    const json = (res, obj, status = 200) => {
      res.writeHead(status, {
        'content-type': 'application/json; charset=utf-8',
        'cache-control': 'no-store'
      })
      res.end(JSON.stringify(obj))
    }
    const readBody = (req, cb) => {
      let body = ''
      req.on('data', (c) => { body += c })
      req.on('end', () => {
        let parsed = {}
        try { parsed = JSON.parse(body || '{}') } catch (e) {}
        cb(parsed)
      })
    }

    httpCtx.effect(() => httpCtx.webServer.register({
      kind: 'exact',
      path: '/video/status',
      handler: async (req, res) => {
        if (req.method !== 'GET' && req.method !== 'HEAD') { res.writeHead(405); res.end(); return }
        let ready = state.ready
        if (!ready && !state.depsError) {
          try { await getRemotion(); ready = true } catch (e) {}
        }
        json(res, {
          ok: true,
          ready,
          depsError: state.depsError,
          pluginDir: PLUGIN_DIR,
          outputDir: OUT_DIR,
          jobs: listJobs(),
          studio: existsSync(join(STUDIO_DIR, 'studio.js')),
          chromeCached: !state.depsError && ready
        })
      }
    }), 'dsh-video: status')

    httpCtx.effect(() => httpCtx.webServer.register({
      kind: 'exact',
      path: '/video/render',
      handler: (req, res) => {
        if (req.method !== 'POST') { res.writeHead(405); res.end(); return }
        readBody(req, async (body) => {
          const composition = String(body.composition || '')
          const props = (body.props && typeof body.props === 'object') ? body.props : {}
          const width = Math.min(3840, Math.max(160, Math.round(Number(body.width) || 1280)))
          const height = Math.min(2160, Math.max(90, Math.round(Number(body.height) || 720)))
          if (!/^[A-Za-z]+-\d+s-\d+fps$/.test(composition)) {
            json(res, { ok: false, error: 'composition id 不合法' }, 400)
            return
          }
          try {
            await getRemotion()
          } catch (e) {
            json(res, { ok: false, error: String(e.message || e) }, 500)
            return
          }
          const job = startRender({ composition, props, width, height })
          json(res, { ok: true, id: job.id, job: snapshotJob(job) })
        })
      }
    }), 'dsh-video: render')

    httpCtx.effect(() => httpCtx.webServer.register({
      kind: 'exact',
      path: '/video/cancel',
      handler: (req, res) => {
        if (req.method !== 'POST') { res.writeHead(405); res.end(); return }
        readBody(req, (body) => {
          const id = String(body.id || '')
          const job = jobs.get(id)
          if (!job) { json(res, { ok: false, error: '任务不存在' }, 404); return }
          job.cancelled = true
          if (job.cancelFn) { try { job.cancelFn() } catch (e) {} }
          json(res, { ok: true, id })
        })
      }
    }), 'dsh-video: cancel')

    httpCtx.effect(() => httpCtx.webServer.register({
      kind: 'exact',
      path: '/video/studio',
      handler: async (req, res) => {
        if (req.method !== 'GET' && req.method !== 'HEAD') { res.writeHead(405); res.end(); return }
        const p = join(STUDIO_DIR, 'index.html')
        if (!existsSync(p)) { res.writeHead(404); res.end('studio page not built'); return }
        res.writeHead(200, { 'content-type': MIME['.html'], 'cache-control': 'no-cache' })
        res.end(readFileSync(p))
      }
    }), 'dsh-video: studio page')

    httpCtx.effect(() => httpCtx.webServer.register({
      kind: 'prefix',
      path: '/video',
      handler: (req, res) => {
        const pathname = decodeURIComponent(new URL(req.url || '/', 'http://x').pathname)
        if (pathname === '/video/output/' || pathname.startsWith('/video/output/')) {
          const file = pathname.slice('/video/output/'.length)
          if (!file || !/^[A-Za-z0-9._-]+\.mp4$/.test(file)) { res.writeHead(400); res.end(); return }
          const p = join(OUT_DIR, file)
          if (!existsSync(p)) { res.writeHead(404); res.end('not found'); return }
          res.writeHead(200, {
            'content-type': 'video/mp4',
            'cache-control': 'no-cache',
            'content-length': String(statSync(p).size)
          })
          if (req.method === 'HEAD') { res.end(); return }
          const stream = createReadStream(p)
          stream.on('error', () => { try { res.destroy() } catch (e) {} })
          stream.pipe(res)
          return
        }
        if (pathname === '/video/studio/studio.js' || pathname === '/video/studio.js') {
          const p = join(STUDIO_DIR, 'studio.js')
          if (!existsSync(p)) { res.writeHead(404); res.end('studio bundle not built'); return }
          res.writeHead(200, { 'content-type': MIME['.js'], 'cache-control': 'no-cache' })
          if (req.method === 'HEAD') { res.end(); return }
          res.end(readFileSync(p))
          return
        }
        if (pathname.startsWith('/video/studio/')) {
          const rel = pathname.slice('/video/studio/'.length)
          if (!rel || rel.includes('..')) { res.writeHead(404); res.end(); return }
          const p = join(STUDIO_DIR, rel)
          if (!existsSync(p)) { res.writeHead(404); res.end(); return }
          const ext = p.slice(p.lastIndexOf('.')).toLowerCase()
          res.writeHead(200, {
            'content-type': MIME[ext] || 'application/octet-stream',
            'cache-control': 'no-cache'
          })
          if (req.method === 'HEAD') { res.end(); return }
          res.end(readFileSync(p))
          return
        }
        if (pathname === '/video/jobs') {
          json(res, { ok: true, jobs: listJobs() })
          return
        }
        const jobMatch = pathname.match(/^\/video\/job\/([A-Za-z0-9_-]+)$/)
        if (jobMatch) {
          const job = jobs.get(jobMatch[1])
          if (!job) { json(res, { ok: false, error: '任务不存在' }, 404); return }
          json(res, { ok: true, job: snapshotJob(job) })
          return
        }
        res.writeHead(404)
        res.end()
      }
    }), 'dsh-video: files & jobs')
  })
}

export { apply }

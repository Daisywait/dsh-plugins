// dsh-video · Host 半区
// 职责：
//   - 用 @remotion/renderer 把「视频」标签页里的合成渲染成 MP4
//   - HTTP 路由：状态 / 渲染任务（进度轮询、取消）/ 输出文件 / 独立工作室页
// 依赖：@remotion/bundler + @remotion/renderer（装在插件自己的 node_modules，
//       缺失时在 /video/status 与渲染接口给出可操作的提示）。
import { createReadStream, existsSync, mkdirSync, readdirSync, readFileSync, rmSync, statSync, writeFileSync } from 'node:fs'
import { createHash } from 'node:crypto'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const PLUGIN_DIR = dirname(fileURLToPath(import.meta.url))
const REMOTION_DIR = join(PLUGIN_DIR, 'remotion')
const ENTRY_POINT = join(REMOTION_DIR, 'src', 'index.ts')
const OUT_DIR = join(PLUGIN_DIR, 'output')
const AUDIO_DIR = join(PLUGIN_DIR, 'audio')
const BUNDLE_DIR = join(PLUGIN_DIR, '.bundle')
const STUDIO_DIR = join(PLUGIN_DIR, 'studio')
const OUTPUT_KEEP = 20

mkdirSync(OUT_DIR, { recursive: true })
mkdirSync(AUDIO_DIR, { recursive: true })

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

// 启动时从磁盘恢复已完成任务（output/*.json 边车），让「最近渲染」列表在 DSH 重启后保留，
// 且能拿到当时的 props（供工作室编辑面板回填）。
function seedJobsFromDisk() {
  let files = []
  try { files = readdirSync(OUT_DIR).filter((f) => f.endsWith('.json')) } catch (e) { return }
  for (const f of files) {
    try {
      const m = JSON.parse(readFileSync(join(OUT_DIR, f), 'utf8'))
      if (!m || !m.id || !m.outputUrl || !existsSync(join(OUT_DIR, m.id + '.mp4'))) continue
      jobs.set(m.id, {
        id: m.id,
        status: 'done',
        progress: 1,
        composition: m.composition || null,
        width: m.width || null,
        height: m.height || null,
        props: m.props || null,
        cancelled: false,
        error: null,
        outputUrl: m.outputUrl,
        startedAt: m.startedAt || null,
        doneAt: m.doneAt || null,
        bundleProgress: null,
        browserProgress: null
      })
    } catch (e) {}
  }
}
seedJobsFromDisk()

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
    props: job.props || null,
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
      audioCodec: 'aac',
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
  // 边车文件：记住本次渲染的 props（含 doneAt），重启后用于恢复「最近渲染」列表与编辑面板回填
  if (job.status === 'done' && job.outputUrl) {
    try {
      writeFileSync(join(OUT_DIR, job.id + '.json'), JSON.stringify({
        id: job.id,
        status: 'done',
        composition: job.composition,
        width: job.width,
        height: job.height,
        props: job.props || null,
        outputUrl: job.outputUrl,
        startedAt: job.startedAt,
        doneAt: job.doneAt
      }))
    } catch (e) {}
  }
  // 清理：只保留最近的输出
  try {
    const files = readdirSync(OUT_DIR).filter((f) => f.endsWith('.mp4')).sort()
    for (const f of files.slice(0, Math.max(0, files.length - OUTPUT_KEEP))) {
      rmSync(join(OUT_DIR, f), { force: true })
      rmSync(join(OUT_DIR, f.replace(/\.mp4$/, '.json')), { force: true })
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
    props: opts.props || null,
    cancelled: false,
    cancelSignal: cs ? cs.cancelSignal : undefined,
    cancelFn: cs ? cs.cancel : undefined,
    startedAt: new Date().toISOString()
  }
  jobs.set(id, job)
  renderQueue = renderQueue.then(() => runJob(job, opts))
  return job
}

// ---- 模型工具（智能体生成视频） ---------------------------------------------
// 通过 ctx.tools 注册两个 ToolDefinition（raw 对象，无需引入 @deepseek-ai/dsh-tools）：
//   video_render      渲染视频（默认等待完成；wait:false 时立即返回，配合 video_job_status 轮询）
//   video_job_status  查询任务状态 / 输出地址
// 默认参数与 remotion/src/props.ts 的 DEFAULT_PROPS 保持一致。

const TOOL_DEFAULTS = {
  title: '用 Remotion 做视频',
  subtitle: '预览即最终画面，所见即所得',
  byline: 'DSH 插件 · dsh-video',
  emoji: '🎬',
  bg1: '#0f0c29',
  bg2: '#302b63',
  accent: '#ffd166',
  textColor: '#ffffff',
  install: '仓库标签页 → 一键安装 → 重启 DSH',
  imageUrl: '/skin/640.jpg',
  audioUrl: ''
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms))
const clampEven = (n, min, max) => {
  let v = Math.round(Number(n) || 0)
  if (v < min) v = min
  if (v > max) v = max
  return v % 2 === 0 ? v : v + 1
}
const strArg = (v, fallback) => (typeof v === 'string' && v.trim() !== '' ? v.trim() : fallback)
const pickEnum = (v, list, fallback) => (list.includes(v) ? v : fallback)

const VIDEO_OUTPUT_SCHEMA = {
  type: 'object',
  additionalProperties: false,
  properties: {
    jobId: { type: 'string' },
    status: {
      type: 'string',
      enum: ['queued', 'bundling', 'downloading-browser', 'preparing', 'rendering', 'done', 'error', 'cancelled']
    },
    progress: { type: 'number' },
    outputUrl: { oneOf: [{ type: 'string' }, { type: 'null' }] },
    composition: { type: 'string' },
    width: { type: 'integer' },
    height: { type: 'integer' },
    error: { oneOf: [{ type: 'string' }, { type: 'null' }] }
  }
}

function jobToValue(job) {
  const j = snapshotJob(job)
  return {
    jobId: j.id,
    status: j.status,
    progress: j.progress,
    outputUrl: j.outputUrl,
    composition: j.composition || '',
    width: j.width || 1280,
    height: j.height || 720,
    error: j.error
  }
}

const statusLabel = (s) => ({
  queued: '排队中',
  bundling: '打包合成代码',
  'downloading-browser': '下载渲染内核（首次）',
  preparing: '准备合成',
  rendering: '渲染中',
  done: '完成',
  error: '失败',
  cancelled: '已取消'
})[s] || s

function registerVideoTools(toolsCtx) {
  toolsCtx.tools.register({
    name: 'video_render',
    description: [
      '用 Remotion 在 DSH 宿主进程渲染一段视频并输出 H.264 MP4。',
      '两种内置合成：kind="Title" 标题卡（大字标题+副标题+署名，渐变动画背景）与 kind="End" 结束卡（谢谢观看）。',
      '所有文案与配色均可自定义；时长 seconds∈{5,10,15,20}，帧率 fps∈{24,30,60}，分辨率默认 1280×720（width/height 可改为 854×480、1920×1080 等偶数）。',
      '默认等待渲染完成（wait=true）并返回最终结果；渲染较慢（数秒到数分钟，取决于时长/分辨率/首次打包），返回 status="done" 时 outputUrl 为可下载播放的成品地址。',
      '若 wait=false 则立即返回任务信息，用 video_job_status 轮询直至 status 为 done/error/cancelled。',
      '渲染期间用户可在 DSH「视频」标签页看到任务进度与成品。完成后请在回复中把 outputUrl 作为链接提供给用户。'
    ].join(' '),
    parameters: {
      type: 'object',
      properties: {
        kind: { type: 'string', enum: ['Title', 'End'], description: '合成类型：Title 标题卡 / End 结束卡', default: 'Title' },
        seconds: { type: 'integer', enum: [5, 10, 15, 20], description: '视频时长（秒）', default: 5 },
        fps: { type: 'integer', enum: [24, 30, 60], description: '帧率', default: 30 },
        width: { type: 'integer', description: '输出宽度（偶数，默认 1280）', default: 1280 },
        height: { type: 'integer', description: '输出高度（偶数，默认 720）', default: 720 },
        title: { type: 'string', description: '标题文字', default: '用 Remotion 做视频' },
        subtitle: { type: 'string', description: '副标题', default: '预览即最终画面，所见即所得' },
        byline: { type: 'string', description: '署名/页脚', default: 'DSH 插件 · dsh-video' },
        emoji: { type: 'string', description: 'Emoji 图标', default: '🎬' },
        bg1: { type: 'string', description: '背景主色（CSS 颜色）', default: '#0f0c29' },
        bg2: { type: 'string', description: '背景辅色（CSS 颜色）', default: '#302b63' },
        accent: { type: 'string', description: '强调色（CSS 颜色）', default: '#ffd166' },
        textColor: { type: 'string', description: '文字颜色（CSS 颜色）', default: '#ffffff' },
        install: { type: 'string', description: '安装方法文案（多行用换行）', default: '仓库标签页 → 一键安装 → 重启 DSH' },
        imageUrl: { type: 'string', description: '背景图 URL（留空用纯渐变）', default: '/skin/640.jpg' },
        audioUrl: { type: 'string', description: '背景音乐/台词音频 URL（留空无音轨；放 dsh-video/audio/ 下经 /video/audio/ 访问）', default: '' },
        wait: { type: 'boolean', description: '是否等待渲染完成，默认 true', default: true }
      },
      additionalProperties: false
    },
    output: {
      schema: VIDEO_OUTPUT_SCHEMA,
      render: (_args, value) => {
        if (value.status === 'done') {
          return [{
            type: 'text',
            text: `视频渲染完成 ✓ ${value.composition}（${value.width}×${value.height}）\n播放/下载：${value.outputUrl}`
          }]
        }
        if (value.status === 'error') {
          return [{ type: 'text', text: `视频渲染失败：${value.error || '未知错误'}（任务 ${value.jobId}）` }]
        }
        return [{
          type: 'text',
          text: `视频渲染任务 ${value.jobId} 状态：${statusLabel(value.status)}（${Math.round(value.progress * 100)}%）。可用 video_job_status 查询最新状态。`
        }]
      }
    },
    execute: async (args, exec) => {
      if (exec.signal && exec.signal.aborted) {
        return { jobId: '', status: 'cancelled', progress: 0, outputUrl: null, composition: '', width: 0, height: 0, error: '已取消' }
      }
      const kind = pickEnum(args && args.kind, ['Title', 'End'], 'Title')
      const seconds = pickEnum(args && args.seconds, [5, 10, 15, 20], 5)
      const fps = pickEnum(args && args.fps, [24, 30, 60], 30)
      const width = clampEven(args && args.width, 160, 3840) || 1280
      const height = clampEven(args && args.height, 90, 2160) || 720
      const props = {
        title: strArg(args && args.title, TOOL_DEFAULTS.title),
        subtitle: strArg(args && args.subtitle, TOOL_DEFAULTS.subtitle),
        byline: strArg(args && args.byline, TOOL_DEFAULTS.byline),
        emoji: strArg(args && args.emoji, TOOL_DEFAULTS.emoji),
        bg1: strArg(args && args.bg1, TOOL_DEFAULTS.bg1),
        bg2: strArg(args && args.bg2, TOOL_DEFAULTS.bg2),
        accent: strArg(args && args.accent, TOOL_DEFAULTS.accent),
        textColor: strArg(args && args.textColor, TOOL_DEFAULTS.textColor),
        install: strArg(args && args.install, TOOL_DEFAULTS.install),
        imageUrl: strArg(args && args.imageUrl, TOOL_DEFAULTS.imageUrl),
        audioUrl: strArg(args && args.audioUrl, TOOL_DEFAULTS.audioUrl)
      }
      const composition = kind + '-' + seconds + 's-' + fps + 'fps'
      const job = startRender({ composition, props, width, height })
      const onAbort = () => {
        job.cancelled = true
        if (job.cancelFn) { try { job.cancelFn() } catch (e) {} }
      }
      if (exec.signal) exec.signal.addEventListener('abort', onAbort)
      try {
        if (args && args.wait === false) return jobToValue(job)
        // 等待到终态；信号中断则取消渲染
        for (;;) {
          const st = snapshotJob(job).status
          if (st === 'done' || st === 'error' || st === 'cancelled') return jobToValue(job)
          if (exec.signal && exec.signal.aborted) {
            onAbort()
            return jobToValue(job)
          }
          await sleep(900)
        }
      } finally {
        if (exec.signal) exec.signal.removeEventListener('abort', onAbort)
      }
    },
    presentCall: (args) => ({
      card: 'generic',
      title: '渲染视频（Remotion）',
      kind: 'execute',
      rawInput: {
        kind: args && args.kind,
        seconds: args && args.seconds,
        fps: args && args.fps,
        title: args && args.title
      }
    })
  })

  toolsCtx.tools.register({
    name: 'video_job_status',
    description: '查询 dsh-video 渲染任务（video_render 启动）的最新状态：排队/打包/渲染/完成/失败，完成后返回 outputUrl 成品地址。',
    parameters: {
      type: 'object',
      properties: {
        jobId: { type: 'string', description: 'video_render 返回的 jobId' }
      },
      required: ['jobId'],
      additionalProperties: false
    },
    output: {
      schema: {
        type: 'object',
        additionalProperties: false,
        properties: {
          ok: { type: 'boolean' },
          job: { oneOf: [VIDEO_OUTPUT_SCHEMA, { type: 'null' }] },
          error: { oneOf: [{ type: 'string' }, { type: 'null' }] }
        }
      },
      render: (_args, value) => {
        if (!value.ok || !value.job) return [{ type: 'text', text: '任务不存在：' + (value.error || '') }]
        const j = value.job
        if (j.status === 'done') {
          return [{ type: 'text', text: `任务 ${j.jobId} 已完成 ✓ 播放/下载：${j.outputUrl}` }]
        }
        return [{ type: 'text', text: `任务 ${j.jobId} 状态：${statusLabel(j.status)}（${Math.round(j.progress * 100)}%）` }]
      }
    },
    execute: async (args) => {
      const id = strArg(args && args.jobId, '')
      const job = jobs.get(id)
      if (!job) return { ok: false, job: null, error: '任务不存在' }
      return { ok: true, job: jobToValue(job), error: null }
    },
    presentCall: (args) => ({
      card: 'generic',
      title: '查询视频渲染任务',
      kind: 'read',
      rawInput: { jobId: args && args.jobId }
    })
  })
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
  '.ico': 'image/x-icon',
  '.mp3': 'audio/mpeg',
  '.wav': 'audio/wav',
  '.m4a': 'audio/mp4',
  '.aac': 'audio/aac',
  '.ogg': 'audio/ogg',
  '.flac': 'audio/flac'
}

function apply(ctx) {
  // 模型工具：让智能体可以直接生成视频（渲染服务就绪后注册）
  ctx.inject(['tools'], (toolsCtx) => {
    try {
      registerVideoTools(toolsCtx)
    } catch (e) {
      // 注册失败不拖垮插件（标签页/HTTP 仍可用），把错误暴露到状态里
      state.lastError = '工具注册失败: ' + String((e && e.message) || e)
    }
  })
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
        // 音频素材：dsh-video/audio/ 下的文件（供合成 <Audio> 组件与预览使用）
        if (pathname.startsWith('/video/audio/')) {
          const file = pathname.slice('/video/audio/'.length)
          if (!file || !/^[A-Za-z0-9._-]+\.(mp3|wav|m4a|aac|ogg|flac)$/.test(file)) { res.writeHead(400); res.end(); return }
          const p = join(AUDIO_DIR, file)
          if (!existsSync(p)) { res.writeHead(404); res.end('not found'); return }
          const ext = '.' + file.slice(file.lastIndexOf('.') + 1).toLowerCase()
          res.writeHead(200, {
            'content-type': MIME[ext] || 'application/octet-stream',
            'cache-control': 'public, max-age=86400',
            'access-control-allow-origin': '*',
            'content-length': String(statSync(p).size)
          })
          if (req.method === 'HEAD') { res.end(); return }
          const stream = createReadStream(p)
          stream.on('error', () => { try { res.destroy() } catch (e) {} })
          stream.pipe(res)
          return
        }
        res.writeHead(404)
        res.end()
      }
    }), 'dsh-video: files & jobs')
  })
}

export { apply }

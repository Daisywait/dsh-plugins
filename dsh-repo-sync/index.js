import { execFile } from 'node:child_process'
import { promisify } from 'node:util'
import { readdirSync, readFileSync, existsSync, cpSync } from 'node:fs'
import { join } from 'node:path'
import { createHash } from 'node:crypto'

const execFileAsync = promisify(execFile)

const REPO = 'D:\\Documents\\deepseek-harness'
const FORK_URL = 'https://github.com/Daisywait/deepseek-harness.git'
const UPSTREAM_URL = 'https://github.com/deepseek-ai/deepseek-harness.git'
const PLUGIN_ROOT = join(process.env.USERPROFILE || 'C:\\Users\\waitw', '.dsh', 'profiles', 'web', 'node_modules')

const state = {
  auto: true,
  syncing: false,
  lastSync: null,
  lastError: null,
  lastMessage: null
}

async function git(args, timeoutMs) {
  try {
    const { stdout, stderr } = await execFileAsync('git', args, {
      cwd: REPO,
      timeout: timeoutMs || 60000,
      maxBuffer: 4 * 1024 * 1024,
      windowsHide: true
    })
    return { code: 0, out: String(stdout || ''), err: String(stderr || '') }
  } catch (e) {
    return {
      code: typeof e.code === 'number' ? e.code : -1,
      out: String(e.stdout || ''),
      err: String(e.stderr || e.message || e)
    }
  }
}

async function repoReady() {
  const r = await git(['rev-parse', '--is-inside-work-tree'], 10000)
  return r.code === 0
}

async function ensureRepo() {
  if (await repoReady()) return true
  try {
    await execFileAsync('git', ['clone', '--depth', '20', FORK_URL, REPO], {
      cwd: 'D:\\Documents',
      timeout: 300000,
      maxBuffer: 4 * 1024 * 1024,
      windowsHide: true
    })
    await git(['remote', 'add', 'upstream', UPSTREAM_URL], 10000)
    return true
  } catch (e) {
    state.lastError = 'clone 失败: ' + String(e.stderr || e.message || e).trim().slice(0, 300)
    return false
  }
}

async function refreshStatus() {
  if (!(await repoReady())) {
    return {
      ready: false, auto: state.auto, syncing: state.syncing,
      lastSync: state.lastSync, lastError: state.lastError, lastMessage: state.lastMessage,
      updatedAt: Date.now()
    }
  }
  const branch = (await git(['rev-parse', '--abbrev-ref', 'HEAD'], 10000)).out.trim()
  const dirtyRaw = (await git(['status', '--porcelain'], 10000)).out
  const dirty = dirtyRaw.split('\n').filter((l) => l.trim() !== '').length
  let ahead = 0
  let behind = 0
  const counts = (await git(['rev-list', '--left-right', '--count', 'HEAD...upstream/master'], 10000)).out.trim().split(/\s+/)
  if (counts.length === 2) {
    ahead = Number(counts[0]) || 0
    behind = Number(counts[1]) || 0
  }
  return {
    ready: true, branch: branch || '?', ahead, behind, dirty,
    auto: state.auto, syncing: state.syncing,
    lastSync: state.lastSync, lastError: state.lastError, lastMessage: state.lastMessage,
    updatedAt: Date.now()
  }
}

async function sync() {
  if (state.syncing) return
  if (!(await ensureRepo())) return
  state.syncing = true
  state.lastError = null
  try {
    const rem = await git(['remote', 'get-url', 'upstream'], 10000)
    if (rem.code !== 0) await git(['remote', 'add', 'upstream', UPSTREAM_URL], 10000)
    const f = await git(['fetch', 'upstream'], 180000)
    if (f.code !== 0) {
      state.lastError = '拉取上游失败: ' + (f.err || f.out).trim().slice(0, 300)
      return
    }
    const dirtyRaw = (await git(['status', '--porcelain'], 10000)).out
    if (dirtyRaw.trim() !== '') {
      state.lastMessage = '工作区有未提交改动，已跳过同步'
      return
    }
    const branch = (await git(['rev-parse', '--abbrev-ref', 'HEAD'], 10000)).out.trim()
    const m = await git(['merge', '--ff-only', 'upstream/master'], 60000)
    if (m.code !== 0) {
      const counts = (await git(['rev-list', '--left-right', '--count', 'HEAD...upstream/master'], 10000)).out.trim().split(/\s+/)
      const ahead = counts.length === 2 ? Number(counts[0]) || 0 : 0
      state.lastMessage = ahead > 0
        ? '本地有自定义提交（插件等），已跳过上游同步'
        : '合并失败: ' + (m.err || m.out).trim().slice(0, 300)
      return
    }
    const p = await git(['push', 'origin', 'HEAD'], 120000)
    if (p.code !== 0) {
      state.lastError = '推送失败: ' + (p.err || p.out).trim().slice(0, 300)
      return
    }
    state.lastSync = new Date().toISOString()
    state.lastMessage = '同步完成 ✓'
  } finally {
    state.syncing = false
  }
}

/**
 * 扫描本地已安装的 DSH 客户端插件（package.json 带 dsh.client 声明的目录）。
 */
function listPlugins() {
  const out = []
  let entries = []
  try { entries = readdirSync(PLUGIN_ROOT, { withFileTypes: true }) } catch (e) { return out }
  for (const ent of entries) {
    if (!ent.isDirectory()) continue
    const pkgPath = join(PLUGIN_ROOT, ent.name, 'package.json')
    if (!existsSync(pkgPath)) continue
    try {
      const pkg = JSON.parse(readFileSync(pkgPath, 'utf8'))
      if (!pkg.dsh || !pkg.dsh.client) continue
      out.push({ name: ent.name, dir: join(PLUGIN_ROOT, ent.name) })
    } catch (e) { /* 跳过坏包 */ }
  }
  return out
}

/** 目录内容 sha1（用于判断插件是否与仓库副本一致）。 */
function dirHash(dir) {
  const h = createHash('sha1')
  const walk = (d) => {
    let items = []
    try { items = readdirSync(d, { withFileTypes: true }) } catch (e) { return }
    items.sort((a, b) => (a.name < b.name ? -1 : 1))
    for (const it of items) {
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

function pluginRepoDir(name) {
  return join(REPO, 'plugins', name)
}

function pluginsSnapshot() {
  return listPlugins().map((p) => {
    const dest = pluginRepoDir(p.name)
    const inRepo = existsSync(dest)
    const changed = inRepo ? dirHash(p.dir) !== dirHash(dest) : true
    return { name: p.name, inRepo, changed }
  })
}

async function pushPlugin(name) {
  const found = listPlugins().find((p) => p.name === name)
  if (!found) return { ok: false, message: '未找到插件 ' + name }
  if (!(await repoReady())) return { ok: false, message: '仓库未就绪' }
  const dest = pluginRepoDir(name)
  try {
    cpSync(found.dir, dest, { recursive: true, force: true })
  } catch (e) {
    return { ok: false, message: '复制失败: ' + String(e.message || e).slice(0, 300) }
  }
  const add = await git(['add', 'plugins/' + name], 30000)
  if (add.code !== 0) return { ok: false, message: 'git add 失败: ' + (add.err || add.out).trim().slice(0, 300) }
  const commit = await git(['commit', '-m', 'chore(plugins): sync ' + name], 30000)
  if (commit.code !== 0) {
    const status = await git(['status', '--porcelain'], 10000)
    if (status.out.trim() === '') return { ok: true, message: '无变更（已是最新）', pushed: false }
    return { ok: false, message: '提交失败: ' + (commit.err || commit.out).trim().slice(0, 300) }
  }
  const push = await git(['push', 'origin', 'HEAD'], 120000)
  if (push.code !== 0) return { ok: false, message: '推送失败: ' + (push.err || push.out).trim().slice(0, 300), committed: true }
  state.lastMessage = '已推送插件 ' + name + ' ✓'
  return { ok: true, message: '已推送 ✓', pushed: true }
}

/**
 * 常驻仓库同步插件（Host 半区）：
 * - 自动循环：启动 15 秒后首次，之后每 60 秒 fetch 上游 → 快进合并 → push 到 fork
 * - HTTP 路由（供客户端 fetch）：
 *   GET  /repo-sync/status    返回状态 JSON
 *   POST /repo-sync/sync      立即同步
 *   POST /repo-sync/set-auto  切换自动同步（body: {"auto":bool}）
 * 使用 node:child_process 直接执行 git，不依赖 shell/subprocess 服务。
 */
function apply(ctx) {
  ctx.inject(['webServer'], (httpCtx) => {
    const json = (res, obj) => {
      res.writeHead(200, { 'content-type': 'application/json; charset=utf-8' })
      res.end(JSON.stringify(obj))
    }

    httpCtx.effect(() => httpCtx.webServer.register({
      kind: 'exact',
      path: '/repo-sync/status',
      handler: async (req, res) => {
        if (req.method !== 'GET' && req.method !== 'HEAD') {
          res.writeHead(405)
          res.end()
          return
        }
        json(res, await refreshStatus())
      }
    }), 'repo-sync: status route')

    httpCtx.effect(() => httpCtx.webServer.register({
      kind: 'exact',
      path: '/repo-sync/sync',
      handler: async (req, res) => {
        if (req.method !== 'POST') {
          res.writeHead(405)
          res.end()
          return
        }
        await sync()
        json(res, await refreshStatus())
      }
    }), 'repo-sync: sync route')

    httpCtx.effect(() => httpCtx.webServer.register({
      kind: 'exact',
      path: '/repo-sync/set-auto',
      handler: (req, res) => {
        if (req.method !== 'POST') {
          res.writeHead(405)
          res.end()
          return
        }
        let body = ''
        req.on('data', (c) => { body += c })
        req.on('end', async () => {
          try {
            const parsed = JSON.parse(body || '{}')
            state.auto = parsed.auto === true
          } catch (e) { /* 保持原值 */ }
          json(res, await refreshStatus())
        })
      }
    }), 'repo-sync: set-auto route')

    httpCtx.effect(() => httpCtx.webServer.register({
      kind: 'exact',
      path: '/repo-sync/plugins',
      handler: async (req, res) => {
        if (req.method !== 'GET' && req.method !== 'HEAD') {
          res.writeHead(405)
          res.end()
          return
        }
        json(res, { plugins: pluginsSnapshot() })
      }
    }), 'repo-sync: plugins route')

    httpCtx.effect(() => httpCtx.webServer.register({
      kind: 'exact',
      path: '/repo-sync/push-plugin',
      handler: (req, res) => {
        if (req.method !== 'POST') {
          res.writeHead(405)
          res.end()
          return
        }
        let body = ''
        req.on('data', (c) => { body += c })
        req.on('end', async () => {
          let name = ''
          try {
            const parsed = JSON.parse(body || '{}')
            name = String(parsed.name || '')
          } catch (e) { /* 忽略 */ }
          const result = await pushPlugin(name)
          json(res, { ...result, plugins: pluginsSnapshot() })
        })
      }
    }), 'repo-sync: push-plugin route')
  })

  ctx.effect(() => {
    const loop = setInterval(() => {
      if (state.auto) sync().catch(() => {})
    }, 60000)
    const first = setTimeout(() => {
      if (state.auto) sync().catch(() => {})
    }, 15000)
    return () => {
      clearInterval(loop)
      clearTimeout(first)
    }
  }, 'repo-sync: auto loop')
}

export { apply }

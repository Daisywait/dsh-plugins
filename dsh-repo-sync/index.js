import { execFile } from 'node:child_process'
import { promisify } from 'node:util'
import { readdirSync, readFileSync, existsSync, cpSync } from 'node:fs'
import { join } from 'node:path'
import { createHash } from 'node:crypto'

const execFileAsync = promisify(execFile)

const PLUGINS_REPO = 'D:\\Documents\\dsh-plugins'
const PLUGIN_ROOT = join(process.env.USERPROFILE || 'C:\\Users\\waitw', '.dsh', 'profiles', 'web', 'node_modules')

const state = {
  lastSync: null,
  lastError: null,
  lastMessage: null
}

async function git(args, timeoutMs) {
  try {
    const { stdout, stderr } = await execFileAsync('git', args, {
      cwd: PLUGINS_REPO,
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

function pluginsSnapshot() {
  return listPlugins().map((p) => {
    const dest = join(PLUGINS_REPO, p.name)
    const inRepo = existsSync(dest)
    const changed = inRepo ? dirHash(p.dir) !== dirHash(dest) : true
    return { name: p.name, inRepo, changed }
  })
}

async function pushPlugin(name) {
  const found = listPlugins().find((p) => p.name === name)
  if (!found) return { ok: false, message: '未找到插件 ' + name }
  if (!existsSync(PLUGINS_REPO)) return { ok: false, message: '插件仓库不存在: ' + PLUGINS_REPO }
  const dest = join(PLUGINS_REPO, name)
  try {
    cpSync(found.dir, dest, { recursive: true, force: true })
  } catch (e) {
    return { ok: false, message: '复制失败: ' + String(e.message || e).slice(0, 300) }
  }
  const add = await git(['add', name], 30000)
  if (add.code !== 0) return { ok: false, message: 'git add 失败: ' + (add.err || add.out).trim().slice(0, 300) }
  const commit = await git(['commit', '-m', 'chore(plugins): sync ' + name], 30000)
  if (commit.code !== 0) {
    const status = await git(['status', '--porcelain'], 10000)
    if (status.out.trim() === '') return { ok: true, message: '无变更（已是最新）', pushed: false }
    return { ok: false, message: '提交失败: ' + (commit.err || commit.out).trim().slice(0, 300) }
  }
  const rem = await git(['remote', 'get-url', 'origin'], 10000)
  if (rem.code !== 0) {
    state.lastMessage = '已在本地提交插件 ' + name + '（未配置远程仓库，未推送）'
    return { ok: true, message: '已提交 ✓（未配置远程，未推送）', pushed: false, committed: true }
  }
  const push = await git(['push', 'origin', 'HEAD'], 120000)
  if (push.code !== 0) {
    state.lastError = '推送失败: ' + (push.err || push.out).trim().slice(0, 300)
    return { ok: true, message: '已提交（推送失败: ' + (push.err || push.out).trim().slice(0, 120) + '）', committed: true, pushed: false }
  }
  state.lastSync = new Date().toISOString()
  state.lastMessage = '已推送插件 ' + name + ' ✓'
  return { ok: true, message: '已推送 ✓', pushed: true }
}

/**
 * 插件仓库同步插件（Host 半区）：
 * - 把已安装插件同步到本地插件仓库 D:\Documents\dsh-plugins（git add + commit + push）
 * - HTTP 路由：
 *   GET  /repo-sync/plugins        插件列表（含仓库同步状态）
 *   POST /repo-sync/push-plugin    同步单个插件（body: {"name":"..."}）
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
      path: '/repo-sync/plugins',
      handler: async (req, res) => {
        if (req.method !== 'GET' && req.method !== 'HEAD') {
          res.writeHead(405)
          res.end()
          return
        }
        json(res, { plugins: pluginsSnapshot(), repo: PLUGINS_REPO, lastSync: state.lastSync, lastError: state.lastError, lastMessage: state.lastMessage })
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
          json(res, { ...result, plugins: pluginsSnapshot(), repo: PLUGINS_REPO, lastSync: state.lastSync, lastError: state.lastError, lastMessage: state.lastMessage })
        })
      }
    }), 'repo-sync: push-plugin route')
  })
}

export { apply }

import { execFile } from 'node:child_process'
import { promisify } from 'node:util'
import {
  readdirSync, readFileSync, existsSync, cpSync,
  symlinkSync, unlinkSync, rmSync, lstatSync, writeFileSync
} from 'node:fs'
import { join, dirname } from 'node:path'
import { createHash } from 'node:crypto'

const execFileAsync = promisify(execFile)

const PLUGINS_REPO = 'D:\\Documents\\dsh-plugins'
const PLUGIN_ROOT = join(process.env.USERPROFILE || 'C:\\Users\\waitw', '.dsh', 'profiles', 'web', 'node_modules')
const YML_PATH = join(dirname(PLUGIN_ROOT), 'cordis.patch.yml')

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

function isPkgDir(dir) {
  const pkgPath = join(dir, 'package.json')
  if (!existsSync(pkgPath)) return false
  try {
    const pkg = JSON.parse(readFileSync(pkgPath, 'utf8'))
    return !!(pkg.dsh && pkg.dsh.client)
  } catch (e) { return false }
}

/** 扫描已安装插件（profile node_modules 里带 dsh.client 的目录）。 */
function listInstalled() {
  const out = []
  let entries = []
  try { entries = readdirSync(PLUGIN_ROOT, { withFileTypes: true }) } catch (e) { return out }
  for (const ent of entries) {
    if (!ent.isDirectory()) continue
    if (!isPkgDir(join(PLUGIN_ROOT, ent.name))) continue
    let linked = false
    try { linked = lstatSync(join(PLUGIN_ROOT, ent.name)).isSymbolicLink() } catch (e) {}
    out.push({ name: ent.name, dir: join(PLUGIN_ROOT, ent.name), linked })
  }
  return out
}

/** 扫描插件仓库（dsh-plugins 里带 dsh.client 的目录）。 */
function listRepo() {
  const out = []
  let entries = []
  try { entries = readdirSync(PLUGINS_REPO, { withFileTypes: true }) } catch (e) { return out }
  for (const ent of entries) {
    if (!ent.isDirectory()) continue
    const dir = join(PLUGINS_REPO, ent.name)
    if (!isPkgDir(dir)) continue
    out.push({ name: ent.name, dir })
  }
  return out
}

/** 目录内容 sha1（排除 .git）。 */
function dirHash(dir) {
  const h = createHash('sha1')
  const walk = (d) => {
    let items = []
    try { items = readdirSync(d, { withFileTypes: true }) } catch (e) { return }
    items.sort((a, b) => (a.name < b.name ? -1 : 1))
    for (const it of items) {
      if (it.name === '.git' || it.name === 'node_modules') continue
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
  const installed = listInstalled()
  const repoNames = new Set(listRepo().map((p) => p.name))
  return {
    installed: installed.map((p) => {
      const repoDir = join(PLUGINS_REPO, p.name)
      const inRepo = repoNames.has(p.name)
      const changed = p.linked ? false : (inRepo ? dirHash(p.dir) !== dirHash(repoDir) : true)
      return { name: p.name, inRepo, changed, linked: p.linked }
    }),
    available: listRepo().map((p) => ({ name: p.name })).filter((p) => !installed.some((i) => i.name === p.name))
  }
}

/** 确保 cordis.patch.yml 里有该插件的注册行（幂等）。 */
function ensureYmlRow(name) {
  let content = ''
  try { content = readFileSync(YML_PATH, 'utf8') } catch (e) {
    return { ok: false, message: '读取注册表失败: ' + String(e.message || e).slice(0, 200) }
  }
  if (content.includes("name: '" + name + "'") || content.includes('name: "' + name + '"')) {
    return { ok: true, registered: false, message: '已在注册表中' }
  }
  const mark = '- insert:'
  const idx = content.indexOf(mark)
  const row = "    - id: " + name + "\n      name: '" + name + "'"
  let next
  if (idx === -1) {
    next = content.replace(/\s*$/, '') + '\n- insert:\n' + row + '\n'
  } else {
    const after = idx + mark.length
    next = content.slice(0, after) + '\n' + row + content.slice(after)
  }
  try {
    writeFileSync(YML_PATH, next, 'utf8')
    return { ok: true, registered: true, message: '已写入注册表（重启 DSH 生效）' }
  } catch (e) {
    return { ok: false, message: '写入注册表失败: ' + String(e.message || e).slice(0, 200) }
  }
}

/** 从 cordis.patch.yml 移除该插件的注册行。 */
function removeYmlRow(name) {
  let content = ''
  try { content = readFileSync(YML_PATH, 'utf8') } catch (e) { return false }
  const lines = content.split(/\r?\n/)
  const out = []
  let removed = false
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]
    if (line.trim() === '- id: ' + name) {
      removed = true
      if (i + 1 < lines.length && lines[i + 1].trim() === "name: '" + name + "'") i++
      continue
    }
    out.push(line)
  }
  if (!removed) return false
  try {
    writeFileSync(YML_PATH, out.join('\r\n'), 'utf8')
    return true
  } catch (e) { return false }
}

/** 安装：junction 链接到插件仓库 + 自动注册。 */
async function installPlugin(name) {
  const repo = listRepo().find((p) => p.name === name)
  if (!repo) return { ok: false, message: '插件仓库里没有 ' + name }
  const target = join(PLUGIN_ROOT, name)
  if (existsSync(target)) {
    try {
      if (lstatSync(target).isSymbolicLink()) {
        return { ok: true, message: '已是链接模式安装', installed: true, registered: true }
      }
      rmSync(target, { recursive: true, force: true })
    } catch (e) {
      return { ok: false, message: '清理旧安装失败: ' + String(e.message || e).slice(0, 200) }
    }
  }
  try {
    symlinkSync(repo.dir, target, 'junction')
  } catch (e) {
    return { ok: false, message: '创建链接失败: ' + String(e.message || e).slice(0, 200) }
  }
  const reg = ensureYmlRow(name)
  return { ok: true, message: (reg.registered ? '已安装并注册（重启生效）' : '已安装（已注册过）'), installed: true, registered: reg.registered }
}

/** 卸载：移除链接/目录 + 移除注册行。 */
async function uninstallPlugin(name) {
  const target = join(PLUGIN_ROOT, name)
  let removed = false
  if (existsSync(target)) {
    try {
      if (lstatSync(target).isSymbolicLink()) unlinkSync(target)
      else rmSync(target, { recursive: true, force: true })
      removed = true
    } catch (e) {
      return { ok: false, message: '移除失败: ' + String(e.message || e).slice(0, 200) }
    }
  }
  const ymlRemoved = removeYmlRow(name)
  return { ok: true, message: (removed ? '已卸载' : '未找到安装') + (ymlRemoved ? '，注册行已移除（重启生效）' : ''), removed, ymlRemoved }
}

/** 同步（复制模式）/ 链接模式下无意义。 */
async function pushPlugin(name) {
  const found = listInstalled().find((p) => p.name === name)
  if (!found) return { ok: false, message: '未找到插件 ' + name }
  if (found.linked) return { ok: true, message: '链接模式：源码即仓库，无需同步', pushed: false }
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
    return { ok: true, message: '已提交 ✓（未配置远程，未推送）', pushed: false, committed: true }
  }
  const push = await git(['push', 'origin', 'HEAD'], 120000)
  if (push.code !== 0) {
    return { ok: true, message: '已提交（推送失败: ' + (push.err || push.out).trim().slice(0, 120) + '）', committed: true, pushed: false }
  }
  state.lastSync = new Date().toISOString()
  return { ok: true, message: '已推送 ✓', pushed: true }
}

/**
 * 插件管理器（Host 半区）：
 * - 列出已安装插件与仓库可安装插件
 * - 安装 = junction 链接到 dsh-plugins + 自动写 cordis.patch.yml 注册行
 * - 卸载 = 移除链接 + 移除注册行
 * - 同步（复制模式）或直接 push
 * HTTP 路由：
 *   GET  /repo-sync/plugins        插件清单
 *   POST /repo-sync/install        安装（body: {"name":"..."}）
 *   POST /repo-sync/uninstall      卸载（body: {"name":"..."}）
 *   POST /repo-sync/push-plugin    同步/推送（body: {"name":"..."}）
 */
function apply(ctx) {
  ctx.inject(['webServer'], (httpCtx) => {
    const json = (res, obj) => {
      res.writeHead(200, { 'content-type': 'application/json; charset=utf-8' })
      res.end(JSON.stringify(obj))
    }

    const snapshot = () => ({
      ...pluginsSnapshot(),
      repo: PLUGINS_REPO,
      yml: YML_PATH,
      lastSync: state.lastSync,
      lastError: state.lastError,
      lastMessage: state.lastMessage
    })

    const bodyOf = (req, cb) => {
      let body = ''
      req.on('data', (c) => { body += c })
      req.on('end', () => {
        let parsed = {}
        try { parsed = JSON.parse(body || '{}') } catch (e) {}
        cb(String(parsed.name || ''))
      })
    }

    httpCtx.effect(() => httpCtx.webServer.register({
      kind: 'exact',
      path: '/repo-sync/plugins',
      handler: async (req, res) => {
        if (req.method !== 'GET' && req.method !== 'HEAD') {
          res.writeHead(405); res.end(); return
        }
        json(res, snapshot())
      }
    }), 'repo-sync: plugins route')

    httpCtx.effect(() => httpCtx.webServer.register({
      kind: 'exact',
      path: '/repo-sync/install',
      handler: (req, res) => {
        if (req.method !== 'POST') { res.writeHead(405); res.end(); return }
        bodyOf(req, async (name) => {
          const result = await installPlugin(name)
          json(res, { ...result, ...snapshot() })
        })
      }
    }), 'repo-sync: install route')

    httpCtx.effect(() => httpCtx.webServer.register({
      kind: 'exact',
      path: '/repo-sync/uninstall',
      handler: (req, res) => {
        if (req.method !== 'POST') { res.writeHead(405); res.end(); return }
        bodyOf(req, async (name) => {
          const result = await uninstallPlugin(name)
          json(res, { ...result, ...snapshot() })
        })
      }
    }), 'repo-sync: uninstall route')

    httpCtx.effect(() => httpCtx.webServer.register({
      kind: 'exact',
      path: '/repo-sync/push-plugin',
      handler: (req, res) => {
        if (req.method !== 'POST') { res.writeHead(405); res.end(); return }
        bodyOf(req, async (name) => {
          const result = await pushPlugin(name)
          json(res, { ...result, ...snapshot() })
        })
      }
    }), 'repo-sync: push-plugin route')
  })
}

export { apply }

import { execFile } from 'node:child_process'
import { promisify } from 'node:util'
import {
  readdirSync, readFileSync, existsSync, cpSync, lstatSync, rmSync
} from 'node:fs'
import { join, dirname } from 'node:path'
import { createHash } from 'node:crypto'
import { homedir } from 'node:os'

const execFileAsync = promisify(execFile)

const PLUGINS_REPO = 'D:\\Documents\\dsh-plugins'
const PLUGIN_ROOT = join(process.env.USERPROFILE || 'C:\\Users\\waitw', '.dsh', 'profiles', 'web', 'node_modules')
const PROFILE_DIR = join(process.env.USERPROFILE || 'C:\\Users\\waitw', '.dsh', 'profiles', 'web')
// 用户 patch 层：插件注册行已由各插件自带的 cordis.patch.yml（bundle 层）提供，此文件只放用户覆盖
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

/** 定位 dsh CLI 入口：Windows 下 npm 装的只是 .ps1/.cmd shim，execFile 无法直接跑，改走 node + lib/bin.js。 */
function resolveDshBin() {
  const candidates = []
  if (process.env.DSH_CLI_BIN) candidates.push(process.env.DSH_CLI_BIN)
  if (process.env.APPDATA) {
    candidates.push(join(process.env.APPDATA, 'npm', 'node_modules', '@deepseek-ai', 'dsh', 'lib', 'bin.js'))
  }
  for (const c of candidates) {
    if (existsSync(c)) return { bin: process.execPath, args: [c] }
  }
  return null
}

/** 官方插件入口：dsh plugin --profile web <pnpm 子命令...>（pnpm add/remove + bundles 层栈自动对账）。 */
async function dshPlugin(args, timeoutMs) {
  const resolved = resolveDshBin()
  const fullArgs = resolved
    ? [...resolved.args, 'plugin', '--profile', 'web', ...args]
    : ['plugin', '--profile', 'web', ...args]
  try {
    const { stdout, stderr } = await execFileAsync(resolved ? resolved.bin : 'dsh', fullArgs, {
      cwd: PROFILE_DIR,
      timeout: timeoutMs || 180000,
      maxBuffer: 8 * 1024 * 1024,
      windowsHide: true,
      shell: resolved ? false : true
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

/* ------------------------------------------------------------------ */
/* 社区插件：从 npm registry 聚合公开的 DSH 插件（Obsidian 社区风格）    */
/* ------------------------------------------------------------------ */

/** npm 搜索源：关键词搜索 + 已知包直查（npm 不支持 scope 列表 GET）。 */
const NPM_SEARCH_TEXT = [
  'keywords:dsh',
  'dsh-plugin',
  'deepseek-harness',
  'create-dsh-plugin',
]
const KNOWN_COMMUNITY_PACKAGES = [
  '@linxin666/dsh-web-ui-all',
  '@omdsh-dev/dsh-genui',
]

/** GitHub topic 源：topic=dsh-plugin 的仓库（HTML 抓取，带 star 与描述）。 */
const GITHUB_TOPIC = 'dsh-plugin'
const GITHUB_TOPIC_PAGES = 3

/** 抓 HTML（带超时、UA、跳转跟随）。 */
async function fetchHtml(url, timeoutMs) {
  const ctrl = new AbortController()
  const timer = setTimeout(() => ctrl.abort(), timeoutMs || 20000)
  try {
    const res = await fetch(url, {
      signal: ctrl.signal,
      headers: {
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120 Safari/537.36',
        'accept': 'text/html,application/xhtml+xml'
      },
      redirect: 'follow'
    })
    if (!res.ok) throw new Error('HTTP ' + res.status)
    return await res.text()
  } finally {
    clearTimeout(timer)
  }
}

/** 从 GitHub topic 页面 HTML 解析仓库卡片：repo + stars + description。
 *  用 `repo-stars-counter-star` 的 aria-label 定位卡片，回溯卡片内最近的
 *  /owner/repo 链接配对，并取卡片内的描述文本。 */
function parseTopicPage(html) {
  const out = new Map()
  const starRe = /<span id="repo-stars-counter-star"[^>]*aria-label="([\d,]+)\s+users? starred this repository"/g
  let sm
  while ((sm = starRe.exec(html)) !== null) {
    const before = html.slice(Math.max(0, sm.index - 5000), sm.index)
    const repoMatches = [...before.matchAll(/href="\/([a-zA-Z0-9_.-]+\/[a-zA-Z0-9_.-]+)"/g)]
    const repoMatch = repoMatches.pop()
    if (!repoMatch) continue
    const repo = repoMatch[1]
    if (out.has(repo)) continue
    const stars = Number(sm[1].replace(/,/g, ''))
    // 描述：star 位置前卡片内的第一个 <p>（跳过空的）
    const descMatch = [...before.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/g)].reverse().find((m) => {
      const t = m[1].replace(/<[^>]+>/g, '').trim()
      return t.length > 8 && !/^\s*$/.test(t)
    })
    const description = descMatch ? descMatch[1].replace(/<[^>]+>/g, '').replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'").trim().slice(0, 200) : ''
    out.set(repo, { repo, stars, description })
  }
  return [...out.values()]
}

/** 抓 GitHub topic=dsh-plugin 的仓库（前 N 页），返回 [{repo, stars, description}]。 */
async function fetchGithubTopicPlugins() {
  const all = new Map()
  for (let page = 1; page <= GITHUB_TOPIC_PAGES; page++) {
    try {
      const url = 'https://github.com/topics/' + GITHUB_TOPIC + (page > 1 ? '?page=' + page : '')
      const html = await fetchHtml(url)
      const items = parseTopicPage(html)
      for (const it of items) if (!all.has(it.repo)) all.set(it.repo, it)
      if (items.length === 0) break
    } catch (e) {
      break
    }
  }
  return [...all.values()]
}

/** GitHub 仓库 → 是否标准 DSH 插件 的探测缓存。 */
const dshRepoCache = new Map()
const DSH_REPO_TTL = 2 * 60 * 60 * 1000

/**
 * 探测仓库是不是标准 DSH 插件：raw package.json（HEAD 分支）存在且声明
 * dsh.bundle 或 dsh.client。带内存缓存（2h）+ 5 路并发 + 超时。
 * @param repos - owner/repo 列表
 * @returns 是插件的 repo 列表
 */
async function filterDshPluginRepos(repos) {
  const now = Date.now()
  const out = []
  const missing = []
  for (const r of repos) {
    const c = dshRepoCache.get(r)
    if (c && now - c.at < DSH_REPO_TTL) { if (c.ok) out.push(r) }
    else missing.push(r)
  }
  for (let i = 0; i < missing.length; i += 5) {
    const batch = missing.slice(i, i + 5)
    const results = await Promise.allSettled(batch.map(async (repo) => {
      try {
        const ctrl = new AbortController()
        const timer = setTimeout(() => ctrl.abort(), 10000)
        const res = await fetch('https://raw.githubusercontent.com/' + repo + '/HEAD/package.json', {
          signal: ctrl.signal,
          headers: { 'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/120' }
        })
        clearTimeout(timer)
        if (!res.ok) return { repo, ok: false }
        const pkg = await res.json()
        return { repo, ok: !!(pkg.dsh && (pkg.dsh.bundle || pkg.dsh.client)) }
      } catch (e) {
        return { repo, ok: false }
      }
    }))
    for (const r of results) {
      if (r.status !== 'fulfilled') continue
      dshRepoCache.set(r.value.repo, { ok: r.value.ok, at: now })
      if (r.value.ok) out.push(r.value.repo)
    }
  }
  return out
}

/** 抓一个 JSON（带超时与 UA）。 */
async function fetchJson(url, timeoutMs) {
  const ctrl = new AbortController()
  const timer = setTimeout(() => ctrl.abort(), timeoutMs || 15000)
  try {
    const res = await fetch(url, {
      signal: ctrl.signal,
      headers: { 'user-agent': 'dsh-repo-sync/1.0' }
    })
    if (!res.ok) throw new Error('HTTP ' + res.status)
    return await res.json()
  } finally {
    clearTimeout(timer)
  }
}

/** 宽松判定：名字带 dsh 特征，或描述提到 DeepSeek Harness / dsh 插件。 */
function isDshPackage(pkg) {
  const name = String(pkg.name || '')
  const desc = String(pkg.description || '')
  if (/^(?:@[a-z0-9-]+\/)?dsh(?:[-_][\w.-]+)?$/.test(name)) return true
  const n = name.toLowerCase()
  const d = desc.toLowerCase()
  if (n.includes('dsh') && (d.includes('deepseek') || d.includes('harness') || d.includes('dsh'))) return true
  return d.includes('deepseek harness') && (d.includes('plugin') || d.includes('dsh'))
}

/** 从 npm 包的 links.repository / repository 提取 GitHub owner/repo。 */
function gitHubRepoOf(pkg) {
  const raw = String((pkg.links && pkg.links.repository) || (pkg.repository && (pkg.repository.url || pkg.repository)) || '')
  const m = /github\.com[\/:]([^\/\s]+)\/([^\/\s#]+?)(?:\.git)?$/.exec(raw)
  return m ? (m[1] + '/' + m[2].replace(/\.git$/, '')) : null
}

/** GitHub star 缓存（内存，1 小时 TTL），避免每次刷新都抓页面。 */
const githubStarCache = new Map()
const GITHUB_STAR_TTL = 60 * 60 * 1000

/**
 * 抓取 GitHub 仓库的 star 数（抓仓库 HTML 页面，绕开 API 限流；
 * 无 token 的 API 403）。带内存缓存 + 4 路并发 + 超时，失败计 0。
 * @param repos - owner/repo 列表
 * @returns Map<repo, stars>
 */
async function fetchGitHubStars(repos) {
  const now = Date.now()
  const out = new Map()
  const missing = []
  for (const r of repos) {
    const c = githubStarCache.get(r)
    if (c && now - c.at < GITHUB_STAR_TTL) out.set(r, c.stars)
    else missing.push(r)
  }
  const raw = async (repo) => {
    const ctrl = new AbortController()
    const timer = setTimeout(() => ctrl.abort(), 12000)
    try {
      const res = await fetch('https://github.com/' + repo, {
        signal: ctrl.signal,
        headers: {
          'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120 Safari/537.36',
          'accept': 'text/html,application/xhtml+xml'
        },
        redirect: 'follow'
      })
      if (!res.ok) throw new Error('HTTP ' + res.status)
      return await res.text()
    } finally {
      clearTimeout(timer)
    }
  }
  for (let i = 0; i < missing.length; i += 4) {
    const batch = missing.slice(i, i + 4)
    const results = await Promise.allSettled(batch.map(async (repo) => {
      try {
        const html = await raw(repo)
        const m = html.match(/aria-label="([\d,]+)\s+users? starred this repository/)
          || html.match(/id="repo-stars-counter-star"[^>]*aria-label="([\d,]+)/)
        const stars = m ? Number(m[1].replace(/,/g, '')) : 0
        return { repo, stars }
      } catch (e) {
        return { repo, stars: 0 }
      }
    }))
    for (const r of results) {
      if (r.status !== 'fulfilled') continue
      out.set(r.value.repo, r.value.stars)
      githubStarCache.set(r.value.repo, { stars: r.value.stars, at: now })
    }
  }
  return out
}

/** 聚合社区插件：npm registry（可安装包）+ GitHub topic=dsh-plugin（仓库），
 *  抓 star 按降序排，去重（npm 条目优先）。 */
async function fetchCommunity(q) {
  const seen = new Map()
  const put = (pkg) => {
    if (!pkg || typeof pkg.name !== 'string') return
    if (!isDshPackage(pkg)) return
    if (seen.has('npm:' + pkg.name)) return
    const latest = (pkg['dist-tags'] && pkg['dist-tags'].latest) || pkg.version || ''
    seen.set('npm:' + pkg.name, {
      name: pkg.name,
      source: 'npm',
      version: String(latest),
      description: String(pkg.description || '').slice(0, 200),
      author: (pkg.publisher && pkg.publisher.username) || String(pkg.author || ''),
      date: String(pkg.date || ''),
      links: (pkg.links && pkg.links.npm) || 'https://www.npmjs.com/package/' + pkg.name,
      repository: gitHubRepoOf(pkg),
    })
  }
  const urls = [
    ...NPM_SEARCH_TEXT.map((t) => 'https://registry.npmjs.org/-/v1/search?text=' + encodeURIComponent(t) + '&size=50'),
    ...KNOWN_COMMUNITY_PACKAGES.map((n) => 'https://registry.npmjs.org/' + encodeURIComponent(n).replace(/%2F/g, '/')),
  ]
  const results = await Promise.allSettled(urls.map((u) => fetchJson(u)))
  for (const r of results) {
    if (r.status !== 'fulfilled') continue
    const body = r.value
    if (Array.isArray(body.objects)) {
      for (const o of body.objects) put(o.package)
    } else if (body && typeof body === 'object' && typeof body.name === 'string') {
      put(body)
    }
  }
  // GitHub topic 源（topic=dsh-plugin 的仓库）——只保留标准 DSH 插件：
  // 有 package.json 且声明 dsh.bundle / dsh.client 的仓库（skill 集合、awesome 列表、
  // 桌面应用等非插件仓库探测后过滤，避免装进去却用不了）
  const npmRepos = new Set()
  for (const p of seen.values()) if (p.repository) npmRepos.add(p.repository)
  const topicPlugins = await fetchGithubTopicPlugins()
  const candidateRepos = topicPlugins.map((t) => t.repo).filter((r) => !npmRepos.has(r) && !seen.has('gh:' + r))
  const pluginRepos = new Set(await filterDshPluginRepos(candidateRepos))
  for (const t of topicPlugins) {
    if (!pluginRepos.has(t.repo)) continue
    if (npmRepos.has(t.repo)) continue
    if (seen.has('gh:' + t.repo)) continue
    seen.set('gh:' + t.repo, {
      name: t.repo,
      source: 'github',
      version: '',
      description: t.description,
      author: t.repo.split('/')[0],
      date: '',
      links: 'https://github.com/' + t.repo,
      repository: t.repo,
      stars: t.stars,
    })
  }
  // 关键词过滤（先过滤再抓 npm 条目的 star，减少请求）
  let list = [...seen.values()]
  if (q) {
    const needle = String(q).toLowerCase()
    list = list.filter((p) => p.name.toLowerCase().includes(needle) || (p.description || '').toLowerCase().includes(needle))
  }
  // npm 条目抓 GitHub star（带缓存）；GitHub 条目已带 topic 页的 star
  const npmItems = list.filter((p) => p.source === 'npm')
  const repos = [...new Set(npmItems.map((p) => p.repository).filter(Boolean))]
  const stars = await fetchGitHubStars(repos)
  for (const p of npmItems) p.stars = p.repository ? (stars.get(p.repository) || 0) : 0
  // 按 star 降序，无 star 的排后
  list.sort((a, b) => (b.stars || 0) - (a.stars || 0) || (a.name < b.name ? -1 : 1))
  return list
}

/** 安装社区插件：npm 包名，或 GitHub 仓库（github:owner/repo 或裸 owner/repo）。 */
async function installCommunity(spec) {
  let name = String(spec || '').trim()
  let isGithub = /^github:[a-zA-Z0-9_.-]+\/[a-zA-Z0-9_.-]+$/.test(name)
  // 裸 owner/repo（非 scoped 包名）→ 视为 GitHub 仓库安装
  if (!isGithub && !name.startsWith('@') && /^[a-zA-Z0-9_.-]+\/[a-zA-Z0-9_.-]+$/.test(name)) {
    name = 'github:' + name
    isGithub = true
  }
  if (!isGithub && !/^(@[a-z0-9-~][\w.-]*\/)?[a-z0-9-~][\w.-]*$/.test(name)) {
    return { ok: false, message: '包名不合法: ' + name }
  }
  const r = await dshPlugin(['add', name], 300000)
  if (r.code !== 0) {
    const detail = (r.err || r.out || '').trim().split(/\r?\n/).filter((l) => l).slice(-3).join('；')
    const hint = isGithub && /allowBuilds|prepare/.test(detail)
      ? '（git 安装的 prepare 构建可能被 pnpm 拦截，按提示把包加进 profile 的 pnpm-workspace.yaml allowBuilds 后重试）'
      : ''
    return { ok: false, message: '安装失败（dsh plugin 退出码 ' + r.code + '）' + hint + '：' + detail.slice(0, 200) }
  }
  // 安装成功：检测装进来的包是不是标准 DSH 插件（有 package.json 且声明 dsh.client/dsh.bundle）
  const dirName = String(name).split('/').pop() || name
  let standard = false
  try {
    const pkgPath = join(PROFILE_DIR, 'node_modules', dirName, 'package.json')
    const pkg = JSON.parse(readFileSync(pkgPath, 'utf8'))
    standard = !!(pkg.dsh && (pkg.dsh.client || pkg.dsh.bundle))
  } catch (e) { /* 无 package.json 或不可读 → 非标准 */ }
  const warn = standard
    ? ''
    : '；⚠️ 该包没有 package.json / 未声明 dsh.client、dsh.bundle——不是标准 DSH 插件，无法作为插件加载（不会出现在已安装列表），如需移除可点卸载'
  return { ok: true, message: '已安装 ' + name + (isGithub ? '（GitHub 仓库，重启 DSH 生效）' : '（npm 包，重启 DSH 生效）') + warn }
}

/** 抓 GitHub 仓库的 raw README（HEAD 指默认分支，试多种文件名，限制大小）。
 *  同时把 README 里的图片相对路径重写为 raw.githubusercontent.com 绝对 URL
 *  （![](...) 与 <img src> 两种形式；http(s)/data: 不动）。 */
async function fetchGithubReadme(repo) {
  const candidates = [
    'https://raw.githubusercontent.com/' + repo + '/HEAD/README.md',
    'https://raw.githubusercontent.com/' + repo + '/HEAD/README.MD',
    'https://raw.githubusercontent.com/' + repo + '/HEAD/readme.md',
    'https://raw.githubusercontent.com/' + repo + '/HEAD/README.markdown',
    'https://raw.githubusercontent.com/' + repo + '/HEAD/README.txt',
  ]
  const base = 'https://raw.githubusercontent.com/' + repo + '/HEAD/'
  for (const u of candidates) {
    try {
      const res = await fetch(u, { headers: { 'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/120' } })
      if (res.ok) {
        let text = await res.text()
        // ![]() 里的相对路径
        text = text.replace(/!\[([^\]]*)\]\((?!https?:|data:)([^)\s]+)\)/g, (m, alt, path) => `![${alt}](${base}${path})`)
        // <img src="相对路径">（含单引号）
        text = text.replace(/<img([^>]*?)\bsrc=(["'])(?!https?:|data:)([^"']+)\2([^>]*)>/gi, (m, pre, q, path, post) => `<img${pre} src=${q}${base}${path}${q}${post}>`)
        return text.slice(0, 60000)
      }
    } catch (e) { /* 试下一个 */ }
  }
  return ''
}

/** 拉一个社区插件的完整介绍：npm 包（单包元数据 + README）或 GitHub 仓库（raw README）。 */
async function fetchCommunityDetail(name) {
  // GitHub 源（owner/repo，非 scoped 包名）：抓 raw README 重写成精简摘要
  if (/^[a-zA-Z0-9_.-]+\/[a-zA-Z0-9_.-]+$/.test(name) && !name.startsWith('@')) {
    const readme = await fetchGithubReadme(name)
    return {
      name,
      source: 'github',
      version: '',
      description: '',
      author: name.split('/')[0],
      license: '',
      homepage: 'https://github.com/' + name,
      repository: 'https://github.com/' + name,
      keywords: [],
      date: '',
      summary: extractSummary(readme, ''),
      installCommand: extractInstallCommand(readme, 'github:' + name),
      images: extractReadmeImages(readme),
      features: extractFeatures(readme),
      sections: extractSections(readme),
    }
  }
  const url = 'https://registry.npmjs.org/' + encodeURIComponent(name).replace(/%2F/g, '/')
  const pkg = await fetchJson(url)
  if (!pkg || typeof pkg.name !== 'string') throw new Error('包不存在或不可读: ' + name)
  const latest = (pkg['dist-tags'] && pkg['dist-tags'].latest) || ''
  const v = (latest && pkg.versions && pkg.versions[latest]) || pkg
  const pkgReadme = String(pkg.readme || '')
  return {
    name: pkg.name,
    version: latest,
    description: String(pkg.description || ''),
    author: String((pkg.author && (pkg.author.name || pkg.author)) || (pkg.publisher && pkg.publisher.username) || ''),
    license: String((v && v.license) || pkg.license || ''),
    homepage: String((v && v.homepage) || pkg.homepage || ''),
    repository: String((pkg.repository && (pkg.repository.url || pkg.repository)) || ''),
    keywords: Array.isArray(pkg.keywords) ? pkg.keywords.slice(0, 20) : [],
    date: String((pkg.time && pkg.time[latest]) || pkg.date || ''),
    summary: extractSummary(pkgReadme, String(pkg.description || '')),
    installCommand: extractInstallCommand(pkgReadme, pkg.name),
    images: extractReadmeImages(pkgReadme),
    features: extractFeatures(pkgReadme),
    sections: extractSections(pkgReadme),
  }
}

/** 生成简介：优先 description，否则取 README 开头正文（最多 500 字，多段合并）。 */
function extractSummary(readme, description) {
  const desc = String(description || '').trim()
  if (desc.length >= 10) return desc.slice(0, 500)
  const lines = String(readme || '').split(/\r?\n/)
  const buf = []
  for (const line of lines) {
    const t = line.trim()
    if (/^#/.test(t)) {
      if (buf.length > 0) break
      continue
    }
    if (/^```/.test(t) || /^</.test(t) || /^!\[/.test(t) || /^[-*+]\s/.test(t)) continue
    const clean = t.replace(/[*`>]/g, '').replace(/\[([^\]]*)\]\([^)]*\)/g, '$1').replace(/<[^>]+>/g, '').trim()
    if (clean.length >= 4) buf.push(clean)
    if (buf.join(' ').length >= 500) break
  }
  return buf.join(' ').slice(0, 500)
}

/** 把 README 按 ## 标题切成节（每节限长），用于详情页折叠展示。 */
function extractSections(readme) {
  const lines = String(readme || '').split(/\r?\n/)
  const sections = []
  let cur = null
  for (const line of lines) {
    const h = /^#{2,3}\s+(.*)$/.exec(line.trim())
    if (h) {
      if (cur && cur.content.trim().length > 5) sections.push(cur)
      cur = { title: h[1].trim().replace(/[*`]/g, '').slice(0, 60), content: '' }
    } else if (cur) {
      cur.content += line + '\n'
    }
  }
  if (cur && cur.content.trim().length > 5) sections.push(cur)
  return sections.slice(0, 12).map((s) => ({ title: s.title, content: s.content.trim().slice(0, 3000) }))
}

/* ------------------------------------------------------------------ */
/* 内容翻译：读 ~/.dsh/.credentials.yaml 的 DEEPSEEK_API_KEY，直接调      */
/* DeepSeek API（OpenAI 兼容）把英文内容翻译成简体中文。                  */
/* ------------------------------------------------------------------ */

/** 模块级缓存：DeepSeek key（读一次）+ 翻译结果（文本 → 译文）。 */
let dsApiKey = null
const translateCache = new Map()

/** 读 DeepSeek API key（~/.dsh/.credentials.yaml，简单 YAML 键值解析）。 */
function deepseekApiKey() {
  if (dsApiKey !== null) return dsApiKey
  dsApiKey = ''
  try {
    const yaml = readFileSync(join(homedir(), '.dsh', '.credentials.yaml'), 'utf8')
    const m = /DEEPSEEK_API_KEY:\s*["']?([^"'\s]+)/.exec(yaml)
    if (m) dsApiKey = m[1]
  } catch (e) { /* noop */ }
  return dsApiKey
}

/** 翻译一条文本（纯中文/无英文字符的不翻；失败返回原文）。 */
async function translateOne(text) {
  const t = String(text || '').trim()
  if (!t) return t
  if (!/[a-zA-Z]{3,}/.test(t)) return t // 没有足够英文就不翻
  if (translateCache.has(t)) return translateCache.get(t)
  const key = deepseekApiKey()
  if (!key) return t
  try {
    const ctrl = new AbortController()
    const timer = setTimeout(() => ctrl.abort(), 25000)
    const res = await fetch('https://api.deepseek.com/chat/completions', {
      method: 'POST',
      signal: ctrl.signal,
      headers: { 'content-type': 'application/json', 'authorization': 'Bearer ' + key },
      body: JSON.stringify({
        model: 'deepseek-chat',
        messages: [
          { role: 'system', content: '你是翻译引擎。把用户文本翻译成简体中文，只输出译文本身，不要任何解释、引号或多余内容；如果本来就是中文则原样返回。' },
          { role: 'user', content: t },
        ],
        temperature: 0.2,
        max_tokens: 500,
      }),
    })
    clearTimeout(timer)
    if (!res.ok) return t
    const j = await res.json()
    const out = (j.choices && j.choices[0] && j.choices[0].message && j.choices[0].message.content || '').trim()
    const result = out || t
    translateCache.set(t, result)
    return result
  } catch (e) {
    return t
  }
}

/** 批量翻译（3 路并发），返回与输入等长的译文数组（空文本对应空串）。 */
async function translateTexts(texts) {
  const raw = texts.map((s) => String(s || '').trim())
  const unique = [...new Set(raw.filter(Boolean))]
  const results = {}
  const concurrency = 3
  for (let i = 0; i < unique.length; i += concurrency) {
    const batch = unique.slice(i, i + concurrency)
    await Promise.all(batch.map(async (t) => { results[t] = await translateOne(t) }))
  }
  return raw.map((t) => (t ? (results[t] || t) : ''))
}

/** 从 README 提取安装命令（第一个 `dsh plugin ... add ...` 行）。 */
function extractInstallCommand(readme, fallback) {
  const m = /(?:dsh\s+plugin[^\n]*?\badd\b[^\n]*)/i.exec(String(readme || ''))
  if (!m) return fallback
  const cmd = m[0].trim().replace(/^```\s*|\s*```$/g, '').slice(0, 120)
  return cmd || fallback
}

/** 从 README 提取截图图片（![]() 与 <img> 两种，仅 http(s)，排除徽章/图标），最多 8 张。 */
function extractReadmeImages(readme) {
  const out = []
  const text = String(readme || '')
  const isBadge = (src) => /img\.shields\.io|badge\.fury\.io|shields\.io|\/badge\.svg|badge\.svg|\.github\.io\/assets\/icons/i.test(src)
  const push = (src, alt) => {
    if (!/^https?:/i.test(src)) return
    if (isBadge(src)) return
    if (out.some((x) => x.src === src)) return
    if (out.length < 8) out.push({ src, alt: alt || '' })
  }
  const mdRe = /!\[([^\]]*)\]\(([^)\s]+)\)/g
  let m
  while ((m = mdRe.exec(text)) !== null && out.length < 8) push(m[2], m[1])
  const imgRe = /<img[^>]*\bsrc=(["'])(.*?)\1[^>]*>/gi
  let im
  while ((im = imgRe.exec(text)) !== null && out.length < 8) {
    const altM = /\balt=(["'])(.*?)\1/i.exec(im[0])
    push(im[2], altM ? altM[2] : '')
  }
  return out.slice(0, 8)
}

/** 从 README 提取功能特性：找「功能/特性/Features/亮点」等标题区块，取其列表项（最多 8 条）。 */
function extractFeatures(readme) {
  const lines = String(readme || '').split(/\r?\n/)
  const features = []
  let inFeatureSection = false
  for (let i = 0; i < lines.length && features.length < 8; i++) {
    const t = lines[i].trim()
    const h = /^#{1,4}\s+(.*)$/.exec(t)
    if (h) {
      const title = h[1].toLowerCase()
      if (/(功能|特性|亮点|特点|features|highlights|capabilities|为什么)/.test(title)) {
        inFeatureSection = true
        continue
      }
      inFeatureSection = false
    }
    if (inFeatureSection && /^[-*+]\s+/.test(t)) {
      const item = t.replace(/^[-*+]\s+/, '')
        .replace(/[*`]/g, '')
        .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
        .trim()
      if (item.length >= 4 && item.length <= 120) features.push(item)
    }
  }
  return features.slice(0, 8)
}

/** 运行插件自带的依赖安装/构建脚本（如 dsh-video 的 scripts/install-deps.ps1）。 */
async function runDepsScript(dir) {
  const script = join(dir, 'scripts', 'install-deps.ps1')
  if (!existsSync(script)) return { ok: true, ran: false, message: '无依赖脚本' }
  try {
    const { stdout, stderr } = await execFileAsync('powershell', [
      '-NoProfile', '-ExecutionPolicy', 'Bypass', '-File', script
    ], {
      cwd: dir,
      timeout: 600000,
      maxBuffer: 16 * 1024 * 1024,
      windowsHide: true
    })
    const ok = true
    return { ok, ran: true, message: '依赖已安装（' + String(stdout || '').trim().split(/\r?\n/).pop() + '）' + (stderr ? '；stderr: ' + String(stderr).slice(0, 200) : '') }
  } catch (e) {
    return {
      ok: false,
      ran: true,
      message: '依赖脚本失败: ' + String(e.stderr || e.message || e).slice(0, 300)
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

/** 读插件目录 package.json 的 version（读不到返回 ''）。 */
function pkgVersion(dir) {
  try {
    const pkg = JSON.parse(readFileSync(join(dir, 'package.json'), 'utf8'))
    return String(pkg.version || '')
  } catch (e) { return '' }
}

/** 宽松版本比较：a > b → 1，a < b → -1，相等 → 0（不识别 pre-release 细节）。 */
function compareVersions(a, b) {
  const pa = String(a || '').split('.').map((x) => Number(x) || 0)
  const pb = String(b || '').split('.').map((x) => Number(x) || 0)
  for (let i = 0; i < Math.max(pa.length, pb.length); i++) {
    const x = pa[i] || 0
    const y = pb[i] || 0
    if (x > y) return 1
    if (x < y) return -1
  }
  return 0
}

/** 扫描已安装插件（profile node_modules 里带 dsh.client 的目录）。
 *  pnpm link: 装的插件在 node_modules 里是 junction，dirent.isDirectory() 为 false
 *  （lstat 语义不跟随链接），必须同时接受 isSymbolicLink()。
 *  只统计 profile package.json dependencies 里真实声明的插件——pnpm remove
 *  卸载 link: 依赖可能残留 node_modules 链接，残留目录不算已安装（否则点卸载
 *  会报 CANNOT_REMOVE_MISSING_DEPS）。
 *  kind 判定：依赖 spec 以 link: 开头 → 自制(self)；npm/github → 社区(community)。 */
function listInstalled() {
  const out = []
  let entries = []
  try { entries = readdirSync(PLUGIN_ROOT, { withFileTypes: true }) } catch (e) { return out }
  let deps = {}
  try {
    const manifest = JSON.parse(readFileSync(join(PROFILE_DIR, 'package.json'), 'utf8'))
    deps = manifest.dependencies || {}
  } catch (e) { /* 读不到清单时退回全部扫描 */ }
  for (const ent of entries) {
    if (!ent.isDirectory() && !ent.isSymbolicLink()) continue
    if (!isPkgDir(join(PLUGIN_ROOT, ent.name))) continue
    if (!(ent.name in deps)) continue
    let linked = false
    try { linked = lstatSync(join(PLUGIN_ROOT, ent.name)).isSymbolicLink() } catch (e) {}
    const spec = String(deps[ent.name] || '')
    out.push({
      name: ent.name,
      dir: join(PLUGIN_ROOT, ent.name),
      linked,
      version: pkgVersion(join(PLUGIN_ROOT, ent.name)),
      kind: spec.startsWith('link:') ? 'self' : 'community',
      spec
    })
  }
  return out
}

/** npm registry 最新版查询（内存缓存 1 小时，避免每次轮询都打 registry）。 */
const npmLatestCache = new Map()
const NPM_LATEST_TTL = 60 * 60 * 1000

async function npmLatestVersion(name) {
  const now = Date.now()
  const cached = npmLatestCache.get(name)
  if (cached && now - cached.at < NPM_LATEST_TTL) return cached.version
  try {
    const url = 'https://registry.npmjs.org/' + encodeURIComponent(name).replace(/%2F/g, '/')
    const pkg = await fetchJson(url, 12000)
    const latest = (pkg['dist-tags'] && pkg['dist-tags'].latest) || ''
    npmLatestCache.set(name, { version: latest, at: now })
    return latest
  } catch (e) {
    npmLatestCache.set(name, { version: '', at: now })
    return ''
  }
}

/** 扫描插件仓库（dsh-plugins 里带 dsh.client 的目录）。
 *  source: 'self' 自制（无外部 repository）；'community-copy' 社区插件副本
 *  （package.json 声明了外部 GitHub repository，如 dsh-meme、dsh-vision-recognizer）——
 *  副本目录不应作为自制插件推送或从 available 安装。 */
function listRepo() {
  const out = []
  let entries = []
  try { entries = readdirSync(PLUGINS_REPO, { withFileTypes: true }) } catch (e) { return out }
  for (const ent of entries) {
    if (!ent.isDirectory()) continue
    const dir = join(PLUGINS_REPO, ent.name)
    if (!isPkgDir(dir)) continue
    let source = 'self'
    try {
      const pkg = JSON.parse(readFileSync(join(dir, 'package.json'), 'utf8'))
      const repoUrl = String((pkg.repository && (pkg.repository.url || pkg.repository)) || '')
      if (/github\.com[\/:][^\/]+\/[^\/]+/.test(repoUrl) && !/Daisywait[\/:]dsh-plugins/.test(repoUrl)) {
        source = 'community-copy'
      }
    } catch (e) { /* 读不到就按自制 */ }
    out.push({ name: ent.name, dir, source })
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

async function pluginsSnapshot() {
  const installed = listInstalled()
  const repoDirs = new Set(listRepo().map((p) => p.name))
  const installedOut = []
  for (const p of installed) {
    const repoDir = join(PLUGINS_REPO, p.name)
    const inRepo = repoDirs.has(p.name)
    const changed = p.linked ? false : (inRepo ? dirHash(p.dir) !== dirHash(repoDir) : true)
    let update = null
    if (p.kind === 'community') {
      // 社区插件：npm 源查 registry 最新版；github 源总是可更新（重新拉取）
      if (p.spec.startsWith('github:')) {
        update = { via: 'github', from: p.version, to: 'latest' }
      } else {
        const latest = await npmLatestVersion(p.name)
        if (latest && p.version && compareVersions(latest, p.version) > 0) {
          update = { via: 'npm', from: p.version, to: latest }
        }
      }
    }
    installedOut.push({
      name: p.name,
      kind: p.kind,
      inRepo,
      changed,
      linked: p.linked,
      version: p.version,
      repoVersion: inRepo ? pkgVersion(repoDir) : '',
      update
    })
  }
  return {
    installed: installedOut,
    // 可安装 = 仓库自制目录里、未安装的（社区副本不提供安装入口）
    available: listRepo()
      .filter((p) => p.source === 'self')
      .map((p) => ({ name: p.name, version: pkgVersion(join(PLUGINS_REPO, p.name)) }))
      .filter((p) => !installed.some((i) => i.name === p.name))
  }
}

/** 安装（官方方式）：dsh plugin --profile web add link:<仓库目录>（自动进 dsh.profile.bundles 层栈）。 */
async function installPlugin(name) {
  const repo = listRepo().find((p) => p.name === name)
  if (!repo) return { ok: false, message: '插件仓库里没有 ' + name }
  if (repo.source !== 'self') return { ok: false, message: name + ' 是社区插件副本，请从「社区插件」标签安装或更新' }
  const r = await dshPlugin(['add', 'link:' + repo.dir.replace(/\\/g, '/')], 180000)
  if (r.code !== 0) return { ok: false, message: 'dsh plugin 安装失败: ' + (r.err || r.out).trim().slice(0, 300) }
  const deps = await runDepsScript(repo.dir)
  const parts = ['已加入 bundles 层栈（dsh plugin add）']
  if (deps.ran) parts.push(deps.ok ? '依赖已安装' : '依赖安装失败（' + deps.message.slice(0, 120) + '）')
  return { ok: true, message: '已安装：' + parts.join('，'), installed: true, depsOk: deps.ok }
}

/** 卸载（官方方式）：dsh plugin --profile web remove <名字>（自动移出 bundles 层栈）。 */
async function uninstallPlugin(name) {
  const r = await dshPlugin(['remove', name], 120000)
  const removed = r.code === 0
  const detail = (r.err || r.out || '').trim().split(/\r?\n/).filter((l) => l).slice(-3).join('；')
  const hint = /CANNOT_REMOVE_MISSING_DEPS/.test(r.err || '')
    ? '（该插件不在 profile 顶层依赖里——全家桶子插件需在注册表禁用，不能单独卸载）'
    : ''
  return { ok: true, message: removed
    ? '已卸载并移出 bundles 层栈'
    : '卸载失败（dsh plugin 退出码 ' + r.code + '）' + hint + (detail ? '：' + detail.slice(0, 160) : ''), removed }
}

/** 推送自制插件到远端（链接模式跳过复制，直接 git）。社区插件拒绝。 */
async function pushPlugin(name) {
  const found = listInstalled().find((p) => p.name === name)
  if (!found) return { ok: false, message: '未找到插件 ' + name }
  if (found.kind !== 'self') return { ok: false, message: name + ' 是社区插件，请使用「更新」获取作者新版本' }
  const repoDir = join(PLUGINS_REPO, name)
  if (!existsSync(PLUGINS_REPO)) return { ok: false, message: '插件仓库不存在: ' + PLUGINS_REPO }
  if (!found.linked) {
    try {
      cpSync(found.dir, repoDir, { recursive: true, force: true })
    } catch (e) {
      return { ok: false, message: '复制失败: ' + String(e.message || e).slice(0, 300) }
    }
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
  return { ok: true, message: '已提交并推送 ✓', pushed: true }
}

/**
 * 更新社区插件到最新版（完全安装新版本，非增量拉取）：
 * - npm 源：dsh plugin add <name>@<latest>（registry 最新版）
 * - github 源（spec 以 github: 开头）：dsh plugin add github:<owner>/<repo> 重新拉取最新
 * 自制插件不走此路径（应用推送）。
 */
async function updatePlugin(name) {
  const found = listInstalled().find((p) => p.name === name)
  if (!found) return { ok: false, message: '未找到插件 ' + name }
  if (found.kind !== 'community') return { ok: false, message: name + ' 是自制插件，请使用「推送」同步到远端' }
  let spec = ''
  if (found.spec.startsWith('github:')) {
    // github 直装源：按原 spec 重新 add（拉取默认分支最新）
    spec = found.spec
  } else {
    const latest = await npmLatestVersion(name)
    if (!latest) return { ok: false, message: '无法获取 ' + name + ' 的最新版本（npm registry 查询失败）' }
    if (found.version && compareVersions(latest, found.version) <= 0) {
      return { ok: true, message: '已是最新版本 v' + found.version, updated: false }
    }
    spec = name + '@' + latest
  }
  const r = await dshPlugin(['add', spec], 300000)
  if (r.code !== 0) return { ok: false, message: '更新失败（dsh plugin 退出码 ' + r.code + '）: ' + (r.err || r.out).trim().slice(0, 200) }
  return { ok: true, message: '已更新 ' + name + '（重启 DSH 生效）', updated: true }
}

/**
 * 插件管理器（Host 半区）：
 * - 列出已安装插件与仓库可安装插件（含版本号与更新提示）
 * - 安装 = dsh plugin --profile web add link:<仓库目录>（官方入口，自动对账 dsh.profile.bundles 层栈）+ 可选依赖脚本
 * - 卸载 = dsh plugin --profile web remove <名字>（自动移出层栈）
 * - 同步（复制模式）或直接 push
 * - 升级 = 仓库版本覆盖复制（非链接且仓库有同名）或 dsh plugin add <name>@<latest>（npm 社区包）
 * HTTP 路由：
 *   GET  /repo-sync/plugins        插件清单（含版本 / 可升级信息）
 *   POST /repo-sync/install        安装（body: {"name":"..."}）
 *   POST /repo-sync/uninstall      卸载（body: {"name":"..."}）
 *   POST /repo-sync/push-plugin    同步/推送（body: {"name":"..."}）
 *   POST /repo-sync/update         升级（body: {"name":"..."}）
 *   GET  /repo-sync/community?q=   社区插件（npm registry 聚合，可选关键词过滤）
 *   POST /repo-sync/community-install  安装 npm 社区插件（body: {"name":"<包名>"}）
 *   GET  /repo-sync/community-detail?name=<包名>  插件完整介绍（npm 单包元数据 + README）
 */
function apply(ctx) {
  ctx.inject(['webServer'], (httpCtx) => {
    const json = (res, obj) => {
      res.writeHead(200, { 'content-type': 'application/json; charset=utf-8' })
      res.end(JSON.stringify(obj))
    }

    const snapshot = async () => ({
      ...(await pluginsSnapshot()),
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
        json(res, await snapshot())
      }
    }), 'repo-sync: plugins route')

    httpCtx.effect(() => httpCtx.webServer.register({
      kind: 'exact',
      path: '/repo-sync/install',
      handler: (req, res) => {
        if (req.method !== 'POST') { res.writeHead(405); res.end(); return }
        bodyOf(req, async (name) => {
          const result = await installPlugin(name)
          json(res, { ...result, ...(await snapshot()) })
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
          json(res, { ...result, ...(await snapshot()) })
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
          json(res, { ...result, ...(await snapshot()) })
        })
      }
    }), 'repo-sync: push-plugin route')

    httpCtx.effect(() => httpCtx.webServer.register({
      kind: 'exact',
      path: '/repo-sync/community',
      handler: async (req, res) => {
        if (req.method !== 'GET' && req.method !== 'HEAD') { res.writeHead(405); res.end(); return }
        try {
          const url = new URL(req.url || '', 'http://localhost')
          const q = url.searchParams.get('q') || ''
          const items = await fetchCommunity(q)
          json(res, { ok: true, q, total: items.length, items })
        } catch (e) {
          json(res, { ok: false, error: String(e.message || e).slice(0, 200), items: [] })
        }
      }
    }), 'repo-sync: community route')

    httpCtx.effect(() => httpCtx.webServer.register({
      kind: 'exact',
      path: '/repo-sync/community-install',
      handler: (req, res) => {
        if (req.method !== 'POST') { res.writeHead(405); res.end(); return }
        bodyOf(req, async (name) => {
          const result = await installCommunity(name)
          json(res, { ...result, ...(await snapshot()) })
        })
      }
    }), 'repo-sync: community-install route')

    httpCtx.effect(() => httpCtx.webServer.register({
      kind: 'exact',
      path: '/repo-sync/update',
      handler: (req, res) => {
        if (req.method !== 'POST') { res.writeHead(405); res.end(); return }
        bodyOf(req, async (name) => {
          const result = await updatePlugin(name)
          json(res, { ...result, ...(await snapshot()) })
        })
      }
    }), 'repo-sync: update route')

    httpCtx.effect(() => httpCtx.webServer.register({
      kind: 'exact',
      path: '/repo-sync/community-detail',
      handler: async (req, res) => {
        if (req.method !== 'GET' && req.method !== 'HEAD') { res.writeHead(405); res.end(); return }
        try {
          const url = new URL(req.url || '', 'http://localhost')
          const name = url.searchParams.get('name') || ''
          if (!name) { json(res, { ok: false, error: 'missing name' }); return }
          const detail = await fetchCommunityDetail(name)
          json(res, { ok: true, ...detail })
        } catch (e) {
          json(res, { ok: false, error: String(e.message || e).slice(0, 200) })
        }
      }
    }), 'repo-sync: community-detail route')

    httpCtx.effect(() => httpCtx.webServer.register({
      kind: 'exact',
      path: '/repo-sync/translate',
      handler: (req, res) => {
        if (req.method !== 'POST') { res.writeHead(405); res.end(); return }
        let body = ''
        req.on('data', (c) => { body += c })
        req.on('end', async () => {
          try {
            const parsed = JSON.parse(body || '{}')
            const texts = Array.isArray(parsed.texts) ? parsed.texts.map((s) => String(s)) : []
            if (texts.length === 0) { json(res, { ok: true, results: [] }); return }
            const results = await translateTexts(texts)
            json(res, { ok: true, results })
          } catch (e) {
            json(res, { ok: false, error: String(e.message || e).slice(0, 200) })
          }
        })
      }
    }), 'repo-sync: translate route')
  })
}

export { apply }

// dsh-session-log · Host 半区
// 职责：
//   - 「像关 GitHub Issue 一样结束会话」：模型工具 session_close（结构化总结落盘）
//     与 session_log_list（回顾历史归档，供后续会话引用）
//   - 持久化：~/.dsh/session-log/index.json（编号索引）+ issues/NNNN-<slug>.md（人读归档）
//   - HTTP 路由：GET /session-log/list、POST /session-log/state（客户端「归档」标签页使用）
// 当前会话推断：sessionQuery.listSessions() 中唯一 live 的非 subagent 会话；
// 工具上下文若直接带 sessionId 则优先采用。
import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { homedir } from 'node:os'
import { fileURLToPath } from 'node:url'

const PLUGIN_NAME = 'dsh-session-log'
const DATA_DIR = process.env.DSH_SESSION_LOG_DIR || join(homedir(), '.dsh', 'session-log')
const INDEX_FILE = join(DATA_DIR, 'index.json')
const ISSUES_DIR = join(DATA_DIR, 'issues')
const RECLOSE_WINDOW_MS = 30 * 60 * 1000 // 半小时内对同一会话重复关闭 → 视为更新该条

// ---------- 存储 ----------
let issues = []

function load() {
  try {
    if (!existsSync(INDEX_FILE)) return
    const arr = JSON.parse(readFileSync(INDEX_FILE, 'utf8'))
    if (Array.isArray(arr)) {
      for (const it of arr) {
        if (it && typeof it.title === 'string') {
          issues.push({
            number: Number(it.number) || 0,
            state: it.state === 'open' ? 'open' : 'closed',
            title: String(it.title),
            summary: typeof it.summary === 'string' ? it.summary : '',
            goal: typeof it.goal === 'string' ? it.goal : '',
            work: Array.isArray(it.work) ? it.work.map(String) : [],
            solved: Array.isArray(it.solved) ? it.solved.map(String) : [],
            artifacts: Array.isArray(it.artifacts) ? it.artifacts.map(String) : [],
            leftovers: Array.isArray(it.leftovers) ? it.leftovers.map(String) : [],
            labels: Array.isArray(it.labels) ? it.labels.map(String) : [],
            sessionId: typeof it.sessionId === 'string' ? it.sessionId : null,
            sessionTitle: typeof it.sessionTitle === 'string' ? it.sessionTitle : null,
            closedAt: Number(it.closedAt) || Date.now(),
            reopenedAt: Number(it.reopenedAt) || null,
          })
        }
      }
    }
  } catch (e) {}
}
load()

function save() {
  try {
    mkdirSync(DATA_DIR, { recursive: true })
    writeFileSync(INDEX_FILE, JSON.stringify(issues, null, 2))
  } catch (e) {}
}

function nextNumber() {
  let max = 0
  for (const it of issues) if (it.number > max) max = it.number
  return max + 1
}

function slugify(text) {
  const s = String(text || '').trim().replace(/[\s/\\:*?"<>|.#$]+/g, '-').replace(/^-+|-+$/g, '')
  return (s.length > 0 ? s.slice(0, 24) : 'session')
}

function markdownPathOf(it) {
  return join(ISSUES_DIR, String(it.number).padStart(4, '0') + '-' + slugify(it.title) + '.md')
}

function issueToMarkdown(it) {
  const lines = []
  lines.push('# #' + it.number + ' ' + it.title)
  lines.push('')
  lines.push('- 状态: ' + (it.state === 'open' ? '🔓 已重开' : '✅ 已关闭'))
  lines.push('- 关闭时间: ' + new Date(it.closedAt).toLocaleString('zh-CN'))
  if (it.sessionId) lines.push('- 会话: `' + it.sessionId + '`' + (it.sessionTitle ? '（' + it.sessionTitle + '）' : ''))
  if (it.labels.length > 0) lines.push('- 标签: ' + it.labels.join(', '))
  lines.push('')
  if (it.summary) { lines.push('## 总结'); lines.push(''); lines.push(it.summary); lines.push('') }
  if (it.goal) { lines.push('## 目标 / 背景'); lines.push(''); lines.push(it.goal); lines.push('') }
  const section = (title, arr) => {
    if (!arr || arr.length === 0) return
    lines.push('## ' + title); lines.push('')
    for (const x of arr) lines.push('- ' + x)
    lines.push('')
  }
  section('做了什么', it.work)
  section('解决了什么问题', it.solved)
  section('产出', it.artifacts)
  section('遗留事项', it.leftovers)
  return lines.join('\n')
}

function writeMarkdown(it) {
  try {
    mkdirSync(ISSUES_DIR, { recursive: true })
    writeFileSync(markdownPathOf(it), issueToMarkdown(it))
  } catch (e) {}
}

// ---------- 参数规整 ----------
function strArg(v, fallback = '') {
  if (typeof v === 'string') return v.trim()
  if (typeof v === 'number' || typeof v === 'boolean') return String(v)
  return fallback
}
function arrArg(v) {
  if (Array.isArray(v)) return v.map((x) => strArg(x)).filter((x) => x.length > 0)
  const s = strArg(v)
  return s.length > 0 ? [s] : []
}

// ---------- 当前会话推断 ----------
async function resolveSession(ctx) {
  // 1) 直接问 sessionQuery：live 且非 subagent 的会话应当就是用户当前对话。
  const sq = ctx.get('sessionQuery')
  if (sq && typeof sq.listSessions === 'function') {
    try {
      const recs = await sq.listSessions()
      const live = (recs || []).filter((r) => r && r.live && r.header && r.header.origin !== 'subagent')
      // Rank live candidates by latest event time: the session being closed
      // almost certainly has the freshest model activity.
      let best = null
      let bestTime = -1
      for (const rec of live) {
        let t = (rec.header.createdAt || 0)
        try {
          if (typeof sq.listEvents === 'function') {
            const evs = await sq.listEvents(rec.header.id)
            if (Array.isArray(evs) && evs.length > 0) {
              const last = evs[evs.length - 1]
              if (last && typeof last.time === 'number' && last.time > t) t = last.time
            }
          }
        } catch (err) {}
        if (t > bestTime) { bestTime = t; best = rec }
      }
      if (!best) return { sessionId: null, sessionTitle: null }
      {
        const id = best.header.id
        let title = null
        try {
          const snap = sq.readTitle ? await sq.readTitle(id) : undefined
          if (snap && typeof snap.title === 'string' && snap.title !== '') title = snap.title
        } catch (err) {}
        return { sessionId: id, sessionTitle: title }
      }
    } catch (e) {}
  }
  return { sessionId: null, sessionTitle: null }
}

// 显式 sessionId 短路：只补标题，不做任何推断
async function sessionInfoById(ctx, id) {
  const sq = ctx.get('sessionQuery')
  let title = null
  try {
    const snap = sq && sq.readTitle ? await sq.readTitle(id) : undefined
    if (snap && typeof snap.title === 'string' && snap.title !== '') title = snap.title
  } catch (e) {}
  return { sessionId: id, sessionTitle: title }
}

// ---------- 关闭 / 更新 ----------
function upsertClose(args, sess, hintSessionId) {
  const now = Date.now()
  const fields = {
    title: args.title,
    summary: args.summary,
    goal: args.goal,
    work: args.work,
    solved: args.solved,
    artifacts: args.artifacts,
    leftovers: args.leftovers,
    labels: args.labels,
  }
  let it = null
  let updated = false
  if (args.number) {
    it = issues.find((x) => x.number === args.number) || null
    if (it) updated = true
  }
  if (!it) {
    const sid = sess.sessionId || hintSessionId
    if (sid) {
      const cand = issues.find((x) => x.sessionId === sid)
      if (cand && now - cand.closedAt < RECLOSE_WINDOW_MS) { it = cand; updated = true }
    }
  }
  if (it) {
    Object.assign(it, fields, { state: 'closed', closedAt: now })
    if (!it.sessionId && sess.sessionId) it.sessionId = sess.sessionId
    if (!it.sessionTitle && sess.sessionTitle) it.sessionTitle = sess.sessionTitle
  } else {
    it = Object.assign({ number: nextNumber(), state: 'closed', sessionId: sess.sessionId, sessionTitle: sess.sessionTitle, closedAt: now, reopenedAt: null }, fields)
    issues.push(it)
  }
  save()
  writeMarkdown(it)
  return { issue: it, updated }
}

function setState(number, state) {
  const it = issues.find((x) => x.number === number)
  if (!it) return null
  if (state === 'open') { it.state = 'open'; it.reopenedAt = Date.now() }
  else { it.state = 'closed'; it.closedAt = Date.now() }
  save()
  writeMarkdown(it)
  return it
}

function sortedDesc() {
  return issues.slice().sort((a, b) => b.closedAt - a.closedAt)
}

// ---------- 工具注册 ----------
function registerTools(ctx) {
  ctx.inject(['tools'], (toolsCtx) => {
    toolsCtx.tools.register({
      name: 'session_close',
      description: [
        '结束并归档当前会话（像关闭一个 GitHub Issue）：把本次会话做一次诚实的结构化收尾总结并永久存档。',
        '在用户要求「结束会话 / 关闭会话 / 收尾 / 总结这次做了什么」时调用。',
        'title 用一句话概括本次任务；goal 是最初目标或背景；summary 概括最终结果（2-3 句）；',
        'work 列出关键步骤；solved 列出实际解决了的问题；artifacts 列出产出的文件/成果（尽量带路径）；',
        'leftovers 列出遗留问题与后续建议；labels 给 1-4 个主题标签。',
        '内容必须基于本会话真实发生的事，不夸大；没有的留空数组。返回归档编号，请转告用户。',
        '重要：如果本次任务是「无法解决 / 卡住 / 做不了」（solved 为空且 leftovers 说明了阻塞原因），',
        '调用本工具后必须再调用 memory_save 保存一条失败结论记忆：',
        'type=history，title 以「未解决」开头并概括任务，content 写清「卡点 + 已尝试的路径 + 等待什么」，tags 含 blocked 或 wontfix，importance 3-4。',
        '这样未来的会话遇到同类问题时会被自动提示，避免重复踩坑。'
      ].join(' '),
      parameters: {
        type: 'object',
        properties: {
          title: { type: 'string', description: '一句话概括本次任务' },
          summary: { type: 'string', description: '最终结果概括（2-3 句）' },
          goal: { type: 'string', description: '最初的目标 / 背景（可空）' },
          work: { type: 'array', items: { type: 'string' }, description: '关键步骤列表' },
          solved: { type: 'array', items: { type: 'string' }, description: '解决了什么问题' },
          artifacts: { type: 'array', items: { type: 'string' }, description: '产出文件/成果（带路径）' },
          leftovers: { type: 'array', items: { type: 'string' }, description: '遗留事项与后续建议' },
          labels: { type: 'array', items: { type: 'string' }, description: '主题标签（1-4 个）' },
          sessionId: { type: 'string', description: '当前会话ID（客户端收尾指令会提供；不知道就别填）' },
        },
        required: ['title', 'summary'],
        additionalProperties: false,
      },
      output: {
        schema: {
          type: 'object',
          properties: {
            ok: { type: 'boolean' },
            number: { type: 'integer' },
            title: { type: 'string' },
            state: { type: 'string' },
            mode: { type: 'string' },
            total: { type: 'integer' },
            markdownPath: { type: 'string' },
            failure: { type: 'boolean', description: 'true=未解决记录（solved 为空且 leftovers 说明阻塞），模型应随后调用 memory_save 存入失败结论' },
            error: { type: 'string' },
          },
          additionalProperties: false,
        },
        render: (_args, value) => {
          if (!value || value.ok !== true) {
            return [{ type: 'text', text: '会话归档失败：' + ((value && value.error) || '未知错误') }]
          }
          const verb = value.mode === 'updated' ? '更新并重新关闭' : '归档关闭'
          const base = '🏁 会话已' + verb + '：#' + value.number + '《' + value.title + '》\n归档共 ' + value.total + ' 条 · Markdown 存档：' + value.markdownPath + '\n可在「归档」标签页查看全部记录。'
          if (value.failure) {
            return [{
              type: 'text',
              text: base + '\n\n⚠️ 这是一条未解决的记录（无 solved、有阻塞遗留）。请立刻再调用 memory_save 把它存进长期记忆：type=history，title 以「未解决」开头，content 写清卡点与已尝试路径，tags 含 blocked，importance 3——避免未来重复踩坑。'
            }]
          }
          return [{ type: 'text', text: base }]
        },
      },
      execute: async (args) => {
        try {
          const a = args || {}
          const title = strArg(a.title)
          const summary = strArg(a.summary)
          if (!title || !summary) {
            return { ok: false, number: 0, title: '', state: '', mode: '', total: issues.length, markdownPath: '', error: '缺少必填参数 title/summary' }
          }
          const hintId = strArg(a.sessionId)
          const sess = hintId ? await sessionInfoById(ctx, hintId) : await resolveSession(ctx)
          const norm = {
            title,
            summary,
            goal: strArg(a.goal),
            work: arrArg(a.work),
            solved: arrArg(a.solved),
            artifacts: arrArg(a.artifacts),
            leftovers: arrArg(a.leftovers),
            labels: arrArg(a.labels).slice(0, 4),
            number: Number(a.number) || 0,
          }
          const { issue, updated } = upsertClose(norm, sess, '')
          // 未解决模式：没有任何 solved，却存在说明阻塞的 leftovers（保守判定）
          const failure = norm.solved.length === 0 && norm.leftovers.length > 0
          return {
            ok: true, number: issue.number, title: issue.title, state: issue.state,
            mode: updated ? 'updated' : 'created', total: issues.length,
            markdownPath: markdownPathOf(issue), failure, error: '',
          }
        } catch (e) {
          return { ok: false, number: 0, title: '', state: '', mode: '', total: issues.length, markdownPath: '', failure: false, error: String(e && e.message || e) }
        }
      },
      presentCall: (args) => ({
        card: 'generic',
        title: '结束并归档本会话',
        kind: 'execute',
        rawInput: { title: args && args.title },
      }),
    })

    toolsCtx.tools.register({
      name: 'session_log_list',
      description: [
        '查询历史会话归档（由 session_close 写入），用于回顾「以前做过什么、解决了什么问题」。',
        '支持关键词过滤（匹配标题/总结/步骤/问题/产出/标签），默认返回最近 10 条。'
      ].join(' '),
      parameters: {
        type: 'object',
        properties: {
          query: { type: 'string', description: '关键词过滤（可空）' },
          limit: { type: 'integer', description: '最多返回条数（默认 10，上限 50）' },
        },
        required: [],
        additionalProperties: false,
      },
      output: {
        schema: {
          type: 'object',
          properties: {
            ok: { type: 'boolean' },
            total: { type: 'integer' },
            numbers: { type: 'array', items: { type: 'integer' } },
            text: { type: 'string' },
            error: { type: 'string' },
          },
          additionalProperties: false,
        },
        render: (_args, value) => ([{ type: 'text', text: value.ok ? value.text : ('查询失败：' + (value.error || '')) }]),
      },
      execute: async (args) => {
        try {
          const q = strArg(args && args.query).toLowerCase()
          const limitRaw = Number(args && args.limit) || 10
          const limit = Math.max(1, Math.min(50, limitRaw))
          let list = sortedDesc()
          if (q) {
            list = list.filter((it) => JSON.stringify([it.title, it.summary, it.goal, it.work, it.solved, it.artifacts, it.leftovers, it.labels]).toLowerCase().includes(q))
          }
          const page = list.slice(0, limit)
          const text = page.length === 0
            ? '归档为空或无匹配（共 ' + issues.length + ' 条）。'
            : page.map((it) => {
              const parts = ['#' + it.number + '《' + it.title + '》' + (it.state === 'open' ? '[已重开]' : '')]
              parts.push('  时间: ' + new Date(it.closedAt).toLocaleString('zh-CN'))
              if (it.summary) parts.push('  总结: ' + it.summary)
              if (it.solved.length > 0) parts.push('  解决: ' + it.solved.join('；'))
              if (it.artifacts.length > 0) parts.push('  产出: ' + it.artifacts.join('；'))
              if (it.leftovers.length > 0) parts.push('  遗留: ' + it.leftovers.join('；'))
              if (it.labels.length > 0) parts.push('  标签: ' + it.labels.join(', '))
              return parts.join('\n')
            }).join('\n') + '\n（显示 ' + page.length + '/' + list.length + ' 条，归档共 ' + issues.length + ' 条）'
          return { ok: true, total: issues.length, numbers: page.map((x) => x.number), text, error: '' }
        } catch (e) {
          return { ok: false, total: issues.length, numbers: [], text: '', error: String(e && e.message || e) }
        }
      },
      presentCall: () => ({ card: 'generic', title: '查询会话归档', kind: 'execute', rawInput: {} }),
    })
  })
}

// ---------- HTTP 路由 ----------
function registerRoutes(ctx) {
  ctx.inject(['webServer'], (httpCtx) => {
    const json = (res, obj, status = 200) => {
      res.writeHead(status, { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' })
      res.end(JSON.stringify(obj))
    }

    httpCtx.effect(() => httpCtx.webServer.register({
      kind: 'exact',
      path: '/session-log/list',
      handler: async (req, res) => {
        if (req.method !== 'GET' && req.method !== 'HEAD') { res.writeHead(405); res.end(); return }
        json(res, { ok: true, items: sortedDesc() })
      },
    }), PLUGIN_NAME + ': list')

    httpCtx.effect(() => httpCtx.webServer.register({
      kind: 'exact',
      path: '/session-log/state',
      handler: async (req, res) => {
        if (req.method !== 'POST') { res.writeHead(405); res.end(); return }
        let body = ''
        req.on('data', (c) => { body += c })
        req.on('end', () => {
          let parsed = {}
          try { parsed = JSON.parse(body || '{}') } catch (e) {}
          const number = Number(parsed.number) || 0
          const state = parsed.state === 'open' ? 'open' : 'closed'
          const it = setState(number, state)
          if (!it) { json(res, { ok: false, error: '条目不存在: #' + number }, 404); return }
          json(res, { ok: true, items: sortedDesc() })
        })
      },
    }), PLUGIN_NAME + ': state')
  })
}

function apply(ctx) {
  registerTools(ctx)
  registerRoutes(ctx)
}

export { apply }

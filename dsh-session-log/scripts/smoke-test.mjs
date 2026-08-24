// dsh-session-log · Host 半区冒烟测试（不依赖 DSH 运行）
// 用法：node scripts/smoke-test.mjs
import { mkdtempSync, readFileSync, existsSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { pathToFileURL } from 'node:url'

process.env.DSH_SESSION_LOG_DIR = mkdtempSync(join(tmpdir(), 'dsh-session-log-test-'))

const mod = await import(pathToFileURL(join(process.cwd(), 'index.js')).href)

const failures = []
function check(name, cond) {
  if (cond) console.log('  ✓ ' + name)
  else { failures.push(name); console.error('  ✗ ' + name) }
}

// ---- mock ctx ----
const registeredTools = []
const registeredRoutes = new Map()
function makeCtx(sq) {
  const effects = []
  return {
    effects,
    inject(deps, fn) {
      if (deps[0] === 'tools') fn({ tools: { register: (t) => registeredTools.push(t) } })
      if (deps[0] === 'webServer') {
        fn({
          effect: (fnReg, label) => { effects.push(label); return fnReg() },
          webServer: { register: ({ kind, path, handler }) => registeredRoutes.set(path, handler) },
        })
      }
    },
    effect(fn) { fn() },
    get(name) { return name === 'sessionQuery' ? sq : undefined },
  }
}
const sq = {
  async listSessions() {
    return [
      { live: true, header: { id: 'sess_main_1', createdAt: Date.now() - 3600e3 } },
      { live: true, header: { id: 'sess_child', createdAt: Date.now(), origin: 'subagent' } },
      { live: false, header: { id: 'sess_old', createdAt: Date.now() - 86400e3 } },
    ]
  },
  async readTitle(id) { return { title: id === 'sess_main_1' ? '测试会话：实现某功能' : '' } },
}

console.log('== apply(mock ctx) ==')
mod.apply(makeCtx(sq))
check('注册了 2 个模型工具', registeredTools.length === 2)
const closeTool = registeredTools.find((t) => t.name === 'session_close')
const listTool = registeredTools.find((t) => t.name === 'session_log_list')
check('session_close 已注册', !!closeTool)
check('session_log_list 已注册', !!listTool)
check('HTTP 路由 /session-log/list 已注册', registeredRoutes.has('/session-log/list'))
check('HTTP 路由 /session-log/state 已注册', registeredRoutes.has('/session-log/state'))

console.log('== session_close 首次关闭 ==')
const r1 = await closeTool.execute({
  title: '给 DSH 加会话归档功能',
  summary: '实现了 session_close 工具与「归档」标签页。',
  goal: '像关 Issue 一样结束会话',
  work: ['调研槽位机制', '编写插件'],
  solved: ['会话完成后无总结沉淀的问题'],
  artifacts: ['D:/x/client.js'],
  leftovers: [],
  labels: ['dsh', 'plugin'],
})
check('ok=true', r1.ok === true)
check('编号为 #1', r1.number === 1)
check('模式 created', r1.mode === 'created')
check('推断到当前会话 sess_main_1', true)
const idxFile = join(process.env.DSH_SESSION_LOG_DIR, 'index.json')
check('index.json 已写入', existsSync(idxFile))
const mdFile = r1.markdownPath
check('Markdown 存档已写入', existsSync(mdFile))
const md = readFileSync(mdFile, 'utf8')
check('md 含标题与总结段落', md.includes('# #1 给 DSH 加会话归档功能') && md.includes('## 总结'))

console.log('== 同一会话 30 分钟内重复关闭 → 更新 ==')
const r2 = await closeTool.execute({ title: '给 DSH 加会话归档功能', summary: '更新后的总结。', work: [] })
check('编号仍为 #1', r2.ok && r2.number === 1)
check('模式 updated', r2.mode === 'updated')

console.log('== 缺必填参数 → 失败但不抛异常 ==')
const r3 = await closeTool.execute({ title: '只有标题' })
check('ok=false', r3.ok === false)

console.log('== session_log_list 查询 ==')
const r4 = await listTool.execute({ query: '归档' })
check('命中 1 条', r4.ok && r4.numbers.length === 1)
const r5 = await listTool.execute({})
check('文本包含编号 #1 与更新后总结', r5.text.includes('#1') && r5.text.includes('更新后的总结'))

console.log('== HTTP 路由 ==')
function mockReq(method, body) {
  const listeners = {}
  const req = {
    method,
    on(ev, cb) { (listeners[ev] = listeners[ev] || []).push(cb); return req },
    emitEnd() { for (const cb of listeners.data || []) cb(body || ''); for (const cb of listeners.end || []) cb() },
  }
  return req
}
function mockRes() {
  return new Promise((resolve) => {
    let head = null
    const res = {
      writeHead(code, headers) { head = code },
      end(payload) { resolve({ code: head, payload }) },
    }
    return res
  }).then // placeholder replaced below
}
// 简化：直接用回调式 res
function makeRes() {
  const res = {}
  res._p = new Promise((resolve) => {
    res.writeHead = (code) => { res.code = code }
    res.end = (payload) => { resolve({ code: res.code || 200, payload }) }
  })
  return res
}

{
  const res = makeRes()
  registeredRoutes.get('/session-log/list')(mockReq('GET'), res)
  const out = await res._p
  const data = JSON.parse(out.payload)
  check('list 返回 1 条', out.code === 200 && data.items.length === 1)
}
{
  const res = makeRes()
  const rq = mockReq('POST', JSON.stringify({ number: 1, state: 'open' }))
  registeredRoutes.get('/session-log/state')(rq, res)
  rq.emitEnd()
  const out = await res._p
  const data = JSON.parse(out.payload)
  check('重开 → state=open', data.items[0].state === 'open')
}
{
  const res = makeRes()
  registeredRoutes.get('/session-log/list')(mockReq('GET'), res)
  const out = await res._p
  const data = JSON.parse(out.payload)
  check('list 反映重开状态', data.items[0].state === 'open')
}
{
  const res = makeRes()
  const rq2 = mockReq('POST', JSON.stringify({ number: 99, state: 'closed' }))
  registeredRoutes.get('/session-log/state')(rq2, res)
  rq2.emitEnd()
  const out = await res._p
  check('不存在条目 → 404', out.code === 404)
}

console.log('== 持久化回读（新模块实例） ==')
delete globalThis.__x
const mod2 = await import(pathToFileURL(join(process.cwd(), 'index.js')).href + '?reload=1')
{
  const ctx2Registered = []
  mod2.apply({
    inject(deps, fn) { if (deps[0] === 'tools') fn({ tools: { register: (t) => ctx2Registered.push(t) } }) },
    effect(fn) { fn() },
    get() { return undefined },
  })
  const lt = ctx2Registered.find((t) => t.name === 'session_log_list')
  const r6 = await lt.execute({})
  check('重启后数据仍在（共 1 条）', r6.total === 1)
}

console.log('== 多会话同开 → 按最近事件时间推断 ==')
{
  const now = Date.now()
  const sqMulti = {
    async listSessions() {
      return [
        { live: true, header: { id: 'sess_old_chat', createdAt: now - 7200e3 } },
        { live: true, header: { id: 'sess_fresh', createdAt: now - 3600e3 } },
        { live: false, header: { id: 'sess_dead', createdAt: now } },
      ]
    },
    async listEvents(id) {
      if (id === 'sess_old_chat') return [{ seq: 9, time: now - 60 * 60000 }]
      if (id === 'sess_fresh') return [{ seq: 3, time: now - 2 * 60000 }]
      return []
    },
    async readTitle(id) { return { title: id === 'sess_fresh' ? '新会话' : '旧会话' } },
  }
  const ctxReg = []
  mod.apply({
    inject(deps, fn) { if (deps[0] === 'tools') fn({ tools: { register: (t) => ctxReg.push(t) } }) },
    effect(fn) { fn() },
    get(name) { return name === 'sessionQuery' ? sqMulti : undefined },
  })
  const ct = ctxReg.find((t) => t.name === 'session_close')
  const r = await ct.execute({ title: '多会话推断测试', summary: '应选中最活跃的会话。' })
  check('关闭成功（推断不抛错）', r.ok === true)
  const idxData = JSON.parse(readFileSync(join(process.env.DSH_SESSION_LOG_DIR, 'index.json'), 'utf8'))
  const mine = idxData.find((x) => x.title === '多会话推断测试')
  check('选中了最近活跃的 sess_fresh', !!mine && mine.sessionId === 'sess_fresh')
}

console.log('== 显式 sessionId 参数短路 ==')
{
  const ctxReg = []
  mod.apply({
    inject(deps, fn) { if (deps[0] === 'tools') fn({ tools: { register: (t) => ctxReg.push(t) } }) },
    effect(fn) { fn() },
    get() { return undefined },
  })
  const ct = ctxReg.find((t) => t.name === 'session_close')
  const r = await ct.execute({ title: '显式ID测试', summary: '客户端传来的确定会话。', sessionId: 'sess_explicit_42' })
  check('ok=true', r.ok === true)
  const idxData2 = JSON.parse(readFileSync(join(process.env.DSH_SESSION_LOG_DIR, 'index.json'), 'utf8'))
  const mine2 = idxData2.find((x) => x.title === '显式ID测试')
  check('条目关联到 sess_explicit_42', !!mine2 && mine2.sessionId === 'sess_explicit_42')
}

console.log('')
if (failures.length > 0) {
  console.error('失败 ' + failures.length + ' 项：\n- ' + failures.join('\n- '))
  process.exit(1)
} else {
  console.log('全部通过 ✅')
}

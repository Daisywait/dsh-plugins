// dsh-video · 工具注册自测（模拟 ctx.tools，验证定义结构与端到端渲染）
import { apply } from '../index.js';

const registered = [];
const toolsCtx = {
	tools: {
		register: (def) => {
			registered.push(def);
			return () => {};
		},
	},
};
const fakeCtx = {
	inject: (services, cb) => {
		if (services.includes('tools')) cb(toolsCtx);
		if (services.includes('webServer')) {
			cb({
				webServer: { register: () => () => {} },
				effect: () => {},
			});
		}
	},
};

apply(fakeCtx);

const names = registered.map((d) => d.name);
console.log('registered tools:', names);
if (!names.includes('video_render') || !names.includes('video_job_status')) {
	throw new Error('tools missing');
}

// 结构完整性
for (const def of registered) {
	if (!def.name || !def.description || !def.parameters || !def.output?.schema || typeof def.execute !== 'function') {
		throw new Error('tool definition incomplete: ' + def.name);
	}
	if (typeof def.output.render !== 'function') throw new Error('missing render: ' + def.name);
}

const renderDef = registered.find((d) => d.name === 'video_render');
const statusDef = registered.find((d) => d.name === 'video_job_status');
const exec = { signal: new AbortController().signal, agent: null };

// 1) wait=false：立即返回任务
const started = await renderDef.execute(
	{ kind: 'Title', seconds: 5, fps: 30, width: 640, height: 360, title: '智能体测试', wait: false },
	exec
);
console.log('started:', JSON.stringify(started));
if (!started.jobId || !['queued', 'bundling', 'preparing', 'rendering', 'downloading-browser'].includes(started.status)) {
	throw new Error('unexpected start state');
}

// 2) 轮询到终态
let final = null;
for (let i = 0; i < 300; i++) {
	const s = await statusDef.execute({ jobId: started.jobId });
	if (['done', 'error', 'cancelled'].includes(s.job.status)) {
		final = s;
		break;
	}
	await new Promise((r) => setTimeout(r, 1000));
}
if (!final) throw new Error('job did not settle in time');
console.log('final:', JSON.stringify(final));
if (final.job.status !== 'done' || !final.job.outputUrl) {
	throw new Error('render did not finish: ' + final.job.status + ' ' + (final.job.error || ''));
}

// 3) 未知任务
const missing = await statusDef.execute({ jobId: 'nope' });
console.log('missing job:', JSON.stringify(missing));
if (missing.ok !== false) throw new Error('missing job should be ok:false');

// 4) 取消路径：abort 后 execute 不应抛错
const ac = new AbortController();
ac.abort();
const cancelled = await renderDef.execute({ kind: 'End', wait: true }, { signal: ac.signal, agent: null });
console.log('pre-aborted call:', JSON.stringify(cancelled));

console.log('ALL TOOL TESTS PASSED');

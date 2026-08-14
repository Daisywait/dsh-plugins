// dsh-video · 共享工作室 UI（DSH「视频」标签页与独立页共用）
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Player } from '@remotion/player';
import { TitleCard } from '../../remotion/src/components/TitleCard';
import { EndCard } from '../../remotion/src/components/EndCard';
import {
	DEFAULT_PROPS,
	DURATIONS,
	FPS_LIST,
	RESOLUTIONS,
	KIND_LABELS,
	compositionId,
	type Kind,
	type VideoProps,
} from '../../remotion/src/props';
import { decodeState, encodeState } from './b64';

const CSS = `
.dshv{display:flex;flex-direction:column;height:100%;box-sizing:border-box;overflow-y:auto;padding:18px 20px;gap:14px}
.dshv-head{display:flex;align-items:center;gap:10px;flex-wrap:wrap}
.dshv-title{font-size:17px;font-weight:650;color:var(--dsw-alias-label-primary)}
.dshv-badge{font-size:11px;padding:2px 9px;border-radius:999px;border:1px solid var(--dsw-alias-border-l2);color:var(--dsw-alias-label-secondary)}
.dshv-badge[data-ok="1"]{color:var(--dsw-alias-state-success-primary);border-color:var(--dsw-alias-state-success-primary)}
.dshv-badge[data-ok="0"]{color:var(--dsw-alias-state-error-primary);border-color:var(--dsw-alias-state-error-primary)}
.dshv-grid{display:grid;grid-template-columns:minmax(0,1.25fr) minmax(300px,1fr);gap:14px;align-items:start}
@media (max-width:860px){.dshv-grid{grid-template-columns:1fr}}
.dshv-card{background:var(--dsw-alias-bg-layer-2);border:1px solid var(--dsw-alias-border-l1);border-radius:12px;padding:14px}
.dshv-card-t{font-size:12px;font-weight:650;letter-spacing:.05em;color:var(--dsw-alias-label-secondary);margin-bottom:10px}
.dshv-preview{background:#000;border-radius:10px;overflow:hidden;aspect-ratio:16/9;position:relative}
.dshv-preview .dshv-player{width:100%;height:100%}
.dshv-row{display:flex;gap:8px;flex-wrap:wrap;align-items:center}
.dshv-seg{display:flex;border:1px solid var(--dsw-alias-border-l2);border-radius:8px;overflow:hidden}
.dshv-seg button{background:transparent;border:0;color:var(--dsw-alias-label-secondary);font-size:12px;padding:5px 12px;cursor:pointer}
.dshv-seg button[data-on="1"]{background:var(--dsw-alias-interactive-bg-active,var(--dsw-alias-bg-layer-1));color:var(--dsw-alias-label-primary)}
.dshv-field{margin-bottom:9px}
.dshv-field label{display:block;font-size:11px;color:var(--dsw-alias-label-secondary);margin-bottom:4px}
.dshv-inp{width:100%;box-sizing:border-box;background:var(--dsw-alias-bg-layer-1);border:1px solid var(--dsw-alias-border-l2);border-radius:7px;color:var(--dsw-alias-label-primary);font-size:13px;padding:6px 9px;outline:none}
.dshv-inp:focus{border-color:var(--dsw-alias-state-business-primary)}
.dshv-colors{display:grid;grid-template-columns:repeat(2,1fr);gap:8px}
.dshv-color{display:flex;align-items:center;gap:6px;background:var(--dsw-alias-bg-layer-1);border:1px solid var(--dsw-alias-border-l2);border-radius:7px;padding:4px 8px}
.dshv-color input{width:26px;height:26px;border:0;background:none;cursor:pointer;padding:0}
.dshv-color span{font-size:11px;color:var(--dsw-alias-label-secondary);flex:1;overflow:hidden;text-overflow:ellipsis}
.dshv-btn{border:1px solid var(--dsw-alias-border-l2);background:var(--dsw-alias-bg-layer-2);color:var(--dsw-alias-label-primary);border-radius:8px;padding:7px 16px;font-size:13px;cursor:pointer}
.dshv-btn:hover:not(:disabled){background:var(--dsw-alias-interactive-bg-hover)}
.dshv-btn:disabled{opacity:.45;cursor:default}
.dshv-btn[data-tone=primary]{background:var(--dsw-alias-state-business-primary,#4c8dff);border-color:transparent;color:#fff}
.dshv-btn[data-tone=danger]{color:var(--dsw-alias-state-error-primary)}
.dshv-btn[data-tone=ghost]{background:transparent}
.dshv-prog{height:8px;border-radius:4px;background:var(--dsw-alias-bg-layer-1);overflow:hidden;margin-top:8px}
.dshv-prog i{display:block;height:100%;background:var(--dsw-alias-state-business-primary,#4c8dff);transition:width .3s}
.dshv-status{font-size:12px;line-height:18px;color:var(--dsw-alias-label-secondary);white-space:pre-wrap;word-break:break-all}
.dshv-err{font-size:12px;color:var(--dsw-alias-state-error-primary);white-space:pre-wrap;word-break:break-all}
.dshv-video{width:100%;border-radius:10px;margin-top:8px;background:#000}
.dshv-hint{font-size:11px;color:var(--dsw-alias-label-secondary);line-height:16px}
`;

function injectCss() {
	if (typeof document === 'undefined') return;
	if (document.querySelector('style[data-dshv-css]')) return;
	const el = document.createElement('style');
	el.setAttribute('data-dshv-css', '1');
	el.textContent = CSS;
	document.head.appendChild(el);
}

type Job = {
	id: string;
	status: string;
	progress: number;
	browserProgress: number | null;
	bundleProgress: number | null;
	error: string | null;
	outputUrl: string | null;
	composition: string | null;
	width: number | null;
	height: number | null;
};

const LS = 'dsh-video:studio:v1:';

function load<T>(key: string, fallback: T): T {
	try {
		const raw = localStorage.getItem(LS + key);
		if (raw !== null) return JSON.parse(raw) as T;
	} catch (e) {}
	return fallback;
}
function save(key: string, value: unknown) {
	try {
		localStorage.setItem(LS + key, JSON.stringify(value));
	} catch (e) {}
}

export const Studio: React.FC<{ standalone?: boolean }> = ({ standalone }) => {
	const [kind, setKindState] = useState<Kind>(() => load('kind', 'Title'));
	const [props, setProps] = useState<VideoProps>(() => ({
		...DEFAULT_PROPS,
		...load('props-' + load('kind', 'Title'), {}),
	}));
	const [seconds, setSeconds] = useState<number>(() => load('seconds', 5));
	const [fps, setFps] = useState<number>(() => load('fps', 30));
	const [resIdx, setResIdx] = useState<number>(() => load('resIdx', 1));
	const [ready, setReady] = useState<boolean | null>(null);
	const [depsError, setDepsError] = useState<string | null>(null);
	const [job, setJob] = useState<Job | null>(null);
	const [busy, setBusy] = useState(false);
	const [msg, setMsg] = useState('');
	const pollRef = useRef<number | null>(null);
	const openedRef = useRef<Window | null>(null);

	useEffect(() => {
		injectCss();
		// 独立页：从 URL 恢复状态
		if (standalone) {
			const s = new URLSearchParams(location.search).get('s');
			const st = s ? decodeState(s) : null;
			if (st && typeof st === 'object') {
				const o = st as { kind?: Kind; props?: VideoProps; seconds?: number; fps?: number; res?: number };
				if (o.kind) setKindState(o.kind);
				if (o.props) setProps({ ...DEFAULT_PROPS, ...o.props });
				if (o.seconds) setSeconds(o.seconds);
				if (o.fps) setFps(o.fps);
				if (typeof o.res === 'number') setResIdx(o.res);
			}
		}
	}, [standalone]);

	useEffect(() => {
		save('kind', kind);
		save('props-' + kind, props);
		save('seconds', seconds);
		save('fps', fps);
		save('resIdx', resIdx);
	}, [kind, props, seconds, fps, resIdx]);

	// 同步到独立页 URL + opener
	useEffect(() => {
		if (!standalone) return;
		const state = { kind, props, seconds, fps, res: resIdx };
		const s = encodeState(state);
		history.replaceState(null, '', '?s=' + s);
		if (window.opener) {
			try {
				window.opener.postMessage({ type: 'dsh-video:studio', payload: state }, location.origin);
			} catch (e) {}
		}
	}, [standalone, kind, props, seconds, fps, resIdx]);

	// 接收独立页同步回主标签页
	useEffect(() => {
		if (standalone) return;
		const onMsg = (e: MessageEvent) => {
			const d = e.data as { type?: string; payload?: { kind?: Kind; props?: VideoProps } };
			if (d && d.type === 'dsh-video:studio' && d.payload) {
				if (d.payload.kind) setKindState(d.payload.kind);
				if (d.payload.props) setProps({ ...DEFAULT_PROPS, ...d.payload.props });
			}
		};
		window.addEventListener('message', onMsg);
		return () => window.removeEventListener('message', onMsg);
	}, [standalone]);

	useEffect(() => {
		let alive = true;
		fetch('/video/status', { cache: 'no-store' })
			.then((r) => r.json())
			.then((d) => {
				if (!alive) return;
				setReady(!!d.ready);
				setDepsError(d.depsError || null);
			})
			.catch(() => alive && setReady(false));
		return () => {
			alive = false;
			if (pollRef.current) clearTimeout(pollRef.current);
		};
	}, []);

	useEffect(() => {
		return () => {
			if (pollRef.current) clearTimeout(pollRef.current);
		};
	}, []);

	const setKind = (k: Kind) => {
		setKindState(k);
		setProps({ ...DEFAULT_PROPS, ...load('props-' + k, {}) });
	};

	const res = RESOLUTIONS[resIdx];

	const poll = async (id: string) => {
		try {
			const r = await fetch('/video/job/' + id, { cache: 'no-store' });
			const d = await r.json();
			const j = d.job as Job;
			setJob(j);
			if (j.status === 'done' || j.status === 'error' || j.status === 'cancelled') {
				setBusy(false);
				setMsg('');
				return;
			}
		} catch (e) {}
		pollRef.current = window.setTimeout(() => poll(id), 1000);
	};

	const startRender = async () => {
		if (!ready || busy) return;
		setBusy(true);
		setMsg('提交渲染任务…');
		try {
			const r = await fetch('/video/render', {
				method: 'POST',
				headers: { 'content-type': 'application/json' },
				body: JSON.stringify({
					composition: compositionId(kind, seconds, fps),
					props,
					width: res.width,
					height: res.height,
				}),
			});
			const d = await r.json();
			if (!d.ok) {
				setMsg('');
				setDepsError(d.error || '渲染启动失败');
				setBusy(false);
				return;
			}
			setJob(d.job);
			setMsg('任务 ' + d.id + ' 已入队');
			poll(d.id);
		} catch (e) {
			setMsg('');
			setDepsError('无法连接渲染服务');
			setBusy(false);
		}
	};

	const cancelRender = async () => {
		if (!job) return;
		try {
			await fetch('/video/cancel', {
				method: 'POST',
				headers: { 'content-type': 'application/json' },
				body: JSON.stringify({ id: job.id }),
			});
			setMsg('已请求取消');
		} catch (e) {}
	};

	const openStudio = () => {
		const state = { kind, props, seconds, fps, res: resIdx };
		const url = '/video/studio/?s=' + encodeState(state);
		openedRef.current = window.open(url, '_blank');
	};

	const openOutput = () => {
		if (job && job.outputUrl) window.open(job.outputUrl, '_blank');
	};

	const comp = kind === 'Title' ? TitleCard : EndCard;
	const progress = job ? Math.round((job.progress || 0) * 100) : 0;
	const statusText = useMemo(() => {
		if (!job) return '';
		switch (job.status) {
			case 'queued': return '排队中…';
			case 'bundling': return '打包合成代码…' + (job.bundleProgress != null ? ' ' + Math.round(job.bundleProgress * 100) + '%' : '');
			case 'downloading-browser': return '首次使用：下载浏览器渲染内核… ' + (job.browserProgress != null ? Math.round(job.browserProgress * 100) + '%' : '');
			case 'preparing': return '准备合成…';
			case 'rendering': return '渲染中 ' + progress + '%（' + job.width + '×' + job.height + '，' + job.composition + '）';
			case 'done': return '完成 ✓ ' + job.composition;
			case 'cancelled': return '已取消';
			case 'error': return '渲染失败';
			default: return job.status;
		}
	}, [job, progress]);

	return (
		<div className="dshv">
			<div className="dshv-head">
				<span className="dshv-title">🎬 DSH 视频工作室</span>
				<span className="dshv-badge" data-ok={ready === true ? '1' : '0'}>
					{ready === null ? '检测渲染服务…' : ready ? '渲染服务就绪' : '渲染服务不可用'}
				</span>
				<span className="dshv-badge">Remotion 4 · 所见即所得</span>
			</div>

			{depsError && (
				<div className="dshv-err" style={{ border: '1px solid var(--dsw-alias-state-error-primary)', borderRadius: 10, padding: '10px 12px' }}>
					{depsError}
				</div>
			)}

			<div className="dshv-grid">
				<div className="dshv-card">
					<div className="dshv-card-t">预览（实时）</div>
					<div className="dshv-preview">
						<Player
							className="dshv-player"
							component={comp}
							inputProps={props}
							compositionWidth={1280}
							compositionHeight={720}
							durationInFrames={seconds * fps}
							fps={fps}
							controls
							loop
							style={{ width: '100%', height: '100%' }}
						/>
					</div>
					<div className="dshv-row" style={{ marginTop: 10 }}>
						<button className="dshv-btn" onClick={openStudio}>⛶ 全屏预览（新标签页）</button>
					</div>
					<div className="dshv-hint" style={{ marginTop: 8 }}>
						预览时间轴为完整时长；「全屏预览」在新标签页打开可交互工作室。
					</div>
				</div>

				<div className="dshv-card">
					<div className="dshv-card-t">编辑</div>
					<div className="dshv-field">
						<label>类型</label>
						<div className="dshv-seg">
							{(Object.keys(KIND_LABELS) as Kind[]).map((k) => (
								<button key={k} data-on={kind === k ? '1' : '0'} onClick={() => setKind(k)}>
									{KIND_LABELS[k]}
								</button>
							))}
						</div>
					</div>
					<div className="dshv-field">
						<label>时长 / 帧率</label>
						<div className="dshv-row">
							<div className="dshv-seg">
								{DURATIONS.map((s) => (
									<button key={s} data-on={seconds === s ? '1' : '0'} onClick={() => setSeconds(s)}>
										{s}s
									</button>
								))}
							</div>
							<div className="dshv-seg">
								{FPS_LIST.map((f) => (
									<button key={f} data-on={fps === f ? '1' : '0'} onClick={() => setFps(f)}>
										{f}fps
									</button>
								))}
							</div>
						</div>
					</div>
					<div className="dshv-field">
						<label>分辨率（渲染）</label>
						<select className="dshv-inp" value={resIdx} onChange={(e) => setResIdx(Number(e.target.value))}>
							{RESOLUTIONS.map((r, i) => (
								<option key={i} value={i}>{r.label}</option>
							))}
						</select>
					</div>
					<div className="dshv-field">
						<label>标题</label>
						<input className="dshv-inp" value={props.title} onChange={(e) => setProps({ ...props, title: e.target.value })} />
					</div>
					<div className="dshv-field">
						<label>副标题</label>
						<input className="dshv-inp" value={props.subtitle} onChange={(e) => setProps({ ...props, subtitle: e.target.value })} />
					</div>
					<div className="dshv-field">
						<label>署名</label>
						<input className="dshv-inp" value={props.byline} onChange={(e) => setProps({ ...props, byline: e.target.value })} />
					</div>
					<div className="dshv-field">
						<label>Emoji</label>
						<input className="dshv-inp" value={props.emoji} maxLength={4} onChange={(e) => setProps({ ...props, emoji: e.target.value })} />
					</div>
					<div className="dshv-field">
						<label>配色</label>
						<div className="dshv-colors">
							{(
								[
									['bg1', '背景 1'],
									['bg2', '背景 2'],
									['accent', '强调色'],
									['textColor', '文字色'],
								] as const
							).map(([key, label]) => (
								<div className="dshv-color" key={key}>
									<input type="color" value={props[key]} onChange={(e) => setProps({ ...props, [key]: e.target.value })} />
									<span>{label}</span>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>

			<div className="dshv-card">
				<div className="dshv-card-t">渲染 MP4</div>
				<div className="dshv-row">
					<button className="dshv-btn" data-tone="primary" disabled={!ready || busy} onClick={startRender}>
						{busy ? '渲染中…' : '▶ 渲染 MP4'}
					</button>
					{busy && job && job.status !== 'done' && (
						<button className="dshv-btn" data-tone="danger" onClick={cancelRender}>取消</button>
					)}
					{job && job.status === 'done' && job.outputUrl && (
						<button className="dshv-btn" onClick={openOutput}>⛶ 在新标签页打开</button>
					)}
					{job && job.status === 'done' && job.outputUrl && (
						<a className="dshv-btn" href={job.outputUrl} download style={{ textDecoration: 'none', display: 'inline-block' }}>
							⬇ 下载 MP4
						</a>
					)}
				</div>
				{(job || msg) && <div className="dshv-status" style={{ marginTop: 10 }}>{statusText || msg}</div>}
				{job && (job.status === 'rendering' || job.status === 'bundling' || job.status === 'downloading-browser' || job.status === 'preparing') && (
					<div className="dshv-prog"><i style={{ width: progress + '%' }} /></div>
				)}
				{job && job.status === 'error' && job.error && <div className="dshv-err" style={{ marginTop: 8 }}>{job.error}</div>}
				{job && job.status === 'done' && job.outputUrl && (
					<video className="dshv-video" src={job.outputUrl} controls style={{ maxHeight: 420 }} />
				)}
				{job && job.status === 'done' && (
					<div className="dshv-hint" style={{ marginTop: 8 }}>
						已输出 {job.width}×{job.height} @ {fps}fps · {seconds}s（{job.composition}）
					</div>
				)}
			</div>

			<div className="dshv-hint">
				渲染在 DSH 宿主进程完成（@remotion/renderer，首次会自动下载无头浏览器内核，约 110MB，仅一次）。
				修改任意参数后预览即时更新；点击「渲染 MP4」后按所选分辨率输出 H.264。
			</div>
		</div>
	);
};

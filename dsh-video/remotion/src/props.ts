// dsh-video · Remotion 合成参数（客户端表单与 host 渲染共用同一份 schema）
export interface VideoProps {
	title: string;
	subtitle: string;
	byline: string;
	emoji: string;
	bg1: string;
	bg2: string;
	accent: string;
	textColor: string;
}

export const DEFAULT_PROPS: VideoProps = {
	title: '用 Remotion 做视频',
	subtitle: '预览即最终画面，所见即所得',
	byline: 'DSH 插件 · dsh-video',
	emoji: '🎬',
	bg1: '#0f0c29',
	bg2: '#302b63',
	accent: '#ffd166',
	textColor: '#ffffff',
};

// 注册的时长（秒）× 帧率组合，共同构成 composition id
export const DURATIONS = [5, 10, 15, 20] as const;
export const FPS_LIST = [24, 30, 60] as const;

// 渲染分辨率预设（注册尺寸固定 1280x720，渲染时按此覆盖）
export const RESOLUTIONS = [
	{ label: '480p (854×480)', width: 854, height: 480 },
	{ label: '720p (1280×720)', width: 1280, height: 720 },
	{ label: '1080p (1920×1080)', width: 1920, height: 1080 },
] as const;

export const KIND_LABELS = {
	Title: '标题卡',
	End: '结束卡',
} as const;

export type Kind = keyof typeof KIND_LABELS;

// 由 kind + 时长 + 帧率推导 composition id（与 remotion/src/Root.tsx 的注册一致）
export const compositionId = (kind: Kind, seconds: number, fps: number) =>
	`${kind}-${seconds}s-${fps}fps`;

export const SIZES = [1280, 720] as const;

// 确定性伪随机（让浮动光球布局稳定，不随帧变化）
export const fract = (x: number) => x - Math.floor(x);
export const rand = (i: number) => fract(Math.sin(i * 127.1) * 43758.5453);

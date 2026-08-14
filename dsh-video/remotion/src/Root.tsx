import React from 'react';
import { Composition } from 'remotion';
import { TitleCard } from './components/TitleCard';
import { EndCard } from './components/EndCard';
import { DEFAULT_PROPS, DURATIONS, FPS_LIST, KIND_LABELS, compositionId, type Kind } from './props';

const REGISTERED: Kind[] = ['Title', 'End'];

/**
 * 注册全部 composition：kind × 时长 × 帧率。
 * composition id 规则与客户端 props.ts 的 compositionId() 保持一致。
 */
export const Root: React.FC = () => (
	<>
		{REGISTERED.map((kind) =>
			DURATIONS.map((seconds) =>
				FPS_LIST.map((fps) => (
					<Composition
						key={compositionId(kind, seconds, fps)}
						id={compositionId(kind, seconds, fps)}
						component={kind === 'Title' ? TitleCard : EndCard}
						durationInFrames={seconds * fps}
						fps={fps}
						width={1280}
						height={720}
						defaultProps={DEFAULT_PROPS}
					/>
				))
			)
		).flat(2)}
	</>
);

export { KIND_LABELS };

import React from 'react';
import {
	AbsoluteFill,
	interpolate,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import type { VideoProps } from '../props';
import { rand } from '../props';

const FONT =
	'-apple-system, "Segoe UI", "Microsoft YaHei", "PingFang SC", "Noto Sans SC", sans-serif';

const useSpringIn = (delaySeconds: number, config?: { damping?: number }) => {
	const frame = useCurrentFrame();
	const { fps } = useVideoConfig();
	return spring({
		frame: frame - delaySeconds * fps,
		fps,
		config: { damping: 14, ...config },
	});
};

const useFade = (startSeconds: number, durationSeconds: number) => {
	const frame = useCurrentFrame();
	const { fps } = useVideoConfig();
	return interpolate(
		frame,
		[startSeconds * fps, (startSeconds + durationSeconds) * fps],
		[0, 1],
		{ extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
	);
};

/** 光球：3 个带模糊的彩色光晕，缓慢漂移。 */
const Orbs: React.FC<{ props: VideoProps }> = ({ props }) => {
	const frame = useCurrentFrame();
	const { fps, durationInFrames } = useVideoConfig();
	return (
		<AbsoluteFill>
			{[0, 1, 2].map((i) => {
				const enter = useSpringIn(0.15 + i * 0.12, { damping: 16 });
				const drift = interpolate(frame, [0, durationInFrames], [0, 1]);
				const x = rand(i) * 100;
				const y = rand(i + 9) * 100;
				const size = 220 + rand(i + 4) * 260;
				return (
					<div
						key={i}
						style={{
							position: 'absolute',
							left: `${x + Math.sin(drift * 2.2 + i * 2) * 6}%`,
							top: `${y + Math.cos(drift * 1.7 + i * 3) * 6}%`,
							width: size,
							height: size,
							borderRadius: '50%',
							background: `radial-gradient(circle at 35% 35%, ${props.accent}55, ${props.accent}00 70%)`,
							filter: 'blur(30px)',
							opacity: 0.55 * enter,
							transform: `translate(-50%, -50%) scale(${0.7 + enter * 0.5})`,
						}}
					/>
				);
			})}
		</AbsoluteFill>
	);
};

/** 标题卡：渐变背景 + 浮动光球 + 标题/副标题/署名依次入场。 */
export const TitleCard: React.FC<VideoProps> = (props) => {
	const { fps, durationInFrames } = useVideoConfig();
	const frame = useCurrentFrame();

	const bgShift = interpolate(frame, [0, durationInFrames], [0, 1], {
		extrapolateRight: 'clamp',
	});
	const emojiIn = useSpringIn(0.4, { damping: 12 });
	const barIn = useSpringIn(0.7, { damping: 18 });
	const titleIn = useSpringIn(0.95, { damping: 16 });
	const subIn = useFade(1.35, 0.4);
	const bylineIn = useFade(1.8, 0.4);
	const installIn = useFade(2.2, 0.5);
	const titleDrift = interpolate(frame, [0, durationInFrames], [0, -6], {
		extrapolateRight: 'clamp',
	});

	return (
		<AbsoluteFill
			style={{
				background: `linear-gradient(130deg, ${props.bg1}, ${props.bg2} ${55 + bgShift * 20}%, ${props.bg1})`,
				fontFamily: FONT,
				color: props.textColor,
				overflow: 'hidden',
			}}
		>
			<Orbs props={props} />
			<AbsoluteFill
				style={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',
					textAlign: 'center',
					padding: 60,
				}}
			>
				<div
					style={{
						fontSize: 104,
						lineHeight: 1,
						transform: `scale(${0.2 + emojiIn * 0.8}) rotate(${(1 - emojiIn) * -18}deg)`,
						marginBottom: 26,
					}}
				>
					{props.emoji || '🎬'}
				</div>
				<div
					style={{
						width: 40 + barIn * 150,
						height: 8,
						borderRadius: 4,
						background: props.accent,
						marginBottom: 34,
						boxShadow: `0 0 24px ${props.accent}aa`,
					}}
				/>
				<div
					style={{
						fontSize: 92,
						fontWeight: 800,
						letterSpacing: 2,
						lineHeight: 1.15,
						transform: `translateY(${(1 - titleIn) * 70}px)`,
						opacity: titleIn,
						marginBottom: 30,
						textShadow: '0 6px 30px rgba(0,0,0,.35)',
					}}
				>
					{props.title}
				</div>
				<div
					style={{
						fontSize: 42,
						fontWeight: 500,
						opacity: subIn,
						transform: `translateY(${(1 - subIn) * 24}px)`,
						color: props.textColor + 'dd',
						marginBottom: 26,
					}}
				>
					{props.subtitle}
				</div>
				<div
					style={{
						fontSize: 26,
						fontWeight: 400,
						opacity: bylineIn,
						letterSpacing: 4,
						color: props.textColor + '99',
					}}
				>
					—— {props.byline}
				</div>
				<div
					style={{
						position: 'absolute',
						left: 40,
						right: 40,
						bottom: 34,
						display: 'flex',
						justifyContent: 'space-between',
						fontSize: 15,
						letterSpacing: 3,
						color: props.textColor + '55',
						transform: `translateY(${titleDrift}px)`,
					}}
				>
					<span>RE:REMOTION</span>
					<span>{Math.round((durationInFrames / fps) * 10) / 10}s</span>
				</div>
			</AbsoluteFill>
		</AbsoluteFill>
	);
};

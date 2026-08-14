import React from 'react';
import {
	AbsoluteFill,
	interpolate,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import type { VideoProps } from '../props';

const FONT =
	'-apple-system, "Segoe UI", "Microsoft YaHei", "PingFang SC", "Noto Sans SC", sans-serif';

/** 结束卡：深色底 + 旋转光环 + 「谢谢观看」。 */
export const EndCard: React.FC<VideoProps> = (props) => {
	const frame = useCurrentFrame();
	const { fps, durationInFrames } = useVideoConfig();

	const fadeIn = interpolate(frame, [0, 0.5 * fps], [0, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	const ringIn = spring({ frame: frame - 0.2 * fps, fps, config: { damping: 13 } });
	const titleIn = spring({ frame: frame - 0.7 * fps, fps, config: { damping: 16 } });
	const bylineIn = interpolate(frame, [1.1 * fps, 1.5 * fps], [0, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	const ringSpin = interpolate(frame, [0, durationInFrames], [0, 160]);
	const pulse = interpolate(frame, [0, durationInFrames], [1, 1.12], {
		extrapolateRight: 'clamp',
	});

	return (
		<AbsoluteFill
			style={{
				background: `radial-gradient(120% 120% at 50% 40%, ${props.bg2}, ${props.bg1} 70%)`,
				fontFamily: FONT,
				color: props.textColor,
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				textAlign: 'center',
				overflow: 'hidden',
				opacity: fadeIn,
			}}
		>
			<div style={{ position: 'relative', width: 240, height: 240, marginBottom: 44 }}>
				<div
					style={{
						position: 'absolute',
						inset: 0,
						borderRadius: '50%',
						border: `5px solid ${props.accent}`,
						boxShadow: `0 0 60px ${props.accent}66, inset 0 0 40px ${props.accent}33`,
						transform: `scale(${0.4 + ringIn * 0.6}) rotate(${ringSpin}deg)`,
						opacity: ringIn,
					}}
				/>
				<div
					style={{
						position: 'absolute',
						inset: 18,
						borderRadius: '50%',
						border: `2px dashed ${props.accent}aa`,
						transform: `scale(${pulse}) rotate(${-ringSpin * 1.4}deg)`,
						opacity: ringIn * 0.8,
					}}
				/>
				<div
					style={{
						position: 'absolute',
						inset: 0,
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						fontSize: 96,
						transform: `scale(${0.4 + ringIn * 0.6})`,
					}}
				>
					{props.emoji || '👋'}
				</div>
			</div>
			<div
				style={{
					fontSize: 110,
					fontWeight: 800,
					letterSpacing: 10,
					transform: `translateY(${(1 - titleIn) * 80}px)`,
					opacity: titleIn,
					textShadow: `0 8px 40px ${props.accent}33`,
				}}
			>
				谢谢观看
			</div>
			<div
				style={{
					marginTop: 34,
					fontSize: 30,
					letterSpacing: 5,
					color: props.textColor + 'aa',
					opacity: bylineIn,
					transform: `translateY(${(1 - bylineIn) * 20}px)`,
				}}
			>
				{props.byline}
			</div>
			<div
				style={{
					position: 'absolute',
					left: 40,
					right: 40,
					bottom: 34,
					display: 'flex',
					justifyContent: 'center',
					fontSize: 15,
					letterSpacing: 3,
					color: props.textColor + '55',
				}}
			>
				<span>RE:REMOTION · DSH</span>
			</div>
		</AbsoluteFill>
	);
};

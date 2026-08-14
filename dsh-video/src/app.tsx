// dsh-video · 客户端入口（被 build.mjs 打包为 DSH client bundle）
// 在会话头部注册「视频」标签页（conversation.view slot）。
import React from 'react';
import { Studio } from './ui/Studio';

type Ctx = {
	effect: (fn: () => unknown, label?: string) => void;
	get: (key: string) => unknown;
};

export function apply(ctx: Ctx) {
	ctx.effect(() => {
		const slots = ctx.get('slots') as
			| {
					inject: (
						name: string,
						fn: () => () => void
					) => () => void;
					register: (
						def: { name: string; id: string; order: number; label: () => string },
						render: () => React.ReactElement
					) => unknown;
			  }
			| undefined;
		let dispose: (() => void) | undefined;
		if (slots !== undefined) {
			dispose = slots.inject('conversation.view', () =>
				slots.register(
					{ name: 'conversation.view', id: 'video', order: 40, label: () => '视频' },
					() => React.createElement(Studio, {})
				)
			);
		}
		return () => {
			if (dispose) {
				try {
					dispose();
				} catch (e) {}
			}
		};
	}, 'dsh-video: 视频标签页');
}

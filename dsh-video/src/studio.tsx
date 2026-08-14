// dsh-video · 独立工作室页入口（/video/studio/，新浏览器标签页全屏使用）
// 与 DSH「视频」标签页共用同一个 Studio 组件；状态经 URL 恢复，改动回传 opener。
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Studio } from './ui/Studio';

const root = document.getElementById('root');
if (root) {
	createRoot(root).render(React.createElement(Studio, { standalone: true }));
}

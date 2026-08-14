// dsh-video · 渲染管线自测（模拟 host index.js 的调用序列）
import { bundle } from '@remotion/bundler';
import { selectComposition, renderMedia } from '@remotion/renderer';
import { mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const OUT = join(ROOT, 'output');
mkdirSync(OUT, { recursive: true });

const props = {
  title: '用 Remotion 做视频',
  subtitle: '所见即所得 · DSH 插件',
  byline: '测试渲染',
  emoji: '🎬',
  bg1: '#0f0c29',
  bg2: '#302b63',
  accent: '#ffd166',
  textColor: '#ffffff',
};

const serveUrl = await bundle({ entryPoint: join(ROOT, 'remotion/src/index.ts'), outDir: join(ROOT, '.bundle') });
console.log('BUNDLED:', serveUrl);

// 1) Title 5s @30fps，720p
{
  const id = 'Title-5s-30fps';
  const comp = await selectComposition({ serveUrl, id, inputProps: props });
  console.log('COMP', id, comp.width + 'x' + comp.height, comp.fps + 'fps', comp.durationInFrames + 'frames');
  const out = join(OUT, 'test-title-720.mp4');
  await renderMedia({
    composition: { ...comp, width: 1280, height: 720 },
    serveUrl, codec: 'h264', outputLocation: out, inputProps: props, overwrite: true,
    onProgress: (p) => console.log('  title progress', Math.round((p.progress || 0) * 100) + '%'),
  });
  console.log('TITLE OK:', out);
}

// 2) End 10s @24fps，1080p（验证分辨率覆盖 + 不同 fps）
{
  const id = 'End-10s-24fps';
  const comp = await selectComposition({ serveUrl, id, inputProps: props });
  console.log('COMP', id, comp.width + 'x' + comp.height, comp.fps + 'fps', comp.durationInFrames + 'frames');
  const out = join(OUT, 'test-end-1080.mp4');
  await renderMedia({
    composition: { ...comp, width: 1920, height: 1080 },
    serveUrl, codec: 'h264', outputLocation: out, inputProps: props, overwrite: true,
    onProgress: (p) => console.log('  end progress', Math.round((p.progress || 0) * 100) + '%'),
  });
  console.log('END OK:', out);
}

console.log('ALL RENDER TESTS PASSED');

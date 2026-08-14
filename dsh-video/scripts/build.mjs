// dsh-video · 构建脚本
// 产出两个 bundle：
//   1. client.js        → DSH 客户端插件 bundle（react 系走 seed，外置）
//   2. studio/studio.js → 独立工作室页（react 全内联，自包含）
// 用法：node scripts/build.mjs
import { build } from 'esbuild';
import { readFile, rm, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const DIR = dirname(fileURLToPath(import.meta.url)); // scripts/
const ROOT = join(DIR, '..');

// CSS 副作用导入 → 注入 <style>（@remotion/player 等若引入样式文件时保证可用）
const cssInjectPlugin = {
	name: 'css-inject',
	setup(b) {
		b.onLoad({ filter: /\.css$/ }, async (args) => {
			const css = await readFile(args.path, 'utf8');
			const esc = css.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$\{/g, '\\${');
			return {
				contents:
					`(()=>{if(typeof document==="undefined")return;` +
					`const s=document.createElement("style");s.textContent=\`${esc}\`;` +
					`document.head.appendChild(s)})();`,
				loader: 'js',
			};
		});
	},
};

const EXTERNALS = ['react', 'react-dom', 'react-dom/client', 'react/jsx-runtime'];

const tmpOut = join(ROOT, '.tmp-client.cjs');
try {
	// 1) DSH client bundle：先打 CJS，再包进 __ModuleLoader__.load factory
	await build({
		entryPoints: [join(ROOT, 'src/app.tsx')],
		bundle: true,
		format: 'cjs',
		platform: 'browser',
		outfile: tmpOut,
		external: EXTERNALS,
		jsx: 'automatic',
		define: { 'process.env.NODE_ENV': '"production"' },
		plugins: [cssInjectPlugin],
		logLevel: 'warning',
	});
	const body = await readFile(tmpOut, 'utf8');
	const wrapped =
		`window.__ModuleLoader__.load({\n` +
		`\tid: "dsh-video",\n` +
		`\tfactory: (require) => {\n` +
		`\t\tvar module = { exports: {} };\n` +
		`\t\tvar exports = module.exports;\n` +
		`\t\tObject.defineProperty(exports, Symbol.toStringTag, { value: "Module" });\n` +
		body +
		`\n\t\treturn module.exports;\n` +
		`\t}\n` +
		`});\n`;
	await writeFile(join(ROOT, 'client.js'), wrapped);
	await rm(tmpOut, { force: true });

	// 2) 独立工作室页：全内联
	await build({
		entryPoints: [join(ROOT, 'src/studio.tsx')],
		bundle: true,
		format: 'iife',
		platform: 'browser',
		outfile: join(ROOT, 'studio/studio.js'),
		jsx: 'automatic',
		define: { 'process.env.NODE_ENV': '"production"' },
		plugins: [cssInjectPlugin],
		logLevel: 'warning',
	});

	console.log('✓ client.js（DSH 标签页）与 studio/studio.js（独立页）构建完成');
} catch (e) {
	console.error('构建失败:', e);
	process.exitCode = 1;
}

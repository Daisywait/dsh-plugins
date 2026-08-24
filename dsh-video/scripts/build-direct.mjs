// dsh-video · 构建脚本（沙箱版）
// 与 build.mjs 产出一致（client.js + studio/studio.js），但直接调用 esbuild 原生
// 二进制（spawnSync stdio:'inherit'），避免 esbuild JS 服务的命名管道（沙箱 EPERM）。
// 用法：node scripts/build-direct.mjs
import { spawnSync } from 'node:child_process';
import { readdirSync, existsSync, readFileSync, writeFileSync, rmSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');

function findEsbuildExe() {
	const pnpm = join(ROOT, 'node_modules', '.pnpm');
	if (existsSync(pnpm)) {
		for (const d of readdirSync(pnpm)) {
			if (d.startsWith('@esbuild+win32')) {
				const p = join(pnpm, d, 'node_modules', '@esbuild', 'win32-x64', 'esbuild.exe');
				if (existsSync(p)) return p;
			}
		}
	}
	const fallback = join(ROOT, 'node_modules', '@esbuild', 'win32-x64', 'esbuild.exe');
	if (existsSync(fallback)) return fallback;
	throw new Error('未找到 esbuild.exe（node_modules 未安装？）');
}

const exe = findEsbuildExe();
const run = (args) => {
	const r = spawnSync(exe, args, { stdio: 'inherit', cwd: ROOT });
	if (r.status !== 0) process.exit(r.status ?? 1);
};

const DEFINE = 'process.env.NODE_ENV="production"';

// 1) DSH client bundle：先打 CJS，再包进 __ModuleLoader__.load factory
const tmp = join(ROOT, '.tmp-client.cjs');
run([
	join(ROOT, 'src', 'app.tsx'),
	'--bundle',
	'--format=cjs',
	'--platform=browser',
	`--outfile=${tmp}`,
	'--external:react',
	'--external:react-dom',
	'--external:react-dom/client',
	'--external:react/jsx-runtime',
	'--jsx=automatic',
	'--loader:.jpg=dataurl',
	`--define:${DEFINE}`,
	'--log-level=warning',
]);
const body = readFileSync(tmp, 'utf8');
const wrapped =
	'window.__ModuleLoader__.load({\n' +
	'\tid: "dsh-video",\n' +
	'\tfactory: (require) => {\n' +
	'\t\tvar module = { exports: {} };\n' +
	'\t\tvar exports = module.exports;\n' +
	'\t\tObject.defineProperty(exports, Symbol.toStringTag, { value: "Module" });\n' +
	body +
	'\n\t\treturn module.exports;\n' +
	'\t}\n' +
	'});\n';
writeFileSync(join(ROOT, 'client.js'), wrapped);
rmSync(tmp, { force: true });

// 2) 独立工作室页：全内联
run([
	join(ROOT, 'src', 'studio.tsx'),
	'--bundle',
	'--format=iife',
	'--platform=browser',
	`--outfile=${join(ROOT, 'studio', 'studio.js')}`,
	'--jsx=automatic',
	'--loader:.jpg=dataurl',
	`--define:${DEFINE}`,
	'--log-level=warning',
]);

console.log('✓ client.js（DSH 标签页）与 studio/studio.js（独立页）构建完成');

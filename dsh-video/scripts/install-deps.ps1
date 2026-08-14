# dsh-video 依赖安装 + 构建
# 作用：在插件目录安装 Remotion 渲染栈（@remotion/bundler、@remotion/renderer、
#       @remotion/player、remotion、esbuild），并构建客户端 bundle。
# 用法：
#   powershell -ExecutionPolicy Bypass .\scripts\install-deps.ps1        # 安装 + 构建
#   powershell -ExecutionPolicy Bypass .\scripts\install-deps.ps1 -SkipBuild
param([switch]$SkipBuild)
$ErrorActionPreference = 'Stop'
$plugin = Split-Path -Parent $PSScriptRoot   # dsh-video/
Push-Location $plugin
try {
  if (-not (Test-Path (Join-Path $plugin 'package.json'))) {
    Write-Host "未找到 package.json：$plugin" -ForegroundColor Red
    exit 1
  }
  Write-Host '[deps] pnpm install（Remotion 渲染栈，体积较大，请稍候）' -ForegroundColor Green
  # --ignore-scripts：esbuild/remotion 的二进制均以平台包随附，无需 postinstall；
  # 避免 pnpm 11 对构建脚本的审批提示导致退出码非 0。
  pnpm install --no-frozen-lockfile --ignore-scripts 2>&1 | Out-Null
  if ($LASTEXITCODE -ne 0) { Write-Host 'pnpm install 失败' -ForegroundColor Red; exit 1 }
  if (-not $SkipBuild) {
    Write-Host '[build] 构建 client.js / studio.js' -ForegroundColor Green
    node scripts/build.mjs
    if ($LASTEXITCODE -ne 0) { Write-Host '构建失败' -ForegroundColor Red; exit 1 }
  }
  Write-Host '完成：dsh-video 依赖与产物就绪。重启 DSH 后即可在会话头部看到「视频」标签页。' -ForegroundColor Cyan
} finally { Pop-Location }

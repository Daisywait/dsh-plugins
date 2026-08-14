# dsh-plugins 引导安装脚本（官方 pnpm 方式）
# 用法：
#   powershell -ExecutionPolicy Bypass .\install.ps1               # 安装仓库里全部插件
#   powershell -ExecutionPolicy Bypass .\install.ps1 dsh-repo-sync # 只装一个
# 远程一键（无需克隆）：
#   powershell -Command "irm https://raw.githubusercontent.com/Daisywait/dsh-plugins/master/install-remote.ps1 | iex"
# 作用：用 pnpm add link: 按官方方式把插件装进 DSH web profile（记录进 package.json），
# 并自动把注册行写入 cordis.patch.yml（幂等）。完成后重启 DSH 生效。

param(
  [string[]]$Names = @()
)

$ErrorActionPreference = 'Stop'
$repo = Split-Path -Parent $MyInvocation.MyCommand.Path
$profile = Join-Path $env:USERPROFILE '.dsh\profiles\web'
$nodeModules = Join-Path $profile 'node_modules'
$yml = Join-Path $profile 'cordis.patch.yml'

if (-not (Test-Path $profile)) {
  Write-Host "未找到 DSH web profile：$profile" -ForegroundColor Red
  exit 1
}
New-Item -ItemType Directory -Path $nodeModules -Force | Out-Null
if (-not (Test-Path $yml)) { [System.IO.File]::WriteAllText($yml, '# dsh profile patch layer`n[]', (New-Object System.Text.UTF8Encoding($false))) }

if ($Names.Count -eq 0) {
  $Names = Get-ChildItem $repo -Directory |
    Where-Object { Test-Path (Join-Path $_.FullName 'package.json') } |
    ForEach-Object { $_.Name }
}

foreach ($n in $Names) {
  $src = Join-Path $repo $n
  if (-not (Test-Path (Join-Path $src 'package.json'))) {
    Write-Host "跳过 $n（不是插件包）" -ForegroundColor DarkGray
    continue
  }
  $target = Join-Path $nodeModules $n
  if (Test-Path $target) { Remove-Item $target -Recurse -Force }
  Write-Host "[安装] $n（pnpm add link:...）" -ForegroundColor Green
  pnpm --dir $profile add "link:$($src -replace '\\','/')" 2>&1 | Out-Null
  if ($LASTEXITCODE -ne 0) {
    Write-Host "    pnpm 安装失败，退出码 $LASTEXITCODE" -ForegroundColor Red
    continue
  }
  Write-Host "    pnpm 安装成功" -ForegroundColor Green
  $depsScript = Join-Path $src 'scripts\install-deps.ps1'
  if (Test-Path $depsScript) {
    Write-Host "    插件带依赖脚本，安装依赖并构建（$depsScript）" -ForegroundColor Yellow
    powershell -NoProfile -ExecutionPolicy Bypass -File $depsScript
    if ($LASTEXITCODE -ne 0) {
      Write-Host "    依赖安装失败（退出码 $LASTEXITCODE），请手动运行该脚本" -ForegroundColor Red
    }
  }
  $content = [System.IO.File]::ReadAllText($yml)
  if ($content -match "name: '$n'") {
    Write-Host "    注册行已存在，跳过" -ForegroundColor DarkGray
  } else {
    $row = "    - id: $n`n      name: '$n'"
    if ($content -match '- insert:') {
      $content = $content -replace '- insert:', "- insert:`n$row"
    } else {
      $content = $content.TrimEnd() + "`n- insert:`n$row`n"
    }
    [System.IO.File]::WriteAllText($yml, $content, (New-Object System.Text.UTF8Encoding($false)))
    Write-Host "    已写入注册行 cordis.patch.yml" -ForegroundColor Green
  }
}

Write-Host ''
Write-Host '完成。请重启 DSH 使插件生效；之后用「仓库」标签页管理插件。' -ForegroundColor Cyan

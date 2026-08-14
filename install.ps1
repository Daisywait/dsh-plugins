# dsh-plugins 引导安装脚本
# 用法：
#   powershell -ExecutionPolicy Bypass .\install.ps1              # 安装仓库里全部插件
#   powershell -ExecutionPolicy Bypass .\install.ps1 dsh-repo-sync # 只装一个
#   powershell -ExecutionPolicy Bypass .\install.ps1 dsh-repo-sync -Copy  # 复制模式（默认链接）
#
# 作用：为每个插件创建 junction 链接（或复制）到 DSH profile 的 node_modules，
# 并自动把注册行写入 cordis.patch.yml（幂等）。完成后重启 DSH 生效。
# 之后日常安装/卸载交给「仓库」标签页的插件管理器。

param(
  [string[]]$Names = @(),
  [switch]$Copy
)

$ErrorActionPreference = 'Stop'
$repo = Split-Path -Parent $MyInvocation.MyCommand.Path
$profileRoot = Join-Path $env:USERPROFILE '.dsh\profiles\web'
$nodeModules = Join-Path $profileRoot 'node_modules'
$yml = Join-Path $profileRoot 'cordis.patch.yml'

if (-not (Test-Path $profileRoot)) {
  Write-Host "未找到 DSH web profile：$profileRoot" -ForegroundColor Red
  exit 1
}
New-Item -ItemType Directory -Path $nodeModules -Force | Out-Null

if ($Names.Count -eq 0) {
  $Names = Get-ChildItem $repo -Directory |
    Where-Object { Test-Path (Join-Path $_.FullName 'package.json') } |
    ForEach-Object { $_.Name }
}

$utf8NoBom = New-Object System.Text.UTF8Encoding($false)
$ymlContent = ''
if (Test-Path $yml) { $ymlContent = [System.IO.File]::ReadAllText($yml) }
$ymlDirty = $false

foreach ($n in $Names) {
  $src = Join-Path $repo $n
  if (-not (Test-Path (Join-Path $src 'package.json'))) {
    Write-Host "跳过 $n（仓库里没有该插件包）" -ForegroundColor DarkGray
    continue
  }
  $target = Join-Path $nodeModules $n
  if (Test-Path $target) { Remove-Item $target -Recurse -Force }
  if ($Copy) {
    Copy-Item $src $target -Recurse -Force
    Write-Host "[已安装] $n（复制模式）" -ForegroundColor Green
  } else {
    New-Item -ItemType Junction -Path $target -Target $src | Out-Null
    Write-Host "[已安装] $n（链接模式 → $src）" -ForegroundColor Green
  }
  if ($ymlContent -match "name: '$n'") {
    Write-Host "        注册行已存在，跳过" -ForegroundColor DarkGray
  } else {
    $row = "    - id: $n`n      name: '$n'"
    if ($ymlContent -match '- insert:') {
      $ymlContent = $ymlContent -replace '- insert:', "- insert:`n$row"
    } else {
      $ymlContent = $ymlContent.TrimEnd() + "`n- insert:`n$row`n"
    }
    $ymlDirty = $true
    Write-Host "        已写入注册行 cordis.patch.yml" -ForegroundColor Green
  }
}

if ($ymlDirty) {
  [System.IO.File]::WriteAllText($yml, $ymlContent, $utf8NoBom)
}

Write-Host ''
Write-Host '完成。请重启 DSH 使插件生效；之后用「仓库」标签页管理插件。' -ForegroundColor Cyan

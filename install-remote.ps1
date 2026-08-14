# dsh-plugins one-line remote bootstrap (ASCII only, safe under any encoding)
# Usage:
#   powershell -Command "irm https://raw.githubusercontent.com/Daisywait/dsh-plugins/master/install-remote.ps1 | iex"
# This fetches the plugin sources into a managed local copy (~/.dsh/plugins-src),
# then runs the real installer (junction links + cordis.patch.yml registration).
# Re-running updates the managed copy via git pull.

$ErrorActionPreference = 'Stop'
$managed = Join-Path $env:USERPROFILE '.dsh\plugins-src'

if (-not (Test-Path (Join-Path $managed '.git'))) {
  git clone --depth 1 https://github.com/Daisywait/dsh-plugins.git $managed
} else {
  git -C $managed pull --ff-only 2>$null | Out-Null
}

$installer = Join-Path $managed 'install.ps1'
if (-not (Test-Path $installer)) {
  Write-Host 'bootstrap: install.ps1 not found in managed copy' -ForegroundColor Red
  exit 1
}

& $installer @args

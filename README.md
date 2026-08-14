# dsh-plugins · 我的 DSH 插件仓库

持续开发的 DeepSeek Harness (DSH) Web 插件源码仓库。每个插件一个文件夹；配合内置的「插件管理器」（`dsh-repo-sync`）可一键安装/卸载/提交，安装采用 **junction 符号链接**模式——源码即本仓库，改代码刷新即生效，无需复制。

远端：`https://github.com/Daisywait/dsh-plugins`（公开）

## 结构

```
dsh-plugins/
├── dsh-skin-shiguangdailiren/   # 《时光代理人》皮肤：壁纸 + 暖粉毛玻璃主题 + GenUI 网页质感
├── dsh-repo-sync/               # 插件管理器：「仓库」标签页，一键安装/卸载/提交
└── README.md
```

## 快速开始（一条命令，无需克隆）

在 PowerShell 里运行：

```powershell
powershell -Command "irm https://raw.githubusercontent.com/Daisywait/dsh-plugins/master/install-remote.ps1 | iex"
```

脚本自动：拉取插件源码到托管目录 `~\.dsh\plugins-src\`（git clone，重跑自动 pull 更新）→ 为每个插件创建 junction 链接到 `~/.dsh/profiles/web/node_modules/` → 写入 `cordis.patch.yml` 注册行（幂等）。完成后**重启 DSH**。

之后打开会话头部「仓库」标签页（插件管理器），所有插件的安装/卸载/提交都在这里。

> **本机开发建议**：如果你自己有本地克隆（如 `D:\Documents\dsh-plugins`），直接用它跑
> `powershell -ExecutionPolicy Bypass .\install.ps1`，链接会指向本地克隆——改代码刷新即生效。
> 远程一条命令适合新机器/快速引导（会建 `~\.dsh\plugins-src` 托管副本，编辑要在那里改）。

想指定插件或复制模式，远程脚本也透传参数：`... | iex` 后接 `dsh-repo-sync -Copy` 之类（用法与本地 `install.ps1` 相同）。

## 安装插件（管理器一键安装）

1. 打开 DSH 会话头部的「仓库」标签页（插件管理器）。
2. 「仓库可安装」列表里点插件旁的 **安装**：
   - 自动创建 junction 链接 `~/.dsh/profiles/web/node_modules/<name>` → 本仓库 `<name>`
   - 自动写入 `cordis.patch.yml` 注册行（幂等，不会重复）
3. 重启 DSH 生效。

之后改本仓库里的插件源码 → **刷新页面即生效**（链接直达，无需复制）。

## 卸载插件

「仓库」标签 → 已安装插件 → **卸载**：移除链接 + 移除注册行，重启生效。

## 手动安装（备用，不走管理器）

1. 复制插件文件夹到 `C:\Users\<你的用户名>\.dsh\profiles\web\node_modules\`
2. `cordis.patch.yml` 顶层数组加：
   ```yaml
   - insert:
       - id: <注册id>
         name: 'dsh-<name>'
   ```
3. 重启 DSH。

各插件注册 id：`dsh-skin-shiguangdailiren` → `skin-shiguangdailiren`；`dsh-repo-sync` → `repo-sync`。

## 插件清单

| 插件 | 功能 |
|---|---|
| dsh-skin-shiguangdailiren | 时光代理人壁纸 + 毛玻璃主题（明暗双套）；会话头部 🖌 打开右侧栏调节：透明度/水平位置/图片大小/GenUI 浓度/上传壁纸，全部自动保存；GenUI 卡片网页质感样式 |
| dsh-repo-sync | 插件管理器：「仓库」标签页。已安装插件（状态 + 提交/同步 + 卸载）+ 仓库可安装（安装）。安装自动 junction + 注册；提交自动 git add + commit + push |

## 开发流程

1. 在本仓库改插件源码（host 半区 `index.js`、客户端 bundle `client.js`）。
2. 已安装（链接模式）→ 刷新页面即生效；host 改动需重启 DSH。
3. 改完在「仓库」页点 **提交** → git commit + push 到 GitHub（自动）。
4. 新插件：先在仓库建文件夹（package.json 带 `dsh.client: { platform: "web" }` + `exports["./client"]`）→ 「仓库」页点安装。

## 技术要点

- 客户端 bundle 格式：`window.__ModuleLoader__.load({ id, factory })`，由 DSH 的 clientModules 服务按需读取（no-cache，改文件刷新即生效）。
- 插件包声明：`package.json` 里 `dsh.client: { platform: "web" }` + `exports["./client"]` 指向 bundle 文件；`exports["./package.json"]` 也需导出。
- Host 半区用 `node:child_process` 执行 git（web profile 未挂载 shell/subprocess 服务，不要用 `ctx.get('shell')`）。
- 安装用 junction 链接（`fs.symlinkSync(..., 'junction')`），Node/浏览器按普通目录解析。
- 客户端与 Host 通信：Host 注册 `webServer` HTTP 路由（如 `/repo-sync/plugins`），客户端用 `fetch` 轮询/调用；不要用动态插件的 `harness.handle`/`host.call`（常驻插件没有这两个内置）。

## 贡献者

- Daisywait（仓库作者，方向与使用）
- deepseek-v4-flash（AI 开发助手：皮肤插件、插件管理器、引导脚本与文档的实现）

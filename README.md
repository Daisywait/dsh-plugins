# dsh-plugins · 我的 DSH 插件仓库

持续开发的 DeepSeek Harness (DSH) Web 插件源码仓库。每个插件一个文件夹，采用**官方 bundle 型插件格式**（`dsh.bundle.patch` + 插件自带 `cordis.patch.yml`），用官方入口 `dsh plugin --profile web add link:...` 安装：pnpm 装好后自动对账进 `dsh.profile.bundles` 层栈，无需手写注册行。配合内置的「插件管理器」（`dsh-repo-sync`）可一键安装/卸载/提交。源码即本仓库，改代码刷新即生效。

远端：`https://github.com/Daisywait/dsh-plugins`（公开）

## 结构

```
dsh-plugins/
├── dsh-skin-link-click/         # Link Click（时光代理人）皮肤：壁纸 + 暖粉毛玻璃 + 右侧栏调节面板（独立插件）
├── dsh-repo-sync/               # 插件管理器：「插件管理」标签页，一键安装/卸载/提交
├── dsh-quote/                   # 消息「引用」：选中文本引用（开发中，暂未收录到远端）
├── dsh-video/                   # 视频工作室：Remotion 实时预览 + 参数交互 + 渲染 MP4（新「视频」标签页）
├── dsh-board/                   # 会话看板：会话头部「🗂 状态」打标（待办/待测试/完成）→「看板」标签页三列拖拽
├── dsh-session-log/             # 会话归档：像关 GitHub Issue 一样结束会话，AI 生成结构化总结存档（新「归档」标签页）
├── skills/
│   └── dsh-plugins-development/ # 插件开发规范 skill（SKILL.md）：包格式 / host-client / 槽位 / 工具注册 / 安装生效 / 坑
└── README.md
```

> **开发规范 skill**：仓库里的 `skills/dsh-plugins-development/SKILL.md` 是插件开发规范的权威版本。新机器上把它复制（或 junction）到 `~\.agents\skills\dsh-plugins-development\` 即可让 agent 在会话里自动加载（新会话生效）。

## 快速开始（一条命令，无需克隆）

在 PowerShell 里运行：

```powershell
powershell -Command "irm https://raw.githubusercontent.com/Daisywait/dsh-plugins/master/install-remote.ps1 | iex"
```

脚本自动：拉取插件源码到托管目录 `~\.dsh\plugins-src\`（git clone，重跑自动 pull 更新）→ 用官方入口 `dsh plugin --profile web add link:...` 安装（pnpm add + 自动对账 `dsh.profile.bundles` 层栈；每个插件自带的 `cordis.patch.yml` 作为一层 bundle 在启动时叠加）。完成后**重启 DSH**。

之后打开会话头部「插件管理」标签页（插件管理器），所有插件的安装/卸载/提交都在这里。

> **本机开发建议**：如果你自己有本地克隆（如 `D:\Documents\dsh-plugins`），直接用它跑
> `powershell -ExecutionPolicy Bypass .\install.ps1`，链接会指向本地克隆——改代码刷新即生效。
> 远程一条命令适合新机器/快速引导（会建 `~\.dsh\plugins-src` 托管副本，编辑要在那里改）。

想指定插件或复制模式，远程脚本也透传参数：`... | iex` 后接 `dsh-repo-sync -Copy` 之类（用法与本地 `install.ps1` 相同）。

## 安装插件（管理器一键安装）

1. 打开 DSH 会话头部的「插件管理」标签页（插件管理器）。
2. 「可安装插件」列表里点插件旁的 **安装**：
   - 走官方入口 `dsh plugin --profile web add link:<仓库目录>`（等价 pnpm add）
   - 自动对账进 `dsh.profile.bundles` 层栈；插件自带的 `cordis.patch.yml` 作为 bundle 层叠加，无需写注册行
3. 重启 DSH 生效。

之后改本仓库里的插件源码 → **刷新页面即生效**（链接直达，无需复制）。

## 卸载插件

「插件管理」标签 → 已安装插件 → **卸载**（等价 `dsh plugin --profile web remove <名字>`，自动移出 bundles 层栈），重启生效：

```powershell
dsh plugin --profile web remove dsh-video
```

## 手动安装（备用，不走管理器）

1. 复制插件文件夹到 `C:\Users\<你的用户名>\.dsh\profiles\web\node_modules\`
2. `cordis.patch.yml` 顶层数组加（手动安装不会触发官方对账，注册行写在 profile 注册表，等价 bundle 层）：
   ```yaml
   - insert:
       - id: <注册id>
         name: 'dsh-<name>'
   ```
3. 重启 DSH。

各插件注册 id：`dsh-skin-link-click` → `skin-link-click`；`dsh-repo-sync` → `repo-sync`；`dsh-video` → `dsh-video`（注意：dsh-video 手动安装后还要运行它的 `scripts/install-deps.ps1` 装渲染依赖）。这些行同时也存在于各插件自带的 `cordis.patch.yml` 里——手动安装时只需任选一处生效即可。

## 插件清单

| 插件 | 功能 |
|---|---|
| dsh-skin-link-click | Link Click（时光代理人）皮肤：壁纸 + 暖粉毛玻璃主题（明暗双套）；会话头部 🖌 打开右侧栏调节：透明度/水平位置/图片大小/GenUI 浓度/上传壁纸，全部自动保存 |
| dsh-repo-sync | 插件管理器：「插件管理」标签页（已安装 / 社区插件 两个 tab）。已安装插件（状态 + 提交/同步 + 卸载）+ 可安装插件（安装，官方 dsh plugin 方式）+ **社区插件**（Obsidian 风格：从 npm registry 聚合公开 DSH 插件，搜索 + 一键安装）。提交自动 git add + commit + push |
| dsh-quote | 消息引用：助手消息操作区 ⤴ 按钮，把该消息文本带进输入框（方便引用上下文） |
| dsh-video | 视频工作室：会话头部「视频」标签页。Remotion 实时预览（标题卡/结束卡两种合成，可改文字、配色、Emoji、时长/帧率），一键渲染 H.264 MP4（720p/1080p），「全屏预览」在新浏览器标签页打开交互工作室。**智能体可直接调用 `video_render` / `video_job_status` 工具生成视频** |
| dsh-board | 会话看板：会话头部「🗂 状态」给会话打标（📌待办 / 🧪待测试 / ✅完成），「看板」标签页三列卡片可拖拽改状态、加备注，点卡片直达会话 |
| dsh-session-log | 会话归档：像关闭 GitHub Issue 一样结束会话。输入框上方「🏁 会话收尾」按钮（或直接对 AI 说「结束这个会话并总结」）→ AI 调用 `session_close` 生成结构化总结（目标/做了什么/解决了什么问题/产出/遗留事项/标签）存档到 `~\.dsh\session-log\`（index.json + 每条一份 Markdown），「归档」标签页可搜索浏览、重开/再关闭、复制总结、跳回原会话；侧栏底部「🏁 已归档」折叠分组直达条目；`session_log_list` 工具供后续会话回顾历史成果。会话关联：收尾按钮显式传 sessionId，多会话同开时按最近事件时间兜底推断 |

## 开发流程

1. 在本仓库改插件源码（host 半区 `index.js`、客户端 bundle `client.js`）。
2. 已安装（链接模式）→ 刷新页面即生效；host 改动需重启 DSH。
3. 改完在「插件管理」页点 **提交** → git commit + push 到 GitHub（自动）。
4. 新插件：先在仓库建文件夹（package.json 带 `dsh.bundle.patch` + `dsh.client: { platform: "web" }` + 自带 `cordis.patch.yml` + `exports["./client"]`）→ 「插件管理」页点安装。

### dsh-video 的依赖与构建（其余插件无此步骤）

dsh-video 的 host 渲染栈（`@remotion/bundler`、`@remotion/renderer`）装在**插件自己的目录**（链接安装不共享 profile 的 node_modules）：

- 首次安装：仓库「插件管理」页点安装会自动运行 `scripts/install-deps.ps1`（`pnpm install --ignore-scripts` + `node scripts/build.mjs`）；或用 `install.ps1` 一并处理。
- 手动：`cd dsh-video && powershell -ExecutionPolicy Bypass .\scripts\install-deps.ps1`
- 改客户端源码（`src/`、`remotion/src/`）后重跑 `node scripts/build.mjs` 重建 `client.js` / `studio/studio.js`，刷新页面生效。
- `node_modules/`、`output/`、`.bundle/` 均已 gitignore。

### 让智能体生成视频（模型工具）

dsh-video 在 host 端通过 `ctx.tools` 注册两个模型可调用工具（无需额外配置，重启 DSH 后模型自动可见）：

- **`video_render`**：渲染一段视频。参数：`kind`（Title/End）、`seconds`（5/10/15/20）、`fps`（24/30/60）、`width`/`height`、以及全部文案与配色（title/subtitle/byline/emoji/bg1/bg2/accent/textColor），`wait` 默认 true 等待完成并返回 `outputUrl` 成品地址；false 则立即返回 jobId。
- **`video_job_status`**：按 `jobId` 查询进度与结果（适合 `wait:false` 后轮询）。

用法示例（对模型说）：*「用 video_render 生成一个 10 秒 1080p 的标题卡视频，标题『你好，世界』，紫色渐变背景，等渲染完把链接给我」*。渲染结果同时出现在「视频」标签页的「最近渲染」列表里，可重播/下载。工具注册失败会把原因写进 `/video/status` 的 `lastError`，不影响标签页使用。

## 技术要点

- 客户端 bundle 格式：`window.__ModuleLoader__.load({ id, factory })`，由 DSH 的 clientModules 服务按需读取（no-cache，改文件刷新即生效）。
- 插件包声明（官方 bundle 型）：`package.json` 里 `dsh.bundle: { patch: "./cordis.patch.yml" }` + `dsh.client: { platform: "web" }`；`exports` 需导出 `./client`、`./cordis.patch.yml`、`./package.json`。安装走 `dsh plugin --profile web add link:<目录>`（官方入口，内部 = pnpm add + 对账），成功后自动把包名写进 profile package.json 的 `dsh.profile.bundles`，启动时该 bundle 的 `cordis.patch.yml` 作为一层叠加；`dsh plugin --profile web remove <名字>` 卸载并自动移出层栈。
- Host 半区用 `node:child_process` 执行 git / dsh CLI（web profile 未挂载 shell/subprocess 服务，不要用 `ctx.get('shell')`）。
- 安装链接由 pnpm `link:` 创建（junction，Node/浏览器按普通目录解析）。
- 客户端与 Host 通信：Host 注册 `webServer` HTTP 路由（如 `/repo-sync/plugins`），客户端用 `fetch` 轮询/调用；不要用动态插件的 `harness.handle`/`host.call`（常驻插件没有这两个内置）。
- 常驻插件给模型加工具：`ctx.inject(['tools'], (toolsCtx) => toolsCtx.tools.register({ name, description, parameters, output: { schema, render }, execute }))` —— 直接注册 raw `ToolDefinition` 对象即可（`defineTool` 只是 TS 辅助），插件目录解析不到 `@deepseek-ai/*` 平台包，不要 import 它们。

## 贡献者

- Daisywait（仓库作者，方向与使用）
- DeepSeek（deepseek-ai）：AI 开发助手，实现皮肤插件、插件管理器、引导脚本与文档

> 本仓库的插件与脚本由 DeepSeek 持续迭代维护；历史提交均署名 DeepSeek（deepseek-ai）。

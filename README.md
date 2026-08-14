# dsh-plugins · 我的 DSH 插件仓库

持续开发的 DeepSeek Harness (DSH) Web 插件源码仓库。每个插件一个文件夹，可直接复制到 DSH 的 profile 目录安装。

## 结构

```
dsh-plugins/
├── dsh-skin-shiguangdailiren/   # 《时光代理人》皮肤：壁纸 + 暖粉毛玻璃主题 + 右侧栏调节
├── dsh-repo-sync/               # 插件仓库同步面板：一键把插件推送到本仓库
└── README.md
```

## 安装一个插件到 DSH

1. 把插件文件夹复制到 DSH web profile 的 node_modules：
   ```
   copy /y dsh-<name> C:\Users\<你的用户名>\.dsh\profiles\web\node_modules\dsh-<name>
   ```
   或手动复制 `dsh-<name>` 整个文件夹过去。

2. 编辑 `C:\Users\<你的用户名>\.dsh\profiles\web\cordis.patch.yml`，在顶层数组加一行注册：
   ```yaml
   - insert:
       - id: <插件id>
         name: 'dsh-<name>'
   ```
   各插件的 `id` 见下表。

3. 重启 DSH，刷新页面。

## 插件清单

| 插件 | 注册 id | 功能 |
|---|---|---|
| dsh-skin-shiguangdailiren | `skin-shiguangdailiren` | 时光代理人壁纸 + 毛玻璃主题；会话头部 🖌 打开右侧栏调节（透明度/位置/大小/GenUI 浓度/换壁纸，自动保存） |
| dsh-repo-sync | `repo-sync` | 「仓库」标签页：列出已安装插件，一键复制到本仓库并 git commit + push |

## 开发流程

1. 在本仓库修改插件源码（host 半区 `index.js`、客户端 bundle `client.js`）。
2. 客户端改动：复制到 profile 后**刷新页面即生效**（bundle 路由 no-cache）；host 改动需**重启 DSH**。
3. 用「仓库」标签页一键把插件同步回本仓库（git add + commit + push）。

## 推送到 GitHub（可选）

在 GitHub 建一个空仓库（如 `Daisywait/dsh-plugins`）后：

```
git remote add origin https://github.com/Daisywait/dsh-plugins.git
git push -u origin master
```

## 技术要点

- 客户端 bundle 格式：`window.__ModuleLoader__.load({ id, factory })`，由 DSH 的 clientModules 服务按需读取。
- 插件包声明：`package.json` 里 `dsh.client: { platform: "web" }` + `exports["./client"]` 指向 bundle 文件。
- Host 半区用 `node:child_process` 执行 git（web profile 未挂载 shell/subprocess 服务，不要用 `ctx.get('shell')`）。

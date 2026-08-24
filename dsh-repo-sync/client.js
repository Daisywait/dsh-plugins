window.__ModuleLoader__.load({
	id: "dsh-repo-sync",
	factory: (require) => {
		var module = { exports: {} };
		var exports = module.exports;
		Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
		let react = require("react");

		const CSS =
			".rps-view{height:100%;overflow-y:auto;display:flex;justify-content:center;padding:28px 20px;box-sizing:border-box}" +
			".rps-view-inner{width:100%;max-width:620px;display:flex;flex-direction:column;gap:4px}" +
			".rps-title-lg{font-size:18px;font-weight:600;color:var(--dsw-alias-label-primary);margin-bottom:2px}" +
			".rps-path{font-size:11px;color:var(--dsw-alias-label-secondary);font-family:var(--ds-font-family-code,monospace);margin-bottom:4px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}" +
			".rps-section{margin-top:16px;padding:6px 0 2px;font-size:11px;font-weight:600;letter-spacing:.06em;color:var(--dsw-alias-label-secondary);border-bottom:1px solid var(--dsw-alias-border-l1)}" +
			".rps-plug{display:flex;align-items:center;gap:8px;padding:8px 2px;border-bottom:1px solid var(--dsw-alias-border-l1);font-size:12px}" +
			".rps-plug-name{flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--dsw-alias-label-primary);font-family:var(--ds-font-family-code,monospace);font-size:11px}" +
			".rps-plug-state{flex:none;font-size:11px}" +
			".rps-plug-state[data-st=ok]{color:var(--dsw-alias-state-success-primary)}" +
			".rps-plug-state[data-st=dirty]{color:var(--dsw-alias-state-warn-primary)}" +
			".rps-plug-state[data-st=none]{color:var(--dsw-alias-label-secondary)}" +
			".rps-plug-state[data-st=link]{color:var(--dsw-alias-state-business-primary)}" +
			".rps-plug-btn{border:1px solid var(--dsw-alias-border-l2);background:var(--dsw-alias-bg-layer-2);color:var(--dsw-alias-label-primary);border-radius:6px;padding:4px 12px;font-size:12px;cursor:pointer;flex:none}" +
			".rps-plug-btn:hover:not(:disabled){background:var(--dsw-alias-interactive-bg-hover)}" +
			".rps-plug-btn:disabled{opacity:.45;cursor:default}" +
			".rps-plug-btn[data-tone=danger]{color:var(--dsw-alias-state-error-primary)}" +
			".rps-plug-btn[data-tone=accent]{color:var(--dsw-alias-state-business-primary);font-weight:600}" +
			".rps-ver{flex:none;font-size:10px;color:var(--dsw-alias-label-secondary);background:var(--dsw-alias-bg-layer-2);border:1px solid var(--dsw-alias-border-l1);border-radius:999px;padding:1px 8px;font-family:var(--ds-font-family-code,monospace);white-space:nowrap}" +
			".rps-ver[data-update=true]{color:var(--dsw-alias-state-warn-primary);border-color:color-mix(in srgb,var(--dsw-alias-state-warn-primary) 40%,transparent);background:color-mix(in srgb,var(--dsw-alias-state-warn-primary) 10%,transparent)}" +
			".rps-msg{margin-top:10px;font-size:12px;line-height:18px;color:var(--dsw-alias-label-secondary);white-space:pre-wrap;word-break:break-all}" +
			".rps-err{margin-top:10px;font-size:12px;color:var(--dsw-alias-state-error-primary);white-space:pre-wrap;word-break:break-all}" +
			".rps-hint{font-size:11px;line-height:16px;color:var(--dsw-alias-label-secondary);margin-top:8px}" +
			".rps-tabbar{display:flex;gap:6px;margin:10px 0 2px;border-bottom:1px solid var(--dsw-alias-border-l1);padding-bottom:6px}" +
			".rps-tab{border:1px solid transparent;background:none;color:var(--dsw-alias-label-secondary);border-radius:8px;padding:5px 14px;font-size:12px;cursor:pointer}" +
			".rps-tab:hover{background:var(--dsw-alias-interactive-bg-hover);color:var(--dsw-alias-label-primary)}" +
			".rps-tab[data-on]{border-color:var(--dsw-alias-border-l2);background:var(--dsw-alias-bg-layer-2);color:var(--dsw-alias-label-primary);font-weight:600}" +
			".rps-search-row{display:flex;gap:8px;margin-top:10px}" +
			".rps-search{flex:1;min-width:0;border:1px solid var(--dsw-alias-border-l2);background:var(--dsw-alias-bg-layer-1);color:var(--dsw-alias-label-primary);border-radius:8px;padding:6px 10px;font-size:12px;outline:none}" +
			".rps-search:focus{border-color:var(--dsw-alias-brand-primary)}" +
			".rps-ccol-wrap{align-items:flex-start}" +
			".rps-ccol{flex:1;min-width:0;display:flex;flex-direction:column;gap:2px}" +
			".rps-ccol-desc{font-size:11px;line-height:15px;color:var(--dsw-alias-label-secondary);overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}" +
			".rps-click{cursor:pointer}" +
			".rps-click:hover .rps-plug-name{color:var(--dsw-alias-brand-primary)}" +
			".rps-detail-head{display:flex;gap:8px;margin:10px 0 8px}" +
			".rps-detail-head-split{justify-content:space-between}" +
			".rps-detail-head-right{display:flex;gap:8px;align-items:center}" +
			".rps-detail-desc{-webkit-line-clamp:unset;margin:4px 0 8px}" +
			".rps-detail-meta{display:flex;flex-wrap:wrap;gap:6px;margin:6px 0 2px}" +
			".rps-meta-chip{font-size:11px;color:var(--dsw-alias-label-secondary);border:1px solid var(--dsw-alias-border-l1);background:var(--dsw-alias-bg-layer-1);border-radius:999px;padding:2px 10px}" +
			".rps-kind{flex:none;font-size:10px;font-weight:600;border-radius:6px;padding:1px 7px;white-space:nowrap}" +
			".rps-kind[data-kind=self]{color:var(--dsw-alias-state-business-primary);border:1px solid color-mix(in srgb,var(--dsw-alias-state-business-primary) 40%,transparent);background:color-mix(in srgb,var(--dsw-alias-state-business-primary) 10%,transparent)}" +
			".rps-kind[data-kind=community]{color:var(--dsw-alias-label-secondary);border:1px solid var(--dsw-alias-border-l2);background:var(--dsw-alias-bg-layer-2)}" +
			".rps-meta-link{color:var(--dsw-alias-brand-primary);text-decoration:none}" +
			".rps-meta-link:hover{text-decoration:underline}" +
			".rps-kw-row{display:flex;flex-wrap:wrap;gap:6px;margin:8px 0 2px}" +
			".rps-kw{font-size:10px;color:var(--dsw-alias-label-secondary);border:1px dashed var(--dsw-alias-border-l2);border-radius:6px;padding:1px 8px;font-family:var(--ds-font-family-code,monospace)}" +
			".rps-readme{margin-top:6px;font-size:11px;line-height:17px;color:var(--dsw-alias-label-primary);white-space:pre-wrap;word-break:break-word;font-family:var(--ds-font-family-ui,system-ui,sans-serif);max-height:480px;overflow-y:auto;background:var(--dsw-alias-bg-layer-1);border:1px solid var(--dsw-alias-border-l1);border-radius:10px;padding:12px}" +
			".rps-md{margin-top:6px;max-height:480px;overflow-y:auto;background:var(--dsw-alias-bg-layer-1);border:1px solid var(--dsw-alias-border-l1);border-radius:10px;padding:12px 14px;font-size:12px;line-height:19px;color:var(--dsw-alias-label-primary);word-break:break-word}" +
			".rps-md h1{font-size:17px;margin:10px 0 6px;color:var(--dsw-alias-label-primary)}" +
			".rps-md h2{font-size:15px;margin:10px 0 5px;color:var(--dsw-alias-label-primary)}" +
			".rps-md h3{font-size:13px;margin:9px 0 4px;color:var(--dsw-alias-label-primary)}" +
			".rps-md h4,.rps-md h5,.rps-md h6{font-size:12px;margin:8px 0 3px;color:var(--dsw-alias-label-primary)}" +
			".rps-md p{margin:5px 0}" +
			".rps-md ul,.rps-md ol{margin:5px 0;padding-left:20px}" +
			".rps-md li{margin:2px 0}" +
			".rps-md a{color:var(--dsw-alias-brand-primary);text-decoration:none}" +
			".rps-md a:hover{text-decoration:underline}" +
			".rps-md code{font-family:var(--ds-font-family-code,monospace);font-size:11px;background:var(--dsw-alias-bg-layer-2);border:1px solid var(--dsw-alias-border-l1);border-radius:4px;padding:0 4px}" +
			".rps-md-pre{background:var(--dsw-alias-bg-base);border:1px solid var(--dsw-alias-border-l1);border-radius:8px;padding:8px 10px;margin:6px 0;overflow-x:auto}" +
			".rps-md-pre code{background:none;border:none;padding:0;display:block;white-space:pre;font-size:11px;line-height:16px}" +
			".rps-md blockquote{border-left:3px solid var(--dsw-alias-border-l2);margin:6px 0;padding:2px 10px;color:var(--dsw-alias-label-secondary)}" +
			".rps-md hr{border:none;border-top:1px solid var(--dsw-alias-border-l1);margin:8px 0}" +
			".rps-md-img{max-width:100%;border-radius:8px;margin:4px 0}" +
			".rps-card-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(230px,1fr));gap:10px;margin-top:10px}" +
			".rps-card{display:flex;flex-direction:column;gap:8px;border:1px solid var(--dsw-alias-border-l1);background:var(--dsw-alias-bg-layer-1);border-radius:12px;padding:12px;cursor:pointer;transition:transform .12s ease,box-shadow .12s ease,border-color .12s ease;min-height:118px}" +
			".rps-card:hover{transform:translateY(-2px);box-shadow:0 6px 18px -6px rgba(0,0,0,.25);border-color:var(--dsw-alias-border-l2)}" +
			".rps-card-head{display:flex;align-items:center;gap:8px;min-width:0}" +
			".rps-card-icon{font-size:20px;flex:none;width:34px;height:34px;display:grid;place-items:center;background:var(--dsw-alias-bg-layer-2);border-radius:9px;border:1px solid var(--dsw-alias-border-l1)}" +
			".rps-card-name{flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-family:var(--ds-font-family-code,monospace);font-size:12px;font-weight:600;color:var(--dsw-alias-label-primary)}" +
			".rps-card-ver{flex:none;font-size:10px;color:var(--dsw-alias-label-secondary);background:var(--dsw-alias-bg-layer-2);border-radius:999px;padding:1px 8px;font-family:var(--ds-font-family-code,monospace)}" +
			".rps-card-stars{flex:none;font-size:10px;color:#e3b341;background:color-mix(in srgb,#e3b341 12%,transparent);border:1px solid color-mix(in srgb,#e3b341 30%,transparent);border-radius:999px;padding:1px 8px;font-family:var(--ds-font-family-code,monospace);white-space:nowrap}" +
			".rps-card-src{flex:none;font-size:9px;font-weight:700;color:var(--dsw-alias-label-secondary);background:var(--dsw-alias-bg-layer-2);border:1px solid var(--dsw-alias-border-l2);border-radius:4px;padding:0 5px;letter-spacing:.04em}" +
			".rps-card-desc{flex:1;font-size:11px;line-height:16px;color:var(--dsw-alias-label-secondary);overflow:hidden;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;word-break:break-word}" +
			".rps-card-foot{display:flex;align-items:center;justify-content:space-between;gap:8px}" +
			".rps-card-install{padding:4px 14px}" +
			".rps-card-more{font-size:10px;color:var(--dsw-alias-label-secondary);opacity:.8}" +
			".rps-detail-install{padding:6px 22px;font-weight:600}" +
			".rps-detail-hero{display:flex;align-items:center;gap:12px;margin:12px 0 8px}" +
			".rps-detail-icon{font-size:34px;width:60px;height:60px;display:grid;place-items:center;background:var(--dsw-alias-bg-layer-2);border:1px solid var(--dsw-alias-border-l1);border-radius:14px;flex:none}" +
			".rps-detail-titles{flex:1;min-width:0}" +
			".rps-detail-name{font-size:18px;font-weight:700;color:var(--dsw-alias-label-primary);font-family:var(--ds-font-family-code,monospace);word-break:break-all;line-height:1.3}" +
			".rps-detail-badges{display:flex;gap:6px;margin-top:6px;flex-wrap:wrap}" +
			".rps-detail-desc{font-size:12px;line-height:18px;color:var(--dsw-alias-label-secondary);margin:0 0 8px}" +
			".rps-install-card{margin:10px 0;border:1px solid var(--dsw-alias-border-l2);background:var(--dsw-alias-bg-base);border-radius:10px;padding:10px 12px}" +
			".rps-install-label{font-size:10px;font-weight:700;letter-spacing:.08em;color:var(--dsw-alias-label-secondary);margin-bottom:6px}" +
			".rps-install-cmd{display:block;font-family:var(--ds-font-family-code,monospace);font-size:11px;color:var(--dsw-alias-brand-primary);white-space:pre-wrap;word-break:break-all}" +
			".rps-gallery{display:grid;grid-template-columns:repeat(auto-fill,minmax(190px,1fr));gap:8px;margin:6px 0 4px}" +
			".rps-gallery-item{border:1px solid var(--dsw-alias-border-l1);border-radius:10px;overflow:hidden;background:var(--dsw-alias-bg-layer-1);display:block;transition:border-color .12s ease}" +
			".rps-gallery-item:hover{border-color:var(--dsw-alias-border-l2)}" +
			".rps-gallery-item img{width:100%;height:130px;object-fit:cover;display:block}" +
			".rps-md-table{width:100%;border-collapse:collapse;margin:6px 0;font-size:11px}" +
			".rps-md-table th{background:var(--dsw-alias-bg-layer-2);font-weight:600;text-align:left;padding:6px 9px;border:1px solid var(--dsw-alias-border-l1)}" +
			".rps-md-table td{padding:5px 9px;border:1px solid var(--dsw-alias-border-l1);color:var(--dsw-alias-label-secondary)}" +
			".rps-md-table tbody tr:hover{background:var(--dsw-alias-bg-layer-1)}" +
			".rps-features{display:grid;grid-template-columns:repeat(auto-fill,minmax(210px,1fr));gap:8px;margin:6px 0 4px}" +
			".rps-feature{display:flex;align-items:flex-start;gap:8px;border:1px solid var(--dsw-alias-border-l1);background:var(--dsw-alias-bg-layer-1);border-radius:10px;padding:8px 10px;font-size:11px;line-height:16px}" +
			".rps-feature-icon{flex:none;font-size:14px;line-height:16px}" +
			".rps-feature-text{color:var(--dsw-alias-label-primary);word-break:break-word}" +
			".rps-summary{font-size:12px;line-height:20px;color:var(--dsw-alias-label-primary);background:var(--dsw-alias-bg-layer-1);border:1px solid var(--dsw-alias-border-l1);border-radius:10px;padding:12px 14px;margin:6px 0}" +
			".rps-readme-link{margin:8px 0 2px;font-size:11px}" +
			".rps-title-row{display:flex;align-items:center;justify-content:space-between;gap:8px}" +
			".rps-lang-btn{border:1px solid var(--dsw-alias-border-l2);background:var(--dsw-alias-bg-layer-2);color:var(--dsw-alias-label-primary);border-radius:7px;padding:3px 12px;font-size:11px;cursor:pointer;flex:none}" +
			".rps-lang-btn:hover{background:var(--dsw-alias-interactive-bg-hover)}" +
			".rps-section-box{border:1px solid var(--dsw-alias-border-l1);border-radius:10px;margin:6px 0;overflow:hidden;background:var(--dsw-alias-bg-layer-1)}" +
			".rps-section-box summary{cursor:pointer;padding:9px 12px;font-size:12px;font-weight:600;color:var(--dsw-alias-label-primary);list-style:none;display:flex;align-items:center;gap:6px}" +
			".rps-section-box summary::before{content:'▸';color:var(--dsw-alias-label-secondary);font-size:10px;transition:transform .15s ease}" +
			".rps-section-box[open] summary::before{transform:rotate(90deg)}" +
			".rps-section-box summary:hover{background:var(--dsw-alias-interactive-bg-hover)}" +
			".rps-section-body{padding:2px 12px 10px;border-top:1px solid var(--dsw-alias-border-l1)}";

		function apply(ctx) {

			/* 中英双语：语言 store + 字典 + t()。 */
			const LANG_KEY = "rps-lang";
			const DICT = {
				zh: {
					tabLocal: "已安装",
					tabCommunity: "社区插件",
					searchPlaceholder: "搜索公开 DSH 插件（名称 / 描述）…",
					search: "搜索",
					sectionCommunity: "社区插件（npm + GitHub）",
					loadingCommunity: "正在加载社区插件…",
					noMatch: "没有匹配的插件",
					install: "安装",
					more: "详情 →",
					installed: "已安装插件",
					available: "可安装插件",
					noInstalled: "暂无已安装插件",
					noAvailable: "插件仓库里没有新的插件",
					linkedMode: "链接模式",
					notInRepo: "未入库",
					changed: "有改动",
					synced: "已同步",
					commit: "提交",
					sync: "同步",
					push: "推送",
					pushing: "推送中…",
					pushedOk: "✓ 已推送 {name} 到远端",
					pushFail: "✗ 推送失败",
					update: "更新",
					updating: "更新中…",
					updateTo: "更新 v{ver}",
					upToDate: "已最新",
					updatedOk: "✓ 已更新 {name}，重启 DSH 生效",
					updateFail: "✗ 更新失败",
					selfTag: "自制",
					communityTag: "社区",
					sectionSelf: "自制插件（推送）",
					sectionCommunity: "社区插件（更新）",
					linkedAuto: "链接模式",
					repoVer: "仓库 v{ver}",
					noUpdate: "已是最新",
					uninstall: "卸载",
					back: "← 返回",
					features: "✨ 功能亮点",
					screenshots: "截图预览",
					intro: "简介",
					moreSections: "更多内容",
					fullReadme: "查看完整 README ↗",
					loading: "加载中…",
					installing: "安装 {name}…",
					installedOk: "✓ 已安装 {name}，重启 DSH 生效",
					installFail: "✗ 安装失败",
					requestFail: "请求失败（插件未运行？）",
					requestErr: "请求异常",
					noIntro: "（该插件没有简介）",
					noReadme: "（该插件没有 README）",
					hintCommunity: "点击插件查看介绍；数据来自 npm 与 GitHub topic:dsh-plugin，安装走官方 dsh plugin，装完重启 DSH 生效。",
					title: "插件管理",
					repoPath: "插件仓库: ",
					hintLocal: "自制插件「推送」到远端 GitHub；社区插件「更新」到作者最新版。装/卸后重启 DSH 生效。",
					langZh: "中文",
					langEn: "EN",
					ghOnly: "GitHub 仓库插件",
				},
				en: {
					tabLocal: "Installed",
					tabCommunity: "Community",
					searchPlaceholder: "Search public DSH plugins (name / description)…",
					search: "Search",
					sectionCommunity: "Community Plugins (npm + GitHub)",
					loadingCommunity: "Loading community plugins…",
					noMatch: "No matching plugins",
					install: "Install",
					more: "Details →",
					installed: "Installed Plugins",
					available: "Installable",
					noInstalled: "No plugins installed",
					noAvailable: "No new plugins in the repository",
					linkedMode: "linked",
					notInRepo: "not in repo",
					changed: "modified",
					synced: "synced",
					commit: "Commit",
					sync: "Sync",
					push: "Push",
					pushing: "Pushing…",
					pushedOk: "✓ Pushed {name} to remote",
					pushFail: "✗ Push failed",
					update: "Update",
					updating: "Updating…",
					updateTo: "Update to v{ver}",
					upToDate: "up to date",
					updatedOk: "✓ Updated {name}, restart DSH",
					updateFail: "✗ Update failed",
					selfTag: "self",
					communityTag: "community",
					sectionSelf: "Self plugins (Push)",
					sectionCommunity: "Community plugins (Update)",
					linkedAuto: "linked",
					repoVer: "repo v{ver}",
					noUpdate: "up to date",
					uninstall: "Uninstall",
					back: "← Back",
					features: "✨ Highlights",
					screenshots: "Screenshots",
					intro: "Overview",
					moreSections: "More",
					fullReadme: "View full README ↗",
					loading: "Loading…",
					installing: "Installing {name}…",
					installedOk: "✓ Installed {name}, restart DSH",
					installFail: "✗ Install failed",
					requestFail: "Request failed (plugin not running?)",
					requestErr: "Request error",
					noIntro: "(No overview for this plugin)",
					noReadme: "(No README for this plugin)",
					hintCommunity: "Click a plugin for details; data from npm and GitHub topic:dsh-plugin; install via dsh plugin, then restart DSH.",
					title: "Plugin Manager",
					repoPath: "Plugin repo: ",
					hintLocal: "Push self plugins to the remote GitHub repo; update community plugins to the author's latest. Restart DSH after install/uninstall.",
					langZh: "中文",
					langEn: "EN",
					ghOnly: "GitHub repository plugin",
				},
			};
			let rpsLang = "zh";
			try { rpsLang = localStorage.getItem(LANG_KEY) || "zh"; } catch (e) {}
			if (!DICT[rpsLang]) rpsLang = "zh";
			const langStore = { lang: rpsLang, listeners: new Set() };
			const setLang = (l) => {
				langStore.lang = l;
				try { localStorage.setItem(LANG_KEY, l); } catch (e) {}
				langStore.listeners.forEach((fn) => fn());
			};
			const t = (key, params) => {
				let s = (DICT[langStore.lang] && DICT[langStore.lang][key]) || DICT.zh[key] || key;
				if (params) for (const [n, v] of Object.entries(params)) s = s.replaceAll("{" + n + "}", String(v));
				return s;
			};
			function useLang() {
				const [, force] = react.useState(0);
				react.useEffect(() => {
					langStore.listeners.add(force);
					return () => langStore.listeners.delete(force);
				}, []);
			}
			/* 语言切换按钮（右上角） */
			function LangSwitch() {
				useLang();
				return react.createElement("button", {
					className: "rps-lang-btn",
					title: langStore.lang === "zh" ? "Switch to English" : "切换到中文",
					onClick: () => setLang(langStore.lang === "zh" ? "en" : "zh")
				}, langStore.lang === "zh" ? "EN" : "中文");
			}

			/* 轻量 markdown 渲染（安全）：只用 React 元素输出，不注入 HTML；
			   链接白名单 http(s)/mailto，图片仅 http(s)。支持：标题 / 代码块 /
			   引用 / 无序有序列表 / 分割线 / 段落 / 行内 `code` **粗体** *斜体* [链接] 图片，
			   以及 GitHub README 常见的 HTML（<img> 渲染、<br> 换行、其余标签剥掉）。 */
			function mdInline(text, keyBase) {
				const out = [];
				let rest = String(text);
				let k = keyBase || 0;
				while (rest.length > 0) {
					/* 完整 HTML 标签、残缺标签（缺 > 但属性是 ASCII 字符，不吞中文）、裸 URL */
					const m = /^(<img[^>]*>|<br\s*\/?>|<[a-zA-Z\/][^<>]*>|<[a-zA-Z\/][\w\s"'./:=?&#@+%\-\\]*|https?:\/\/[^\s<>"')]+|`[^`]+`|!\[([^\]]*)\]\(([^)\s]+)\)|\[([^\]]*)\]\(([^)\s]+)\)|\*\*([^*]+)\*\*|\*([^*]+)\*)/.exec(rest);
					if (m) {
						const [full, htmlTag, imgAlt, imgUrl, linkText, linkUrl, bold, em] = m;
						if (htmlTag !== undefined) {
							if (/^<img/i.test(htmlTag)) {
								const srcM = /\bsrc=(["'])(.*?)\1/i.exec(htmlTag);
								const altM = /\balt=(["'])(.*?)\1/i.exec(htmlTag);
								const src = srcM ? srcM[2] : "";
								if (/^https?:/i.test(src)) {
									out.push(react.createElement("img", { key: k++, src, alt: (altM ? altM[2] : "") || "", className: "rps-md-img" }));
								}
							} else if (/^<br/i.test(htmlTag)) {
								out.push("\n");
							} else if (/^https?:/i.test(htmlTag)) {
								/* 裸 URL → 可点击链接 */
								out.push(react.createElement("a", { key: k++, href: htmlTag, target: "_blank", rel: "noreferrer" }, htmlTag));
							} else if (/^`/.test(htmlTag)) {
								out.push(react.createElement("code", { key: k++ }, htmlTag.slice(1, -1)));
							}
							// 其他标签（含残缺）剥掉不显示
							rest = rest.slice(full.length);
						} else if (imgAlt !== undefined && /^https?:/i.test(imgUrl)) {
							out.push(react.createElement("img", { key: k++, src: imgUrl, alt: imgAlt || "", className: "rps-md-img" }));
						} else if (linkText !== undefined && /^(https?:|mailto:)/i.test(linkUrl)) {
							out.push(react.createElement("a", { key: k++, href: linkUrl, target: "_blank", rel: "noreferrer" }, linkText || linkUrl));
						} else if (bold !== undefined) {
							out.push(react.createElement("strong", { key: k++ }, bold));
						} else if (em !== undefined) {
							out.push(react.createElement("em", { key: k++ }, em));
						}
						rest = rest.slice(full.length);
					} else {
						const next = rest.search(/[`!\[\*<\nh]/);
						if (next === 0) { out.push(rest[0]); rest = rest.slice(1); }
						else if (next > 0) { out.push(rest.slice(0, next)); rest = rest.slice(next); }
						else { out.push(rest); rest = ""; }
					}
				}
				return out;
			}

			function MarkdownView(props) {
				const lines = String(props.source || "").split(/\r?\n/);
				const blocks = [];
				let i = 0;
				let k = 0;
				const push = (node) => { if (node !== null) blocks.push(node); };
				while (i < lines.length) {
					const trimmed = lines[i].trim();
					if (trimmed === "") { i++; continue; }
					const fence = /^```(\w*)/.exec(trimmed);
					if (fence) {
						const buf = [];
						i++;
						while (i < lines.length && !/^```/.test(lines[i].trim())) { buf.push(lines[i]); i++; }
						i++;
						push(react.createElement("pre", { key: k++, className: "rps-md-pre" },
							react.createElement("code", { key: 0 }, buf.join("\n"))));
						continue;
					}
					const h = /^(#{1,6})\s+(.*)$/.exec(trimmed);
					if (h) {
						const level = h[1].length;
						push(react.createElement("h" + level, { key: k++, className: "rps-md-h" + level }, ...mdInline(h[2], k * 100)));
						i++;
						continue;
					}
					/* 表格：| a | b | 头 + |---|---| 分隔行 */
					const isSep = (l) => /^\s*\|?[\s:|-]+\|?\s*$/.test(l) && l.includes("-");
					if (/^\s*\|.*\|/.test(lines[i]) && i + 1 < lines.length && isSep(lines[i + 1])) {
						const parseRow = (l) => l.trim().replace(/^\||\|$/g, "").split("|").map((c) => c.trim());
						const header = parseRow(lines[i]);
						i += 2;
						const rows = [];
						while (i < lines.length && /^\s*\|.*\|/.test(lines[i])) { rows.push(parseRow(lines[i])); i++; }
						push(react.createElement("table", { key: k++, className: "rps-md-table" },
							react.createElement("thead", null, react.createElement("tr", null,
								header.map((h2, hi) => react.createElement("th", { key: hi }, ...mdInline(h2, k * 600 + hi))))),
							react.createElement("tbody", null,
								rows.map((r, ri) => react.createElement("tr", { key: ri },
									r.map((c, ci) => react.createElement("td", { key: ci }, ...mdInline(c, k * 700 + ri * 10 + ci))))))
						));
						continue;
					}
					if (/^(-{3,}|\*{3,}|_{3,})$/.test(trimmed)) {
						push(react.createElement("hr", { key: k++ }));
						i++;
						continue;
					}
					if (trimmed.startsWith(">")) {
						const buf = [];
						while (i < lines.length && lines[i].trim().startsWith(">")) {
							buf.push(lines[i].trim().replace(/^>\s?/, ""));
							i++;
						}
						push(react.createElement("blockquote", { key: k++, className: "rps-md-blockquote" }, ...mdInline(buf.join(" "), k * 200)));
						continue;
					}
					if (/^[-*+]\s+/.test(trimmed)) {
						const items = [];
						while (i < lines.length && /^[-*+]\s+/.test(lines[i].trim())) {
							items.push(mdInline(lines[i].trim().replace(/^[-*+]\s+/, ""), k * 300 + items.length));
							i++;
						}
						push(react.createElement("ul", { key: k++, className: "rps-md-ul" },
							items.map((it, idx) => react.createElement("li", { key: idx }, ...it))));
						continue;
					}
					if (/^\d+\.\s+/.test(trimmed)) {
						const items = [];
						while (i < lines.length && /^\d+\.\s+/.test(lines[i].trim())) {
							items.push(mdInline(lines[i].trim().replace(/^\d+\.\s+/, ""), k * 400 + items.length));
							i++;
						}
						push(react.createElement("ol", { key: k++, className: "rps-md-ol" },
							items.map((it, idx) => react.createElement("li", { key: idx }, ...it))));
						continue;
					}
					const buf = [];
					while (i < lines.length && lines[i].trim() !== ""
						&& !/^(#{1,6}\s|```|>|[-*+]\s|\d+\.\s)/.test(lines[i].trim())
						&& !/^(-{3,}|\*{3,}|_{3,})$/.test(lines[i].trim())) {
						buf.push(lines[i].trim());
						i++;
					}
					if (buf.length === 0) { i++; continue; }
					push(react.createElement("p", { key: k++, className: "rps-md-p" }, ...mdInline(buf.join(" "), k * 500)));
				}
				return react.createElement("div", { className: "rps-md" }, ...blocks);
			}

			/* 按包名关键词挑一个 emoji 图标（社区卡片用）。 */
			function pkgEmoji(name) {
				const n = String(name || "").toLowerCase();
				if (n.includes("voice") || n.includes("speech")) return "🎤";
				if (n.includes("vision") || n.includes("gen3d") || n.includes("3d")) return "👁️";
				if (n.includes("memory") || n.includes("recall")) return "🧠";
				if (n.includes("monitor") || n.includes("watch")) return "📊";
				if (n.includes("search")) return "🔍";
				if (n.includes("bot") || n.includes("feishu") || n.includes("telegram") || n.includes("wechat") || n.includes("lark")) return "🤖";
				if (n.includes("token") || n.includes("spend") || n.includes("cost")) return "💰";
				if (n.includes("ssh") || n.includes("remote") || n.includes("proxy") || n.includes("lan")) return "🔌";
				if (n.includes("latex") || n.includes("math")) return "∑";
				if (n.includes("worktree") || n.includes("git")) return "🌿";
				if (n.includes("mcp")) return "🔗";
				if (n.includes("approval") || n.includes("fail") || n.includes("audit")) return "🛡️";
				if (n.includes("session") || n.includes("import")) return "📁";
				if (n.includes("project")) return "📂";
				if (n.includes("jupyter")) return "📓";
				if (n.includes("browser")) return "🌐";
				if (n.includes("tutor") || n.includes("deeptutor")) return "🎓";
				if (n.includes("web-ui") || n.includes("skin") || n.includes("theme")) return "🎨";
				if (n.includes("plugin") || n.includes("manager")) return "🧩";
				return "🧩";
			}

				function CommunityView() {
					const [items, setItems] = react.useState(null);
					const [q, setQ] = react.useState("");
					const [cmsg, setCmsg] = react.useState(null);
					const [cbusy, setCbusy] = react.useState(false);
					const [detail, setDetail] = react.useState(null);
					const [detailLoading, setDetailLoading] = react.useState(false);
					const [contentLang, setContentLang] = react.useState("orig");
					const [contentZh, setContentZh] = react.useState(null);
					const [translating, setTranslating] = react.useState(false);

					const load = react.useCallback(async (query) => {
						setCbusy(true);
						try {
							const url = "/repo-sync/community?q=" + encodeURIComponent(query || "");
							const r = await fetch(url, { cache: "no-store" });
							if (r.ok) {
								const d = await r.json();
								setItems(d.items || []);
								if (d.error) setCmsg(d.error);
							}
						} catch (e) {
							setItems([]);
						}
						setCbusy(false);
					}, []);

					react.useEffect(() => { load(""); }, []);

					async function install(name) {
						setCmsg(t("installing", { name }));
						setCbusy(true);
						try {
							const r = await fetch("/repo-sync/community-install", {
								method: "POST",
								headers: { "content-type": "application/json" },
								body: JSON.stringify({ name }),
								cache: "no-store"
							});
							if (r.ok) {
								const d = await r.json();
								setCmsg((d.ok ? "✓ " : "✗ ") + d.message);
							}
						} catch (e) {
							setCmsg(t("requestErr"));
						}
						setCbusy(false);
					}

					async function openDetail(p) {
						// GitHub 源条目 host 会抓 raw README 返回（source 标记为 github），npm 源返回 npm 元数据 + README
						setDetail({ name: p.name, description: p.description || "", stars: p.stars || 0, source: p.source });
						setDetailLoading(true);
						try {
							const r = await fetch("/repo-sync/community-detail?name=" + encodeURIComponent(p.name), { cache: "no-store" });
							if (r.ok) {
								const d = await r.json();
								if (d.ok) {
									setDetail({ ...d, description: d.description || p.description || "", stars: d.stars || p.stars || 0 });
								} else {
									setDetail({ name: p.name, description: p.description || d.error || "获取详情失败" });
								}
							} else {
								setDetail({ name: p.name, description: p.description || "请求失败" });
							}
						} catch (e) {
							setDetail({ name: p.name, description: p.description || "请求异常" });
						}
						setDetailLoading(false);
					}

					const search = () => load(q.trim());

					/* 内容翻译：界面语言为中文时，自动把描述/简介/功能/分节标题翻成中文（走 host 的 DeepSeek API）。
					   只有一个语言入口（右上角 中/EN）：界面 + 内容联动。 */
					async function doTranslateContent() {
						if (contentZh !== null || translating || detail === null) return;
						const fLen = (detail.features || []).length;
						const texts = [
							detail.description || "",
							detail.summary || "",
							...(detail.features || []),
							...(detail.sections || []).map((s) => s.title),
						];
						setTranslating(true);
						try {
							const r = await fetch("/repo-sync/translate", {
								method: "POST",
								headers: { "content-type": "application/json" },
								body: JSON.stringify({ texts }),
								cache: "no-store"
							});
							if (r.ok) {
								const d = await r.json();
								if (d.ok && Array.isArray(d.results)) {
									const rr = d.results;
									setContentZh({
										description: rr[0] || "",
										summary: rr[1] || "",
										features: rr.slice(2, 2 + fLen),
										sectionTitles: rr.slice(2 + fLen),
									});
									setContentLang("zh");
								}
							}
						} catch (e) { /* 翻译失败保持原文 */ }
						setTranslating(false);
					}

					/* 内容语言跟随界面语言：中文界面 → 自动翻译内容；英文界面 → 原文。 */
					react.useEffect(() => {
						if (detail === null || detailLoading) return;
						if (langStore.lang === "zh") {
							doTranslateContent();
						} else if (contentLang !== "orig") {
							setContentLang("orig");
						}
						// eslint-disable-next-line react-hooks/exhaustive-deps
					}, [detail, detailLoading, langStore.lang]);

					if (detail !== null) {
						useLang();
						const useZh = contentLang === "zh" && contentZh !== null;
						const zhFeat = useZh ? (contentZh.features || []) : [];
						const zhTitles = useZh ? (contentZh.sectionTitles || []) : [];
						return react.createElement("div", null,
							react.createElement("div", { className: "rps-detail-head rps-detail-head-split" },
								react.createElement("button", { className: "rps-plug-btn", onClick: () => { setDetail(null); setCmsg(null); } }, t("back")),
								react.createElement("button", {
									className: "rps-plug-btn rps-detail-install",
									disabled: cbusy,
									onClick: () => install(detail.source === "github" ? "github:" + detail.name : detail.name)
								}, t("install"))
							),
							/* 信息头：图标 + 名称 + 徽标 */
							react.createElement("div", { className: "rps-detail-hero" },
								react.createElement("div", { className: "rps-detail-icon" }, pkgEmoji(detail.name)),
								react.createElement("div", { className: "rps-detail-titles" },
									react.createElement("div", { className: "rps-detail-name" }, detail.name),
									react.createElement("div", { className: "rps-detail-badges" },
										detail.stars ? react.createElement("span", { className: "rps-card-stars" }, "⭐ " + detail.stars) : null,
										detail.version ? react.createElement("span", { className: "rps-card-ver" }, "v" + detail.version) : null,
										detail.source === "github" ? react.createElement("span", { className: "rps-card-src" }, "GitHub") : null
									)
								)
							),
							useZh && contentZh.description ? react.createElement("div", { className: "rps-detail-desc" }, contentZh.description) : (detail.description ? react.createElement("div", { className: "rps-detail-desc" }, detail.description) : null),
							react.createElement("div", { className: "rps-detail-meta" },
								detail.author ? react.createElement("span", { className: "rps-meta-chip" }, "👤 " + detail.author) : null,
								detail.license ? react.createElement("span", { className: "rps-meta-chip" }, "📄 " + detail.license) : null,
								detail.date ? react.createElement("span", { className: "rps-meta-chip" }, "🕐 " + String(detail.date).slice(0, 10)) : null,
								detail.homepage ? react.createElement("a", { className: "rps-meta-chip rps-meta-link", href: detail.homepage, target: "_blank", rel: "noreferrer" }, "🌐 主页") : null,
								detail.repository ? react.createElement("a", {
									className: "rps-meta-chip rps-meta-link",
									href: String(detail.repository).replace(/^git\+/, "").replace(/\.git$/, ""),
									target: "_blank", rel: "noreferrer"
								}, "📦 源码") : null
							),
							cmsg ? react.createElement("div", { className: "rps-msg" }, cmsg) : null,
							/* 安装命令卡 */
							!detailLoading && detail.installCommand
								? react.createElement("div", { className: "rps-install-card" },
									react.createElement("div", { className: "rps-install-label" }, "⚙️ " + t("install")),
									react.createElement("code", { className: "rps-install-cmd" }, detail.installCommand)
								)
								: null,
							/* 功能亮点 */
							!detailLoading && detail.features && detail.features.length > 0
								? react.createElement("div", null,
									react.createElement("div", { className: "rps-section" }, t("features")),
									react.createElement("div", { className: "rps-features" },
										detail.features.map((f, idx) => react.createElement("div", { className: "rps-feature", key: idx },
											react.createElement("span", { className: "rps-feature-icon" }, ["🚀", "⚡", "🧩", "🛠️", "📦", "🔧", "🎨", "🔌"][idx % 8]),
											react.createElement("span", { className: "rps-feature-text" }, useZh && zhFeat[idx] ? zhFeat[idx] : f)
										))
									)
								)
								: null,
							/* 截图画廊 */
							!detailLoading && detail.images && detail.images.length > 0
								? react.createElement("div", null,
									react.createElement("div", { className: "rps-section" }, "📷 " + t("screenshots")),
									react.createElement("div", { className: "rps-gallery" },
										detail.images.map((im, idx) => react.createElement("a", {
											key: idx,
											className: "rps-gallery-item",
											href: im.src,
											target: "_blank",
											rel: "noreferrer",
											title: im.alt || "screenshot"
										},
											react.createElement("img", { src: im.src, alt: im.alt || "screenshot", loading: "lazy" }))
										)
									)
								)
								: null,
							/* 简介（README 开头正文，最多 500 字） */
							react.createElement("div", { className: "rps-section" }, "📝 " + t("intro")),
							detailLoading
								? react.createElement("div", { className: "rps-msg" }, t("loading"))
								: detail.summary
									? react.createElement("div", { className: "rps-summary" }, useZh && contentZh.summary ? contentZh.summary : detail.summary)
									: react.createElement("div", { className: "rps-msg" }, t("noIntro")),
							/* README 分节折叠（信息完整，默认收起不刷屏） */
							!detailLoading && detail.sections && detail.sections.length > 0
								? react.createElement("div", null,
									react.createElement("div", { className: "rps-section" }, "📚 " + t("moreSections")),
									detail.sections.map((s, idx) => react.createElement("details", { className: "rps-section-box", key: idx },
										react.createElement("summary", null, useZh && zhTitles[idx] ? zhTitles[idx] : s.title),
										react.createElement("div", { className: "rps-section-body" },
											react.createElement(MarkdownView, { source: s.content })
										)
									))
								)
								: null,
							!detailLoading && (
								react.createElement("div", { className: "rps-readme-link" },
									react.createElement("a", {
										className: "rps-meta-link",
										href: detail.source === "github"
											? "https://github.com/" + detail.name
											: detail.links || ("https://www.npmjs.com/package/" + detail.name),
										target: "_blank",
										rel: "noreferrer"
									}, t("fullReadme"))
								)
							)
						);
					}

					useLang();
					return react.createElement("div", null,
						react.createElement("div", { className: "rps-search-row" },
							react.createElement("input", {
								className: "rps-search",
								placeholder: t("searchPlaceholder"),
								value: q,
								onChange: (e) => setQ(e.target.value),
								onKeyDown: (e) => { if (e.key === "Enter") search(); }
							}),
							react.createElement("button", { className: "rps-plug-btn", disabled: cbusy, onClick: search }, t("search"))
						),
						react.createElement("div", { className: "rps-section" }, t("sectionCommunity")),
						cmsg ? react.createElement("div", { className: "rps-msg" }, cmsg) : null,
						items === null
							? react.createElement("div", { className: "rps-msg" }, t("loadingCommunity"))
							: items.length === 0
								? react.createElement("div", { className: "rps-msg" }, t("noMatch"))
								: react.createElement("div", { className: "rps-card-grid" },
									items.map((p) => react.createElement("div", {
										className: "rps-card",
										key: p.name,
										role: "button",
										title: t("more"),
										onClick: () => openDetail(p)
									},
										react.createElement("div", { className: "rps-card-head" },
											react.createElement("span", { className: "rps-card-icon" }, pkgEmoji(p.name)),
											react.createElement("span", { className: "rps-card-name" }, p.name),
											p.source === "github" ? react.createElement("span", { className: "rps-card-src" }, "GH") : null,
											p.stars ? react.createElement("span", { className: "rps-card-stars" }, "⭐ " + p.stars) : null,
											p.version ? react.createElement("span", { className: "rps-card-ver" }, p.version) : null
										),
										p.description ? react.createElement("div", { className: "rps-card-desc" }, p.description) : null,
										react.createElement("div", { className: "rps-card-foot" },
											react.createElement("button", {
												className: "rps-plug-btn rps-card-install",
												disabled: cbusy,
												onClick: (e) => { e.stopPropagation(); install(p.source === "github" ? "github:" + p.name : p.name); }
											}, t("install")),
											react.createElement("span", { className: "rps-card-more" }, t("more"))
										)
									))
								),
						react.createElement("div", { className: "rps-hint" }, t("hintCommunity"))
					);
				}

			function RepoView(props) {
				const [data, setData] = react.useState(null);
				const [msg, setMsg] = react.useState(null);
				const [busy, setBusy] = react.useState(false);
				const [tab, setTab] = react.useState("local");

				// 只在「已安装」tab 轮询本地插件状态；社区 tab 下暂停（避免无谓刷新与重渲染）。
				react.useEffect(() => {
					if (tab !== "local") return;
					let alive = true;
					const load = async () => {
						try {
							const r = await fetch("/repo-sync/plugins", { cache: "no-store" });
							if (r.ok && alive) setData(await r.json());
						} catch (e) {}
					};
					load();
					const id = setInterval(load, 3000);
					return () => { alive = false; clearInterval(id); };
				}, [tab]);

				async function act(path, name, doing) {
					setMsg(doing + " " + name + "…");
					setBusy(true);
					try {
						const r = await fetch(path, {
							method: "POST",
							headers: { "content-type": "application/json" },
							body: JSON.stringify({ name }),
							cache: "no-store"
						});
						if (r.ok) {
							const d = await r.json();
							setData(d);
							setMsg((d.ok ? "✓ " : "✗ ") + d.message);
						} else {
							setMsg(t("requestFail"));
						}
					} catch (e) {
						setMsg(t("requestErr"));
					}
					setBusy(false);
				}

				/* 社区插件视图：npm registry 聚合，搜索 + 一键安装（Obsidian 风格） */
				const installed = (data && data.installed) || [];
				const available = (data && data.available) || [];
				useLang();
				return react.createElement("div", { className: "rps-view" },
					react.createElement("div", { className: "rps-view-inner" },
						react.createElement("div", { className: "rps-title-row" },
							react.createElement("div", { className: "rps-title-lg" }, t("title")),
							react.createElement(LangSwitch, {})
						),
						react.createElement("div", { className: "rps-path" }, t("repoPath") + ((data && data.repo) || "D:\\Documents\\dsh-plugins")),
						react.createElement("div", { className: "rps-tabbar" },
							react.createElement("button", { className: "rps-tab", "data-on": tab === "local" ? "1" : undefined, onClick: () => setTab("local") }, t("tabLocal")),
							react.createElement("button", { className: "rps-tab", "data-on": tab === "community" ? "1" : undefined, onClick: () => setTab("community") }, t("tabCommunity"))
						),
						tab === "community"
							? react.createElement(CommunityView, {})
							: react.createElement("div", null,
								react.createElement("div", { className: "rps-section" }, t("sectionSelf")),
								installed.filter((p) => p.kind === "self").length === 0
									? react.createElement("div", { className: "rps-msg" }, t("noInstalled"))
									: react.createElement("div", null,
										installed.filter((p) => p.kind === "self").map((p) => {
											const st = p.linked ? "link" : (!p.inRepo ? "none" : (p.changed ? "dirty" : "ok"));
											const label = p.linked ? t("linkedMode") : (!p.inRepo ? t("notInRepo") : (p.changed ? t("changed") : t("synced")));
											return react.createElement("div", { className: "rps-plug", key: p.name },
												react.createElement("span", { className: "rps-plug-name" }, p.name),
												p.version ? react.createElement("span", { className: "rps-ver" }, "v" + p.version) : null,
												react.createElement("span", { className: "rps-kind", "data-kind": "self" }, t("selfTag")),
												react.createElement("span", { className: "rps-plug-state", "data-st": st }, label),
												react.createElement("button", {
													className: "rps-plug-btn",
													"data-tone": "accent",
													disabled: busy,
													onClick: () => act("/repo-sync/push-plugin", p.name, t("pushing"))
												}, t("push")),
												react.createElement("button", {
													className: "rps-plug-btn",
													"data-tone": "danger",
													disabled: busy,
													onClick: () => act("/repo-sync/uninstall", p.name, t("uninstall"))
												}, t("uninstall"))
											);
										})
									),
								react.createElement("div", { className: "rps-section" }, t("sectionCommunity")),
								installed.filter((p) => p.kind === "community").length === 0
									? react.createElement("div", { className: "rps-msg" }, t("noInstalled"))
									: react.createElement("div", null,
										installed.filter((p) => p.kind === "community").map((p) => {
											const canUpdate = p.update && (p.update.via === "github" || (p.update.to && p.update.to !== "latest" && p.update.to !== p.version));
											const label = canUpdate ? t("updateTo", { ver: p.update.to }) : t("upToDate");
											return react.createElement("div", { className: "rps-plug", key: p.name },
												react.createElement("span", { className: "rps-plug-name" }, p.name),
												p.version ? react.createElement("span", { className: "rps-ver", "data-update": p.update ? "true" : undefined, title: p.update ? (p.update.from + " → " + p.update.to) : t("noUpdate") }, "v" + p.version) : null,
												react.createElement("span", { className: "rps-kind", "data-kind": "community" }, t("communityTag")),
												react.createElement("button", {
													className: "rps-plug-btn",
													"data-tone": canUpdate ? "accent" : undefined,
													disabled: busy || !canUpdate,
													title: p.update ? (p.update.via === "github" ? "github: " + p.update.from + " → latest" : p.update.from + " → " + p.update.to) : "",
													onClick: () => act("/repo-sync/update", p.name, t("updating"))
												}, label),
												react.createElement("button", {
													className: "rps-plug-btn",
													"data-tone": "danger",
													disabled: busy,
													onClick: () => act("/repo-sync/uninstall", p.name, t("uninstall"))
												}, t("uninstall"))
											);
										})
									),
								react.createElement("div", { className: "rps-section" }, t("available")),
								available.length === 0
									? react.createElement("div", { className: "rps-msg" }, t("noAvailable"))
									: react.createElement("div", null,
										available.map((p) => react.createElement("div", { className: "rps-plug", key: p.name },
											react.createElement("span", { className: "rps-plug-name" }, p.name),
											p.version ? react.createElement("span", { className: "rps-ver" }, "v" + p.version) : null,
											react.createElement("button", {
												className: "rps-plug-btn",
												disabled: busy,
												onClick: () => act("/repo-sync/install", p.name, t("install"))
											}, t("install"))
										))
									),
								msg ? react.createElement("div", { className: "rps-msg" }, msg) : null,
								react.createElement("div", { className: "rps-hint" }, t("hintLocal")),
								data && data.lastError ? react.createElement("div", { className: "rps-err" }, data.lastError) : null
							)
					)
				);
			}

			ctx.effect(() => {
				const slots = ctx.get("slots");
				let dView, dStyle;
				if (slots !== undefined) {
					dView = slots.inject("conversation.view", () => slots.register(
						{ name: "conversation.view", id: "repo", order: 30, label: () => "插件管理" },
						(props) => react.createElement(RepoView, {})
					));
					dStyle = slots.inject("shell.overlay", () => slots.register(
						{ name: "shell.overlay", id: "repo-style", order: 5 },
						(props) => react.createElement("style", null, CSS)
					));
				}
				return () => {
					if (dView) { try { dView(); } catch (e) {} }
					if (dStyle) { try { dStyle(); } catch (e) {} }
				};
			}, "repo-sync: view + polling");
		}

		exports.apply = apply;
		return module.exports;
	}
});


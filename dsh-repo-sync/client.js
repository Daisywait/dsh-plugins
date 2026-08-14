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
			".rps-msg{margin-top:10px;font-size:12px;line-height:18px;color:var(--dsw-alias-label-secondary);white-space:pre-wrap;word-break:break-all}" +
			".rps-err{margin-top:10px;font-size:12px;color:var(--dsw-alias-state-error-primary);white-space:pre-wrap;word-break:break-all}" +
			".rps-hint{font-size:11px;line-height:16px;color:var(--dsw-alias-label-secondary);margin-top:8px}";

		function apply(ctx) {
			function RepoView(props) {
				const [data, setData] = react.useState(null);
				const [msg, setMsg] = react.useState(null);
				const [busy, setBusy] = react.useState(false);

				react.useEffect(() => {
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
				}, []);

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
							setMsg("请求失败（插件未运行？）");
						}
					} catch (e) {
						setMsg("请求异常");
					}
					setBusy(false);
				}

				const installed = (data && data.installed) || [];
				const available = (data && data.available) || [];
				return react.createElement("div", { className: "rps-view" },
					react.createElement("div", { className: "rps-view-inner" },
						react.createElement("div", { className: "rps-title-lg" }, "插件管理器"),
						react.createElement("div", { className: "rps-path" }, "仓库: " + ((data && data.repo) || "D:\\Documents\\dsh-plugins")),
						react.createElement("div", { className: "rps-section" }, "已安装插件"),
						installed.length === 0
							? react.createElement("div", { className: "rps-msg" }, "暂无已安装插件")
							: react.createElement("div", null,
								installed.map((p) => {
									const st = p.linked ? "link" : (!p.inRepo ? "none" : (p.changed ? "dirty" : "ok"));
									const label = p.linked ? "链接模式" : (!p.inRepo ? "未入库" : (p.changed ? "有改动" : "已同步"));
									return react.createElement("div", { className: "rps-plug", key: p.name },
										react.createElement("span", { className: "rps-plug-name" }, p.name),
										react.createElement("span", { className: "rps-plug-state", "data-st": st }, label),
										p.linked ? null : react.createElement("button", {
											className: "rps-plug-btn",
											disabled: busy,
											onClick: () => act("/repo-sync/push-plugin", p.name, "同步")
										}, "同步"),
										react.createElement("button", {
											className: "rps-plug-btn",
											"data-tone": "danger",
											disabled: busy,
											onClick: () => act("/repo-sync/uninstall", p.name, "卸载")
										}, "卸载")
									);
								})
							),
						react.createElement("div", { className: "rps-section" }, "仓库可安装"),
						available.length === 0
							? react.createElement("div", { className: "rps-msg" }, "插件仓库里没有新的插件")
							: react.createElement("div", null,
								available.map((p) => react.createElement("div", { className: "rps-plug", key: p.name },
									react.createElement("span", { className: "rps-plug-name" }, p.name),
									react.createElement("button", {
										className: "rps-plug-btn",
										disabled: busy,
										onClick: () => act("/repo-sync/install", p.name, "安装")
									}, "安装")
								))
							),
						msg ? react.createElement("div", { className: "rps-msg" }, msg) : null,
						react.createElement("div", { className: "rps-hint" }, "安装/卸载后重启 DSH 生效；链接模式下改插件源码只需刷新页面。"),
						data && data.lastError ? react.createElement("div", { className: "rps-err" }, data.lastError) : null
					)
				);
			}

			ctx.effect(() => {
				const slots = ctx.get("slots");
				let dView, dStyle;
				if (slots !== undefined) {
					dView = slots.inject("conversation.view", () => slots.register(
						{ name: "conversation.view", id: "repo", order: 30, label: () => "仓库" },
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

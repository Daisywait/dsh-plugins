window.__ModuleLoader__.load({
	id: "dsh-repo-sync",
	factory: (require) => {
		var module = { exports: {} };
		var exports = module.exports;
		Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
		let react = require("react");

		const CSS =
			".rps-view{height:100%;overflow-y:auto;display:flex;justify-content:center;padding:28px 20px;box-sizing:border-box}" +
			".rps-view-inner{width:100%;max-width:600px;display:flex;flex-direction:column;gap:4px}" +
			".rps-title-lg{font-size:18px;font-weight:600;color:var(--dsw-alias-label-primary);margin-bottom:2px}" +
			".rps-path{font-size:11px;color:var(--dsw-alias-label-secondary);font-family:var(--ds-font-family-code,monospace);margin-bottom:10px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}" +
			".rps-status{display:flex;align-items:center;gap:8px;font-size:13px;color:var(--dsw-alias-label-primary);padding:8px 10px;border-radius:8px;background:var(--dsw-alias-bg-layer-1)}" +
			".rps-status[data-busy=true] .rps-dot{animation:rps-pulse 1s infinite}" +
			".rps-dot{width:8px;height:8px;border-radius:50%;background:var(--dsw-alias-state-success-primary);flex:none}" +
			"@keyframes rps-pulse{50%{opacity:.2}}" +
			".rps-rows{margin-top:12px;display:flex;flex-direction:column;gap:4px}" +
			".rps-row{display:flex;justify-content:space-between;font-size:12px;padding:5px 2px;border-bottom:1px solid var(--dsw-alias-border-l1)}" +
			".rps-row-k{color:var(--dsw-alias-label-secondary)}" +
			".rps-row-v{color:var(--dsw-alias-label-primary);font-variant-numeric:tabular-nums}" +
			".rps-actions{display:flex;align-items:center;gap:10px;margin-top:14px}" +
			".rps-btn{border:1px solid var(--dsw-alias-border-l2);background:var(--dsw-alias-bg-layer-2);color:var(--dsw-alias-label-primary);border-radius:8px;padding:6px 14px;font-size:13px;cursor:pointer}" +
			".rps-btn:hover:not(:disabled){background:var(--dsw-alias-interactive-bg-hover)}" +
			".rps-btn:disabled{opacity:.45;cursor:default}" +
			".rps-switch{display:flex;align-items:center;gap:6px;font-size:12px;color:var(--dsw-alias-label-secondary);cursor:pointer;margin-left:auto}" +
			".rps-err{margin-top:10px;font-size:12px;color:var(--dsw-alias-state-error-primary);white-space:pre-wrap;word-break:break-all}" +
			".rps-section{margin-top:16px;padding:6px 0 2px;font-size:11px;font-weight:600;letter-spacing:.06em;color:var(--dsw-alias-label-secondary);border-bottom:1px solid var(--dsw-alias-border-l1)}" +
			".rps-plug{display:flex;align-items:center;gap:8px;padding:7px 2px;border-bottom:1px solid var(--dsw-alias-border-l1);font-size:12px}" +
			".rps-plug-name{flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--dsw-alias-label-primary);font-family:var(--ds-font-family-code,monospace);font-size:11px}" +
			".rps-plug-state{flex:none;font-size:11px}" +
			".rps-plug-state[data-st=ok]{color:var(--dsw-alias-state-success-primary)}" +
			".rps-plug-state[data-st=dirty]{color:var(--dsw-alias-state-warn-primary)}" +
			".rps-plug-state[data-st=none]{color:var(--dsw-alias-label-secondary)}" +
			".rps-plug-btn{border:1px solid var(--dsw-alias-border-l2);background:var(--dsw-alias-bg-layer-2);color:var(--dsw-alias-label-primary);border-radius:6px;padding:3px 10px;font-size:12px;cursor:pointer;flex:none}" +
			".rps-plug-btn:hover:not(:disabled){background:var(--dsw-alias-interactive-bg-hover)}" +
			".rps-plug-btn:disabled{opacity:.45;cursor:default}" +
			".rps-msg{margin-top:8px;font-size:12px;color:var(--dsw-alias-label-secondary);white-space:pre-wrap;word-break:break-all}";

		function apply(ctx) {
			function RepoView(props) {
				const [status, setStatus] = react.useState(null);
				const [plugins, setPlugins] = react.useState([]);
				const [msg, setMsg] = react.useState(null);
				const [busy, setBusy] = react.useState(false);

				react.useEffect(() => {
					let alive = true;
					const load = async () => {
						try {
							const r = await fetch("/repo-sync/status", { cache: "no-store" });
							if (r.ok && alive) setStatus(await r.json());
						} catch (e) {}
						try {
							const r = await fetch("/repo-sync/plugins", { cache: "no-store" });
							if (r.ok && alive) setPlugins((await r.json()).plugins || []);
						} catch (e) {}
					};
					load();
					const id = setInterval(load, 3000);
					return () => { alive = false; clearInterval(id); };
				}, []);

				async function post(path, body) {
					try {
						const r = await fetch(path, {
							method: "POST",
							headers: { "content-type": "application/json" },
							body: body ? JSON.stringify(body) : "{}",
							cache: "no-store"
						});
						if (r.ok) return await r.json();
					} catch (e) {}
					return null;
				}

				async function doSync() {
					setBusy(true);
					const data = await post("/repo-sync/sync");
					if (data && data.updatedAt) setStatus(data);
					setBusy(false);
				}

				async function doPush(name) {
					setMsg("推送 " + name + "…");
					setBusy(true);
					const data = await post("/repo-sync/push-plugin", { name });
					if (data) {
						setMsg((data.ok ? "✓ " : "✗ ") + data.message);
						if (data.plugins) setPlugins(data.plugins);
					} else {
						setMsg("请求失败（插件未运行？）");
					}
					try {
						const r = await fetch("/repo-sync/status", { cache: "no-store" });
						if (r.ok) setStatus(await r.json());
					} catch (e) {}
					setBusy(false);
				}

				const s = status;
				const rows = [];
				if (s && s.ready) {
					rows.push(["分支", s.branch]);
					rows.push(["vs 上游", "领先 " + s.ahead + " / 落后 " + s.behind]);
					rows.push(["未提交改动", s.dirty > 0 ? s.dirty + " 个文件" : "无"]);
					rows.push(["上次同步", s.lastSync ? new Date(s.lastSync).toLocaleTimeString() : "尚未同步"]);
				}
				const statusLine = s
					? (s.syncing ? "同步中…" : (s.lastMessage || s.lastError || (s.ready ? "空闲" : "仓库未就绪")))
					: "连接中…";

				return react.createElement("div", { className: "rps-view" },
					react.createElement("div", { className: "rps-view-inner" },
						react.createElement("div", { className: "rps-title-lg" }, "仓库同步 · deepseek-harness"),
						react.createElement("div", { className: "rps-path" }, "D:\\Documents\\deepseek-harness"),
						react.createElement("div", { className: "rps-status", "data-busy": s && s.syncing ? "true" : undefined },
							react.createElement("span", { className: "rps-dot" }),
							statusLine
						),
						rows.length > 0 ? react.createElement("div", { className: "rps-rows" },
							rows.map((r) => react.createElement("div", { className: "rps-row", key: r[0] },
								react.createElement("span", { className: "rps-row-k" }, r[0]),
								react.createElement("span", { className: "rps-row-v" }, r[1])
							))
						) : null,
						s && !s.ready ? react.createElement("button", { className: "rps-btn", disabled: busy, onClick: () => doSync() }, "初始化仓库") : null,
						react.createElement("div", { className: "rps-actions" },
							react.createElement("button", {
								className: "rps-btn",
								disabled: !s || !s.ready || s.syncing || busy,
								onClick: () => doSync()
							}, "立即同步"),
							react.createElement("label", { className: "rps-switch" },
								react.createElement("input", {
									type: "checkbox",
									checked: !s || s.auto,
									disabled: !s,
									onChange: async (e) => {
										const data = await post("/repo-sync/set-auto", { auto: e.target.checked });
										if (data && data.updatedAt) setStatus(data);
									}
								}),
								react.createElement("span", null, "自动同步")
							)
						),
						react.createElement("div", { className: "rps-section" }, "插件推送 → 仓库 plugins/"),
						plugins.length === 0
							? react.createElement("div", { className: "rps-msg" }, "未发现已安装的插件（package.json 带 dsh.client 声明）")
							: react.createElement("div", null,
								plugins.map((p) => {
									const st = !p.inRepo ? "none" : (p.changed ? "dirty" : "ok");
									const label = !p.inRepo ? "未推送" : (p.changed ? "有改动" : "已同步");
									return react.createElement("div", { className: "rps-plug", key: p.name },
										react.createElement("span", { className: "rps-plug-name" }, p.name),
										react.createElement("span", { className: "rps-plug-state", "data-st": st }, label),
										react.createElement("button", {
											className: "rps-plug-btn",
											disabled: !s || !s.ready || busy,
											onClick: () => doPush(p.name)
										}, "推送")
									);
								})
							),
						msg ? react.createElement("div", { className: "rps-msg" }, msg) : null,
						s && s.lastError ? react.createElement("div", { className: "rps-err" }, s.lastError) : null
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

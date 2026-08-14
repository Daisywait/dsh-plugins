window.__ModuleLoader__.load({
	id: "dsh-skin-shiguangdailiren",
	factory: (require) => {
		var module = { exports: {} };
		var exports = module.exports;
		Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
		let react = require("react");

		const WALLPAPER_KEY = "dsh-skin-shiguangdailiren:wallpaper";
		const STATE_KEY = "dsh-skin-shiguangdailiren:state";
		const DEFAULTS = { bg: 35, layer1: 74, sidebar: 35, pos: 50, zoom: 100, genui: 65 };

		/* 全局样式（壁纸 + 控制组件），由常驻 overlay 样式载体注入，任何视图下都生效 */
		const SKIN_CSS =
			"html, body {" +
			"  background-color: #33292B;" +
			"  background-image: radial-gradient(ellipse at center, rgba(0,0,0,0) 55%, rgba(20,12,14,0.30) 100%), var(--skn-bg-image, url('/skin/640.png'));" +
			"  background-size: cover, auto var(--skn-zoom, 100%);" +
			"  background-position: center, var(--skn-pos-x, 50%) center;" +
			"  background-repeat: no-repeat, no-repeat;" +
			"}" +
			"[data-genui]{background:color-mix(in srgb, var(--dsw-alias-bg-overlay) var(--skn-genui-tint, 65%), transparent);border-radius:12px}" +
			".skn-hbtn{width:28px;height:28px;border:none;background:none;border-radius:8px;color:var(--dsw-alias-label-secondary);cursor:pointer;display:grid;place-items:center;font-size:14px}" +
			".skn-hbtn:hover{background:var(--dsw-alias-interactive-bg-hover);color:var(--dsw-alias-label-primary)}" +
			".skn-details{height:100%;overflow-y:auto;box-sizing:border-box;padding:16px;display:flex;flex-direction:column}" +
			".skn-details-head{display:flex;justify-content:space-between;align-items:center;margin-bottom:2px}" +
			".skn-title-lg{font-size:16px;font-weight:600;color:var(--dsw-alias-label-primary)}" +
			".skn-close{width:28px;height:28px;border:none;background:none;border-radius:999px;color:var(--dsw-alias-label-secondary);cursor:pointer;display:grid;place-items:center;font-size:13px}" +
			".skn-close:hover{background:var(--dsw-alias-interactive-bg-hover)}" +
			".skn-desc{font-size:12px;line-height:18px;color:var(--dsw-alias-label-secondary);margin:2px 0 8px}" +
			".skn-section{margin-top:14px;padding:6px 0 2px;font-size:11px;font-weight:600;letter-spacing:.06em;color:var(--dsw-alias-label-secondary);border-bottom:1px solid var(--dsw-alias-border-l1)}" +
			".skn-row{padding:8px 0;border-bottom:1px solid var(--dsw-alias-border-l1)}" +
			".skn-row-head{display:flex;justify-content:space-between;align-items:baseline;margin-bottom:6px}" +
			".skn-row-label{font-size:13px;color:var(--dsw-alias-label-primary)}" +
			".skn-row-value{font-size:12px;color:var(--dsw-alias-brand-primary);font-variant-numeric:tabular-nums}" +
			".skn-row-hint{font-size:11px;line-height:16px;color:var(--dsw-alias-label-secondary);margin-top:4px}" +
			".skn-range{width:100%;accent-color:var(--dsw-alias-brand-primary)}" +
			".skn-file-row{display:flex;align-items:center;gap:8px;padding:10px 0 2px}" +
			".skn-file-label{display:inline-flex;align-items:center;border:1px solid var(--dsw-alias-border-l2);background:var(--dsw-alias-bg-layer-2);color:var(--dsw-alias-label-primary);border-radius:8px;padding:6px 14px;font-size:13px;cursor:pointer}" +
			".skn-file-label:hover{background:var(--dsw-alias-interactive-bg-hover)}" +
			".skn-file{display:none}" +
			".skn-mini{border:1px solid var(--dsw-alias-border-l2);background:none;color:var(--dsw-alias-label-secondary);border-radius:8px;padding:6px 12px;font-size:12px;cursor:pointer}" +
			".skn-mini:hover{background:var(--dsw-alias-interactive-bg-hover);color:var(--dsw-alias-label-primary)}" +
			".skn-reset{margin-top:12px;align-self:flex-start;border:1px solid var(--dsw-alias-border-l2);background:var(--dsw-alias-bg-layer-2);color:var(--dsw-alias-label-primary);border-radius:8px;padding:6px 14px;font-size:13px;cursor:pointer}" +
			".skn-reset:hover{background:var(--dsw-alias-interactive-bg-hover)}" +
			".V1MMBW_block{--dsl-g-radius-surface:14px;--dsl-g-radius-control:9px;--dsl-g-accent:var(--dsw-alias-brand-primary);--dsl-g-tint:7%;--dsl-g-tint-strong:14%;margin:10px 0}" +
			".V1MMBW_banner{letter-spacing:.03em;font-weight:600}" +
			".V1MMBW_card{background:color-mix(in srgb,var(--dsw-alias-bg-layer-1) 86%,transparent);box-shadow:0 1px 2px rgba(0,0,0,.05),0 10px 28px -14px rgba(0,0,0,.25)}" +
			".V1MMBW_cardTitle{letter-spacing:.05em;text-transform:uppercase;font-size:11px}" +
			".V1MMBW_text.V1MMBW_h1{letter-spacing:-.03em}" +
			".V1MMBW_button{border-radius:var(--dsl-g-radius-control);transition:transform .08s ease,box-shadow .18s ease,background .18s ease}" +
			".V1MMBW_button:not(:disabled):hover{transform:translateY(-1px)}" +
			".V1MMBW_button.V1MMBW_primary{box-shadow:0 2px 10px -3px color-mix(in srgb,var(--dsl-g-accent) 50%,transparent)}" +
			".V1MMBW_badge{border-radius:999px;padding:2px 10px;font-weight:600}" +
			".V1MMBW_stat{border:1px solid var(--dsl-g-border);border-radius:12px;padding:10px 12px;background:color-mix(in srgb,var(--dsw-alias-bg-layer-1) 55%,transparent)}" +
			".V1MMBW_track{border-radius:999px;background:color-mix(in srgb,var(--dsw-alias-label-tertiary) 16%,transparent)}" +
			".V1MMBW_fill{border-radius:999px;background:linear-gradient(90deg,var(--dsl-g-accent),color-mix(in srgb,var(--dsl-g-accent) 60%,#fff))}" +
			".V1MMBW_li{padding:4px 8px;border-radius:8px}" +
			".V1MMBW_li:hover{background:color-mix(in srgb,var(--dsw-alias-label-tertiary) 6%,transparent)}" +
			".V1MMBW_tableWrap{border:1px solid var(--dsl-g-border);border-radius:12px;overflow:hidden}" +
			".V1MMBW_table th{background:color-mix(in srgb,var(--dsw-alias-label-tertiary) 8%,transparent);font-weight:600;text-align:left}" +
			".V1MMBW_table td,.V1MMBW_table th{padding:7px 10px}" +
			".V1MMBW_table tbody tr:hover{background:color-mix(in srgb,var(--dsw-alias-label-tertiary) 5%,transparent)}" +
			".V1MMBW_callout{border-radius:12px;border:1px solid transparent;position:relative}" +
			".V1MMBW_calloutInfo{border-left:3px solid var(--dsw-alias-state-business-primary);background:color-mix(in srgb,var(--dsw-alias-state-business-primary) 8%,transparent)}" +
			".V1MMBW_calloutSuccess{border-left:3px solid var(--dsw-alias-state-success-primary);background:color-mix(in srgb,var(--dsw-alias-state-success-primary) 8%,transparent)}" +
			".V1MMBW_calloutWarning{border-left:3px solid var(--dsw-alias-state-warn-primary);background:color-mix(in srgb,var(--dsw-alias-state-warn-primary) 8%,transparent)}" +
			".V1MMBW_calloutError{border-left:3px solid var(--dsw-alias-state-error-primary);background:color-mix(in srgb,var(--dsw-alias-state-error-primary) 8%,transparent)}" +
			".V1MMBW_tabBar{border-bottom:1px solid var(--dsl-g-border);gap:2px}" +
			".V1MMBW_tab{border-radius:8px 8px 0 0;padding:6px 12px}" +
			".V1MMBW_tab.V1MMBW_tabActive{background:color-mix(in srgb,var(--dsl-g-accent) 12%,transparent);color:var(--dsl-g-accent)}" +
			".V1MMBW_input,.V1MMBW_select,.V1MMBW_textarea{border-radius:var(--dsl-g-radius-control);transition:border-color .15s ease,box-shadow .15s ease}" +
			".V1MMBW_input:focus,.V1MMBW_select:focus,.V1MMBW_textarea:focus{outline:2px solid color-mix(in srgb,var(--dsl-g-accent) 35%,transparent);outline-offset:1px;border-color:var(--dsl-g-accent)}" +
			".V1MMBW_barFill{border-radius:6px 6px 2px 2px;background:linear-gradient(180deg,var(--dsl-g-accent),color-mix(in srgb,var(--dsl-g-accent) 60%,transparent))}" +
			".V1MMBW_stepMarker{border:2px solid color-mix(in srgb,var(--dsl-g-accent) 35%,transparent);background:var(--dsw-alias-bg-base)}" +
			".V1MMBW_stepActive .V1MMBW_stepMarker{background:var(--dsl-g-accent);color:#fff}" +
			".V1MMBW_tlDot{border:2px solid color-mix(in srgb,var(--dsl-g-accent) 35%,transparent);background:var(--dsl-g-accent)}" +
			".V1MMBW_accordion .V1MMBW_accItem{border:1px solid var(--dsl-g-border);border-radius:10px;margin-bottom:6px;overflow:hidden}" +
			".V1MMBW_accHead{padding:9px 12px}" +
			".V1MMBW_copyChip{border-radius:var(--dsl-g-radius-control)}" +
			".V1MMBW_quizOpt{border-radius:var(--dsl-g-radius-control)}" +
			".V1MMBW_divider{margin:10px 0}";

		function apply(ctx) {
			let storedWallpaper = undefined;
			try { storedWallpaper = localStorage.getItem(WALLPAPER_KEY) || undefined; } catch (e) {}

			let saved = null;
			try { const raw = localStorage.getItem(STATE_KEY); if (raw) saved = JSON.parse(raw); } catch (e) {}

			const state = { wallpaper: storedWallpaper };
			for (const k of Object.keys(DEFAULTS)) {
				const v = saved && saved[k];
				state[k] = typeof v === "number" && isFinite(v) ? v : DEFAULTS[k];
			}
			const ui = { listeners: new Set() };
			const bump = () => ui.listeners.forEach((fn) => fn((x) => (x || 0) + 1));

			let themeRef = ctx.get("theme");
			const rgba = (r, g, b, a) => "rgba(" + r + ", " + g + ", " + b + ", " + a + ")";
			const near = (v, d) => Math.min(1, v + d);

			function applySkin() {
				if (themeRef === undefined) return;
				themeRef.overrideTokens("shiguangdailiren", {
					"--dsw-alias-bg-base": { light: rgba(246, 240, 234, state.bg / 100), dark: rgba(30, 26, 30, state.bg / 100) },
					"--dsw-alias-bg-layer-1": { light: rgba(250, 246, 241, state.layer1 / 100), dark: rgba(40, 35, 40, state.layer1 / 100) },
					"--dsw-alias-bg-layer-2": { light: rgba(252, 249, 245, near(state.layer1 / 100, 0.04)), dark: rgba(49, 43, 49, near(state.layer1 / 100, 0.03)) },
					"--dsw-alias-bg-overlay": { light: "rgba(253, 250, 246, 0.97)", dark: "rgba(38, 33, 38, 0.97)" },
					"--dsw-alias-border-l1": { light: "rgba(178, 152, 132, 0.30)", dark: "rgba(255, 255, 255, 0.10)" },
					"--dsw-alias-border-l2": { light: "rgba(168, 140, 120, 0.42)", dark: "rgba(255, 255, 255, 0.16)" },
					"--dsw-alias-brand-primary": { light: "#B85C63", dark: "#E79AA2" },
					"--dsw-alias-label-primary": { light: "#33292B", dark: "#F3EDE8" },
					"--dsw-alias-label-secondary": { light: "#6F6362", dark: "#BDB2AB" },
					"--dsw-alias-state-error-primary": { light: "#C0504D", dark: "#E57A74" },
					"--dsw-alias-state-success-primary": { light: "#5E9B6E", dark: "#7CC08A" },
					"--dsw-alias-state-warn-primary": { light: "#C08A3E", dark: "#D9A65A" },
					"--dsw-specific-sidebar-fill": { light: rgba(250, 246, 241, state.sidebar / 100), dark: rgba(24, 20, 24, state.sidebar / 100) }
				});
			}

			function applySkinVars() {
				const root = document.documentElement;
				const w = state.wallpaper
					? 'url("' + state.wallpaper + '")'
					: "url('/skin/640.png')";
				root.style.setProperty("--skn-bg-image", w);
				root.style.setProperty("--skn-zoom", state.zoom + "%");
				root.style.setProperty("--skn-pos-x", state.pos + "%");
				root.style.setProperty("--skn-genui-tint", state.genui + "%");
			}

			const persist = () => {
				try {
					localStorage.setItem(STATE_KEY, JSON.stringify({
						bg: state.bg, layer1: state.layer1, sidebar: state.sidebar,
						pos: state.pos, zoom: state.zoom, genui: state.genui
					}));
				} catch (e) {}
			};

			const commit = (key) => (v) => {
				state[key] = v;
				if (key === "bg" || key === "layer1" || key === "sidebar") applySkin();
				if (key === "pos" || key === "zoom" || key === "genui") applySkinVars();
				persist();
				bump();
			};

			function handleFile(e) {
				const file = e.target.files && e.target.files[0];
				e.target.value = "";
				if (!file) return;
				const reader = new FileReader();
				reader.onload = () => {
					const img = new Image();
					img.onload = () => {
						const maxW = 2402;
						const scale = Math.min(1, maxW / img.width);
						const w = Math.max(1, Math.round(img.width * scale));
						const h = Math.max(1, Math.round(img.height * scale));
						const canvas = document.createElement("canvas");
						canvas.width = w;
						canvas.height = h;
						const c = canvas.getContext("2d");
						c.drawImage(img, 0, 0, w, h);
						const dataUrl = canvas.toDataURL("image/jpeg", 0.85);
						try { localStorage.setItem(WALLPAPER_KEY, dataUrl); } catch (err) { console.error("skin: persist wallpaper failed", err); }
						state.wallpaper = dataUrl;
						applySkinVars();
						bump();
					};
					img.src = reader.result;
				};
				reader.readAsDataURL(file);
			}

			const resetWallpaper = () => {
				try { localStorage.removeItem(WALLPAPER_KEY); } catch (e) {}
				state.wallpaper = undefined;
				applySkinVars();
				bump();
			};

			const resetAll = () => {
				state.bg = DEFAULTS.bg; state.layer1 = DEFAULTS.layer1; state.sidebar = DEFAULTS.sidebar;
				state.pos = DEFAULTS.pos; state.zoom = DEFAULTS.zoom; state.genui = DEFAULTS.genui;
				try { localStorage.removeItem(WALLPAPER_KEY); } catch (e) {}
				state.wallpaper = undefined;
				persist();
				applySkin();
				applySkinVars();
				bump();
			};

			function useUI() {
				const [, force] = react.useState(0);
				react.useEffect(() => {
					ui.listeners.add(force);
					return () => ui.listeners.delete(force);
				}, []);
			}

			function SliderRow(props) {
				return react.createElement("div", { className: "skn-row" },
					react.createElement("div", { className: "skn-row-head" },
						react.createElement("span", { className: "skn-row-label" }, props.label),
						react.createElement("span", { className: "skn-row-value" }, props.value + "%")
					),
					react.createElement("input", {
						type: "range", min: props.min, max: props.max, step: props.step === undefined ? 1 : props.step,
						value: props.value, className: "skn-range",
						onChange: (e) => props.onChange(Number(e.target.value))
					}),
					props.hint === undefined ? null : react.createElement("div", { className: "skn-row-hint" }, props.hint)
				);
			}

			/* 头部按钮：点击打开右侧栏（details 列） */
			function SkinToggle(props) {
				return react.createElement("button", {
					className: "skn-hbtn",
					title: "时光代理人皮肤",
					onClick: () => {
						const layout = ctx.get("layout");
						if (layout !== undefined) layout.openDetails();
					}
				},
					react.createElement("span", null, "🖌")
				);
			}

			/* 右侧栏（details 列）：皮肤控制面板 */
			function SkinPanel(props) {
				useUI();
				return react.createElement("div", { className: "skn-details" },
					react.createElement("div", { className: "skn-details-head" },
						react.createElement("div", { className: "skn-title-lg" }, "时光代理人皮肤"),
						react.createElement("button", {
							className: "skn-close",
							title: "关闭",
							onClick: () => {
								const layout = ctx.get("layout");
								if (layout !== undefined) layout.closeDetails();
							}
						}, "✕")
					),
					react.createElement("div", { className: "skn-desc" }, "所有调节自动保存（含壁纸），刷新/重启后保持当前观感。"),
					react.createElement(SliderRow, { value: state.bg, min: 35, max: 100, label: "主界面背景", hint: "聊天区与面板的底色透明度，越低壁纸越清晰", onChange: commit("bg") }),
					react.createElement(SliderRow, { value: state.layer1, min: 35, max: 100, label: "卡片与消息", hint: "消息气泡、代码块等抬升面的透明度", onChange: commit("layer1") }),
					react.createElement(SliderRow, { value: state.sidebar, min: 35, max: 100, label: "侧边栏", hint: "左侧会话栏的透明度", onChange: commit("sidebar") }),
					react.createElement(SliderRow, { value: state.genui, min: 20, max: 100, label: "GenUI 卡片", hint: "对话里 GenUI 面板的底色浓度，越高越实、越低越透", onChange: commit("genui") }),
					react.createElement("div", { className: "skn-section" }, "壁纸"),
					react.createElement(SliderRow, { value: state.pos, min: 0, max: 100, label: "水平位置", hint: "0% 靠左，100% 靠右，50% 居中（放大后左右平移更明显）", onChange: commit("pos") }),
					react.createElement(SliderRow, { value: state.zoom, min: 60, max: 250, label: "图片大小", hint: "100% 为铺满高度；调大放大图片，调小显示更多", onChange: commit("zoom") }),
					react.createElement("div", { className: "skn-file-row" },
						react.createElement("label", { className: "skn-file-label" },
							"更换壁纸",
							react.createElement("input", { type: "file", accept: "image/*", className: "skn-file", onChange: handleFile })
						),
						state.wallpaper ? react.createElement("button", { className: "skn-mini", onClick: resetWallpaper }, "恢复默认壁纸") : null
					),
					react.createElement("button", { className: "skn-reset", onClick: resetAll }, "恢复全部默认")
				);
			}

			/* 常驻样式载体：只在 overlay 里渲染 <style>，保证壁纸在任何视图下都生效 */
			function SkinStyle(props) {
				return react.createElement("style", null, SKIN_CSS);
			}

			ctx.effect(() => {
				const slots = ctx.get("slots");
				let dStyle, dToggle, dDetails;
				if (slots !== undefined) {
					dStyle = slots.inject("shell.overlay", () => slots.register(
						{ name: "shell.overlay", id: "skin-style", order: 5 },
						(props) => react.createElement(SkinStyle, {})
					));
					dToggle = slots.inject("conversation.session.header.actions", () => slots.register(
						{ name: "conversation.session.header.actions", id: "skin-toggle", order: 25, label: () => "皮肤" },
						(props) => react.createElement(SkinToggle, {})
					));
					dDetails = slots.inject("details", () => slots.register(
						{ name: "details", priority: -1 },
						(props) => react.createElement(SkinPanel, {})
					));
				}
				applySkinVars();
				return () => {
					if (dStyle) { try { dStyle(); } catch (e) {} }
					if (dToggle) { try { dToggle(); } catch (e) {} }
					if (dDetails) { try { dDetails(); } catch (e) {} }
				};
			}, "skin-shiguangdailiren: right sidebar + style carrier");

			ctx.inject(["theme"], (themeCtx) => {
				themeRef = themeCtx.theme;
				applySkin();
			});
		}

		exports.apply = apply;
		return module.exports;
	}
});

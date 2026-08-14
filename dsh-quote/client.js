window.__ModuleLoader__.load({
	id: "dsh-quote",
	factory: (require) => {
		var module = { exports: {} };
		var exports = module.exports;
		Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
		let react = require("react");

		const CSS =
			".qt-btn{width:28px;height:28px;border:none;background:none;border-radius:8px;color:var(--dsw-alias-label-secondary);cursor:pointer;display:grid;place-items:center;font-size:13px}" +
			".qt-btn:hover{background:var(--dsw-alias-interactive-bg-hover);color:var(--dsw-alias-label-primary)}" +
			".qt-bar{position:fixed;z-index:40;display:flex;align-items:center;gap:4px;padding:4px;border:1px solid var(--dsw-alias-border-l1);background:var(--dsw-alias-bg-overlay);border-radius:10px;box-shadow:var(--dsw-shadow-lv2);pointer-events:auto}" +
			".qt-bar button{border:none;background:none;border-radius:7px;color:var(--dsw-alias-label-primary);cursor:pointer;padding:5px 10px;font-size:12px;display:inline-flex;align-items:center;gap:4px}" +
			".qt-bar button:hover{background:var(--dsw-alias-interactive-bg-hover)}" +
			".qt-bar button:active{transform:translateY(1px)}" +
			".qt-dock{display:flex;flex-direction:column;gap:6px;width:100%;max-width:calc(var(--dsh-chat-content-width,748px) + 32px);margin:0 auto;padding:0 8px;box-sizing:border-box}" +
			".qt-card{display:flex;align-items:flex-start;gap:10px;border:1px solid var(--dsw-alias-border-l1);background:var(--dsw-alias-bg-layer-1);border-radius:10px;padding:8px 12px;pointer-events:auto}" +
			".qt-card-text{flex:1;min-width:0;max-height:120px;overflow-y:auto;color:var(--dsw-alias-label-secondary);font-size:12px;line-height:1.6;white-space:pre-wrap;word-break:break-word;user-select:text}" +
			".qt-hint{font-size:11px;color:var(--dsw-alias-label-secondary);padding:0 2px}";

		function apply(ctx) {
			/* 待发引用卡片：不可编辑，用户自行决定何时发送 */
			const quoteStore = { items: [], listeners: new Set() };
			let nextId = 1;
			const bumpQuotes = () => quoteStore.listeners.forEach((fn) => fn((x) => (x || 0) + 1));
			const addQuote = (text) => {
				const t = String(text || "").trim();
				if (!t) return;
				quoteStore.items.push({ id: nextId++, text: t });
				bumpQuotes();
			};
			const removeQuote = (id) => {
				quoteStore.items = quoteStore.items.filter((q) => q.id !== id);
				bumpQuotes();
			};

			/* 选区状态 */
			const selStore = { text: "", rect: null, visible: false, listeners: new Set() };
			const bumpSel = () => selStore.listeners.forEach((fn) => fn((x) => (x || 0) + 1));

			const inEditable = (node) => {
				if (!node) return false;
				const el = node.nodeType === 3 ? node.parentElement : node;
				return !!(el && (el.tagName === "TEXTAREA" || el.tagName === "INPUT" || el.isContentEditable));
			};

			const scanSelection = () => {
				try {
					const sel = window.getSelection();
					const text = sel && !sel.isCollapsed ? sel.toString().trim() : "";
					let rect = null;
					if (text && sel.rangeCount > 0 && !inEditable(sel.anchorNode) && !inEditable(sel.focusNode)) {
						const r = sel.getRangeAt(0).getBoundingClientRect();
						if (r.width > 0 || r.height > 0) {
							rect = { left: r.left, top: r.top, width: r.width, bottom: r.bottom };
						}
					}
					selStore.text = text;
					selStore.rect = rect;
					selStore.visible = !!(text && rect);
					bumpSel();
				} catch (e) {}
			};

			const hideSel = () => {
				selStore.visible = false;
				try { window.getSelection().removeAllRanges(); } catch (e) {}
				bumpSel();
			};

			/* 引用卡片坞：输入框上方，不可编辑、无按钮；点击输入框时自动并入草稿一起发送 */
			function QuoteDock(props) {
				const [, force] = react.useState(0);
				const draftRef = react.useRef("");
				draftRef.current = (props.input && props.input.draft) || "";
				react.useEffect(() => {
					quoteStore.listeners.add(force);
					const onFocusIn = (e) => {
						if (quoteStore.items.length === 0) return;
						const t = e.target;
						if (!t || t.tagName !== "TEXTAREA") return;
						const parts = quoteStore.items.map((q) => "> " + q.text.replace(/\n/g, "\n> "));
						const draft = draftRef.current || "";
						const merged = (parts.join("\n\n") + "\n\n" + draft).replace(/\n{3,}/g, "\n\n");
						props.inputActions.setDraft(merged);
						quoteStore.items = [];
						bumpQuotes();
					};
					document.addEventListener("focusin", onFocusIn);
					return () => {
						quoteStore.listeners.delete(force);
						document.removeEventListener("focusin", onFocusIn);
					};
				}, []);
				if (quoteStore.items.length === 0) return null;
				return react.createElement("div", { className: "qt-dock" },
					quoteStore.items.map((q) => react.createElement("div", { className: "qt-card", key: q.id },
						react.createElement("div", { className: "qt-card-text" }, q.text)
					)),
					react.createElement("div", { className: "qt-hint" }, "点击输入框后自动并入草稿一起发送")
				);
			}

			/* 助手消息操作区 ⤴：把选中文本（无选中则整条消息）加入引用卡片 */
			function QuoteAction(props) {
				const messageId = props.messageId;
				const messageText = props.useSession((s) => {
					const n = s.nodes.find((x) => x.kind === "assistant" && x.messageId === messageId);
					if (!n || n.kind !== "assistant") return null;
					const parts = n.blocks.filter((b) => b.type === "text").map((b) => b.text);
					return parts.join("\n").trim();
				}, (a, b) => a === b);
				const selectedRef = react.useRef(null);

				const grabSelection = () => {
					try {
						const sel = window.getSelection();
						const t = sel ? sel.toString().trim() : "";
						selectedRef.current = t.length > 0 ? t : null;
					} catch (e) {
						selectedRef.current = null;
					}
				};

				const quote = () => {
					const text = selectedRef.current || messageText;
					selectedRef.current = null;
					if (!text) return;
					addQuote(text);
				};

				return react.createElement("button", {
					className: "qt-btn",
					title: "引用到输入区（待发卡片）",
					"aria-label": "引用到输入区（待发卡片）",
					onMouseDown: grabSelection,
					onClick: quote
				},
					react.createElement("span", null, "⤴")
				);
			}

			/* 选区浮出工具条（overlay，全局）：⤴ 加入引用卡片 / 复制 */
			function QuoteToolbar(props) {
				const [, force] = react.useState(0);
				react.useEffect(() => {
					selStore.listeners.add(force);
					document.addEventListener("selectionchange", scanSelection);
					document.addEventListener("mouseup", scanSelection);
					window.addEventListener("scroll", hideSel, true);
					window.addEventListener("resize", hideSel);
					return () => {
						selStore.listeners.delete(force);
						document.removeEventListener("selectionchange", scanSelection);
						document.removeEventListener("mouseup", scanSelection);
						window.removeEventListener("scroll", hideSel, true);
						window.removeEventListener("resize", hideSel);
					};
				}, []);

				const doQuote = () => {
					const text = selStore.text;
					hideSel();
					addQuote(text);
				};
				const doCopy = () => {
					const text = selStore.text;
					hideSel();
					try { navigator.clipboard.writeText(text); } catch (e) {}
				};

				let bar = null;
				if (selStore.visible && selStore.rect) {
					const r = selStore.rect;
					const barW = 150;
					const barH = 34;
					const left = Math.min(Math.max(r.left + r.width / 2 - barW / 2, 8), Math.max(8, window.innerWidth - barW - 8));
					const top = Math.max(8, r.top - barH - 8);
					bar = react.createElement("div", {
						className: "qt-bar",
						style: { left: left + "px", top: top + "px" }
					},
						react.createElement("button", { onClick: doQuote }, "⤴ 引用"),
						react.createElement("button", { onClick: doCopy }, "复制")
					);
				}
				return react.createElement(react.Fragment, null,
					react.createElement("style", null, CSS),
					bar
				);
			}

			ctx.effect(() => {
				const slots = ctx.get("slots");
				let dDock, dAction, dToolbar;
				if (slots !== undefined) {
					dDock = slots.inject("conversation.input.dock", () => slots.register(
						{ name: "conversation.input.dock", id: "quote-dock", order: 60 },
						(props) => react.createElement(QuoteDock, props)
					));
					dAction = slots.inject("conversation.chat.assistant-actions", () => slots.register(
						{ name: "conversation.chat.assistant-actions", id: "quote", order: 20 },
						(props) => react.createElement(QuoteAction, props)
					));
					dToolbar = slots.inject("shell.overlay", () => slots.register(
						{ name: "shell.overlay", id: "quote-toolbar", order: 5 },
						(props) => react.createElement(QuoteToolbar, {})
					));
				}
				return () => {
					if (dDock) { try { dDock(); } catch (e) {} }
					if (dAction) { try { dAction(); } catch (e) {} }
					if (dToolbar) { try { dToolbar(); } catch (e) {} }
				};
			}, "dsh-quote: quote cards + selection toolbar");
		}

		exports.apply = apply;
		return module.exports;
	}
});

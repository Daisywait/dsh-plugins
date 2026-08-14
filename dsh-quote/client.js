window.__ModuleLoader__.load({
	id: "dsh-quote",
	factory: (require) => {
		var module = { exports: {} };
		var exports = module.exports;
		Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
		let react = require("react");

		const CSS =
			".qt-btn{width:28px;height:28px;border:none;background:none;border-radius:8px;color:var(--dsw-alias-label-secondary);cursor:pointer;display:grid;place-items:center;font-size:13px}" +
			".qt-btn:hover{background:var(--dsw-alias-interactive-bg-hover);color:var(--dsw-alias-label-primary)}";

		function apply(ctx) {
			/* 助手消息操作区：「引用」把该消息文本带进输入框 */
			/* 助手消息操作区：「引用」把当前选中的文本（无选中则整条消息）带进输入框 */
			function QuoteAction(props) {
				const messageId = props.messageId;
				const draft = props.useInput((s) => s.draft);
				const messageText = props.useSession((s) => {
					const n = s.nodes.find((x) => x.kind === "assistant" && x.messageId === messageId);
					if (!n || n.kind !== "assistant") return null;
					const parts = n.blocks.filter((b) => b.type === "text").map((b) => b.text);
					return parts.join("\n").trim();
				}, (a, b) => a === b);
				const selectedRef = react.useRef(null);

				/* 在 mousedown 时先捕获选区（按钮点击可能清除选区） */
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
					if (!text || !props.inputActions) return;
					const block = "> " + text.replace(/\n/g, "\n> ");
					const sep = draft.trim() === "" ? "" : "\n\n";
					props.inputActions.setDraft(draft + sep + block + "\n");
				};

				return react.createElement("button", {
					className: "qt-btn",
					title: "引用选中文本到输入框",
					"aria-label": "引用选中文本到输入框",
					onMouseDown: grabSelection,
					onClick: quote
				},
					react.createElement("span", null, "⤴")
				);
			}

			ctx.effect(() => {
				const slots = ctx.get("slots");
				let dAction, dStyle;
				if (slots !== undefined) {
					dAction = slots.inject("conversation.chat.assistant-actions", () => slots.register(
						{ name: "conversation.chat.assistant-actions", id: "quote", order: 20 },
						(props) => react.createElement(QuoteAction, props)
					));
					dStyle = slots.inject("shell.overlay", () => slots.register(
						{ name: "shell.overlay", id: "quote-style", order: 5 },
						(props) => react.createElement("style", null, CSS)
					));
				}
				return () => {
					if (dAction) { try { dAction(); } catch (e) {} }
					if (dStyle) { try { dStyle(); } catch (e) {} }
				};
			}, "dsh-quote: quote action");
		}

		exports.apply = apply;
		return module.exports;
	}
});

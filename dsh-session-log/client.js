window.__ModuleLoader__.load({
	id: "dsh-session-log",
	factory: (require) => {
		var module = { exports: {} };
		var exports = module.exports;
		Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
		let react = require("react");

		var C = {
			accent: "#a371f7",           // GitHub 关闭态紫
			open: "#d29922",
			border: "var(--dsw-alias-border-l1, rgba(255,255,255,0.14))",
			text: "var(--dsw-alias-label-primary, #e8e8ec)",
			muted: "var(--dsw-alias-label-secondary, rgba(232,232,236,0.55))",
			bgLayer: "var(--dsw-alias-bg-layer-1, rgba(255,255,255,0.05))",
			hover: "var(--dsw-alias-interactive-bg-hover, rgba(255,255,255,0.08))"
		};

		// 点「会话收尾」后自动发送给模型的收尾指令
		var CLOSE_PROMPT = [
			"请为本次会话做收尾归档：调用 session_close 工具，基于整个会话的真实内容填写——",
			"title：一句话概括本次任务；goal：最初目标/背景；summary：最终达成了什么（2-3 句）；",
			"work：关键步骤；solved：实际解决了哪些问题；artifacts：产出的文件或成果（尽量带路径）；",
			"leftovers：遗留问题与后续建议；labels：1-4 个主题标签。要求诚实准确、不夸大。",
			"完成后用一句话告诉我归档编号。"
		].join("");

		function apiList() {
			return fetch("/session-log/list").then((r) => r.json()).then((j) => (j && j.items) || []).catch(() => []);
		}
		function apiState(number, state) {
			return fetch("/session-log/state", {
				method: "POST",
				headers: { "content-type": "application/json" },
				body: JSON.stringify({ number: number, state: state })
			}).then((r) => r.json()).then((j) => (j && j.items) || []).catch(() => []);
		}

		function fmtTime(ts) {
			if (!ts) return "";
			var d = new Date(ts);
			var now = new Date();
			var sameYear = d.getFullYear() === now.getFullYear();
			var opts = sameYear ? { month: "numeric", day: "numeric", hour: "2-digit", minute: "2-digit" } : { year: "numeric", month: "numeric", day: "numeric" };
			return d.toLocaleString("zh-CN", opts);
		}

		function issueToPlainText(it) {
			var lines = ["#" + it.number + " " + it.title];
			lines.push("状态: " + (it.state === "open" ? "已重开" : "已关闭") + " · " + fmtTime(it.closedAt));
			if (it.labels && it.labels.length) lines.push("标签: " + it.labels.join(", "));
			if (it.summary) lines.push("", "总结: " + it.summary);
			if (it.goal) lines.push("", "目标: " + it.goal);
			var sec = function (t, arr) {
				if (!arr || !arr.length) return;
				lines.push("", t + ":");
				arr.forEach(function (x) { lines.push("- " + x); });
			};
			sec("做了什么", it.work);
			sec("解决了什么问题", it.solved);
			sec("产出", it.artifacts);
			sec("遗留事项", it.leftovers);
			return lines.join("\n");
		}

		function apply(ctx) {
			var listeners = [];
			var state = { items: [], loading: true, query: "", expanded: null };
			function setState(patch) {
				state = Object.assign({}, state, patch);
				for (var i = 0; i < listeners.length; i++) listeners[i]();
			}
			function subscribe(fn) { listeners.push(fn); return function () { listeners = listeners.filter(function (x) { return x !== fn; }); }; }
			function useStore() {
				var pair = react.useState(state);
				var render = pair[1];
				react.useEffect(function () { return subscribe(function () { render(state); }); }, []);
				return state;
			}
			function refresh() {
				setState({ loading: true });
				apiList().then(function (items) { setState({ items: items, loading: false }); });
			}
			function toggleState(item, nextState) {
				apiState(item.number, nextState).then(function (items) { if (items.length) setState({ items: items }); });
			}
			function copyIssue(it) {
				try { navigator.clipboard.writeText(issueToPlainText(it)); } catch (e) {}
			}
			function openSession(sessionId) {
				try { localStorage.removeItem("dsh.conversation.chat." + sessionId); } catch (e) {}
				var sessions = ctx.get("sessions");
				if (sessions && sessions.open) { try { sessions.open(sessionId); } catch (e) {} }
			}

			// ---- 通用小组件 ----
			function Section(props) {
				var title = props.title;
				var arr = props.arr || [];
				if (arr.length === 0) return null;
				return react.createElement("div", { style: { marginTop: 8 } },
					react.createElement("div", { style: { fontSize: 12, fontWeight: 600, color: C.muted, marginBottom: 3 } }, title),
					react.createElement("ul", { style: { margin: 0, paddingLeft: 18 } }, arr.map(function (x, i) {
						return react.createElement("li", { key: i, style: { fontSize: 12.5, lineHeight: 1.65, color: C.text, whiteSpace: "pre-wrap", wordBreak: "break-word" } }, x);
					}))
				);
			}

			function StateChip(props) {
				var isOpen = props.state === "open";
				return react.createElement("span", {
					style: {
						fontSize: 11, padding: "1px 8px", borderRadius: 999,
						border: "1px solid " + (isOpen ? C.open : C.accent),
						color: isOpen ? C.open : C.accent, whiteSpace: "nowrap"
					}
				}, isOpen ? "🔓 已重开" : "✅ 已关闭");
			}

			// ---- 归档条目（可展开）----
			function IssueRow(props) {
				var it = props.item;
				var expanded = state.expanded === it.number;
				return react.createElement("div", {
					style: {
						border: "1px solid " + (expanded ? C.accent : C.border),
						borderRadius: 10, marginBottom: 8, overflow: "hidden",
						background: C.bgLayer
					}
				},
					react.createElement("div", {
						onClick: function () { setState({ expanded: expanded ? null : it.number }); },
						style: { display: "flex", alignItems: "center", gap: 8, padding: "8px 12px", cursor: "pointer" },
						title: "点击展开/收起"
					},
						react.createElement("span", { style: { color: C.accent, fontWeight: 600, fontSize: 13, flexShrink: 0 } }, "#" + it.number),
						react.createElement("span", { style: { flex: 1, minWidth: 0, fontSize: 13, color: C.text, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" } }, it.title),
						react.createElement("span", { style: { color: C.muted, fontSize: 11.5, flexShrink: 0 } }, fmtTime(it.closedAt)),
						react.createElement(StateChip, { state: it.state })
					),
					expanded ? react.createElement("div", { style: { borderTop: "1px solid " + C.border, padding: "10px 14px 12px" } },
						it.summary ? react.createElement("div", { style: { fontSize: 13, lineHeight: 1.7, color: C.text, whiteSpace: "pre-wrap", wordBreak: "break-word" } }, it.summary) : null,
						it.goal ? react.createElement(Section, { title: "🎯 目标 / 背景", arr: [it.goal] }) : null,
						react.createElement(Section, { title: "🛠 做了什么", arr: it.work }),
						react.createElement(Section, { title: "💡 解决了什么问题", arr: it.solved }),
						react.createElement(Section, { title: "📦 产出", arr: it.artifacts }),
						react.createElement(Section, { title: "🚩 遗留事项", arr: it.leftovers }),
						(it.labels && it.labels.length) ? react.createElement("div", { style: { marginTop: 10, display: "flex", gap: 6, flexWrap: "wrap" } },
							it.labels.map(function (l, i) {
								return react.createElement("span", { key: i, style: { fontSize: 11, padding: "1px 8px", borderRadius: 999, background: "rgba(163,113,247,0.15)", color: C.accent } }, l);
							})
						) : null,
						react.createElement("div", { style: { marginTop: 12, display: "flex", gap: 8, flexWrap: "wrap" } },
							it.sessionId ? react.createElement("button", {
								onClick: function () { openSession(it.sessionId); },
								style: btnStyle()
							}, "💬 打开原会话") : null,
							react.createElement("button", {
								onClick: function () { toggleState(it, it.state === "open" ? "closed" : "open"); },
								style: btnStyle()
							}, it.state === "open" ? "✅ 重新关闭" : "🔓 重开"),
							react.createElement("button", {
								onClick: function () { copyIssue(it); },
								style: btnStyle()
							}, "📋 复制总结"),
							it.sessionId ? react.createElement("span", { style: { alignSelf: "center", fontSize: 11, color: C.muted } }, String(it.sessionId).slice(0, 12) + "…") : null
						)
					) : null
				);
			}

			function btnStyle() {
				return {
					background: "transparent", border: "1px solid " + C.border, color: C.text,
					borderRadius: 8, padding: "4px 10px", fontSize: 12, cursor: "pointer", fontFamily: "inherit"
				};
			}

			// ---- 「归档」标签页 ----
			function ArchiveView() {
				var s = useStore();
				react.useEffect(function () { refresh(); }, []);
				var q = s.query.trim().toLowerCase();
				var items = q ? s.items.filter(function (it) {
					return JSON.stringify([it.title, it.summary, it.goal, it.work, it.solved, it.artifacts, it.leftovers, it.labels]).toLowerCase().indexOf(q) !== -1;
				}) : s.items;
				return react.createElement("div", { style: { minHeight: "100%", padding: 16, maxWidth: 780, margin: "0 auto", boxSizing: "border-box" } },
					react.createElement("div", { style: { display: "flex", alignItems: "center", gap: 10, marginBottom: 10 } },
						react.createElement("span", { style: { fontWeight: 700, fontSize: 15, color: C.text } }, "🏁 会话归档"),
						react.createElement("span", { style: { fontSize: 12, color: C.muted } }, s.items.length + " 条 · 每次收尾一条，像关闭 Issue"),
						react.createElement("div", { style: { flex: 1 } }),
						react.createElement("button", { onClick: refresh, style: btnStyle(), title: "刷新" }, "↻")
					),
					react.createElement("input", {
						value: s.query,
						placeholder: "搜索标题 / 总结 / 解决的问题 / 产出 / 标签…",
						onChange: function (e) { setState({ query: e.target.value }); },
						style: {
							width: "100%", boxSizing: "border-box", marginBottom: 12,
							background: C.bgLayer, border: "1px solid " + C.border, borderRadius: 8,
							color: C.text, padding: "7px 10px", fontSize: 13, outline: "none", fontFamily: "inherit"
						}
					}),
					s.loading
						? react.createElement("div", { style: { color: C.muted, fontSize: 13, padding: 20 } }, "加载中…")
						: items.length === 0
							? react.createElement("div", { style: { color: C.muted, fontSize: 13, lineHeight: 1.9, padding: "18px 4px" } },
								s.items.length === 0
									? "还没有归档。结束一个会话时：点输入框上方的「🏁 会话收尾」，或直接对 AI 说「结束这个会话并总结」——AI 会生成结构化总结（做了什么 / 解决了什么 / 产出 / 遗留）并存档在这里。"
									: "没有匹配「" + s.query + "」的条目。")
							: items.map(function (it) { return react.createElement(IssueRow, { key: it.number, item: it }); })
				);
			}

			// ---- 输入框上方：「会话收尾」按钮 ----
			function CloseBar(props) {
				var busyPair = react.useState(false);
				var busy = busyPair[0];
				var setBusy = busyPair[1];
				var send = function () {
					var ia = props && props.inputActions;
					if (!ia || !ia.setDraft || !ia.submit) return;
					if (!window.confirm("发送会话收尾请求？\n\nAI 将基于本次对话生成结构化总结（做了什么 / 解决了什么 / 产出 / 遗留），并像关闭 Issue 一样写入归档。")) return;
					setBusy(true);
					try {
						ia.setDraft(CLOSE_PROMPT);
						setTimeout(function () {
							try { ia.submit(); } catch (e) {}
							setBusy(false);
						}, 60);
					} catch (e) { setBusy(false); }
				};
				return react.createElement("div", { style: { display: "flex", justifyContent: "flex-end", padding: "0 10px 2px" } },
					react.createElement("button", {
						onClick: send,
						disabled: busy,
						title: "总结并归档本次会话（像关闭 GitHub Issue）",
						style: {
							background: "transparent", border: "1px dashed " + C.border, color: C.muted,
							borderRadius: 999, padding: "3px 12px", fontSize: 12, cursor: "pointer",
							fontFamily: "inherit", opacity: busy ? 0.5 : 1
						}
					}, busy ? "⏳ 发送中…" : "🏁 会话收尾 · 总结并归档")
				);
			}

			// ---- 槽位注入 ----
			var slots = ctx.get("slots");
			ctx.effect(function () {
				var d1, d2;
				if (slots !== undefined) {
					d1 = slots.inject("conversation.view", function () {
						return slots.register(
							{ name: "conversation.view", id: "session-log-archive", order: 25, label: function () { return "归档"; } },
							function (props) { return react.createElement(ArchiveView, props); }
						);
					});
					d2 = slots.inject("conversation.input.dock", function () {
						return slots.register(
							{ name: "conversation.input.dock", id: "session-close-bar", order: 55 },
							function (props) { return react.createElement(CloseBar, props); }
						);
					});
				}
				return function () {
					try { if (d1) d1(); } catch (e) {}
					try { if (d2) d2(); } catch (e) {}
				};
			}, "dsh-session-log: 归档标签页与收尾按钮");
		}

		exports.apply = apply;
		return module.exports;
	}
});

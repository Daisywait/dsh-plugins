// dsh-video · 状态编解码（用于独立工作室页 URL 与窗口间通信）
export function encodeState(obj: unknown): string {
	const bytes = new TextEncoder().encode(JSON.stringify(obj));
	let bin = '';
	for (const b of bytes) bin += String.fromCharCode(b);
	return btoa(bin).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

export function decodeState(s: string): unknown {
	try {
		const b64 = s.replace(/-/g, '+').replace(/_/g, '/');
		const bin = atob(b64);
		const bytes = Uint8Array.from(bin, (c) => c.charCodeAt(0));
		return JSON.parse(new TextDecoder().decode(bytes));
	} catch (e) {
		return null;
	}
}

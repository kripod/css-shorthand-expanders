import type { CSSProperties } from "./CSSProperties";

export function overflow(
	x: CSSProperties["overflowX"],
	y: CSSProperties["overflowY"] = x,
): {
	overflowX: CSSProperties["overflowX"];
	overflowY: CSSProperties["overflowY"];
} {
	return {
		overflowX: x,
		overflowY: y,
	};
}

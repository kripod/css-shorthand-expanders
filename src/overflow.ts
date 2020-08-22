import type { CSSProperties } from "./CSSProperties";

export function overflow(
	x: CSSProperties["overflowX"],
	y: CSSProperties["overflowY"] = x,
): Pick<CSSProperties, "overflowX" | "overflowY"> {
	return {
		overflowX: x,
		overflowY: y,
	};
}

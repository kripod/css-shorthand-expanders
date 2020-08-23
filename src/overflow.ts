import type { CSSProperties } from "./CSSProperties";

export type OverflowLonghands = Pick<CSSProperties, "overflowX" | "overflowY">;

export function overflow(
	x: CSSProperties["overflowX"],
	y: CSSProperties["overflowY"] = x,
): OverflowLonghands {
	return {
		overflowX: x,
		overflowY: y,
	};
}

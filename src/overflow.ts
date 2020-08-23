import type { CSSProperties } from "css-shorthand-expanders";

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

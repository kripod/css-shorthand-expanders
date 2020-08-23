import type { CSSProperties } from "../CSSProperties";

export type OverflowLonghands = Required<
	Pick<CSSProperties, "overflowX" | "overflowY">
>;

export function overflow(
	x: NonNullable<CSSProperties["overflowX"]>,
	y: NonNullable<CSSProperties["overflowY"]> = x,
): OverflowLonghands {
	return {
		overflowX: x,
		overflowY: y,
	};
}

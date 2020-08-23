import type { CSSProperties } from "../CSSProperties";

export type GridColumnLonghands = Required<
	Pick<CSSProperties, "gridColumnStart" | "gridColumnEnd">
>;

export function gridColumn(
	start: NonNullable<CSSProperties["gridColumnStart"]>,
	end: NonNullable<CSSProperties["gridColumnEnd"]> = start,
): GridColumnLonghands {
	return {
		gridColumnStart: start,
		gridColumnEnd: end,
	};
}

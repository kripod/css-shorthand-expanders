import type { CSSProperties } from "../CSSProperties";

export type GridAreaLonghands = Required<
	Pick<
		CSSProperties,
		"gridRowStart" | "gridColumnStart" | "gridRowEnd" | "gridColumnEnd"
	>
>;

export function gridArea(
	rowStart: NonNullable<CSSProperties["gridRowStart"]>,
	columnStart: NonNullable<CSSProperties["gridColumnStart"]> = rowStart,
	rowEnd: NonNullable<CSSProperties["gridRowEnd"]> = rowStart,
	columnEnd: NonNullable<CSSProperties["gridColumnEnd"]> = columnStart,
): GridAreaLonghands {
	return {
		gridRowStart: rowStart,
		gridColumnStart: columnStart,
		gridRowEnd: rowEnd,
		gridColumnEnd: columnEnd,
	};
}

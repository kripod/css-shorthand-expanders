import type { CSSProperties } from "../CSSProperties";

export type GridRowLonghands = Required<
	Pick<CSSProperties, "gridRowStart" | "gridRowEnd">
>;

export function gridRow(
	start: NonNullable<CSSProperties["gridRowStart"]>,
	end: NonNullable<CSSProperties["gridRowEnd"]> = start,
): GridRowLonghands {
	return {
		gridRowStart: start,
		gridRowEnd: end,
	};
}

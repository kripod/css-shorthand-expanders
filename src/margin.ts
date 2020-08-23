import type { CSSProperties } from "./CSSProperties";

export type MarginLonghands = Required<
	Pick<
		CSSProperties,
		"marginTop" | "marginRight" | "marginBottom" | "marginLeft"
	>
>;

export function margin(
	all: NonNullable<CSSProperties["marginTop"]>,
): MarginLonghands;

export function margin(
	vertical: NonNullable<CSSProperties["marginTop"]>,
	horizontal: NonNullable<CSSProperties["marginRight"]>,
): MarginLonghands;

export function margin(
	top: NonNullable<CSSProperties["marginTop"]>,
	horizontal: NonNullable<CSSProperties["marginRight"]>,
	bottom: NonNullable<CSSProperties["marginBottom"]>,
): MarginLonghands;

export function margin(
	top: NonNullable<CSSProperties["marginTop"]>,
	right: NonNullable<CSSProperties["marginRight"]>,
	bottom: NonNullable<CSSProperties["marginBottom"]>,
	left: NonNullable<CSSProperties["marginLeft"]>,
): MarginLonghands;

export function margin(
	top: NonNullable<CSSProperties["marginTop"]>,
	right: NonNullable<CSSProperties["marginRight"]> = top,
	bottom: NonNullable<CSSProperties["marginBottom"]> = top,
	left: NonNullable<CSSProperties["marginLeft"]> = right,
): MarginLonghands {
	return {
		marginTop: top,
		marginRight: right,
		marginBottom: bottom,
		marginLeft: left,
	};
}

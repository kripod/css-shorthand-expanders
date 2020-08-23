import type { CSSProperties } from "css-shorthand-expanders";

export type PaddingLonghands = Required<
	Pick<
		CSSProperties,
		"paddingTop" | "paddingRight" | "paddingBottom" | "paddingLeft"
	>
>;

export function padding(
	all: NonNullable<CSSProperties["paddingTop"]>,
): PaddingLonghands;

export function padding(
	vertical: NonNullable<CSSProperties["paddingTop"]>,
	horizontal: NonNullable<CSSProperties["paddingRight"]>,
): PaddingLonghands;

export function padding(
	top: NonNullable<CSSProperties["paddingTop"]>,
	horizontal: NonNullable<CSSProperties["paddingRight"]>,
	bottom: NonNullable<CSSProperties["paddingBottom"]>,
): PaddingLonghands;

export function padding(
	top: NonNullable<CSSProperties["paddingTop"]>,
	right: NonNullable<CSSProperties["paddingRight"]>,
	bottom: NonNullable<CSSProperties["paddingBottom"]>,
	left: NonNullable<CSSProperties["paddingLeft"]>,
): PaddingLonghands;

export function padding(
	top: NonNullable<CSSProperties["paddingTop"]>,
	right: NonNullable<CSSProperties["paddingRight"]> = top,
	bottom: NonNullable<CSSProperties["paddingBottom"]> = top,
	left: NonNullable<CSSProperties["paddingLeft"]> = right,
): PaddingLonghands {
	return {
		paddingTop: top,
		paddingRight: right,
		paddingBottom: bottom,
		paddingLeft: left,
	};
}

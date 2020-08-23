import type { CSSProperties } from "./CSSProperties";

export type BorderWidthLonghands = Required<
	Pick<
		CSSProperties,
		| "borderTopWidth"
		| "borderRightWidth"
		| "borderBottomWidth"
		| "borderLeftWidth"
	>
>;

export function borderWidth(
	all: NonNullable<CSSProperties["borderTopWidth"]>,
): BorderWidthLonghands;

export function borderWidth(
	vertical: NonNullable<CSSProperties["borderTopWidth"]>,
	horizontal: NonNullable<CSSProperties["borderRightWidth"]>,
): BorderWidthLonghands;

export function borderWidth(
	top: NonNullable<CSSProperties["borderTopWidth"]>,
	horizontal: NonNullable<CSSProperties["borderRightWidth"]>,
	bottom: NonNullable<CSSProperties["borderBottomWidth"]>,
): BorderWidthLonghands;

export function borderWidth(
	top: NonNullable<CSSProperties["borderTopWidth"]>,
	right: NonNullable<CSSProperties["borderRightWidth"]>,
	bottom: NonNullable<CSSProperties["borderBottomWidth"]>,
	left: NonNullable<CSSProperties["borderLeftWidth"]>,
): BorderWidthLonghands;

export function borderWidth(
	top: NonNullable<CSSProperties["borderTopWidth"]>,
	right: NonNullable<CSSProperties["borderRightWidth"]> = top,
	bottom: NonNullable<CSSProperties["borderBottomWidth"]> = top,
	left: NonNullable<CSSProperties["borderLeftWidth"]> = right,
): BorderWidthLonghands {
	return {
		borderTopWidth: top,
		borderRightWidth: right,
		borderBottomWidth: bottom,
		borderLeftWidth: left,
	};
}

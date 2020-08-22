import type { CSSProperties } from "./CSSProperties";

export type BorderWidthLonghands = Pick<
	CSSProperties,
	| "borderTopWidth"
	| "borderRightWidth"
	| "borderBottomWidth"
	| "borderLeftWidth"
>;

export function borderWidth(
	all: CSSProperties["borderTopWidth"],
): BorderWidthLonghands;

export function borderWidth(
	vertical: CSSProperties["borderTopWidth"],
	horizontal: CSSProperties["borderRightWidth"],
): BorderWidthLonghands;

export function borderWidth(
	top: CSSProperties["borderTopWidth"],
	horizontal: CSSProperties["borderRightWidth"],
	bottom: CSSProperties["borderBottomWidth"],
): BorderWidthLonghands;

export function borderWidth(
	top: CSSProperties["borderTopWidth"],
	right: CSSProperties["borderRightWidth"],
	bottom: CSSProperties["borderBottomWidth"],
	left: CSSProperties["borderLeftWidth"],
): BorderWidthLonghands;

export function borderWidth(
	top: CSSProperties["borderTopWidth"],
	right: CSSProperties["borderRightWidth"] = top,
	bottom: CSSProperties["borderBottomWidth"] = top,
	left: CSSProperties["borderLeftWidth"] = right,
): BorderWidthLonghands {
	return {
		borderTopWidth: top,
		borderRightWidth: right,
		borderBottomWidth: bottom,
		borderLeftWidth: left,
	};
}

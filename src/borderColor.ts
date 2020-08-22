import type { CSSProperties } from "./CSSProperties";

export type BorderColorLonghands = Pick<
	CSSProperties,
	| "borderTopColor"
	| "borderRightColor"
	| "borderBottomColor"
	| "borderLeftColor"
>;

export function borderColor(
	all: CSSProperties["borderTopColor"],
): BorderColorLonghands;

export function borderColor(
	vertical: CSSProperties["borderTopColor"],
	horizontal: CSSProperties["borderRightColor"],
): BorderColorLonghands;

export function borderColor(
	top: CSSProperties["borderTopColor"],
	horizontal: CSSProperties["borderRightColor"],
	bottom: CSSProperties["borderBottomColor"],
): BorderColorLonghands;

export function borderColor(
	top: CSSProperties["borderTopColor"],
	right: CSSProperties["borderRightColor"],
	bottom: CSSProperties["borderBottomColor"],
	left: CSSProperties["borderLeftColor"],
): BorderColorLonghands;

export function borderColor(
	top: CSSProperties["borderTopColor"],
	right: CSSProperties["borderRightColor"] = top,
	bottom: CSSProperties["borderBottomColor"] = top,
	left: CSSProperties["borderLeftColor"] = right,
): BorderColorLonghands {
	return {
		borderTopColor: top,
		borderRightColor: right,
		borderBottomColor: bottom,
		borderLeftColor: left,
	};
}

import type { CSSProperties } from "./CSSProperties";

export type BorderStyleLonghands = Pick<
	CSSProperties,
	| "borderTopStyle"
	| "borderRightStyle"
	| "borderBottomStyle"
	| "borderLeftStyle"
>;

export function borderStyle(
	all: CSSProperties["borderTopStyle"],
): BorderStyleLonghands;

export function borderStyle(
	vertical: CSSProperties["borderTopStyle"],
	horizontal: CSSProperties["borderRightStyle"],
): BorderStyleLonghands;

export function borderStyle(
	top: CSSProperties["borderTopStyle"],
	horizontal: CSSProperties["borderRightStyle"],
	bottom: CSSProperties["borderBottomStyle"],
): BorderStyleLonghands;

export function borderStyle(
	top: CSSProperties["borderTopStyle"],
	right: CSSProperties["borderRightStyle"],
	bottom: CSSProperties["borderBottomStyle"],
	left: CSSProperties["borderLeftStyle"],
): BorderStyleLonghands;

export function borderStyle(
	top: CSSProperties["borderTopStyle"],
	right: CSSProperties["borderRightStyle"] = top,
	bottom: CSSProperties["borderBottomStyle"] = top,
	left: CSSProperties["borderLeftStyle"] = right,
): BorderStyleLonghands {
	return {
		borderTopStyle: top,
		borderRightStyle: right,
		borderBottomStyle: bottom,
		borderLeftStyle: left,
	};
}

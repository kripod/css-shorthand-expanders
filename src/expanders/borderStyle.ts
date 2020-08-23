import type { CSSProperties } from "../CSSProperties";

export type BorderStyleLonghands = Required<
	Pick<
		CSSProperties,
		| "borderTopStyle"
		| "borderRightStyle"
		| "borderBottomStyle"
		| "borderLeftStyle"
	>
>;

export function borderStyle(
	all: NonNullable<CSSProperties["borderTopStyle"]>,
): BorderStyleLonghands;

export function borderStyle(
	vertical: NonNullable<CSSProperties["borderTopStyle"]>,
	horizontal: NonNullable<CSSProperties["borderRightStyle"]>,
): BorderStyleLonghands;

export function borderStyle(
	top: NonNullable<CSSProperties["borderTopStyle"]>,
	horizontal: NonNullable<CSSProperties["borderRightStyle"]>,
	bottom: NonNullable<CSSProperties["borderBottomStyle"]>,
): BorderStyleLonghands;

export function borderStyle(
	top: NonNullable<CSSProperties["borderTopStyle"]>,
	right: NonNullable<CSSProperties["borderRightStyle"]>,
	bottom: NonNullable<CSSProperties["borderBottomStyle"]>,
	left: NonNullable<CSSProperties["borderLeftStyle"]>,
): BorderStyleLonghands;

export function borderStyle(
	top: NonNullable<CSSProperties["borderTopStyle"]>,
	right: NonNullable<CSSProperties["borderRightStyle"]> = top,
	bottom: NonNullable<CSSProperties["borderBottomStyle"]> = top,
	left: NonNullable<CSSProperties["borderLeftStyle"]> = right,
): BorderStyleLonghands {
	return {
		borderTopStyle: top,
		borderRightStyle: right,
		borderBottomStyle: bottom,
		borderLeftStyle: left,
	};
}

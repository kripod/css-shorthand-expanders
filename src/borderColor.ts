import type { CSSProperties } from "./CSSProperties";

export type BorderColorLonghands = Required<
	Pick<
		CSSProperties,
		| "borderTopColor"
		| "borderRightColor"
		| "borderBottomColor"
		| "borderLeftColor"
	>
>;

export function borderColor(
	all: NonNullable<CSSProperties["borderTopColor"]>,
): BorderColorLonghands;

export function borderColor(
	vertical: NonNullable<CSSProperties["borderTopColor"]>,
	horizontal: NonNullable<CSSProperties["borderRightColor"]>,
): BorderColorLonghands;

export function borderColor(
	top: NonNullable<CSSProperties["borderTopColor"]>,
	horizontal: NonNullable<CSSProperties["borderRightColor"]>,
	bottom: NonNullable<CSSProperties["borderBottomColor"]>,
): BorderColorLonghands;

export function borderColor(
	top: NonNullable<CSSProperties["borderTopColor"]>,
	right: NonNullable<CSSProperties["borderRightColor"]>,
	bottom: NonNullable<CSSProperties["borderBottomColor"]>,
	left: NonNullable<CSSProperties["borderLeftColor"]>,
): BorderColorLonghands;

export function borderColor(
	top: NonNullable<CSSProperties["borderTopColor"]>,
	right: NonNullable<CSSProperties["borderRightColor"]> = top,
	bottom: NonNullable<CSSProperties["borderBottomColor"]> = top,
	left: NonNullable<CSSProperties["borderLeftColor"]> = right,
): BorderColorLonghands {
	return {
		borderTopColor: top,
		borderRightColor: right,
		borderBottomColor: bottom,
		borderLeftColor: left,
	};
}

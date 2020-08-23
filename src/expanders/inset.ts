import type { CSSProperties } from "../CSSProperties";

export type InsetLonghands = Required<
	Pick<CSSProperties, "top" | "right" | "bottom" | "left">
>;

export function inset(all: NonNullable<CSSProperties["top"]>): InsetLonghands;

export function inset(
	vertical: NonNullable<CSSProperties["top"]>,
	horizontal: NonNullable<CSSProperties["right"]>,
): InsetLonghands;

export function inset(
	top: NonNullable<CSSProperties["top"]>,
	horizontal: NonNullable<CSSProperties["right"]>,
	bottom: NonNullable<CSSProperties["bottom"]>,
): InsetLonghands;

export function inset(
	top: NonNullable<CSSProperties["top"]>,
	right: NonNullable<CSSProperties["right"]>,
	bottom: NonNullable<CSSProperties["bottom"]>,
	left: NonNullable<CSSProperties["left"]>,
): InsetLonghands;

export function inset(
	top: NonNullable<CSSProperties["top"]>,
	right: NonNullable<CSSProperties["right"]> = top,
	bottom: NonNullable<CSSProperties["bottom"]> = top,
	left: NonNullable<CSSProperties["left"]> = right,
): InsetLonghands {
	return {
		top,
		right,
		bottom,
		left,
	};
}

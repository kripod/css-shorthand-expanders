import type { CSSProperties } from "./CSSProperties";

export type PaddingLonghands = Pick<
	CSSProperties,
	"paddingTop" | "paddingRight" | "paddingBottom" | "paddingLeft"
>;

export function padding(all: CSSProperties["paddingTop"]): PaddingLonghands;

export function padding(
	vertical: CSSProperties["paddingTop"],
	horizontal: CSSProperties["paddingRight"],
): PaddingLonghands;

export function padding(
	top: CSSProperties["paddingTop"],
	horizontal: CSSProperties["paddingRight"],
	bottom: CSSProperties["paddingBottom"],
): PaddingLonghands;

export function padding(
	top: CSSProperties["paddingTop"],
	right: CSSProperties["paddingRight"],
	bottom: CSSProperties["paddingBottom"],
	left: CSSProperties["paddingLeft"],
): PaddingLonghands;

export function padding(
	top: CSSProperties["paddingTop"],
	right: CSSProperties["paddingRight"] = top,
	bottom: CSSProperties["paddingBottom"] = top,
	left: CSSProperties["paddingLeft"] = right,
): PaddingLonghands {
	return {
		paddingTop: top,
		paddingRight: right,
		paddingBottom: bottom,
		paddingLeft: left,
	};
}

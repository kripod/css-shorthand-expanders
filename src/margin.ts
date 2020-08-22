import type { CSSProperties } from "./CSSProperties";

export type MarginLonghands = Pick<
	CSSProperties,
	"marginTop" | "marginRight" | "marginBottom" | "marginLeft"
>;

export function margin(all: CSSProperties["marginTop"]): MarginLonghands;

export function margin(
	vertical: CSSProperties["marginTop"],
	horizontal: CSSProperties["marginRight"],
): MarginLonghands;

export function margin(
	top: CSSProperties["marginTop"],
	horizontal: CSSProperties["marginRight"],
	bottom: CSSProperties["marginBottom"],
): MarginLonghands;

export function margin(
	top: CSSProperties["marginTop"],
	right: CSSProperties["marginRight"],
	bottom: CSSProperties["marginBottom"],
	left: CSSProperties["marginLeft"],
): MarginLonghands;

export function margin(
	top: CSSProperties["marginTop"],
	right: CSSProperties["marginRight"] = top,
	bottom: CSSProperties["marginBottom"] = top,
	left: CSSProperties["marginLeft"] = right,
): MarginLonghands {
	return {
		marginTop: top,
		marginRight: right,
		marginBottom: bottom,
		marginLeft: left,
	};
}

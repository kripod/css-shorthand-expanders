import type { CSSProperties } from "./CSSProperties";

export type BorderWidthLonghands<
	T extends CSSProperties["borderTopWidth"] = CSSProperties["borderTopWidth"],
	R extends CSSProperties["borderRightWidth"] = T,
	B extends CSSProperties["borderBottomWidth"] = T,
	L extends CSSProperties["borderLeftWidth"] = R
> = {
	borderTopWidth: T;
	borderRightWidth: R;
	borderBottomWidth: B;
	borderLeftWidth: L;
};

export function borderWidth<T extends CSSProperties["borderTopWidth"]>(
	all: T,
): BorderWidthLonghands<T>;

export function borderWidth<
	T extends CSSProperties["borderTopWidth"],
	R extends CSSProperties["borderRightWidth"]
>(vertical: T, horizontal: R): BorderWidthLonghands<T, R>;

export function borderWidth<
	T extends CSSProperties["borderTopWidth"],
	R extends CSSProperties["borderRightWidth"],
	B extends CSSProperties["borderBottomWidth"]
>(top: T, horizontal: R, bottom: B): BorderWidthLonghands<T, R, B>;

export function borderWidth<
	T extends CSSProperties["borderTopWidth"],
	R extends CSSProperties["borderRightWidth"],
	B extends CSSProperties["borderBottomWidth"],
	L extends CSSProperties["borderLeftWidth"]
>(top: T, right: R, bottom: B, left: L): BorderWidthLonghands<T, R, B, L>;

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

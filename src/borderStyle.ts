import type { CSSProperties } from "./CSSProperties";

export type BorderStyleLonghands<
	T extends CSSProperties["borderTopStyle"] = CSSProperties["borderTopStyle"],
	R extends CSSProperties["borderRightStyle"] = T,
	B extends CSSProperties["borderBottomStyle"] = T,
	L extends CSSProperties["borderLeftStyle"] = R
> = {
	borderTopStyle: T;
	borderRightStyle: R;
	borderBottomStyle: B;
	borderLeftStyle: L;
};

export function borderStyle<T extends CSSProperties["borderTopStyle"]>(
	all: T,
): BorderStyleLonghands<T>;

export function borderStyle<
	T extends CSSProperties["borderTopStyle"],
	R extends CSSProperties["borderRightStyle"]
>(vertical: T, horizontal: R): BorderStyleLonghands<T, R>;

export function borderStyle<
	T extends CSSProperties["borderTopStyle"],
	R extends CSSProperties["borderRightStyle"],
	B extends CSSProperties["borderBottomStyle"]
>(top: T, horizontal: R, bottom: B): BorderStyleLonghands<T, R, B>;

export function borderStyle<
	T extends CSSProperties["borderTopStyle"],
	R extends CSSProperties["borderRightStyle"],
	B extends CSSProperties["borderBottomStyle"],
	L extends CSSProperties["borderLeftStyle"]
>(top: T, right: R, bottom: B, left: L): BorderStyleLonghands<T, R, B, L>;

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

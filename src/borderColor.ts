import type { CSSProperties } from "./CSSProperties";

export type BorderColorLonghands<
	T extends CSSProperties["borderTopColor"] = CSSProperties["borderTopColor"],
	R extends CSSProperties["borderRightColor"] = T,
	B extends CSSProperties["borderBottomColor"] = T,
	L extends CSSProperties["borderLeftColor"] = R
> = {
	borderTopColor: T;
	borderRightColor: R;
	borderBottomColor: B;
	borderLeftColor: L;
};

export function borderColor<T extends CSSProperties["borderTopColor"]>(
	all: T,
): BorderColorLonghands<T>;

export function borderColor<
	T extends CSSProperties["borderTopColor"],
	R extends CSSProperties["borderRightColor"]
>(vertical: T, horizontal: R): BorderColorLonghands<T, R>;

export function borderColor<
	T extends CSSProperties["borderTopColor"],
	R extends CSSProperties["borderRightColor"],
	B extends CSSProperties["borderBottomColor"]
>(top: T, horizontal: R, bottom: B): BorderColorLonghands<T, R, B>;

export function borderColor<
	T extends CSSProperties["borderTopColor"],
	R extends CSSProperties["borderRightColor"],
	B extends CSSProperties["borderBottomColor"],
	L extends CSSProperties["borderLeftColor"]
>(top: T, right: R, bottom: B, left: L): BorderColorLonghands<T, R, B, L>;

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

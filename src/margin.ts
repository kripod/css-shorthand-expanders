import type { CSSProperties } from "./CSSProperties";

export type MarginLonghands<
	T extends CSSProperties["marginTop"] = CSSProperties["marginTop"],
	R extends CSSProperties["marginRight"] = T,
	B extends CSSProperties["marginBottom"] = T,
	L extends CSSProperties["marginLeft"] = R
> = {
	marginTop: T;
	marginRight: R;
	marginBottom: B;
	marginLeft: L;
};

export function margin<T extends CSSProperties["marginTop"]>(
	all: T,
): MarginLonghands<T>;

export function margin<
	T extends CSSProperties["marginTop"],
	R extends CSSProperties["marginRight"]
>(vertical: T, horizontal: R): MarginLonghands<T, R>;

export function margin<
	T extends CSSProperties["marginTop"],
	R extends CSSProperties["marginRight"],
	B extends CSSProperties["marginBottom"]
>(top: T, horizontal: R, bottom: B): MarginLonghands<T, R, B>;

export function margin<
	T extends CSSProperties["marginTop"],
	R extends CSSProperties["marginRight"],
	B extends CSSProperties["marginBottom"],
	L extends CSSProperties["marginLeft"]
>(top: T, right: R, bottom: B, left: L): MarginLonghands<T, R, B, L>;

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

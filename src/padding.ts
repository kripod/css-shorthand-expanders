import type { CSSProperties } from "./CSSProperties";

export type PaddingLonghands<
	T extends CSSProperties["paddingTop"] = CSSProperties["paddingTop"],
	R extends CSSProperties["paddingRight"] = T,
	B extends CSSProperties["paddingBottom"] = T,
	L extends CSSProperties["paddingLeft"] = R
> = {
	paddingTop: T;
	paddingRight: R;
	paddingBottom: B;
	paddingLeft: L;
};

export function padding<T extends CSSProperties["paddingTop"]>(
	all: T,
): PaddingLonghands<T>;

export function padding<
	T extends CSSProperties["paddingTop"],
	R extends CSSProperties["paddingRight"]
>(vertical: T, horizontal: R): PaddingLonghands<T, R>;

export function padding<
	T extends CSSProperties["paddingTop"],
	R extends CSSProperties["paddingRight"],
	B extends CSSProperties["paddingBottom"]
>(top: T, horizontal: R, bottom: B): PaddingLonghands<T, R, B>;

export function padding<
	T extends CSSProperties["paddingTop"],
	R extends CSSProperties["paddingRight"],
	B extends CSSProperties["paddingBottom"],
	L extends CSSProperties["paddingLeft"]
>(top: T, right: R, bottom: B, left: L): PaddingLonghands<T, R, B, L>;

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

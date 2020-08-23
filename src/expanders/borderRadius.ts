import type { CSSProperties } from "../CSSProperties";

export type BorderRadiusLonghands = Required<
	Pick<
		CSSProperties,
		| "borderTopLeftRadius"
		| "borderTopRightRadius"
		| "borderBottomRightRadius"
		| "borderBottomLeftRadius"
	>
>;

export function borderRadius(
	all: NonNullable<CSSProperties["borderTopLeftRadius"]>,
): BorderRadiusLonghands;

export function borderRadius(
	topLeftAndBottomRight: NonNullable<CSSProperties["borderTopLeftRadius"]>,
	topRightAndBottomLeft: NonNullable<CSSProperties["borderTopRightRadius"]>,
): BorderRadiusLonghands;

export function borderRadius(
	topLeft: NonNullable<CSSProperties["borderTopLeftRadius"]>,
	topRightAndBottomLeft: NonNullable<CSSProperties["borderTopRightRadius"]>,
	bottomRight: NonNullable<CSSProperties["borderBottomRightRadius"]>,
): BorderRadiusLonghands;

export function borderRadius(
	topLeft: NonNullable<CSSProperties["borderTopLeftRadius"]>,
	topRight: NonNullable<CSSProperties["borderTopRightRadius"]>,
	bottomRight: NonNullable<CSSProperties["borderBottomRightRadius"]>,
	bottomLeft: NonNullable<CSSProperties["borderBottomLeftRadius"]>,
): BorderRadiusLonghands;

export function borderRadius(
	topLeft: NonNullable<CSSProperties["borderTopLeftRadius"]>,
	topRight: NonNullable<CSSProperties["borderTopRightRadius"]> = topLeft,
	bottomRight: NonNullable<CSSProperties["borderBottomRightRadius"]> = topLeft,
	bottomLeft: NonNullable<CSSProperties["borderBottomLeftRadius"]> = topRight,
): BorderRadiusLonghands {
	return {
		borderTopLeftRadius: topLeft,
		borderTopRightRadius: topRight,
		borderBottomRightRadius: bottomRight,
		borderBottomLeftRadius: bottomLeft,
	};
}

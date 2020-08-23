import type { CSSProperties } from "css-shorthand-expanders";

export type PlaceSelfLonghands = Required<
	Pick<CSSProperties, "alignSelf" | "justifySelf">
>;

export function placeSelf(
	align: NonNullable<CSSProperties["alignSelf"]>,
	justify: NonNullable<CSSProperties["justifySelf"]> = align,
): PlaceSelfLonghands {
	return {
		alignSelf: align,
		justifySelf: justify,
	};
}

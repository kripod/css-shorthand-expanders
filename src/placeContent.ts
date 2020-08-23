import type { CSSProperties } from "css-shorthand-expanders";

export type PlaceContentLonghands = Required<
	Pick<CSSProperties, "alignContent" | "justifyContent">
>;

export function placeContent(
	align: NonNullable<CSSProperties["alignContent"]>,
	justify: NonNullable<CSSProperties["justifyContent"]> = align,
): PlaceContentLonghands {
	return {
		alignContent: align,
		justifyContent: justify,
	};
}

import type { CSSProperties } from "css-shorthand-expanders";

export type PlaceContentLonghands = Pick<
	CSSProperties,
	"alignContent" | "justifyContent"
>;

export function placeContent(
	align: CSSProperties["alignContent"],
	justify: CSSProperties["justifyContent"] = align,
): PlaceContentLonghands {
	return {
		alignContent: align,
		justifyContent: justify,
	};
}

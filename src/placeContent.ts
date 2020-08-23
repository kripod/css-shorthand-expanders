import type { CSSProperties } from "./CSSProperties";

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

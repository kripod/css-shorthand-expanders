import type { CSSProperties } from "./CSSProperties";

export type PlaceItemsLonghands = Pick<
	CSSProperties,
	"alignItems" | "justifyItems"
>;

export function placeItems(
	align: CSSProperties["alignItems"],
	justify: CSSProperties["justifyItems"] = align,
): PlaceItemsLonghands {
	return {
		alignItems: align,
		justifyItems: justify,
	};
}

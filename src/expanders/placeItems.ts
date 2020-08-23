import type { CSSProperties } from "../CSSProperties";

export type PlaceItemsLonghands = Required<
	Pick<CSSProperties, "alignItems" | "justifyItems">
>;

export function placeItems(
	align: NonNullable<CSSProperties["alignItems"]>,
	justify: NonNullable<CSSProperties["justifyItems"]> = align,
): PlaceItemsLonghands {
	return {
		alignItems: align,
		justifyItems: justify,
	};
}

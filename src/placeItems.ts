import type { CSSProperties } from "./CSSProperties";

export function placeItems(
	align: CSSProperties["alignItems"],
	justify: CSSProperties["justifyItems"] = align,
): Pick<CSSProperties, "alignItems" | "justifyItems"> {
	return {
		alignItems: align,
		justifyItems: justify,
	};
}

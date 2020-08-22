import type { CSSProperties } from "./CSSProperties";

export function placeItems(
	align: CSSProperties["alignItems"],
	justify: CSSProperties["justifyItems"] = align,
): {
	alignItems: CSSProperties["alignItems"];
	justifyItems: CSSProperties["justifyItems"];
} {
	return {
		alignItems: align,
		justifyItems: justify,
	};
}

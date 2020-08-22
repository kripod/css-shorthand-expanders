import type { CSSProperties } from "./CSSProperties";

export function placeContent(
	align: CSSProperties["alignContent"],
	justify: CSSProperties["justifyContent"] = align,
): {
	alignContent: CSSProperties["alignContent"];
	justifyContent: CSSProperties["justifyContent"];
} {
	return {
		alignContent: align,
		justifyContent: justify,
	};
}

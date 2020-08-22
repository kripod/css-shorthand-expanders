import type { CSSProperties } from "./CSSProperties";

export function placeContent(
	align: CSSProperties["alignContent"],
	justify: CSSProperties["justifyContent"] = align,
): Pick<CSSProperties, "alignContent" | "justifyContent"> {
	return {
		alignContent: align,
		justifyContent: justify,
	};
}

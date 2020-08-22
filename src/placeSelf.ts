import type { CSSProperties } from "./CSSProperties";

export function placeSelf(
	align: CSSProperties["alignSelf"],
	justify: CSSProperties["justifySelf"] = align,
): Pick<CSSProperties, "alignSelf" | "justifySelf"> {
	return {
		alignSelf: align,
		justifySelf: justify,
	};
}

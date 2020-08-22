import type { CSSProperties } from "./CSSProperties";

export function placeSelf(
	align: CSSProperties["alignSelf"],
	justify: CSSProperties["justifySelf"] = align,
): {
	alignSelf: CSSProperties["alignSelf"];
	justifySelf: CSSProperties["justifySelf"];
} {
	return {
		alignSelf: align,
		justifySelf: justify,
	};
}

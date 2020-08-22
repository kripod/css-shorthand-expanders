import type { CSSProperties } from "./CSSProperties";

export function listStyle(
	position: CSSProperties["listStylePosition"],
	image: CSSProperties["listStyleImage"] = "none",
	type: CSSProperties["listStyleType"] = "disc",
): Pick<
	CSSProperties,
	"listStylePosition" | "listStyleImage" | "listStyleType"
> {
	return {
		listStylePosition: position,
		listStyleImage: image,
		listStyleType: type,
	};
}

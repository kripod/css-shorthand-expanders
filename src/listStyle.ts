import type { CSSProperties } from "./CSSProperties";

export type ListStyleLonghands = Pick<
	CSSProperties,
	"listStylePosition" | "listStyleImage" | "listStyleType"
>;

export function listStyle(
	position: CSSProperties["listStylePosition"],
	image: CSSProperties["listStyleImage"] = "none",
	type: CSSProperties["listStyleType"] = "disc",
): ListStyleLonghands {
	return {
		listStylePosition: position,
		listStyleImage: image,
		listStyleType: type,
	};
}

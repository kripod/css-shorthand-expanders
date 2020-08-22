import type { CSSProperties } from "./CSSProperties";

export function listStyle(
	position: CSSProperties["listStylePosition"],
	image: CSSProperties["listStyleImage"] = "none",
	type: CSSProperties["listStyleType"] = "disc",
): {
	listStylePosition: CSSProperties["listStylePosition"];
	listStyleImage: CSSProperties["listStyleImage"];
	listStyleType: CSSProperties["listStyleType"];
} {
	return {
		listStylePosition: position,
		listStyleImage: image,
		listStyleType: type,
	};
}

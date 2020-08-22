import type { CSSProperties } from "./CSSProperties";

export function listStyle<
	Position extends CSSProperties["listStylePosition"],
	Image extends CSSProperties["listStyleImage"] = "none",
	Type extends CSSProperties["listStyleType"] = "disc"
>(
	position: Position,
	image: Image = "none" as Image,
	type: Type = "disc" as Type,
): {
	listStylePosition: Position;
	listStyleImage: Image;
	listStyleType: Type;
} {
	return {
		listStylePosition: position,
		listStyleImage: image,
		listStyleType: type,
	};
}

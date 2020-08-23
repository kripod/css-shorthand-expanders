import type { CSSProperties } from "./CSSProperties";

export type ListStyleLonghands = Required<
	Pick<CSSProperties, "listStylePosition" | "listStyleImage" | "listStyleType">
>;

export function listStyle(
	position: NonNullable<CSSProperties["listStylePosition"]>,
	image: NonNullable<CSSProperties["listStyleImage"]> = "none",
	type: NonNullable<CSSProperties["listStyleType"]> = "disc",
): ListStyleLonghands {
	return {
		listStylePosition: position,
		listStyleImage: image,
		listStyleType: type,
	};
}

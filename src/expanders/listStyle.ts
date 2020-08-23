import type { CSSProperties } from "../CSSProperties";

export type ListStyleLonghands = Required<
	Pick<CSSProperties, "listStyleType" | "listStyleImage" | "listStylePosition">
>;

export function listStyle(
	type: NonNullable<CSSProperties["listStyleType"]>,
	image: NonNullable<CSSProperties["listStyleImage"]> = "none",
	position: NonNullable<CSSProperties["listStylePosition"]> = "outside",
): ListStyleLonghands {
	return {
		listStyleType: type,
		listStyleImage: image,
		listStylePosition: position,
	};
}

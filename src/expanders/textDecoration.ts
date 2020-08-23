import type { CSSProperties } from "../CSSProperties";

export type OutlineLonghands = Required<
	Pick<
		CSSProperties,
		| "textDecorationLine"
		| "textDecorationColor"
		| "textDecorationStyle"
		| "textDecorationThickness"
	>
>;

export function textDecoration(
	line: NonNullable<CSSProperties["textDecorationLine"]>,
	color: NonNullable<CSSProperties["textDecorationColor"]> = "currentcolor",
	style: NonNullable<CSSProperties["textDecorationStyle"]> = "solid",
	thickness: NonNullable<CSSProperties["textDecorationThickness"]> = "auto",
): OutlineLonghands {
	return {
		textDecorationLine: line,
		textDecorationColor: color,
		textDecorationStyle: style,
		textDecorationThickness: thickness,
	};
}

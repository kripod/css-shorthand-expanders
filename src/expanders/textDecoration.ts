import type { CSSProperties } from "../CSSProperties";

export type TextDecorationLonghands = Required<
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
): TextDecorationLonghands {
	return {
		textDecorationLine: line,
		textDecorationColor: color,
		textDecorationStyle: style,
		textDecorationThickness: thickness,
	};
}

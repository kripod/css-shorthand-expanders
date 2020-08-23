import type { CSSProperties } from "../CSSProperties";

export type OutlineLonghands = Required<
	Pick<CSSProperties, "outlineWidth" | "outlineColor" | "outlineStyle">
>;

export function outline(
	width: NonNullable<CSSProperties["outlineWidth"]>,
	color: NonNullable<CSSProperties["outlineColor"]> = "currentcolor",
	style: NonNullable<CSSProperties["outlineStyle"]> = "solid",
): OutlineLonghands {
	return {
		outlineWidth: width,
		outlineColor: color,
		outlineStyle: style,
	};
}

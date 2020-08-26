import type { CSSProperties } from "../CSSProperties";

export type BorderLeftLonghands = Required<
	Pick<CSSProperties, "borderLeftWidth" | "borderLeftColor" | "borderLeftStyle">
>;

export function borderLeft(
	width: NonNullable<CSSProperties["borderLeftWidth"]>,
	color: NonNullable<CSSProperties["borderLeftColor"]> = "currentcolor",
	style: NonNullable<CSSProperties["borderLeftStyle"]> = "solid",
): BorderLeftLonghands {
	return {
		borderLeftWidth: width,
		borderLeftColor: color,
		borderLeftStyle: style,
	};
}

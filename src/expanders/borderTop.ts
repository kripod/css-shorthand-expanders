import type { CSSProperties } from "../CSSProperties";

export type BorderTopLonghands = Required<
	Pick<CSSProperties, "borderTopWidth" | "borderTopColor" | "borderTopStyle">
>;

export function borderTop(
	width: NonNullable<CSSProperties["borderTopWidth"]>,
	color: NonNullable<CSSProperties["borderTopColor"]> = "currentcolor",
	style: NonNullable<CSSProperties["borderTopStyle"]> = "solid",
): BorderTopLonghands {
	return {
		borderTopWidth: width,
		borderTopColor: color,
		borderTopStyle: style,
	};
}

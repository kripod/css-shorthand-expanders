import type { CSSProperties } from "../CSSProperties";

export type BorderRightLonghands = Required<
	Pick<
		CSSProperties,
		"borderRightWidth" | "borderRightColor" | "borderRightStyle"
	>
>;

export function borderRight(
	width: NonNullable<CSSProperties["borderRightWidth"]>,
	color: NonNullable<CSSProperties["borderRightColor"]> = "currentcolor",
	style: NonNullable<CSSProperties["borderRightStyle"]> = "solid",
): BorderRightLonghands {
	return {
		borderRightWidth: width,
		borderRightColor: color,
		borderRightStyle: style,
	};
}

import type { CSSProperties } from "../CSSProperties";

export type BorderBottomLonghands = Required<
	Pick<
		CSSProperties,
		"borderBottomWidth" | "borderBottomColor" | "borderBottomStyle"
	>
>;

export function borderBottom(
	width: NonNullable<CSSProperties["borderBottomWidth"]>,
	color: NonNullable<CSSProperties["borderBottomColor"]> = "currentcolor",
	style: NonNullable<CSSProperties["borderBottomStyle"]> = "solid",
): BorderBottomLonghands {
	return {
		borderBottomWidth: width,
		borderBottomColor: color,
		borderBottomStyle: style,
	};
}

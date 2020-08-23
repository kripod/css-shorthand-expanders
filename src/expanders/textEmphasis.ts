import type { CSSProperties } from "../CSSProperties";

export type TextEmphasisLonghands = Required<
	Pick<CSSProperties, "textEmphasisStyle" | "textEmphasisColor">
>;

export function textEmphasis(
	style: NonNullable<CSSProperties["textEmphasisStyle"]>,
	color: NonNullable<CSSProperties["textEmphasisColor"]> = "currentcolor",
): TextEmphasisLonghands {
	return {
		textEmphasisStyle: style,
		textEmphasisColor: color,
	};
}

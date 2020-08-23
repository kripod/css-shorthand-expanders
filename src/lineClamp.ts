import type { CSSProperties } from "./CSSProperties";

export type LineClampLonghands = Pick<
	CSSProperties,
	"maxLines" | "blockEllipsis"
> & /* TODO: Wrap inside `ConstantValuedCSSProperties` (frenic/csstype#111) */ {
	continue: "discard";
};

export function lineClamp(
	maxLines: CSSProperties["maxLines"],
	blockEllipsis: CSSProperties["blockEllipsis"] = "auto",
): LineClampLonghands {
	return {
		maxLines,
		blockEllipsis,
		continue: "discard",
	};
}

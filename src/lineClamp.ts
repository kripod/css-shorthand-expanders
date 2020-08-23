import type { CSSProperties } from "./CSSProperties";

/* TODO: Replace "blockOverflow" with "blockEllipsis" (frenic/csstype#94) */

export type LineClampLonghands = Required<Pick<CSSProperties, "maxLines">> & {
	blockEllipsis: CSSProperties["blockOverflow"];
} & /* TODO: Wrap inside `ConstantValuedCSSProperties` (frenic/csstype#111) */ {
	continue: "discard";
};

export function lineClamp(
	maxLines: NonNullable<CSSProperties["maxLines"]>,
	blockEllipsis: NonNullable<CSSProperties["blockOverflow"]> = "auto",
): LineClampLonghands {
	return {
		maxLines,
		blockEllipsis,
		continue: "discard",
	};
}

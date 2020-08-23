import type { CSSProperties, CSSPropertiesWithValues } from "../CSSProperties";

export type LineClampLonghands = Required<
	Pick<CSSProperties, "maxLines" | "blockEllipsis">
> &
	CSSPropertiesWithValues<{
		continue: "discard";
	}>;

export function lineClamp(
	maxLines: NonNullable<CSSProperties["maxLines"]>,
	blockEllipsis: NonNullable<CSSProperties["blockEllipsis"]> = "auto",
): LineClampLonghands {
	return {
		maxLines,
		blockEllipsis,
		continue: "discard",
	};
}

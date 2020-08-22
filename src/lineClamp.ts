import { CSSProperties } from "./CSSProperties";

export function lineClamp<
	MaxLines extends CSSProperties["maxLines"],
	BlockEllipsis extends CSSProperties["blockEllipsis"] = "auto"
>(
	maxLines: MaxLines,
	blockEllipsis: BlockEllipsis = "auto" as BlockEllipsis,
): {
	maxLines: MaxLines;
	continue: "discard";
	blockEllipsis: BlockEllipsis;
} {
	return {
		maxLines,
		continue: "discard",
		blockEllipsis,
	};
}

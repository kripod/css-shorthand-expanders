import type { CSSProperties } from "./CSSProperties";

export function lineClamp(
	maxLines: CSSProperties["maxLines"],
	blockEllipsis: CSSProperties["blockEllipsis"] = "auto",
): {
	maxLines: CSSProperties["maxLines"];
	blockEllipsis: CSSProperties["blockEllipsis"];
	continue: "discard";
} {
	return {
		maxLines,
		blockEllipsis,
		continue: "discard",
	};
}

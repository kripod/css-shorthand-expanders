import type { CSSProperties } from "./CSSProperties";

export function lineClamp(
	maxLines: CSSProperties["maxLines"],
	blockEllipsis: CSSProperties["blockEllipsis"] = "auto",
): Pick<CSSProperties, "maxLines" | "blockEllipsis"> & {
	/* TODO: Wrap inside `ConstantValuedCSSProperties` */
	continue: "discard";
} {
	return {
		maxLines,
		blockEllipsis,
		continue: "discard",
	};
}

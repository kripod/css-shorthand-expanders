import type { CSSProperties } from "./CSSProperties";

export type FlexLonghands = Pick<
	CSSProperties,
	"flexGrow" | "flexShrink" | "flexBasis"
>;

export function flex(
	grow: CSSProperties["flexGrow"],
	shrink: CSSProperties["flexShrink"] = 1,
	basis: CSSProperties["flexBasis"] = 0,
): FlexLonghands {
	return {
		flexGrow: grow,
		flexShrink: shrink,
		flexBasis: basis,
	};
}

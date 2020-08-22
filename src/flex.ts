import type { CSSProperties } from "./CSSProperties";

export function flex(
	grow: CSSProperties["flexGrow"],
	shrink: CSSProperties["flexShrink"] = 1,
	basis: CSSProperties["flexBasis"] = 0,
): {
	flexGrow: CSSProperties["flexGrow"];
	flexShrink: CSSProperties["flexShrink"];
	flexBasis: CSSProperties["flexBasis"];
} {
	return {
		flexGrow: grow,
		flexShrink: shrink,
		flexBasis: basis,
	};
}

import type { CSSProperties } from "./CSSProperties";

export function flex<
	Grow extends CSSProperties["flexGrow"],
	Shrink extends CSSProperties["flexShrink"] = 1,
	Basis extends CSSProperties["flexBasis"] = 0
>(
	grow: Grow,
	shrink: Shrink = (1 as unknown) as Shrink,
	basis: Basis = 0 as Basis,
): {
	flexGrow: Grow;
	flexShrink: Shrink;
	flexBasis: Basis;
} {
	return {
		flexGrow: grow,
		flexShrink: shrink,
		flexBasis: basis,
	};
}

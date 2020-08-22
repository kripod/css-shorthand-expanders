import type { CSSProperties } from "./CSSProperties";

export function flex(
	grow: CSSProperties["flexGrow"],
	shrink: CSSProperties["flexShrink"] = 1,
	basis: CSSProperties["flexBasis"] = 0,
): Pick<CSSProperties, "flexGrow" | "flexShrink" | "flexBasis"> {
	return {
		flexGrow: grow,
		flexShrink: shrink,
		flexBasis: basis,
	};
}

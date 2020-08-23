import type { CSSProperties } from "./CSSProperties";

export type FlexLonghands = Required<
	Pick<CSSProperties, "flexGrow" | "flexShrink" | "flexBasis">
>;

export function flex(
	grow: NonNullable<CSSProperties["flexGrow"]>,
	shrink: NonNullable<CSSProperties["flexShrink"]> = 1,
	basis: NonNullable<CSSProperties["flexBasis"]> = 0,
): FlexLonghands {
	return {
		flexGrow: grow,
		flexShrink: shrink,
		flexBasis: basis,
	};
}

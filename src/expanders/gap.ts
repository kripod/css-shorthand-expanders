import type { CSSProperties } from "../CSSProperties";

export type GapLonghands = Required<
	Pick<CSSProperties, "rowGap" | "columnGap">
>;

export function gap(
	rowGap: NonNullable<CSSProperties["rowGap"]>,
	columnGap: NonNullable<CSSProperties["columnGap"]> = rowGap,
): GapLonghands {
	return {
		rowGap,
		columnGap,
	};
}

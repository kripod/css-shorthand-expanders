import type { CSSProperties } from "./CSSProperties";

export type GapLonghands = Pick<CSSProperties, "rowGap" | "columnGap">;

export function gap(
	rowGap: CSSProperties["rowGap"],
	columnGap: CSSProperties["columnGap"] = rowGap,
): GapLonghands {
	return {
		rowGap,
		columnGap,
	};
}

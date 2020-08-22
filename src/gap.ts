import type { CSSProperties } from "./CSSProperties";

export function gap(
	rowGap: CSSProperties["rowGap"],
	columnGap: CSSProperties["columnGap"] = rowGap,
): Pick<CSSProperties, "rowGap" | "columnGap"> {
	return {
		rowGap,
		columnGap,
	};
}

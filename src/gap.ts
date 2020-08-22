import type { CSSProperties } from "./CSSProperties";

export function gap(
	rowGap: CSSProperties["rowGap"],
	columnGap: CSSProperties["columnGap"] = rowGap,
): {
	rowGap: CSSProperties["rowGap"];
	columnGap: CSSProperties["columnGap"];
} {
	return {
		rowGap,
		columnGap,
	};
}

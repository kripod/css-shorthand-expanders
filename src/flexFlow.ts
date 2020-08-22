import type { CSSProperties } from "./CSSProperties";

export function flexFlow(
	direction: CSSProperties["flexDirection"],
	wrap: CSSProperties["flexWrap"] = "nowrap",
): {
	flexDirection: CSSProperties["flexDirection"];
	flexWrap: CSSProperties["flexWrap"];
} {
	return {
		flexDirection: direction,
		flexWrap: wrap,
	};
}

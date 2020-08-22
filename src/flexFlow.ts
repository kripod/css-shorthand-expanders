import type { CSSProperties } from "./CSSProperties";

export function flexFlow(
	direction: CSSProperties["flexDirection"],
	wrap: CSSProperties["flexWrap"] = "nowrap",
): Pick<CSSProperties, "flexDirection" | "flexWrap"> {
	return {
		flexDirection: direction,
		flexWrap: wrap,
	};
}

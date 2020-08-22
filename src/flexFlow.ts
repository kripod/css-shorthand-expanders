import type { CSSProperties } from "./CSSProperties";

export function flexFlow<
	Direction extends CSSProperties["flexDirection"],
	Wrap extends CSSProperties["flexWrap"] = "nowrap"
>(
	direction: Direction,
	wrap: Wrap = "nowrap" as Wrap,
): {
	flexDirection: Direction;
	flexWrap: Wrap;
} {
	return {
		flexDirection: direction,
		flexWrap: wrap,
	};
}

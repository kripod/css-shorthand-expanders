import type { CSSProperties } from "css-shorthand-expanders";

export type FlexFlowLonghands = Pick<
	CSSProperties,
	"flexDirection" | "flexWrap"
>;

export function flexFlow(
	direction: CSSProperties["flexDirection"],
	wrap: CSSProperties["flexWrap"] = "nowrap",
): FlexFlowLonghands {
	return {
		flexDirection: direction,
		flexWrap: wrap,
	};
}

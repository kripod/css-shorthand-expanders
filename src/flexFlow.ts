import type { CSSProperties } from "css-shorthand-expanders";

export type FlexFlowLonghands = Required<
	Pick<CSSProperties, "flexDirection" | "flexWrap">
>;

export function flexFlow(
	direction: NonNullable<CSSProperties["flexDirection"]>,
	wrap: NonNullable<CSSProperties["flexWrap"]> = "nowrap",
): FlexFlowLonghands {
	return {
		flexDirection: direction,
		flexWrap: wrap,
	};
}

import type { CSSProperties } from "../CSSProperties";

export type ColumnRuleLonghands = Required<
	Pick<CSSProperties, "columnRuleWidth" | "columnRuleColor" | "columnRuleStyle">
>;

export function columnRule(
	width: NonNullable<CSSProperties["columnRuleWidth"]>,
	color: NonNullable<CSSProperties["columnRuleColor"]> = "currentcolor",
	style: NonNullable<CSSProperties["columnRuleStyle"]> = "solid",
): ColumnRuleLonghands {
	return {
		columnRuleWidth: width,
		columnRuleColor: color,
		columnRuleStyle: style,
	};
}

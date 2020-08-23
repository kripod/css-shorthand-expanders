import type { CSSProperties } from "../CSSProperties";

export type ColumnsLonghands = Required<
	Pick<CSSProperties, "columnWidth" | "columnCount">
>;

export function columns(
	idealMinWidth: NonNullable<CSSProperties["columnWidth"]>,
	maxCount: NonNullable<CSSProperties["columnCount"]> = "auto",
): ColumnsLonghands {
	return {
		columnWidth: idealMinWidth,
		columnCount: maxCount,
	};
}

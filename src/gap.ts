import type { CSSProperties } from "./CSSProperties";

export function gap<
	RowGap extends CSSProperties["rowGap"],
	ColumnGap extends CSSProperties["columnGap"] = RowGap
>(
	rowGap: RowGap,
	columnGap: ColumnGap = (rowGap as unknown) as ColumnGap,
): {
	rowGap: RowGap;
	columnGap: ColumnGap;
} {
	return {
		rowGap,
		columnGap,
	};
}

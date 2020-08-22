import type { CSSProperties } from "./CSSProperties";

export function placeItems<
	Align extends CSSProperties["alignItems"],
	Justify extends CSSProperties["justifyItems"] = Align
>(
	align: Align,
	justify: Justify = (align as unknown) as Justify,
): {
	alignItems: Align;
	justifyItems: Justify;
} {
	return {
		alignItems: align,
		justifyItems: justify,
	};
}

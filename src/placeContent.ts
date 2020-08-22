import type { CSSProperties } from "./CSSProperties";

export function placeContent<
	Align extends CSSProperties["alignContent"],
	Justify extends CSSProperties["justifyContent"] = Align
>(
	align: Align,
	justify: Justify = (align as unknown) as Justify,
): {
	alignContent: Align;
	justifyContent: Justify;
} {
	return {
		alignContent: align,
		justifyContent: justify,
	};
}

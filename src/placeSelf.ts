import type { CSSProperties } from "./CSSProperties";

export function placeSelf<
	Align extends CSSProperties["alignSelf"],
	Justify extends CSSProperties["justifySelf"] = Align
>(
	align: Align,
	justify: Justify = (align as unknown) as Justify,
): {
	alignSelf: Align;
	justifySelf: Justify;
} {
	return {
		alignSelf: align,
		justifySelf: justify,
	};
}

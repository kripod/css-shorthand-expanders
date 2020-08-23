import type { CSSProperties } from "./CSSProperties";

export type PlaceSelfLonghands = Pick<
	CSSProperties,
	"alignSelf" | "justifySelf"
>;

export function placeSelf(
	align: CSSProperties["alignSelf"],
	justify: CSSProperties["justifySelf"] = align,
): PlaceSelfLonghands {
	return {
		alignSelf: align,
		justifySelf: justify,
	};
}

import type { CSSProperties } from "./CSSProperties";

export type BorderImageLonghands = Pick<
	CSSProperties,
	| "borderImageSource"
	| "borderImageSlice"
	| "borderImageWidth"
	| "borderImageOutset"
	| "borderImageRepeat"
>;

export function borderImage(
	source: CSSProperties["borderImageSource"],
	slice: CSSProperties["borderImageSlice"] = "100%",
	width: CSSProperties["borderImageWidth"] = 1,
	outset: CSSProperties["borderImageOutset"] = 0,
	repeat: CSSProperties["borderImageRepeat"] = "stretch",
): BorderImageLonghands {
	return {
		borderImageSource: source,
		borderImageSlice: slice,
		borderImageWidth: width,
		borderImageOutset: outset,
		borderImageRepeat: repeat,
	};
}

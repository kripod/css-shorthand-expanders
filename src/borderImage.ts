import type { CSSProperties, CSSPropertiesWithValues } from "./CSSProperties";

export type BorderImageLonghandsWithInitialValues = CSSPropertiesWithValues<{
	borderImageSource: "none";
	borderImageSlice: "100%";
	borderImageWidth: 1;
	borderImageOutset: 0;
	borderImageRepeat: "stretch";
}>;

export function borderImage(
	source: CSSProperties["borderImageSource"],
	slice: CSSProperties["borderImageSlice"] = "100%",
	width: CSSProperties["borderImageWidth"] = 1,
	outset: CSSProperties["borderImageOutset"] = 0,
	repeat: CSSProperties["borderImageRepeat"] = "stretch",
): Pick<
	CSSProperties,
	| "borderImageSource"
	| "borderImageSlice"
	| "borderImageWidth"
	| "borderImageOutset"
	| "borderImageRepeat"
> {
	return {
		borderImageSource: source,
		borderImageSlice: slice,
		borderImageWidth: width,
		borderImageOutset: outset,
		borderImageRepeat: repeat,
	};
}

import type { CSSProperties } from "css-shorthand-expanders";

import type { CSSPropertiesWithValues } from "./CSSProperties";

export type BorderImageLonghandsWithInitialValues = CSSPropertiesWithValues<{
	borderImageSource: "none";
	borderImageSlice: "100%";
	borderImageWidth: 1;
	borderImageOutset: 0;
	borderImageRepeat: "stretch";
}>;

export type BorderImageLonghands = Required<
	Pick<CSSProperties, keyof BorderImageLonghandsWithInitialValues>
>;

export function borderImage(
	source: NonNullable<CSSProperties["borderImageSource"]>,
	slice: NonNullable<CSSProperties["borderImageSlice"]> = "100%",
	width: NonNullable<CSSProperties["borderImageWidth"]> = 1,
	outset: NonNullable<CSSProperties["borderImageOutset"]> = 0,
	repeat: NonNullable<CSSProperties["borderImageRepeat"]> = "stretch",
): BorderImageLonghands {
	return {
		borderImageSource: source,
		borderImageSlice: slice,
		borderImageWidth: width,
		borderImageOutset: outset,
		borderImageRepeat: repeat,
	};
}

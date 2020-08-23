import type { CSSProperties, CSSPropertiesWithValues } from "../CSSProperties";

export type BorderImageLonghandsWithInitialValues = CSSPropertiesWithValues<{
	borderImageSource: "none";
	borderImageSlice: "100%";
	borderImageRepeat: "stretch";
	borderImageWidth: 1;
	borderImageOutset: 0;
}>;

export type BorderImageLonghands = Required<
	Pick<CSSProperties, keyof BorderImageLonghandsWithInitialValues>
>;

export function borderImage(
	source: NonNullable<CSSProperties["borderImageSource"]>,
	slice: NonNullable<CSSProperties["borderImageSlice"]> = "100%",
	repeat: NonNullable<CSSProperties["borderImageRepeat"]> = "stretch",
	width: NonNullable<CSSProperties["borderImageWidth"]> = 1,
	outset: NonNullable<CSSProperties["borderImageOutset"]> = 0,
): BorderImageLonghands {
	return {
		borderImageSource: source,
		borderImageSlice: slice,
		borderImageRepeat: repeat,
		borderImageWidth: width,
		borderImageOutset: outset,
	};
}

import type { CSSProperties } from "./CSSProperties";

export type BorderImageLonghands<
	Source extends CSSProperties["borderImageSource"],
	Slice extends CSSProperties["borderImageSlice"] = "100%",
	Width extends CSSProperties["borderImageWidth"] = 1,
	Outset extends CSSProperties["borderImageOutset"] = 0,
	Repeat extends CSSProperties["borderImageRepeat"] = "stretch"
> = {
	borderImageSource: Source;
	borderImageSlice: Slice;
	borderImageWidth: Width;
	borderImageOutset: Outset;
	borderImageRepeat: Repeat;
};

export function borderImage<
	Source extends CSSProperties["borderImageSource"],
	Slice extends CSSProperties["borderImageSlice"] = "100%",
	Width extends CSSProperties["borderImageWidth"] = 1,
	Outset extends CSSProperties["borderImageOutset"] = 0,
	Repeat extends CSSProperties["borderImageRepeat"] = "stretch"
>(
	source: Source,
	slice: Slice = "100%" as Slice,
	width: Width = 1 as Width,
	outset: Outset = 0 as Outset,
	repeat: Repeat = "stretch" as Repeat,
): BorderImageLonghands<Source, Slice, Width, Outset, Repeat> {
	return {
		borderImageSource: source,
		borderImageSlice: slice,
		borderImageWidth: width,
		borderImageOutset: outset,
		borderImageRepeat: repeat,
	};
}

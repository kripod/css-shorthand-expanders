import type { CSSProperties } from "../CSSProperties";

export type FontLonghands = Required<
	Pick<
		CSSProperties,
		| "fontFamily"
		| "fontSize"
		| "lineHeight"
		| "fontWeight"
		| "fontStyle"
		| "fontStretch"
		| "fontVariant"
	>
>;

export function font(
	family: NonNullable<CSSProperties["fontFamily"]>,
	size: NonNullable<CSSProperties["fontSize"]> = "1rem",
	lineHeight: NonNullable<CSSProperties["lineHeight"]> = "normal",
	weight: NonNullable<CSSProperties["fontWeight"]> = 400,
	style: NonNullable<CSSProperties["fontStyle"]> = "normal",
	stretch: NonNullable<CSSProperties["fontStretch"]> = "100%",
	variant: "normal" | "small-caps" = "normal",
): FontLonghands {
	return {
		fontFamily: family,
		fontSize: size,
		lineHeight,
		fontWeight: weight,
		fontStyle: style,
		fontStretch: stretch,
		fontVariant: variant,
	};
}

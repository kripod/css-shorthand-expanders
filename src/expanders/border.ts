import type { CSSProperties } from "../CSSProperties";
import { borderColor, BorderColorLonghands } from "./borderColor";
import {
	borderImage,
	BorderImageLonghandsWithInitialValues,
} from "./borderImage";
import { borderStyle, BorderStyleLonghands } from "./borderStyle";
import { borderWidth, BorderWidthLonghands } from "./borderWidth";

export type BorderLonghands = BorderWidthLonghands &
	BorderColorLonghands &
	BorderStyleLonghands &
	BorderImageLonghandsWithInitialValues;

export function border(
	width: NonNullable<CSSProperties["borderTopWidth"]>,
	color: NonNullable<CSSProperties["borderTopColor"]> = "currentcolor",
	style: NonNullable<CSSProperties["borderTopStyle"]> = "none",
): BorderLonghands {
	return {
		...borderWidth(width),
		...borderColor(color),
		...borderStyle(style),
		...(borderImage("none") as BorderImageLonghandsWithInitialValues),
	};
}

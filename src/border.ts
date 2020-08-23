import type { CSSProperties } from "css-shorthand-expanders";

import { borderColor, BorderColorLonghands } from "./borderColor";
import {
	borderImage,
	BorderImageLonghandsWithInitialValues,
} from "./borderImage";
import { borderStyle, BorderStyleLonghands } from "./borderStyle";
import { borderWidth, BorderWidthLonghands } from "./borderWidth";

export type BorderLonghands = BorderWidthLonghands &
	BorderStyleLonghands &
	BorderColorLonghands &
	BorderImageLonghandsWithInitialValues;

export function border(
	width: NonNullable<CSSProperties["borderTopWidth"]>,
	style: NonNullable<CSSProperties["borderTopStyle"]> = "none",
	color: NonNullable<CSSProperties["borderTopColor"]> = "currentcolor",
): BorderLonghands {
	return {
		...borderWidth(width),
		...borderStyle(style),
		...borderColor(color),
		...(borderImage("none") as BorderImageLonghandsWithInitialValues),
	};
}

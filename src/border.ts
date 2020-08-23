import { borderColor, BorderColorLonghands } from "./borderColor";
import {
	borderImage,
	BorderImageLonghandsWithInitialValues,
} from "./borderImage";
import { borderStyle, BorderStyleLonghands } from "./borderStyle";
import { borderWidth, BorderWidthLonghands } from "./borderWidth";
import type { CSSProperties } from "./CSSProperties";

export type BorderLonghands = BorderWidthLonghands &
	BorderStyleLonghands &
	BorderColorLonghands &
	BorderImageLonghandsWithInitialValues;

export function border(
	width: CSSProperties["borderTopWidth"],
	style: CSSProperties["borderTopStyle"] = "none",
	color: CSSProperties["borderTopColor"] = "currentcolor",
): BorderLonghands {
	return {
		...borderWidth(width),
		...borderStyle(style),
		...borderColor(color),
		...(borderImage("none") as BorderImageLonghandsWithInitialValues),
	};
}

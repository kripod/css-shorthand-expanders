import { borderColor, BorderColorLonghands } from "./borderColor";
import { borderImage, BorderImageLonghands } from "./borderImage";
import { borderStyle, BorderStyleLonghands } from "./borderStyle";
import { borderWidth, BorderWidthLonghands } from "./borderWidth";
import type { CSSProperties } from "./CSSProperties";

export function border(
	width: CSSProperties["borderTopWidth"],
	style: CSSProperties["borderTopStyle"] = "none",
	color: CSSProperties["borderTopColor"] = "currentcolor",
): BorderWidthLonghands &
	BorderStyleLonghands &
	BorderColorLonghands &
	BorderImageLonghands {
	return {
		...borderWidth(width),
		...borderStyle(style),
		...borderColor(color),
		...borderImage("none"),
	};
}

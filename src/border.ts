import { borderColor, BorderColorLonghands } from "./borderColor";
import { borderImage, BorderImageLonghands } from "./borderImage";
import { borderStyle, BorderStyleLonghands } from "./borderStyle";
import { borderWidth, BorderWidthLonghands } from "./borderWidth";
import type { CSSProperties } from "./CSSProperties";

export function border<
	Width extends CSSProperties["borderTopWidth"],
	Style extends CSSProperties["borderTopStyle"] = "none",
	Color extends CSSProperties["borderTopColor"] = "currentcolor"
>(
	width: Width,
	style: Style = "none" as Style,
	color: Color = "currentcolor" as Color,
): BorderWidthLonghands<Width> &
	BorderStyleLonghands<Style> &
	BorderColorLonghands<Color> &
	BorderImageLonghands<"none"> {
	return {
		...borderWidth(width),
		...borderStyle(style),
		...borderColor(color),
		...borderImage("none"),
	};
}

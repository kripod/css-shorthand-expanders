import type { CSSProperties } from "./CSSProperties";

export function overflow<
	X extends CSSProperties["overflowX"],
	Y extends CSSProperties["overflowY"] = X
>(
	x: X,
	y: Y = (x as unknown) as Y,
): {
	overflowX: X;
	overflowY: Y;
} {
	return {
		overflowX: x,
		overflowY: y,
	};
}

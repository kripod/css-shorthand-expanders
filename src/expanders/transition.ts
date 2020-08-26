import type { CSSProperties } from "../CSSProperties";

export type TransitionLonghands = Required<
	Pick<
		CSSProperties,
		| "transitionProperty"
		| "transitionDuration"
		| "transitionTimingFunction"
		| "transitionDelay"
	>
>;

export function transition(
	property: NonNullable<CSSProperties["transitionProperty"]>,
	duration: NonNullable<CSSProperties["transitionDuration"]>,
	timingFunction: NonNullable<
		CSSProperties["transitionTimingFunction"]
	> = "ease",
	delay: NonNullable<CSSProperties["transitionDelay"]> = "0s",
): TransitionLonghands {
	return {
		transitionProperty: property,
		transitionDuration: duration,
		transitionTimingFunction: timingFunction,
		transitionDelay: delay,
	};
}

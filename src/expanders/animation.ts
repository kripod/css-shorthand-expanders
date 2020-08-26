import type { CSSProperties } from "../CSSProperties";

export type AnimationLonghands = Required<
	Pick<
		CSSProperties,
		| "animationName"
		| "animationDuration"
		| "animationTimingFunction"
		| "animationDelay"
		| "animationIterationCount"
		| "animationDirection"
		| "animationFillMode"
		| "animationPlayState"
	>
>;

export function animation(
	name: NonNullable<CSSProperties["animationName"]>,
	duration: NonNullable<CSSProperties["animationDuration"]>,
	timingFunction: NonNullable<
		CSSProperties["animationTimingFunction"]
	> = "ease",
	delay: NonNullable<CSSProperties["animationDelay"]> = "0s",
	iterationCount: NonNullable<
		CSSProperties["animationIterationCount"]
	> = "infinite",
	direction: NonNullable<CSSProperties["animationDirection"]> = "normal",
	fillMode: NonNullable<CSSProperties["animationFillMode"]> = "none",
	playState: NonNullable<CSSProperties["animationPlayState"]> = "running",
): AnimationLonghands {
	return {
		animationName: name,
		animationDuration: duration,
		animationTimingFunction: timingFunction,
		animationDelay: delay,
		animationIterationCount: iterationCount,
		animationDirection: direction,
		animationFillMode: fillMode,
		animationPlayState: playState,
	};
}

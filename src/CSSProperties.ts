import type { PropertiesFallback } from "csstype";

type WithFallbacks<T> = {
	[key in keyof T]: T[key] | T[key][];
};

type Immutable<T> = {
	readonly [P in keyof T]: Readonly<T[P]>;
};

export type CSSProperties = Immutable<
	Required<
		// eslint-disable-next-line @typescript-eslint/ban-types
		Omit<PropertiesFallback<number | (string & {})>, "blockOverflow"> &
			/* TODO: Remove once available in the csstype package (frenic/csstype#94) */
			WithFallbacks<{
				// eslint-disable-next-line @typescript-eslint/ban-types
				blockEllipsis?: "none" | "auto" | (string & {});
			}>
	>
>;

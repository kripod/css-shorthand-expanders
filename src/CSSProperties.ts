import type { Properties, PropertiesFallback } from "csstype";

type WithFallbacks<T> = {
	[key in keyof T]: T[key] | T[key][];
};

export type CSSProperties = Required<
	// eslint-disable-next-line @typescript-eslint/ban-types
	Omit<PropertiesFallback<number | (string & {})>, "blockOverflow"> &
		/* TODO: Remove once available in the csstype package (frenic/csstype#94) */
		WithFallbacks<{
			// eslint-disable-next-line @typescript-eslint/ban-types
			blockEllipsis?: "none" | "auto" | (string & {});
		}>
>;

export type CSSPropertiesWithValues<T extends Properties> = T &
	Pick<Properties, Extract<keyof T, keyof Properties>>;

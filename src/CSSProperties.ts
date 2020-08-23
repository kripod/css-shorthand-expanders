import type { StandardLonghandProperties } from "csstype";

export interface CSSProperties {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	[key: string]: any;
}

export type CSSPropertiesWithValues<T extends CSSProperties> = T &
	Pick<
		StandardLonghandProperties,
		Extract<keyof T, keyof StandardLonghandProperties>
	>;

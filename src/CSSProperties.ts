import type { Properties } from "csstype";

export interface CSSProperties {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	[key: string]: any;
}

export type CSSPropertiesWithValues<T extends Properties> = T &
	Pick<Properties, Extract<keyof T, keyof Properties>>;

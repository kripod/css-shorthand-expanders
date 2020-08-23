import type { Properties } from "csstype";

export interface CSSProperties {
	[key: string]: string | number;
}

export type CSSPropertiesWithValues<T extends Properties> = T &
	Pick<Properties, Extract<keyof T, keyof Properties>>;

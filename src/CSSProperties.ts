export interface CSSProperties {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	[key: string]: any;
}

export type CSSPropertiesWithValues<T extends CSSProperties> = {
	[P in keyof Pick<
		CSSProperties, // Inherits JSDoc comments when available
		Extract<keyof T, keyof CSSProperties>
	>]-?: T[P];
};

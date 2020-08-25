export interface CSSProperties {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	[key: string]: any;
}

export type CSSPropertiesWithValues<T extends CSSProperties> =
	// Retain the passed type
	T &
		// Inherit JSDoc from `CSSProperties`
		Pick<
			{ [P in keyof CSSProperties]-?: unknown },
			Extract<keyof T, keyof CSSProperties>
		>;

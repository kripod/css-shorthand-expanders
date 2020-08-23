declare module "css-shorthand-expanders" {
	import type { PropertiesFallback } from "csstype";

	// eslint-disable-next-line
	interface CSSProperties extends PropertiesFallback<number | (string & {})> {}
}

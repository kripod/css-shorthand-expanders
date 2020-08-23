import "./CSSProperties";

import type { StandardLonghandPropertiesFallback } from "csstype";

declare module "./CSSProperties" {
	// eslint-disable-next-line @typescript-eslint/no-empty-interface
	interface CSSProperties
		extends StandardLonghandPropertiesFallback<
			| number
			| (// eslint-disable-next-line @typescript-eslint/ban-types
			  string & {})
		> {}
}

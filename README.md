# css-shorthand-expanders

Type-safe functions to expand CSS shorthands into their longhand sub-properties.

## Motivation

CSS rules can be represented as plain JavaScript objects. While every property [has a type definition](https://github.com/frenic/csstype), longhands offer autocompletion superior to shorthands.

Usually, sub-properties of a shorthand may be specified in any order. This imposes an overhead on developers and type systems alike. Consequently, shorthands without a fixed order syntax should be avoided.

For shorthands with a reasonable value order, typed methods with positional arguments can be defined. This project aims to provide those in the form of self-contained functions.

## Usage

Install the library and its peer dependency with a package manager, e.g. npm:

```shell
npm install css-shorthand-expanders csstype
```

After that, import transformation functions on demand:

```js
import { padding } from "css-shorthand-expanders";

const longhands = padding("8px", "16px");
console.assert(longhands.paddingTop === "8px");
console.assert(longhands.paddingRight === "16px");
console.assert(longhands.paddingBottom === longhands.paddingTop);
console.assert(longhands.paddingLeft === longhands.paddingRight);
```

By convention, [property names are camelCased](https://reactjs.org/docs/dom-elements.html#style) to be consistent with the CSSOM `style` property. Unused functions are tree-shaken away, saving on your bundle sizes.

### Type checking

Parameter suggestions and accurate return types can be enabled with a `.d.ts` file:

```ts
/* declarations.d.ts */

declare module "css-shorthand-expanders" {
  import type { StandardLonghandProperties } from "csstype";

  // You may also use `StandardLonghandPropertiesFallback` and any type params
  interface CSSProperties extends StandardLonghandProperties {}
}
```

### Reference

Functions available are listed below in alphabetical order. Please refer to the bundled type definitions for their signatures and overloads.

- [`border`](./src/expanders/border.ts)
- [`borderColor`](./src/expanders/borderColor.ts)
- [`borderImage`](./src/expanders/borderImage.ts)
- [`borderRadius`](./src/expanders/borderRadius.ts)
- [`borderStyle`](./src/expanders/borderStyle.ts)
- [`borderWidth`](./src/expanders/borderWidth.ts)
- [`flex`](./src/expanders/flex.ts)
- [`flexFlow`](./src/expanders/flexFlow.ts)
- [`gap`](./src/expanders/gap.ts)
- [`inset`](./src/expanders/inset.ts)
- [`lineClamp`](./src/expanders/lineClamp.ts)
- [`listStyle`](./src/expanders/listStyle.ts)
- [`margin`](./src/expanders/margin.ts)
- [`outline`](./src/expanders/outline.ts)
- [`overflow`](./src/expanders/overflow.ts)
- [`padding`](./src/expanders/padding.ts)
- [`placeContent`](./src/expanders/placeContent.ts)
- [`placeItems`](./src/expanders/placeItems.ts)
- [`placeSelf`](./src/expanders/placeSelf.ts)

_More functions are under construction. Follow along for updates or [contribute](./CONTRIBUTING.md) to the project!_

## Philosophy

The project adheres to the behavior of shorthands as [specified by _CSS Cascading and Inheritance_](https://www.w3.org/TR/css-cascade-3/#shorthand):

> Some properties are shorthand properties, meaning that they allow authors to specify the values of several properties with a single property. **A shorthand property sets all of its longhand sub-properties, exactly as if expanded in place.**
>
> When values are omitted from a shorthand form, unless otherwise defined, **each “missing” sub-property is assigned its initial value.**

Parameters of expanders are in a fallback-oriented order to embrace [progressive enhancement](https://developer.mozilla.org/docs/Glossary/Progressive_Enhancement). Defaults are mostly identical to the initial values of sub-properties, except for:

- `border` – Style defaults to `"solid"` (instead of `"none"`)
- `outline` – Style defaults to `"solid"` (instead of `"none"`), and color defaults to `"currentcolor"` (instead of `["currentcolor", "invert"]`)

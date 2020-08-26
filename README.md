# css-shorthand-expanders

Type-safe functions to expand CSS shorthands into their longhand sub-properties.

[![npm](https://img.shields.io/npm/v/css-shorthand-expanders)](https://www.npmjs.com/package/css-shorthand-expanders)
[![Travis (.com)](https://img.shields.io/travis/com/kripod/css-shorthand-expanders)](https://travis-ci.com/github/kripod/css-shorthand-expanders)
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg)](./CODE_OF_CONDUCT.md)

## Motivation

CSS rules can be represented as plain JavaScript objects. While every property [has a type definition](https://github.com/frenic/csstype), longhands offer autocompletion superior to shorthands.

Usually, sub-properties of a shorthand may be specified in any order. This imposes an overhead on developers and type systems alike. Consequently, shorthands without a fixed order syntax should be avoided.

For shorthands with a reasonable value order, typed methods with positional arguments can be defined. This project aims to provide those in the form of self-contained functions.

The main goal is to **support atomic CSS-in-JS libraries** which can't handle shorthands.

## Usage

Install the library with a package manager, e.g. npm:

```shell
npm install css-shorthand-expanders
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

// Make sure to install the optional peer dependency below
import type { StandardLonghandProperties } from "csstype";

declare module "css-shorthand-expanders" {
  // You may also use `StandardLonghandPropertiesFallback` and any type params
  interface CSSProperties extends StandardLonghandProperties {}
}
```

### Reference

Functions available are listed below in alphabetical order. Please refer to the bundled type definitions for their signatures and overloads.

- [`animation`](./src/expanders/animation.ts)
- [`border`](./src/expanders/border.ts)
- [`borderBottom`](./src/expanders/borderBottom.ts)
- [`borderColor`](./src/expanders/borderColor.ts)
- [`borderImage`](./src/expanders/borderImage.ts)
- [`borderLeft`](./src/expanders/borderLeft.ts)
- [`borderRadius`](./src/expanders/borderRadius.ts)
- [`borderRight`](./src/expanders/borderRight.ts)
- [`borderStyle`](./src/expanders/borderStyle.ts)
- [`borderTop`](./src/expanders/borderTop.ts)
- [`borderWidth`](./src/expanders/borderWidth.ts)
- [`columnRule`](./src/expanders/columnRule.ts)
- [`columns`](./src/expanders/columns.ts)
- [`flex`](./src/expanders/flex.ts)
- [`flexFlow`](./src/expanders/flexFlow.ts)
- [`font`](./src/expanders/font.ts)
- [`gap`](./src/expanders/gap.ts)
- [`gridArea`](./src/expanders/gridArea.ts)
- [`gridColumn`](./src/expanders/gridColumn.ts)
- [`gridRow`](./src/expanders/gridRow.ts)
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
- [`textDecoration`](./src/expanders/textDecoration.ts)
- [`textEmphasis`](./src/expanders/textEmphasis.ts)
- [`transition`](./src/expanders/transition.ts)

_More functions are under construction. Follow along for updates or [contribute](./CONTRIBUTING.md) to the project!_

## Philosophy

The project adheres to the behavior of shorthands as [specified by _CSS Cascading and Inheritance_](https://www.w3.org/TR/css-cascade-3/#shorthand):

> Some properties are shorthand properties, meaning that they allow authors to specify the values of several properties with a single property. **A shorthand property sets all of its longhand sub-properties, exactly as if expanded in place.**
>
> When values are omitted from a shorthand form, unless otherwise defined, **each “missing” sub-property is assigned its initial value.**

Parameters of expanders are in a fallback-oriented order to embrace [progressive enhancement](https://developer.mozilla.org/docs/Glossary/Progressive_Enhancement). Defaults are mostly identical to the initial values of sub-properties, except for:

- `animation` – Iteration count defaults to `"infinite"` (instead of `1`)
- `border*` – Style defaults to `"solid"` (instead of `"none"`)
- `columnRule` – Style defaults to `"solid"` (instead of `"none"`)
- `font` – Size defaults to `"1rem"` (instead of `"medium"`)
- `outline` – Style defaults to `"solid"` (instead of `"none"`), and color defaults to `"currentcolor"` (instead of `["currentcolor", "invert"]`)

# css-shorthand-expanders

Type-safe functions to expand CSS shorthands into their longhand sub-properties.

## Motivation

CSS rules can be represented as plain JavaScript objects. While every property [has a type definition](https://github.com/frenic/csstype), longhands offer autocompletion superior to shorthands.

Usually, sub-properties of a shorthand may be specified in any order. This imposes an overhead on developers and type systems alike. Consequently, shorthands without a fixed order syntax should be avoided.

For shorthands with a single canonical value order, typed methods with positional arguments can be defined. This project aims to provide those in the form of self-contained functions.

## Usage

Install the library with your package manager, e.g.:

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

### Reference

Functions available are listed below in alphabetical order. Please refer to the bundled type definitions for their signatures and overloads.

- [`border`](./src/border.ts)
- [`borderColor`](./src/borderColor.ts)
- [`borderImage`](./src/borderImage.ts)
- [`borderStyle`](./src/borderStyle.ts)
- [`borderWidth`](./src/borderWidth.ts)
- [`flex`](./src/flex.ts)
- [`flexFlow`](./src/flexFlow.ts)
- [`gap`](./src/gap.ts)
- [`lineClamp`](./src/lineClamp.ts)
- [`listStyle`](./src/listStyle.ts)
- [`margin`](./src/margin.ts)
- [`overflow`](./src/overflow.ts)
- [`padding`](./src/padding.ts)
- [`placeContent`](./src/placeContent.ts)
- [`placeItems`](./src/placeItems.ts)
- [`placeSelf`](./src/placeSelf.ts)

_More functions are under construction. Follow along for updates or [contribute](./CONTRIBUTING.md) to the project!_

## Philosophy

The project adheres to the behavior of shorthands as [specified by _CSS Cascading and Inheritance_](https://www.w3.org/TR/css-cascade-3/#shorthand):

> Some properties are shorthand properties, meaning that they allow authors to specify the values of several properties with a single property. **A shorthand property sets all of its longhand sub-properties, exactly as if expanded in place.**
>
> When values are omitted from a shorthand form, unless otherwise defined, **each “missing” sub-property is assigned its initial value.**

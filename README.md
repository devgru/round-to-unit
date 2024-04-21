# round-to-unit

> Number-rounding and formatting library with focus on correct string representation. Useful in user interfaces and data visualizations.

This library provides rounding function converting raw user input (e.g. pointer coordinates) into nice values that are multiples to specified `unit`.

By default, library outputs strings. This behaviour can be overridden.

## Usage

```js
import { roundToUnit } from 'round-to-unit';

const roundToQuarters = roundToUnit('0.25');
roundToQuarters(-0.7); // "-0.75"

const roundToTenths = roundToUnit('0.1', Number);
roundToTenths(0.36); // 0.4
```

## NPM package

Install `round-to-unit@2`, it has no dependencies.

## API Reference

`roundToUnit(unit, [outputType = String])`

Given a string representing positive finite number `unit`, returns a `roundToSpecifiedUnit` function.

Provide optional `outputType` to override return type of `roundToSpecifiedUnit` function.

`roundToSpecifiedUnit(input)`

Given a number `input`, rounds it to specified `unit` and transforms it to `outputType`.

## Development

* Build `bun run prepack`;
* Run tests: `bun test`;

## License

MIT © [Dima Semyushkin](https://devg.ru)

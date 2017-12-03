# round-to-precision

> Round a number to a nearest multiple of specified step. Useful in user interfaces.

This library provides rounding function converting raw user input (e.g. pointer coordinates) into nice values that are multiples to specified *step*.

By default, library outputs strings. This behaviour can be overriden.

## Installing

```sh
$ yarn add round-to-precision
# or
$ npm install --save round-to-precision
```

## Usage

```js
const roundTo = require('round-to-precision');

const roundToTens = roundTo(10);
roundToTens(52.65);
//=> "50"

const roundToQuarters = roundTo(0.25);
roundToQuarters(-0.7);
//=> "-0.75"

const roundToOneTenths = roundTo(0.1, Number);
roundToOneTenths(0.36);
//=> 0.4
```

## API Reference

*roundTo(step, [outputType = String])*

Given a positive number *step*, returns a *roundToStep* function.

An optional *outputType* allows overriding return type of *roundToStep* function, e.g. set it to *Number*.

*roundToStep(value)*

Given a number *value*, rounds *value* and returns it as a *String* or uses provided *outputType* to transform it into another type.

## Development

* Run tests: `yarn test`;
* Build `yarn build`;

## License

MIT © [Dmitriy Semyushkin](https://devg.ru)

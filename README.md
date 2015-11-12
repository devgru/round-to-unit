# round-to-precision

> Round a number to a specific precision. Useful in user interfaces.


## Install

```
$ npm install --save round-to-precision
```


## Usage

```js
var roundToPrecision = require('round-to-precision');

roundToPrecision(10)(52.65);
//=> 50

roundToPrecision(0.25)(-0.7);
//=> -0.75

roundToPrecision(0.1)(0.36);
//=> 0.4
```

Numbers are rounded to a specific precision.

## API

### roundToPrecision(precision)

Returns a `roundToSpecificPrecision` function.

### roundToSpecificPrecision(value)

Round a value to specific precision.

#### value

Type: `number`

#### precision

Type: `number` (positive).

## License

MIT © [Dmitriy Semyushkin](http://devg.ru)

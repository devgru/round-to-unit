# round-to-precision

> Round a number to a specific precision.


## Install

```
$ npm install --save round-to-precision
```


## Usage

```js
var roundToPrecision = require('round-to-precision');

roundToPrecision(0.25)(0.7);
//=> 0.75

roundToPrecision(0.1)(0.36);
//=> 0.4
```

Numbers are rounded to a specific precision.

## API

### roundToPrecision(precision)

Returns a function, wou

### roundToSpecificPrecision(value)

Round a value to specific precision.

#### value

Type: `number`

#### precision

Type: `number`

Number of decimal places.


## License

MIT © [Dmitriy Semyushkin](http://devg.ru)

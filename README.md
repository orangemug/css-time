# css-time
Parse/stringify CSS time values

[![stability-unstable](https://img.shields.io/badge/stability-unstable-yellow.svg)][stability]
[![Build Status](https://circleci.com/gh/orangemug/css-time.png?style=shield)][circleci]
[![Dependency Status](https://david-dm.org/orangemug/css-time.svg)][dm-prod]
[![Dev Dependency Status](https://david-dm.org/orangemug/css-time/dev-status.svg)][dm-dev]

[stability]:   https://github.com/orangemug/stability-badges#unstable
[circleci]:    https://circleci.com/gh/orangemug/css-time
[dm-prod]:     https://david-dm.org/orangemug/css-time
[dm-dev]:      https://david-dm.org/orangemug/css-time#info=devDependencies



## Install
To install

```
npm install orangemug/css-time
```



## Usage
Simple usage

```js
var cssTime = require("css-time");

var val = cssTime.parse("1s")
assert.equal(val, 1000);

var str = cssTime.stringify(val);
assert.equal(str, "1000ms");
```

Require just the functions you need

```js
var cssTimeParse = require("css-time/parse");
assert.equal(cssTimeParse("1s"), 1000);

var cssTimeStringify = require("css-time/stringify");
assert.equal(cssTimeStringify(100), "100ms");
```


## License
[MIT](LICENSE)

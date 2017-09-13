# compared
Compare Array item length

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install --save compared
```

## Usage

```js
var compared = require('compared')
compared([])
//=> undefined

compared(['1', 12, 123, 1234])
//=> '1234'

compared(['aaaaa', 'bbbb', 'ccc'])
//=> 'aaaaa'

compared(['aaaaa', 'bbbb', 'ccc']).length
//=> 5

compared([null, undefined, (function (a) { }), NaN, '123'])
// => '123'
```

### Running tests

Running and reviewing unit tests is a great way to get familiarized with a library and its API. You can install dependencies and run tests with the following command:

```sh
$ npm i && npm test
```

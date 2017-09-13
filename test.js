var compared = require('./index')

var arr = [333, 1234, '123333333333',null, undefined, (function (a) { }), NaN, '']
console.log(compared(arr))
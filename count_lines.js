var fs = require('fs');

var str_arr = fs.readFileSync(__dirname + '/sum.js').toString().split('\r\n');

console.log(str_arr);
console.log('\nNumber of Lines in ' + __dirname + '/sum.js : ' + str_arr.length);
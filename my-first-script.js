const theFunctionIImport = require('./my-sum');
const lodash = require('lodash');

lodash.map([ 1, 2, 3, 4 ], (item) => {
    console.log(`Hello ${item}!`);
});

// console.log(theFunctionIImport(4, 5));
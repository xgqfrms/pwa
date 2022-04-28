
// const math = require('./multi-cjs.js');

// console.log('\nmath =', math);
// console.log('add =', math.add);
// console.log('minus =', math.minus);

// const sum = math.add(1, 2);
// const subtract = math.minus(3, 1);

// console.log('sum =', sum);
// console.log('subtract =', subtract);


const {add, minus} = require('./multi-cjs.js');

console.log('\nadd =', add);
// undefined
console.log('minus =', minus);
// undefined

// TypeError: add is not a function
const sum = add(1, 2);
const subtract = minus(3, 1);

console.log('sum =', sum);
console.log('subtract =', subtract);



/*

*/

// node ./multi-test.js

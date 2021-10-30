//-------
//ES5
const multiply2 = (...args) => args.reduce((acc, value) => acc * value, 1)

const sum2 = (...rest) => multiply2.apply(undefined, rest);

console.log("No ES5: " + sum2(5, 5, 5, 2, 3))
//---------
//ES6 o Spread operator irá complementar os paremetros
// Spread operator pode ser usados em strings , array ,literal objects e objetos iteravais
const multiply3 = (...args) => args.reduce((acc, value) => acc * value, 1)
const sum3 = (...rest) => multiply3(...rest);

console.log("No ES6: " + sum2(5, 5, 5, 2, 3))
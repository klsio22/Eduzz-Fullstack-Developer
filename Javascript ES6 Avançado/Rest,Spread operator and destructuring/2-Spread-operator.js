const div = () => console.log("--".repeat(20));


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

//Uso so Sprend com strings
const str = 'Digital Innovation One'
const numbers = [1, 2, 3, 4, 5, 66]

function logArg(...args) {
  console.log(args)
}

logArg(...str)

function logNumbers(a, b, c) {
  console.log(a, b, c)
}

logNumbers(...numbers)

const arr2 = [5, 8, 9].concat(numbers) //Concatenando arrays
let arr3 = numbers.concat([5, 6, 8]) //Concatenando arrays 
console.log(arr2)
console.log(arr3)

arr3 = [...arr2, ...numbers, 0, 0, 0]

console.log(arr3)

const arrClone = [...numbers];
console.log(arrClone)


div(); //---
//Objetos literal com Spread

const obj = {
  test: 123
};

const obj2 = {
  //...obj,
  test2: "Hello world"
}

console.log(obj2)

//Objetos em js não são interaveis

//const newArr = [...obj]
//object is not iterable

div(); //---
const objMerged = {
  ...obj,
  ...obj2
}

console.log("Margin entre os objetos", objMerged)

div(); //---

const objTest = {
  test: 123
};

const objTest2 = objTest;

objTest2.test = 452
console.log(objTest)

div(); //---
const objPlan = {
  test: 123,
  subObj: {
    test: 123
  }
}

const objPlan2 = {
  ...objPlan,
  subObj: {
    ...objPlan.subObj
  }
  //Para Evitar alterar meu objeto padrão fazendo o Spread o primeiro
}

objPlan2.subObj.test = 456

console.log(objPlan)
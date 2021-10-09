//import {div} from './divisor.js'// ES6
 const {
  div
} = require('./divisor.js')

div(); //---
const numbers = [1, 2, 3, 4, 5]
numbers.forEach((value, index) => {
  console.log(`${index}: ${value}`)
})

div(); //---

numbers.forEach(number => console.log(number))

div(); //---

const fruits = ['banana','melancia','abacate','Mamão','Pera']

//pegando o array corrente arr
fruits.forEach((fruta, index, arr) => console.log(index, fruta, arr))

div(); //--

/* 
  ===========================================================================
  Map
  retorna um novo arry , de mesmo tamalho , iteando cada item de um arry
  ===========================================================================
*/

let fruitsMap = fruits.map((fruit, index) => `${index} + ${fruit}`)
console.log(fruitsMap)

div(); //--
/* 
  ===========================================================================
  Flat
  retorna um novo arry com todos os elementos de um sub-array concatenados
  de forma recursiva de acordo com a profuncidade espeficada(depth)
  ===========================================================================
*/

let ages = [12,14,68,[97,99,84,40,[98,63,68]]]
let totalAges=ages.flat(2)
console.log(totalAges)

div(); //---

/* 
  ===========================================================================
  FlatMap
  retorna um novo array assim como a função map e executa um flat de profundi_
  dade 1
  ===========================================================================
*/



const numbers2 = [1,2,69,45];

const print = numbers2.flatMap(value => [value*2])
console.log(print) // [ 2, 4, 138, 90 ]

const print2 = numbers2.flatMap(value => [[value*2]])
console.log(print2) //[ [ 2 ], [ 4 ], [ 138 ], [ 90 ] ]


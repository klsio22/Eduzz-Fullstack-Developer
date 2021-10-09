const {
  div
} = require('./0-divisor.js')

/* 
  ===========================================================================
  Map
  retorna um novo arry , de mesmo tamalho , iteando cada item de um arry
  ===========================================================================
*/

const fruits = ['banana', 'melancia', 'abacate', 'Mamão', 'Pera']


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

let ages = [12, 14, 68, [97, 99, 84, 40, [98, 63, 68]]]
let totalAges = ages.flat(2)
console.log(totalAges)

div(); //---

/* 
  ===========================================================================
  FlatMap
  retorna um novo array assim como a função map e executa um flat de profundi_
  dade 1
  ===========================================================================
*/

const numbers2 = [1, 2, 69, 45];

const print = numbers2.flatMap(value => [value * 2])
console.log(print) // [ 2, 4, 138, 90 ]

const print2 = numbers2.flatMap(value => [
  [value * 2]
])
console.log(print2) //[ [ 2 ], [ 4 ], [ 138 ], [ 90 ] ]

div(); //---

/* 
  ===========================================================================
  keys
  retorna um Array Iterator que contém as chaves para cada elemento do array
  ===========================================================================
*/

const arrTerator = numbers2.keys();
console.log(arrTerator.next()) //{ value: 0, done: false }
console.log(arrTerator.next()) //{ value: 1, done: false }
console.log(arrTerator.next()) //{ value: 2, done: false }
console.log(arrTerator.next()) //{ value: 3, done: false }
console.log(arrTerator.next()) //{ value: undefined, done: true }


div(); //---
/* 
  ===========================================================================
  values
  Retorna um Arry Iterator que contém os valores para cada elemento do array
  ===========================================================================
*/

const arrTerator2 = numbers2.values();
console.log(arrTerator2.next()) //{ value: 1, done: false }
console.log(arrTerator2.next()) //{ value: 2, done: false }
console.log(arrTerator2.next()) //{ value: 69, done: false }
console.log(arrTerator2.next()) //{ value: 45, done: false }
console.log(arrTerator2.next()) //{ value: undefined, done: true }

div(); //---

/* 
  ===========================================================================
  entries
  Retorna um Arry Iterator que contém os pares chaves/valor para cada elemento 
  do array
  ===========================================================================
*/

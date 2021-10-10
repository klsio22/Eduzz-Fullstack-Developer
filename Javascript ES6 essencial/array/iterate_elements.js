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
console.log('------------Teste------------')
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
const arrTerator3 = numbers2.entries();
//Ele mostra a posição e o valor daquela posição dentro de um unico array

console.log(arrTerator3.next()) //{ value: [ 0, 1 ], done: false }  
console.log(arrTerator3.next()) //{ value: [ 1, 2 ], done: false }
console.log(arrTerator3.next()) //{ value: [ 2, 69 ], done: false }
console.log(arrTerator3.next()) //{ value: [ 3, 45 ], done: false }
console.log(arrTerator3.next()) //{ value: undefined, done: true } 

div(); //---

/* 
  ===========================================================================
  find
  Retorna o primeiro item de um arrry que satisfaz a condição
  ===========================================================================
*/

const firstGreaterThanTwo = numbers2.find(value => value > 2);

console.log(firstGreaterThanTwo);
//69

div(); //---

/* 
  ===========================================================================
  findIndex
  O método findIndex() retorna o índice no array do primeiro elemento que 
  satisfizer a função de teste provida. Caso contrário, retorna -1, indicando 
  que nenhum elemento passou no teste.
  ===========================================================================
*/

const findIndexGreatThanTwo = numbers2.findIndex(value => value > 2);
console.log(findIndexGreatThanTwo);
// 2
div(); //---

/* 
  ===========================================================================
  filter
  Retorna um novo array com todos os elementos que satisfazem a condição
  ===========================================================================
*/

const allValuesGreaterThantwo = numbers2.filter(value => value > 2)
console.log(allValuesGreaterThantwo)
//[ 69, 45 ]

div(); //---

/* 
  ===========================================================================
  indexOf
  Retorna o primeiro indice em que um elemento pode ser encontrado no array
  ===========================================================================
*/

const numbers3 = [138, 10, 97, 13, 10]

const firstIntexOfItem = numbers3.indexOf(10)
console.log(firstIntexOfItem)

div(); //---
//1
/* 
  ===========================================================================
  lastIndexOf
  Retorna o ultimo indice em que um elemento pode ser encontrado no array
  ===========================================================================
*/


const lastIntexOfItem = numbers3.lastIndexOf(10);
console.log(lastIntexOfItem)
//4
div(); //---
/* 
  ===========================================================================
  incluides
  Retornar um booleano verifica se determinado elemento existe no array
  ===========================================================================
*/

let hasItem = numbers3.includes(2)
console.log(hasItem) //false

hasItem = numbers3.includes(97)
console.log(hasItem) //true

div(); //--
/* 
  ===========================================================================
  some
  Retornar um booleano verificando se pelo menos um item de um array satifaz 
  a condição 
  ===========================================================================
*/

let hasSameEvenNumber = numbers3.some(value => value % 2 === 0)
console.log(hasSameEvenNumber) //true
hasSameEvenNumber = numbers3.some(value => value % 4 === 0)
console.log(hasSameEvenNumber) //false

const student = [{
    name: "Mary",
    grade: 6.5
  },
  {
    name: "John",
    grade: 7
  },
  {
    name: "Lany",
    grade: 5
  },
]

console.log(student.some(student => student.grade >= 7)) //true
console.log(student.find(student => student.grade >= 7)) //Saber quem é o aluno
console.log(student.findIndex(student => student.grade >= 7)) //Saber a posição do aluno no array 

div(); //--
/* 
  ===========================================================================
  Every
  Saber se todos os os itens de um array satisfazem a condição
  ===========================================================================
*/

console.log(student.every(student => student.grade >= 7)) //false sabe se todos os alunos passaram
console.log(student.find(student => student.grade < 7)) // saber o primeiro estudante que não passou 
const {
  div
} = require('./0-divisor.js')

/* 
  ===========================================================================
  sort
  Ordena os elementos de um array de acordo com a condição
  ===========================================================================
*/

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

//Ordadenar do menor para o maior
console.log(student.sort((corrent, next) => (corrent.grade - next.grade)));

//Ordadenar do maior para o menor
console.log(student.sort((corrent, next) => (next.grade - corrent.grade)));

div(); //----------


/* 
  ===========================================================================
  reverse
  inverte os elementos de um array
  ===========================================================================
*/


console.log(student.reverse((next) => (next.grade)));

div(); //----------

/* 
  ===========================================================================
  join
  junta todos os elementos de um array , separado por um delimitador e  reto
  rna uma string
  ===========================================================================
*/
const cpf = [199, 277, 922]
const digitFinal = ["", 55]
const digitJunction = cpf.join("-") + digitFinal.join(".");
console.log("CPF:", digitJunction); //1-2-3-4-5

div(); //----------
/* 
  ===========================================================================
  reduce
  retorna um novo tipo dado iterando cada posição de um array
  ===========================================================================
*/

console.log(cpf.reduce((total, value) => total += value, 0)); //0 é o valor inicial

const mediaGrades = student.reduce((totalGrades, student) =>
  totalGrades += student.grade, 0) / student.length
console.log("media das notas dos alunos:", mediaGrades)

console.log(student.reduce((studentNames, student) => studentNames += student.name + ' ', ''))
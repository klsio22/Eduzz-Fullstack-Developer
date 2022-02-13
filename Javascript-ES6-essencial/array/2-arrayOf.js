/* 

A diferença entre o Array.of() e o construtor de Array é no tratamento dos argumentos inteiros: Array.of(7) cria um array com um único elemento, 7, enquanto Array(7) cria um array vazio de propriedade length igual a 7 (Nota: isso quer dizer um array com 7 espaços vazios, e não com valores do tipo undefined).


Array.of(7);       // [7]
Array.of(1, 2, 3); // [1, 2, 3]

Array(7);          // array com 7 espaços vazios
Array(1, 2, 3);    // [1, 2, 3]



*/

const person = Array.of('John', 'Cris', 'Jenny')
person
const numberAndString = Array.of(1, 2, 'String', 'text')
numberAndString

const arr = Array(9)
console.log(arr.length)
console.log(arr)

arr[0] = 'Tiago';
console.log(arr)

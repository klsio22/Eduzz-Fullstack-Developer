const users = ["Rodrigo", "Pedro", "Jannifer"];

const gender = {
  MAN: Symbol("M"),
  WOMAN: Symbol("W"),
};

const persons = [
  {
    name: "Rodrigo",
    age: 26,
    gender: gender.MAN,
  },

  {
    name: "Pedro",
    age: 32,
    gender: gender.MAN,
  },

  {
    name: "Jannifer",
    age: 23,
    gender: gender.WOMAN,
  },
];
//Retornar a quantidade de
console.log("Items", persons.length);

//Verificar se é array
console.log("A variavel person é um array:", Array.isArray(persons));

//Iterra os inten do array
persons.forEach((person, index, arr) => {
  console.log(` Nome : ${person.name} index: ${index} `, arr);
});

// Filltar array
const mens = persons.filter((person) => person.gender === gender.MAN);
console.log("\nNova lista apenas com homens: ", mens);

//Retornar um objeto novo
//Evitar alterar o array original sempre busca criar outro apartir dele
const personWithCurse = persons.map((person) => {
  person.couse = "Introduçao ao javascript";
  return person;
});

console.log("\nPessoas com a adição do curse", personWithCurse);

/* 
Transformar um array em outro tipo

Primeiro parametro será o que vai ser retornado.O 
segundo parametro sera o index 
0 valor inicia da minha age

*/

const totalAge = persons.reduce((age, person) => {
  age += person.age;
  return age;
}, 0);

console.log("\nsoma de idade das pessoas", totalAge);

const totalEvenAgens = persons
  .filter((person) => person.age % 2 === 0)
  .reduce((age, person) => {
    age += person.age;
    return age;
  }, 0);

  console.log("Soma de idade das pessoas que possouem idade par",totalEvenAgens)
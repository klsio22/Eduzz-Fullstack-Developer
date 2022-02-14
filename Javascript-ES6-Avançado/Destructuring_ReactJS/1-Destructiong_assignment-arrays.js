let fruits = ['Apple', 'Banana', 'Orange', ['tomato']]

let apple = fruits[0]
let banana = fruits[1]
let Orange = fruits[2]
let tomato = fruits[3][0]

//Destructuring Assingnment
let [apple2, banana2, orange2, [tomato2]] = ['Apple', 'Banana', 'Orange', ['tomato']]
console.log(apple, apple2)
console.log(tomato, tomato2)

//[apple2, banana2, orange2] = ['Apple', 'Banana']

/* Caso índice não existir teremos uma váriavel undefined diferente de um variavel multidimensional que para no nosso programa */
console.log(orange2) //Cannot set property 'Orange' of undefined 


// ------------------------ Exemplo de destructuring assignment

let arr = ['Apple', 'orage']
let obj = {
  name: 'Celso'
}

let {
  name: name2
} = obj

name2 = 'Herrique'
console.log(name2)
// ------------------------ Exemplo de destructuring assignment

let listFruits = [{
  name: 'Apple',
  type: 'fruit'
}]
let obj = {
  name: 'Celso',
  props: {
    age: 28,
    favoriteColors: ['black', 'blue']
  }
}

let age = obj.props.age;

let [apple2] = listFruits;
let {
  props: {
    age: age2,
    favoriteColors: [color1, color2]
  }
} = obj

console.log(obj)

//----- Exemplo de destructuring assignment

let listFruits2 = [{
  name: 'egg',
  type: 'food'
}]

let fruits3 = listFruits2[0].name;

let [{
  name: fruitName
}] = listFruits2;

console.log(fruitName)

//----- Exemplo de destructuring assignment em funções

function mult(arr) {
  return arr[0] * arr[1]
}
console.log(mult([5,9]))

//---Outro exemplo
// [0, 0] valores default
function mult([a, b] = [0, 0]) {
  return a * b
}

console.log(mult())

//---Outro exemplo

function sum({a,b}) {
  return a + b
}

console.log(sum({a:5, b:5}))
let fruits = ['Apple', 'Banana', 'Orange', ['tomato']]

let apple = fruits[0]
let banana = fruits[1]
let Orange = fruits[2]
let tomato = fruits[3][0]

//Destructuring Assingnment
let [apple2, banana2, orange2, [tomato2]] = ['Apple', 'Banana', 'Orange', ['tomato']]
console.log(apple, apple2)
console.log(tomato, tomato2)

[apple2, banana2, orange2] = ['Apple', 'Banana']

/* Caso índice não existir teremos uma váriavel undefined diferente de um variavel multidimensional que para no nosso programa */
console.log(orange2) //Cannot set property 'Orange' of undefined 


let obj = {
  name: 'Celso'
}

let {
  name: name2
} = obj

console.log(name2)
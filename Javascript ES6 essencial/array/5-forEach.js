//import {div} from './divisor.js'// ES6
const {
  div
} = require('./0-divisor.js')

div(); //---
const numbers = [1, 2, 3, 4, 5]
numbers.forEach((value, index) => {
  console.log(`${index}: ${value}`)
})

div(); //---

numbers.forEach(number => console.log(number))

div(); //---

const fruits = ['banana', 'melancia', 'abacate', 'Mamão', 'Pera']

//pegando o array corrente arr
fruits.forEach((fruta, index, arr) => console.log(index, fruta, arr))

div(); //--





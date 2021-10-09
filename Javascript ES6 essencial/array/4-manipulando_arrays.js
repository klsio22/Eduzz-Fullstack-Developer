//push() Adiciona o elemento ao final da array
const {div} =  require('./0-divisor.js')

const fruts = ['banana', 'melancia', 'abacate'];
const frutsLenght = fruts.push('maça')

console.log(frutsLenght)
console.log(fruts)

div(); //---
//pop() remove o elemento ao final da array

const removeItem = fruts.pop()
console.log("Fruta removido: " + removeItem)
console.log(fruts)
div(); //---
//ushift() adiciona um ou mais elementos inicio do array e retorna o novo tamanho do array

const newfrutsLenght = fruts.unshift('Tomate')

console.log("novo tamnho da lista de frutas : " + newfrutsLenght)
console.log(fruts)

div(); //---
//shift remove o primeiro elemento de um array e retorna o elemento removido

const removeNewItem = fruts.shift();

console.log("Fruta removido : " + removeNewItem)
console.log(fruts)

div(); //---
//Concatenar um ou mais arrays retornado um novo array

const chips = ['Coxinha', 'kibe', 'empada']
const foods = fruts.concat(chips)
console.log(foods)


div(); //---
//slice() retorna um novo array "fatiando" o array de acordo com o inicio e fim 

const numbers = [1,2,10,3,4,5]

// Pega os elementos entre a posição 0 até a 1 não inclui a posição a ultima posição passada
console.log(numbers.slice(0,2))

console.log(numbers.slice(2)) // Pega os elementos apartir da posição 2
console.log(numbers.slice(-1)) // Pega o ultimo elemento 
console.log(numbers.slice(-3)) // Pega de tras para frente até 

div(); //---
//splice() Altera um array adicionando novos elementos enquanto remove elementos antigos

numbers.splice(2)
console.log(numbers)
// paremetros(posição,item/itens para remover , elemento que será adicionado )
numbers.splice(0,0,'First',"second")
console.log(numbers)

const text = 'Porta dos fundos'.split('')
console.log(text)

text.splice(0,6,'Teste ')
console.log(text)


console.log(text.join(""))
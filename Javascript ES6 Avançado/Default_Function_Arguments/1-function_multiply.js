// Lazzy evaluation

function randomNumber(){
  console.log('Genarating a random number:')
  return Math.random() * 10;
}

/* function multiply(a = 1, b = 1) {
  // b = typeof b === 'undefined' ? 1 : b;

  return a * b
}

console.log(multiply(5,5))


console.log(multiply(undefined,5))
console.log(multiply(5,undefined)) */

//-------------------------------------------
// Posso ter uma função acinada por padrão caso o paramenão seja colocado
function multiply(a = 1, b =randomNumber()) {
  // b = typeof b === 'undefined' ? 1 : b;

  return a * b
}
console.log(multiply(5,undefined)) 

//console.log(" Numero aleatório" + randomNumber())


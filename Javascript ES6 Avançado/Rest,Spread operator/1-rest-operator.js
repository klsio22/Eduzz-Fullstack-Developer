//ES5 antes do (rest operator ...)
function sum(a, b) {
  let value = 0;

  for (let i = 1; i < arguments.length; i++) {
    value += arguments[i]
  }

  return value
}

console.log("Forma antiga " + sum(5, 6, 6, 7, 9, 8))

//-------
//ES6 rest operator

function multiply(...args) {
  return args.reduce((mult, value) => mult * value, 1)
}

console.log("Multiplicando com rest " + multiply(5, 6, 7, 9, 8))

//-------
//Outra posibilidade do rest é usar para pega valores restantes
const values = (a, b, ...rest) => {
  console.log("valores e restantes " + a, b, rest)
}

values(9, 6, 7, 9, 8)




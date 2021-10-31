//Factury

function Pessoa(customProperties) {
  return {
    name: "Tiago",
    lastName: "Oliveira",
    ...customProperties
  }
}

const p1 = Pessoa({
  name: 'Custom name:',
  age: 27,
  cpf:90947416398
})

console.log(p1)
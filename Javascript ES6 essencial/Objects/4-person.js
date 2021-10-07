function Person(name) {
  this.name = name;

  return { // se ultilizar o return 
    name: "Teste",
  };
}

const p1 = new Person("klesio");

console.log(p1);

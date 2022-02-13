//Parttern Singleton


/* Ao utilizar Singleton temos mais controle sobre o acesso às propriedades e métodos de uma classe, e também reduzimos o consumo de memória desnecessário por utilizar várias instancias desnecessárias de uma classe. */

function Person() {
  if (!Person.instance) {
    Person.instance = this;
  }

  return Person.instance;

}

/* A partir do momento da primeira instanciação as proximas instancias retornarão somente  
  o que foi instaciado primeiro
*/
const p2 = Person.call({
  name: 'Andre'
});

const p = Person.call({
  name: 'Tiago'
});


console.log(p)
console.log('p2')


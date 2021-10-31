function Animal() {}

/* No prototype possui a definição do objeto */
Animal.prototype.qtdePatas = 0;
Animal.prototype.movimentar = function () {};

function Cachorro(morde) {
  this.qtdePatas = 4;
  this.morde = morde;
}

Cachorro.prototype = Object.create(Animal);
Cachorro.prototype.latir = function () {
  console.log("Au! Au!");
};

const pug = new Cachorro(false);
console.log(`Quantidade de patas ${pug.qtdePatas} , ele morde: ${false}`);

/* Por meio do prototype podemos alterar a definição/atributos dos objetos dentro da função construtora

*/
Cachorro.prototype.asas = () => {
  console.log("Cachorro voador!!")
}

pug.asas();

const pitbull = new Cachorro(true);
console.log(`Quantidade de patas ${pitbull.qtdePatas} , ele morde: ${true}`);
pitbull.latir(); 


/* Com o prototype posso alterar métodos nativos da linguagem JS*/

console.log('1235456'.split(''))

String.prototype.split = () => {
  console.log('Extraterrestre')
}

console.log('1235456'.split(''))


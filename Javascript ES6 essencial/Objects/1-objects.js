let div = () => console.log("--".repeat(20));

const myText = String("Hello prototype");

console.log(myText.__proto__.split === String.prototype.split); //true
console.log(myText.constructor === String); //true

//__proto__ --> prototype --> constructor

div(); //---

function Person(name) {
  this.name = name;

  return {
    // se ultilizar o return o atributo da função é ignorado
    name: "Teste",
  };
}

const p1 = new Person("klesio");

console.log(p1);

div(); //---
("use strict ");

function Animal(qtdePatas) {
  this.qtdePatas = qtdePatas;
  this.movimentar = function(){}
}

function Cachorro(morde) {
  Animal.call(this, 4);
  this.morde = morde;

  this.latir = function(){
    console.log('Au!,au!')
  }

}

const cachorro = new Animal();

console.log(cachorro instanceof Animal); //true
console.log(cachorro instanceof Function); //false

const pug = new Cachorro(false);
console.log(`Quantidade de patas ${pug.qtdePatas} , ele morde: ${false}`);


const pitbull = new Cachorro(true)

console.log(`Quantidade de patas ${pitbull.qtdePatas} , ele morde: ${true}`);
pitbull.latir()

div(); //---

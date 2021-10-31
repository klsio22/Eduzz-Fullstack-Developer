let div = () => console.log("--".repeat(25));

div();//----------

/* function getName() {
  return "Tiago Oliveira";
}

function logFn(fn) {
  console.log("Nome: " +getName());
const logFnResult1 = logFn;
logFnResult1()


//Function statement
function createPhases() {
  console.log("Estudar é muito bom");
  console.log("Paciência e persistência");
  console.log("Revisão é mãe do aprendizado");
}

//Execute function
//execute, run , call , invoke
createPhases();
 */
div();//----------

//Function expression
//Funtion anonymous
// parameters ()

let sum = function (number1, number2) {
  return number2 + number1;
};

console.log(sum(2, 3)); //arguments

div();//----------

let num1 = 2;
let num2 = 5;

console.log(`number 1 ${num1}`);
console.log(`number 2 ${num2}`);
console.log(`result sum ${sum(num1, num2)}`); //arguments

div();//----------

let subjet = "Create";

function createThing() {
  return (subjet = "study");
}
//quando a função é chamada ele reatribui o valor da variável

console.log(subjet);
console.log(createThing());
console.log(subjet);

div();//----------
//Function hoisting in JavaScript
sayName();

function sayName() {
  return console.log("mayk");
}

div();//----------

//arrow function

const myName = (name) => {
  console.log(name);
};

myName("Klesio");

div();//----------

//callback function

function sayMyname(name) {
  console.log("antes de executar a fução callback");
  name();
  console.log("após de executar a fução callback");
}

sayMyname(() => {
  console.log("estou em uma callback");
});

div();//----------

/*
  Function() constructor
  
  *expressão new
  *criar um novo objeto
  *this keyword 

*/

function Person(name) {
  this.name = name;

  this.walk = () => {
    return this.name + " está andando";
  };

  this.stop = () => {
    return this.name + " está parado";
  };
}

const klever = new Person("klever");
const lima = new Person("lima");

console.log(`${klever.walk()}`);

console.log(`${lima.stop()}`);

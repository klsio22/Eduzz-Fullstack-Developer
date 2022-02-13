const div = () => console.log("--".repeat(20));

//Quando a função tem apenas um argumento não é obrigatorio o uso de parametros
let sum = a => a;
console.log(sum(2))

//Definição de array function com objetos
let createObj = () => ({
  User: "kleidmison"
});
console.log(createObj())
div(); //---

//Definição de função construtora

/* function Car(){
  this.Foo = 'bar'
}

console.log(new Car()) */


//Erro de usar um função anônima como construtora umTypeError: Veiculo is not a constructor
/* let Veiculo = ()=>{
  this.Foo = 'bar'
}

console.log(new Veiculo()) */

//Nessa função o this faz um referencia ao proprio objeto da sua função
//Esse tipo de contexto possui contexto de invocação


let obj = {

  showContext: function showContext() {
    //console.log(this)
    this.log('teste')

    //Uncaught TypeError: this.log is not a function
    /* setTimeout(function () {
      this.log('after 1000ms')
    }, 1000)
 */

    setTimeout(() => {
      this.log('after 1000ms')
      console.log(this)
    }, 1000)

    //Codigo verboso usado antes do ES6
    /*  setTimeout(function () {
       console.log(this)

     }.bind(this), 1000) */

  },

  log: function log(value) {
    console.log(value);
  }
}

obj.showContext();
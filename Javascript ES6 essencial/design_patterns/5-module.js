//Module

let name = 'default'

function getName(){
  return name ;
}

function setName(newName){
  name = newName;
}

module.exports = {
  getName,
  setName
}


/* 

Exportar: 
const div = () => console.log("--".repeat(20));

//criar um objeto da função que será exportada via modulo 
 module.exports = {
   div
 }

============================================================
Importar:
const {div} =  require('./divisor.js')

*/


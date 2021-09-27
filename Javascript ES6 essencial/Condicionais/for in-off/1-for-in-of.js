let arr = [3,5,7,"teste"]
arr.foo = "Hello"

for(let i in arr){
  console.log(i) //logs ""
}

for (let i of arr){ // imprime os valores do array
  console.log(i) // 3 , 5, 7, teste
}

/* 
  
var texto = "";
for (var i = 0; i < var.length; i++) texto += var[i] + " ";
console.log(texto);

*/



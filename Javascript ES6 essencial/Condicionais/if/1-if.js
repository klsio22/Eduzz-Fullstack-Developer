const array = [0, 1, 2, 3, 4, 5];

array.forEach((item) => {
  if (item % 2 === 0) {
    console.log(`o número ${item} é par`);
  } else {
    console.log(`o número ${item} é impar`);
  }
});
console.log("------------------------------------------")
const alpha = ["a",'b','c']
let word = "$$$Tranco&&&"
let newWord = word.split("");
console.log(newWord)
alpha.forEach(letter =>{
  let clearCaracterSpecil = word.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g,'')
  console.log(clearCaracterSpecil)
     if(newWord.includes(letter)){
      console.log(`letra ${letter} encontrada`)
    }else{
      console.log(`nuhuma letra foi encontrada`)
    } 
  
})

console.log(newWord)

console.log("------------------------------------------")

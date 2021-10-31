/* 
Enhanced Object Literals in ES6
*/

const name = () => 'Digital Innovation One';

function model() {
  console.log("dentro da função")
}

let propName = 'Olá'

let obj = {
  model,
  sum: (a, b) => {
    return a + b;
  },

  multiply(a, b) {
    return a * b
  },

  [propName + " mundo !"]: 'prop value'
  
};

obj.model()

console.log("Soma:"+obj.sum(5, 2))
console.log("Mutiplicação: " +obj.multiply(5, 2))

console.log(obj)

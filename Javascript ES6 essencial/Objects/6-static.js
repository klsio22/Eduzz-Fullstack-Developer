function Person() {
}

Person.walk = function(){
  console.log('walking...')
}

console.log(Person.walk())

//Modelo no ES6 em diante
class Person{
  static walk(){ 
    console.log('walking...')
  }
}

console.log(Person.walk())
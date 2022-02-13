const {div} =  require('./divisor.js')

class Person {
  #name = '';
  constructor(initialName) {
    this.#name = initialName;
  }

  setName(name) {
    this.#name = name;
  }

  getName() {
    return this.#name;
  }
}

const p1 = new Person('klesio');

console.log(p1);
console.log(p1.getName());
p1.getName;
p1.setName("kledymison");
console.log(p1.getName());

div(); //---

function Person(initialName) {
  var name = initialName;

  Object.defineProperty(this, 'name', {
    get: function () {
      return name;
    },

    set: function (value) {
      name = value;
    },
  });
}



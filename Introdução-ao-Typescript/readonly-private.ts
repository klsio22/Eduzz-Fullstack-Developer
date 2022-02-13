interface Dog {
  name: string;
  age: number;
  favoritePake?: string;

}

type DogOnlyRead = {
  +readonly [k in keyof Dog]-?: Dog[k];
}

class myDog implements Dog {
  age;
  name;
  favoritePake;

  constructor(name:string, age:number , favoritePake:string) {
    this.name = name;
    this.age = age
    this.favoritePake = favoritePake
  }

}

const cao = new myDog('Apolo', 14,'Central Park')
cao.age = 8;

console.log(cao)
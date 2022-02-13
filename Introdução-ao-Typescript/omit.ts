interface Person {
  name: string;
  age: number;
  nationality: string;
}

interface Brasilian extends Omit<Person, 'nationality'> { }

const brasilian: Brasilian = {
  //Tenho acesnameos ,métodos  
  name: 'João',
  age: 15,
}

console.log(brasilian)


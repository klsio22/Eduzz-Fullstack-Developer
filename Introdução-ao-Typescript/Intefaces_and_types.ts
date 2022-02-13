/* function soma(a:number,b:number) {
  return a + b ;
} */

const soma = (a: number, b: number) => {
  return a + b;
};

console.log(soma(2, 5));

//types
//interfaces

interface IAnimal {
  name: string;
  type: "terrestrial" | "aquatic";
  domestc:boolean;
  sound(heightInDecibels: number): void;
}

/* const animal: IAnimal = {
  name: "Cavalo",
  type: "Terrestre",
  sound:(heightInDecibels) => (`${heightInDecibels}`)
};
console.log(animal)
*/
interface Idog extends IAnimal{
  port: 'small' | 'medium' | 'big'
}

interface IFeline extends IAnimal {
  nigthVision: boolean;
}

const feline: IFeline = {
  name: "Lion",
  type: "terrestrial",
  nigthVision: true,
  domestc:false,
  sound:(heightInDecibels) => (`${heightInDecibels}`)
};
//os types faz a unição das interfeces pegando ou não os tipos de cada interface
type IDomestic = IFeline | Idog

const animal: IDomestic = {
  name:'Pitbull',
  port:'medium',
  domestc:true,
  type:'terrestrial',
  nigthVision:true,
  sound:(heightInDecibels) => (`${heightInDecibels}`)

}
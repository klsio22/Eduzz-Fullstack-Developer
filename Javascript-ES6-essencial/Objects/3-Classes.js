class Animal {
  constructor(){
    this.qtdePatas = 0;
  }
  
}

class Cachorro extends Animal{
  constructor(morde){
    super();
    this.qtdePatas = 4;
    this.morde = morde;
  }

  latir(){
    console.log('Au!,au!')
  }
  
}

const pug = new Cachorro(false);
console.log(`Pug : Quantidade de patas ${pug.qtdePatas} , ele morde: ${false}`);

const pitbull = new Cachorro(true);
console.log(`Pitbull : Quantidade de patas ${pitbull.qtdePatas} , ele morde: ${true}`);
pitbull.latir(); 
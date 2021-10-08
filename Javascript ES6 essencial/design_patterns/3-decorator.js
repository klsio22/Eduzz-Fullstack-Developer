// decorator
let div = () => console.log("--".repeat(20));


let loggendIn = false;

function callIFAuthenticated(fn) {
  return loggendIn && fn();
}

function sum(a, b) {
  return a + b;
}

console.log(callIFAuthenticated(() => sum(2, 3)));
loggendIn = true
console.log(callIFAuthenticated(() => sum(2, 3)));
loggendIn = false
console.log(callIFAuthenticated(() => sum(2, 3)));


div();//---

//Suporte experimental

function readoly (target,name,description){
  description.writable = false;
  return description
}

class jab {
  @readoly
  title(){
    return 'CEO'
  }
}
div();//---
//Angular  

//Suporte experimental
@Component({
  selector:'app-reactive-favorite-color',
  template:`Favorite color`
})

export class FavoriteColorComponet {
  favoriteColorComponet = new FormControl('');
}

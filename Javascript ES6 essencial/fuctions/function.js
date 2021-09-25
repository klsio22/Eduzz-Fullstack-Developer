const fn = () => "Code here";

//Function Currying
const controlFnExec = (fnParam) => (allowed) => {
  if (allowed) {
    fnParam();
    console.log("Code allowed");
  }
};

let handleFnExecution = controlFnExec(fn);
handleFnExecution(true);

/* function controlFnExec(fnParam) {
  return function (allowed) {
    if (allowed) {
      fnParam();
    }
  };
}

let handleFnExecution = controlFnExec(fn);
handleFnExecution(true); */

const logValue = (value) => console.log("value");
const logFnResult = (fnparam) => console.log(fnparam());

logFnResult(fn);
logValue();

(() => {
  this.name = "arrow function";
  const getNameArrowFn = () => this.name;
  //Na arrow fuction ele aponta para o contexto do this no momento da sua chamada

  function getName() { 
    return this.name;
  }
  //Na caso da fuction delarativa ele só executa o this no momento da sua chamada
  
  const user = {
    name: "Tiago Silva",
    getNameArrowFn,
    getName,
  };

  console.log(user.getNameArrowFn());
  console.log(user.getName());
})();

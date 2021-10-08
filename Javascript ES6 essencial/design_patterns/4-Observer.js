
/* 

caso seja isso é uma coleção que funciona de forma unidirecional constante ou seja ele vai emitir uma notificação sempre que ocorre alguma mudança nos seus objetos
se usa na transferência de dados

*/


class Obsevable {
  constructor() {
    this.obsevables = []
  }

  subscribe(f) {
    this.obsevables.push(f);
  }

  unsubscribe(f) {
    this.obsevables = this.obsevables.filter(subscribe => subscribe != f);
  }

  notify(data) {
    this.obsevables.forEach(observer => observer(data));
  }

}

const o = new Obsevable();

const logData = data => console.log(`Subscribe 1 :  ${data}`);
const logData2 = data => console.log(`Subscribe 2 : ${data}`);
const logData3 = data => console.log(`Subscribe 3 : ${data}`);

o.subscribe(logData);
o.subscribe(logData2);
o.subscribe(logData3);

o.notify('notified 1');

o.unsubscribe(logData2);
o.notify('notified 2');
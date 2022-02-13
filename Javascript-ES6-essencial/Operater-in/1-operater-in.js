// Arrays
let trees = ['redwood', 'bay', 'cedar', 'oak', 'maple'];
0 in trees        // retorna true
3 in trees        // retorna true
6 in trees        // retorna false
'bay' in trees    // retorna false (você precisa especificar o
                  // número do índice, não o valor naquele índice)
'length' in trees // retorna true (length é uma propridade do Array)
Symbol.iterator in trees // retorna true (arrays são iteráveis, funciona apenas na ES2015+)

// Objetos predefinidos
'PI' in Math          // retorna true

// Objetos personalizados
let mycar = {make: 'Honda', model: 'Accord', year: 1998};
let srt = ""
'make' in mycar  // retorna true
'model' in mycar // retorna true





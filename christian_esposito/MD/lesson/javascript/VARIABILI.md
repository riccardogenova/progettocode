# VARIABILI

Differenze tra var, let e const in JavaScript
In JavaScript, le parole chiave var, let e const vengono utilizzate per dichiarare variabili. Sebbene tutte e tre servano a questo scopo, presentano differenze fondamentali in termini di ambito (scope), riassegnazione (reassignment) e hoisting.

1. Ambito (Scope)

var: Le variabili dichiarate con var hanno uno ambito di funzione (function scope). Ciò significa che sono accessibili all'interno della funzione in cui sono dichiarate e a tutte le funzioni interne annidate. Inoltre, le variabili var sono soggette a "variabile globale", ovvero possono essere accessibili anche al di fuori di qualsiasi funzione se dichiarate nell'istruzione globale.


Differenze tra var, let e const in JavaScript
In JavaScript, le parole chiave var, let e const vengono utilizzate per dichiarare variabili. Sebbene tutte e tre servano a questo scopo, presentano differenze fondamentali in termini di ambito (scope), riassegnazione (reassignment) e hoisting.

1. Ambito (Scope)

var: Le variabili dichiarate con var hanno uno ambito di funzione (function scope). Ciò significa che sono accessibili all'interno della funzione in cui sono dichiarate e a tutte le funzioni interne annidate. Inoltre, le variabili var sono soggette a "variabile globale", ovvero possono essere accessibili anche al di fuori di qualsiasi funzione se dichiarate nell'istruzione globale.
Esempio di scope di var:

JavaScript
function exampleVar() {
  var varVariable = "Var scope";
  console.log(varVariable); // Var scope
}

exampleVar();
console.log(varVariable); // ReferenceError: varVariable is not defined
 


let: Le variabili dichiarate con let hanno uno ambito di blocco (block scope). Ciò significa che sono accessibili solo all'interno del blocco di codice in cui sono dichiarate, inclusi i blocchi if, for, while e le funzioni interne. Le variabili let non sono soggette a "variabile globale".
Esempio di scope di let:

JavaScript
function exampleLet() {
  let letVariable = "Let scope";
  console.log(letVariable); // Let scope

  if (true) {
    console.log(letVariable); // Let scope
  }
}

exampleLet();
console.log(letVariable); // ReferenceError: letVariable is not defined
 


const: Le variabili dichiarate con const hanno lo stesso ambito di blocco di let. Tuttavia, non possono essere riassegnate una volta dichiarate. Il valore di una costante rimane immutabile durante il suo ciclo di vita.
Esempio di scope e riassegnazione di const:

JavaScript
function exampleConst() {
  const constVariable = "Const scope";
  console.log(constVariable); // Const scope

  constVariable = "New value"; // Uncaught TypeError: Assignment to constant variable
}

exampleConst();
 


2. Riassegnazione (Reassignment)

var: Come già accennato, le variabili var possono essere riassegnate all'interno del loro ambito. Il valore precedente viene sovrascritto con il nuovo valore.
Esempio di riassegnazione di var:

JavaScript
var varVariable = "Initial value";
console.log(varVariable); // Initial value

varVariable = "New value";
console.log(varVariable); // New value
 


let: Le variabili let possono essere riassegnate all'interno del loro ambito. Il valore precedente viene sovrascritto con il nuovo valore.
Esempio di riassegnazione di let:

JavaScript
let letVariable = "Initial value";
console.log(letVariable); // Initial value

letVariable = "New value";
console.log(letVariable); // New value
 


const: Le variabili const non possono essere riassegnate. Il tentativo di riassegnare una costante risulterà in un errore.
Esempio di riassegnazione di const (errore):

JavaScript
const constVariable = "Initial value";
console.log(constVariable); // Initial value

constVariable = "New value"; // Uncaught TypeError: Assignment to constant variable
 


3. Hoisting

L'hoisting è un meccanismo in JavaScript in cui le dichiarazioni di variabili e funzioni vengono portate all'inizio del loro ambito prima dell'esecuzione del codice. Ciò significa che le variabili e le funzioni sono accessibili all'interno del loro ambito anche se sono dichiarate dopo il punto di utilizzo.

var: Le variabili var sono soggette a hoisting completo. Ciò significa che sia la dichiarazione che l'inizializzazione della variabile vengono spostate all'inizio del loro ambito. La variabile è accessibile con il valore undefined prima dell'assegnazione di un valore effettivo.
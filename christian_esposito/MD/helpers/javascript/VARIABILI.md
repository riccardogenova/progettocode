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

## Differenze tra var, let e const in JavaScript: Una spiegazione dettagliata

In JavaScript, le parole chiave `var`, `let` e `const` sono utilizzate per dichiarare le variabili, ovvero contenitori per memorizzare e gestire i dati all'interno di un programma. Sebbene tutte e tre consentano di creare variabili, differiscono per ambito, visibilità e possibilità di riassegnazione del valore.

**1. Ambito:**

* **`var`:** Le variabili dichiarate con `var` hanno un ambito **globale**, il che significa che sono accessibili da qualsiasi parte del codice, anche al di fuori dei blocchi di codice in cui sono state dichiarate. 

* **`let` e `const`:** Le variabili dichiarate con `let` o `const` hanno un ambito di **blocco**. Ciò significa che sono accessibili solo all'interno del blocco di codice in cui sono state dichiarate, come blocchi `if`, `for` o `while`, e non sono visibili al di fuori di esso.

**Esempio di ambito:**

```javascript
// Ambito globale con var
var nomeGlobale = "Mario"; // Accessibile da qualsiasi parte del codice

function stampaNome() {
  console.log(nomeGlobale); // Può accedere alla variabile globale
}

stampaNome(); // Stampa "Mario"

// Ambito di blocco con let
let nomeLocale = "Luigi"; // Accessibile solo all'interno del blocco

function stampaNomeLocale() {
  console.log(nomeLocale); // Può accedere alla variabile locale
}

stampaNomeLocale(); // Stampa "Luigi"

console.log(nomeLocale); // Errore: variabile non definita al di fuori del blocco
```

**2. Visibilità:**

* **`var`:** Le variabili dichiarate con `var` sono soggette a **ridichiarazione**. Ciò significa che è possibile dichiarare una variabile con lo stesso nome in un blocco di codice diverso, sovrascrivendo la variabile precedente.

* **`let` e `const`:** Le variabili dichiarate con `let` o `const` non possono essere ridichiarate all'interno dello stesso **ambito**. Se si tenta di dichiarare una variabile con lo stesso nome già utilizzato, si verifica un errore.

**Esempio di visibilità:**

```javascript
// Ridichiarazione con var
var nome = "Mario"; // Dichiarazione globale

function esempioVar() {
  var nome = "Luigi"; // Ridichiarazione all'interno del blocco
  console.log(nome); // Stampa "Luigi"
}

console.log(nome); // Stampa "Mario" (variabile globale)

esempioVar();
console.log(nome); // Stampa ancora "Mario" (variabile globale non modificata)

// Errore con let
let nome = "Mario"; // Dichiarazione globale

function esempioLet() {
  let nome = "Luigi"; // Tentativo di ridichiarazione
  console.log(nome); // Errore: variabile già dichiarata
}

esempioLet();
```

**3. Riassegnazione del valore:**

* **`var`:** Le variabili dichiarate con `var` possono essere **riassegnate** quante volte si desidera nel corso del programma. Il nuovo valore sovrascrive il valore precedente.

* **`const`:** Le variabili dichiarate con `const` sono **immutabili**, ovvero il loro valore non può essere modificato una volta assegnato. Tentare di riassegnare un valore a una variabile `const` provoca un errore.

**Esempio di riassegnazione:**

```javascript
// Riassegnazione con var
var numero = 10;
numero = 20;
console.log(numero); // Stampa 20

// Immutabilità con const
const pi greco = 3.14159;
// pi = 3.14; // Errore: impossibile riassegnare il valore a una variabile const
console.log(pi greco); // Stampa 3.14159
```

| Caratteristica | var | let | const |
|---|---|---|---|
| Ambito | Globale | Blocco | Blocco |
| Visibilità | Può essere ridichiarata | Non può essere ridichiarata | Non può essere ridichiarata |
| Riassegnazione | Può essere riassegnata | Può essere riassegnata | Immutabile |

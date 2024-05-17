<!-- @format -->

## Introduzione

In JavaScript, le entità sono gli elementi fondamentali che compongono il codice e consentono di rappresentare dati e comportamenti. Queste entità possono essere variabili, oggetti, funzioni e altro ancora. In questa lezione, esploreremo ogni tipo di entità e come interagiscono tra loro.

### 1. Variabili

Le variabili sono simboli che rappresentano valori. In JavaScript, puoi dichiarare variabili utilizzando le parole chiave `var`, `let`, o `const`.

- `var`: Definisce una variabile globalmente o localmente a livello di funzione.
- `let`: Definisce una variabile localmente a livello di blocco, introdotta con ES6.
- `const`: Definisce una costante il cui valore non può essere riassegnato.

```javascript
var numero = 10;
let nome = 'Mario';
const PI = 3.14;
```

### 2. Oggetti

Gli oggetti sono collezioni di dati e comportamenti correlati, rappresentati come coppie chiave-valore all'interno di parentesi graffe `{}`. Possono contenere proprietà e metodi.

```javascript
let persona = {
  nome: 'Alice',
  eta: 30,
  saluta: function () {
    console.log('Ciao, sono ' + this.nome);
  },
};

persona.saluta(); // Output: "Ciao, sono Alice"
```

### 3. Funzioni

Le funzioni sono blocchi di codice riutilizzabili che possono essere chiamati in qualsiasi punto del programma. Possono essere definite in vari modi, come funzioni anonime o funzioni dichiarative.

```javascript
function somma(a, b) {
  return a + b;
}

let risultato = somma(5, 3); // risultato sarà 8
```

### 4. Scope

Lo scope determina la visibilità e l'accessibilità di variabili e funzioni in diversi punti del codice. JavaScript utilizza lo scope a livello di funzione e a livello di blocco (con `let` e `const`).

```javascript
function foo() {
  var x = 10;
  console.log(x); // Output: 10
}
console.log(x); // Errore: x non è definito (fuori dallo scope di foo)
```

### 5. Closure

Un closure è una funzione interna che ha accesso alle variabili della funzione contenitrice, anche dopo che la funzione contenitrice ha completato l'esecuzione. Utile per mantenere lo stato delle variabili private.

```javascript
function creaContatore() {
  let count = 0;
  return function () {
    return ++count;
  };
}

let incrementa = creaContatore();
console.log(incrementa()); // Output: 1
console.log(incrementa()); // Output: 2
```

### 6. Prototipi e l'ereditarietà

JavaScript utilizza un sistema di prototipi per gestire l'ereditarietà degli oggetti. Ogni oggetto ha un prototipo dal quale eredita metodi e proprietà.

```javascript
let animale = {
  mangia: function () {
    console.log('Sto mangiando');
  },
};

let cane = Object.create(animale);
cane.abbaia = function () {
  console.log('Bau bau!');
};

cane.abbaia(); // Output: "Bau bau!"
cane.mangia(); // Output: "Sto mangiando"
```

### 7. Classi (introduzione in ES6)

Le classi in JavaScript sono una sintassi per creare oggetti e gestire l'ereditarietà. Sono uno zucchero sintattico sopra i prototipi.

```javascript
class Persona {
  constructor(nome, eta) {
    this.nome = nome;
    this.eta = eta;
  }

  saluta() {
    console.log('Ciao, sono ' + this.nome);
  }
}

let alice = new Persona('Alice', 30);
alice.saluta(); // Output: "Ciao, sono Alice"
```

## Conclusioni

Le entità in JavaScript, come variabili, oggetti, funzioni e altro ancora, sono fondamentali per lo sviluppo di applicazioni web moderne. Comprendere come queste entità interagiscono tra loro, insieme ai concetti come scope, closure, prototipi e classi, è cruciale per diventare un programmatore JavaScript efficace.

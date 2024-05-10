<!-- @format -->

# Lezione su JavaScript: `document`, `window`, Scope, Variabili, Funzioni e Costanti

## `document` e `window`

In JavaScript, `document` e `window` sono oggetti fondamentali che rappresentano il documento HTML corrente e la finestra del browser, rispettivamente.

- `document`: Rappresenta la struttura del documento HTML e fornisce metodi per manipolarlo dinamicamente, ad esempio, modificando elementi, aggiungendo o rimuovendo elementi DOM, gestendo eventi, ecc.

- `window`: Rappresenta la finestra del browser e fornisce metodi e proprietà per controllare la finestra del browser stessa, come la gestione dei popup, la navigazione, l'apertura di nuove finestre, il controllo dei timer, ecc.

```javascript
// Esempio di utilizzo di document e window
console.log(document.title); // Stampa il titolo del documento HTML
window.alert('Ciao!'); // Apre una finestra di avviso con il messaggio "Ciao!"
```

## Scope

Lo scope in JavaScript si riferisce alla visibilità e all'accessibilità delle variabili e delle funzioni all'interno del codice. JavaScript ha lo scope globale e lo scope locale.

- **Scope Globale**: Le variabili definite al di fuori di qualsiasi funzione sono globali e possono essere accessibili da qualsiasi parte dello script.

- **Scope Locale**: Le variabili definite all'interno di una funzione sono locali e accessibili solo all'interno di quella funzione.

```javascript
// Esempio di scope
let globalVariable = 'Variabile globale';

function exampleFunction() {
  let localVariable = 'Variabile locale';
  console.log(globalVariable); // Accessibile (Variabile globale)
  console.log(localVariable); // Accessibile (Variabile locale)
}

console.log(globalVariable); // Accessibile (Variabile globale)
console.log(localVariable); // Non accessibile (Errore)
```

## Variabili

Le variabili in JavaScript sono contenitori per memorizzare dati. In JavaScript, le variabili possono essere dichiarate con `var`, `let` o `const`.

- `var`: Dichiarazione di variabili tradizionale. Le variabili dichiarate con `var` hanno lo scope di funzione.

- `let`: Introdotta in ES6, consente di dichiarare variabili con scope di blocco, limitandone la visibilità all'interno del blocco in cui sono state dichiarate.

- `const`: Introdotta in ES6, consente di dichiarare costanti il cui valore non può essere modificato dopo l'inizializzazione.

```javascript
// Esempio di variabili
var x = 10; // Dichiarazione con var
let y = 20; // Dichiarazione con let
const number = 4; // Dichiarazione di una costante

x = 15; // Modifica di una variabile
y = 25; // Modifica di una variabile
number = 10; // Errore! Impossibile modificare una costante
```

## Funzioni

Le funzioni in JavaScript sono blocchi di codice riutilizzabili che possono essere richiamati per eseguire operazioni specifiche.

```javascript
// Esempio di funzione
function greet(name) {
  console.log('Ciao, ' + name + '!');
}

greet('Mario'); // Output: Ciao, Mario!
```

## Costanti

Le costanti sono variabili il cui valore non può essere modificato dopo l'inizializzazione. In JavaScript, è possibile definire costanti utilizzando la parola chiave `const`.

```javascript
// Esempio di costante
const number = 2;
console.log(number); // Output: 2
number = 4; // Errore! Impossibile modificare una costante
```

## Operatore membro punto "`.`", cos'è?

L'operatore punto in **JavaScript** è un simbolo (".") utilizzato per accedere alle proprietà e ai metodi di un oggetto. Quando viene utilizzato seguito dal nome di una proprietà o di un metodo, permette di **navigare** all'interno della struttura dell'oggetto per ottenere o modificare i suoi valori o per chiamare i suoi metodi.

In pratica, l'operatore punto è usato per specificare la relazione di appartenenza tra un oggetto e i suoi membri. Quando si scrive `oggetto.nomeProprietà`, JavaScript interpreterà ciò come "prendi la proprietà `nomeProprietà` dell'oggetto `oggetto`".

Ecco un esempio molto semplice:

```javascript
var persona = {
  nome: 'Mario',
  età: 30,
};

console.log(persona.nome); // Stampa: "Mario"
```

Qui, l'operatore punto viene utilizzato per accedere alla proprietà `nome` dell'oggetto `persona`.

In breve, l'operatore punto in JavaScript è un meccanismo essenziale per interagire con gli oggetti e accedere ai loro membri.

## OPP (Object-Oriented Programming)

In JavaScript, l'**OOP** è supportata principalmente attraverso il concetto di prototipi. Nonostante JavaScript non abbia una classica implementazione basata sul concetto di classi come alcuni altri linguaggi orientati agli oggetti (come Java o C++), è comunque possibile implementare il paradigma OOP attraverso prototipi e costruttori di oggetti.

1.  **Costruttori di oggetti**: I costruttori di oggetti sono funzioni che vengono utilizzate per creare nuove istanze di oggetti. Queste funzioni definiscono la struttura di un oggetto e le sue proprietà. Ad esempio:

```javascript
function Persona(nome, età) {
  this.nome = nome;
  this.età = età;
}

var mario = new Persona('Mario', 30);
console.log(mario.nome); // Output: "Mario"
console.log(mario.età); // Output: 30
```

2. **Prototipi**: In JavaScript, ogni oggetto ha un prototipo che può contenere proprietà e metodi che possono essere condivisi tra tutte le istanze di quell'oggetto. È possibile aggiungere metodi a un prototipo per consentire la condivisione di codice tra tutte le istanze di un oggetto. Ad esempio:

```javascript
Persona.prototype.saluta = function () {
  console.log('Ciao, sono ' + this.nome);
};

mario.saluta(); // Output: "Ciao, sono Mario"
```

3.  **Ereditarietà prototipica**: In JavaScript, l'ereditarietà viene gestita attraverso la catena dei prototipi. Ogni oggetto ha un riferimento al suo prototipo padre, e le proprietà e i metodi di questo prototipo possono essere ereditati dall'oggetto stesso. Ad esempio:

```javascript
function Studente(nome, età, corso) {
  Persona.call(this, nome, età);
  this.corso = corso;
}

Studente.prototype = Object.create(Persona.prototype);
Studente.prototype.constructor = Studente;

Studente.prototype.presentati = function () {
  console.log('Ciao, sono ' + this.nome + ' e studio ' + this.corso);
};

var luca = new Studente('Luca', 25, 'Informatica');
luca.saluta(); // Output: "Ciao, sono Luca"
luca.presentati(); // Output: "Ciao, sono Luca e studio Informatica"
```

In questo esempio, la funzione `Studente` eredita le proprietà e i metodi della funzione `Persona` attraverso il prototipo. La funzione `Object.create()` viene utilizzata per creare un nuovo oggetto il cui prototipo è il prototipo di `Persona`, in modo che la catena di ereditarietà sia stabilita.

In sintesi, l'**OOP** in JavaScript si basa sul concetto di prototipi e costruttori di oggetti per consentire la creazione e l'organizzazione di codice orientato agli oggetti. Sebbene sia diverso dall'**OOP** in altri linguaggi, può essere altrettanto potente e flessibile una volta compreso.

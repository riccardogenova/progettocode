# Lezione su JavaScript

## Introduzione

Benvenuti alla lezione su JavaScript! Oggi impareremo i fondamenti di questo potente linguaggio di programmazione.

## Che cos'è JavaScript?

JavaScript è un linguaggio di programmazione interpretato comunemente utilizzato per aggiungere interattività alle pagine web. È ampiamente utilizzato per la creazione di applicazioni web moderne.

## Sintassi di base

JavaScript può essere inserito all'interno di tag `<script>` all'interno del documento HTML o esternamente in file JavaScript separati.

`// Esempio di script JavaScript`

`alert("Ciao, mondo!");`

## Variabili e tipi di dati

In JavaScript, le variabili vengono dichiarate utilizzando le parole chiave `var`, `let`, o `const`. I tipi di dati principali includono numeri, stringhe, booleani, oggetti e array.

1. **var**: È stata la prima parola chiave utilizzata per dichiarare variabili in JavaScript. Ha uno scope di funzione o, se dichiarata al di fuori di qualsiasi funzione, ha uno scope globale. Una variabile dichiarata con var può essere ri-dichiarata e aggiornata ovunque all'interno della sua funzione o dello scope globale.

2. **let**: È stata introdotta con ES6 (ECMAScript 2015) per risolvere alcuni problemi legati allo scope di var. Una variabile dichiarata con let ha uno scope di blocco, che significa che è visibile solo all'interno del blocco in cui è stata dichiarata. Inoltre, non può essere ri-dichiarata nello stesso blocco di codice.

3. **const**: Anche questa è stata introdotta con ES6. Una variabile dichiarata con const ha uno scope di blocco e, a differenza di let, non può essere ri-dichiarata. Inoltre, una volta assegnato un valore a una variabile const, questo valore non può essere modificato.

`// Dichiarazione di variabili`

```
var nome = "Mario";
let eta = 30;
const PI = 3.14;
```

`// Esempio di oggetto e array`

```
let persona = {
    nome: "Mario",
    eta: 30,`
    hobby: ["calcio", "musica"]
};
console.log(persona.nome); // Output: Mario
console.log(persona.hobby[0]); // Output: calcio
```

## Operatori

JavaScript supporta una varietà di operatori, inclusi operatori aritmetici, di confronto e logici.

```
let x = 10;
let y = 5;
```

```
let somma = x + y; // somma = 15
let maggiore = x > y; // maggiore = true
let logico = (x < 15) && (y > 0); // logico = true
```

## Strutture di controllo

JavaScript supporta le solite strutture di controllo come `if`, `else`, `for`, `while` e `switch`.

```
let numero = 10;
```

```
if (numero > 0) {
    alert("Il numero è positivo");
}
else {alert("Il numero è negativo");
}
```

## Funzioni

Le funzioni in JavaScript consentono di raggruppare blocchi di codice riutilizzabili. Le funzioni possono essere dichiarate usando la parola chiave `function`.

`// Esempio di funzione`

```
function saluta(nome) {
    alert("Ciao, " + nome + "!");
}
```

`saluta("Mario"); // Output: Ciao, Mario!`

## Scope

JavaScript ha due tipi di scope: scope globale e scope locale. Le variabili dichiarate al di fuori di una funzione hanno scope globale, mentre le variabili dichiarate all'interno di una funzione hanno scope locale.

```
var globale = "Variabile globale";

function testScope() {
    var locale = "Variabile locale";
    console.log(globale); // Output: Variabile globale
    console.log(locale); // Output: Variabile locale
}
```

```
testScope();
console.log(globale); // Output: Variabile globale
console.log(locale); // Output: Uncaught ReferenceError: locale is not defined
```

## Eventi

JavaScript può essere utilizzato per gestire gli eventi della pagina web. Gli eventi comuni includono click, mouseover, keypress, etc.

```html
<button onclick="alert('Hai cliccato il pulsante!')">Clicca qui</button>
```

## Operatore di accesso a membri

L'operatore di accesso a membri (`.`) viene utilizzato per accedere alle proprietà degli oggetti.

## Operatore di assegnazione

`"..."` = stringa

`...` = valore numerico

`true o false` = tipo buleana

## Operatore di confronto

`==` = uguale a...

`===` = identico a...

`!==` = confronta il tipo

`!=` = confronta il contenuto

`>`, `<`

`>=`, `<=`

## Operatori logici

`||` = or (almeno una deve essere vera)

`&&` = and (entrambe devono essere vere)

## Codizioni di esistenza

(not logico)`!` = contrario della variabile

`!!` = contrario del contrario (restituisce false anche se una stringa è vuota)

`0` in js è falso

---

true + true = 2

true + flase = 1

---

null = tipo nullo

undefined = tipo indefinito

---

numero (+,-,\*,/) "stringa" = NaN (not a number)

## Flowchart

schema di lavoro caratterizato da forme geometriche che indicano un determinato evento. È utilizzato per visualizzare la sequenza di passaggi o decisioni che compongono un processo o un'algoritmo in modo chiaro e intuitivo.

## Costrutti

```javascript
if(condizione){...}
else if(condizione2){...}
else{...}
```

---

```javascript
switch (value) {
  case value:
    break;
  case value2:
    break;
  case value3:
    break;
  default:
    break;
}
```

---

svolge sempre l'operazione la prima volta.

```javascript
do{
operazione
} while()
```

---

prima verifica la condizione.

```javascript
while (condizione) {
  operazione;
}
```

## Array

lista di informazioni

```javascript
const array = ["a", "b", "c"];
```

`...` = spread operator.

```javascript
const array = ["a", "b", "c"];
const array2 = [...array];
```

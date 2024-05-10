<!-- @format -->

### Uso di `let` in JavaScript

La parola chiave `let` permette di dichiarare variabili limitate al blocco di codice in cui vengono definite. Questo è particolarmente utile per gestire variabili in loop o in condizioni, riducendo problemi di sovrapposizione o visibilità indesiderata al di fuori dei blocchi specifici.

#### Esempi di utilizzo:

1. **Dichiarazione di Variabile**

   ```javascript
   let x = 10;
   console.log(x); // Stampa 10
   ```

2. **Visibilità di Blocco in Condizioni**

```javascript
if (true) {
  let y = 20;
  console.log(y); // Stampa 20
}
// console.log(y); // Errore: y non è definito
```

3. **Loop e Variabili di Blocco**

```javascript
for (let i = 0; i < 5; i++) {
  console.log(i); // Stampa i numeri da 0 a 4
}
// console.log(i); // Errore: i non è definito
```

#### Confronto con `var`

`let` offre vantaggi significativi rispetto a `var`, particolarmente nell'evitare alcuni comportamenti imprevisti dovuti allo "hoisting" (sollevamento delle dichiarazioni) e alla visibilità globale o di funzione di `var`.

```javascript
var a = 1;
let b = 2;

if (true) {
  var a = 3; // Sovrascrive la variabile globale
  let b = 4; // Dichiara una nuova variabile locale
}

console.log(a); // Stampa 3
console.log(b); // Stampa 2
```

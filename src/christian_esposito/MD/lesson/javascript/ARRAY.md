<!-- @format -->

## Gli array in JavaScript

Gli array in JavaScript sono strutture dati fondamentali per memorizzare collezioni ordinate di elementi dello stesso tipo. Consentono di raggruppare e gestire insiemi di dati in modo efficiente e organizzato. Immaginateli come contenitori a scomparti multipli, dove ogni scomparto può contenere un elemento specifico.

**Sintassi per la dichiarazione di un array:**

La sintassi per dichiarare un array in JavaScript è semplice e segue il seguente schema:

```javascript
let nomeArray = []; // Dichiarazione di un array vuoto
```

Dove:

- `nomeArray` rappresenta il nome identificativo che si assegna all'array.
- Le parentesi quadrate `[]` indicano che si tratta di un array.

**Esempio di dichiarazione e inizializzazione di un array:**

```javascript
let numeri = [10, 20, 30, 40, 50]; // Dichiarazione e inizializzazione con valori
let nomi = ['Mario', 'Rossi', 'Bianchi']; // Dichiarazione e inizializzazione con stringhe
```

**Accesso agli elementi di un array:**

Per accedere agli elementi di un array, si utilizza l'indice dell'elemento tra parentesi quadrate dopo il nome dell'array. L'indice inizia da zero (0).

```javascript
console.log(numeri[2]); // Stampa il valore all'indice 2 (30)
console.log(nomi[1]); // Stampa il valore all'indice 1 ("Rossi")
```

**Modifica degli elementi di un array:**

È possibile modificare il valore di un elemento di un array utilizzando il suo indice e assegnando un nuovo valore.

```javascript
numeri[3] = 100; // Modifica il valore all'indice 3 con 100
nomi[0] = 'Luigi'; // Modifica il valore all'indice 0 con "Luigi"
```

**Lunghezza di un array:**

La proprietà `length` di un array restituisce il numero di elementi contenuti nell'array.

```javascript
console.log(numeri.length); // Stampa 5 (numero di elementi nell'array "numeri")
console.log(nomi.length); // Stampa 3 (numero di elementi nell'array "nomi")
```

**Metodi comuni degli array:**

JavaScript offre diversi metodi per manipolare gli array in modo efficiente. Alcuni esempi:

- `push()`: Aggiunge un elemento alla fine dell'array.
- `pop()`: Rimuove e restituisce l'ultimo elemento dell'array.
- `shift()`: Rimuove e restituisce il primo elemento dell'array.
- `unshift()`: Aggiunge un elemento all'inizio dell'array.
- `slice()`: Estrae una porzione dell'array come nuovo array.
- `concat()`: Concatena due o più array in un nuovo array.
- `indexOf()`: Restituisce l'indice del primo elemento corrispondente al valore cercato.
- `includes()`: Verifica se un valore specificato è presente nell'array.

**Esempio di utilizzo dei metodi:**

```javascript
numeri.push(60); // Aggiunge l'elemento 60 alla fine dell'array "numeri"
console.log(numeri); // Stampa [10, 20, 30, 40, 50, 60]

let primoElemento = nomi.shift(); // Rimuove e restituisce il primo elemento ("Mario")
console.log(primoElemento); // Stampa "Mario"
console.log(nomi); // Stampa ["Rossi", "Bianchi"]

let sottoArray = numeri.slice(2, 4); // Estrae un sottoarray (30, 40)
console.log(sottoArray); // Stampa [30, 40]

let nuovoArray = nomi.concat(['Verdi', 'Gialli']); // Concatena due array
console.log(nuovoArray); // Stampa ["Rossi", "Bianchi", "Verdi", "Gialli"]
```

**Dichiarazione di array con `let` e `const`:**

Come per le variabili, gli array possono essere dichiarati utilizzando le parole chiave `let` e `const`:

- **`let`:** Un array dichiarato con `let` ha un ambito di blocco e il suo contenuto può essere modificato.

- **`const`:** Un array dichiarato con `const` è immutabile, ovvero il suo contenuto non può essere modific

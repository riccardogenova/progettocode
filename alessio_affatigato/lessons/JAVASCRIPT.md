# JAVASCRIPT

## Funzioni e Variabili

### Variabili

Le **Variabili** in JavaScript sono usate per memorizzare dati che possono essere utilizzati e manipolati all'interno del programma. Una variabile può contenere diversi tipi di dati, come numeri, stringhe, oggetti, funzioni e molto altro.

Dichiarazione di una variabile:
In JavaScript moderno, ci sono tre modi principali per dichiarare una variabile:

1. **'let'**: Introduce una variabile con un ambito limitato al blocco di codice in cui è dichiarata. È utilizzato per dichiarare variabili il cui valore può cambiare.

```
let numero = 10
```

2. **'const'**: Simile a let, ma utilizzato per dichiarare variabili che non dovrebbero cambiare il loro valore dopo l'inizializzazione. Un tentativo di riassegnazione genererà un errore.

```
const PI = 3.14159;
```

3. **'var'**: Un modo più vecchio per dichiarare variabili con ambito funzionale (non limitato ai blocchi). È meno usato in JavaScript moderno a causa dei potenziali problemi di gestione dovuti al suo ambito più ampio e al comportamento di "hoisting" (elevazione).

```
var nome = "Mario";
```

### Funzioni

Le funzioni in JavaScript sono blocchi di codice progettati per eseguire una particolare attività. Una funzione può essere definita una volta e richiamata molteplici volte. Può ricevere input tramite parametri e può restituire un valore.

Ci sono diverse sintassi per dichiarare una funzione in JavaScript:

1. **Funzione dichiarata**:

```
function somma(a, b) {
    return a + b;
}
```

2. **Funzione espressa** :Una funzione può essere assegnata a una variabile. Questo tipo di funzione può essere anonima.

```
const moltiplica = function(a, b) {
    return a * b;
};
```

3. **Arrow Function** (Funzione Freccia):Introdotte in ES6, le arrow functions offrono una sintassi più concisa e gestiscono diversamente il valore di _this_.

```
const sottrai = (a, b) => a - b;
```

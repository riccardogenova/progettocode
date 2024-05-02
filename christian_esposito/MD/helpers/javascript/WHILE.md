## Il ciclo `while` in JavaScript

Il ciclo `while` è un costrutto di flusso di controllo fondamentale in JavaScript che permette di eseguire un blocco di codice in modo ripetuto finché una condizione specificata 
rimane vera. È utile per iterare su collezioni di dati, eseguire azioni ripetute fino al raggiungimento di una specifica condizione o creare loop personalizzati.

**Sintassi del ciclo `while`:**

```javascript
while (condizione) {
  // Blocco di codice da eseguire ripetutamente
}
```

Dove:

* `condizione` è un'espressione booleana che viene valutata prima di ogni iterazione del ciclo. Se la condizione è `true`, il blocco di codice viene eseguito. Se la condizione è `false`, il ciclo termina.
* Il `blocco di codice` rappresenta le istruzioni da eseguire ripetutamente finché la condizione rimane vera. Può contenere qualsiasi istruzione JavaScript valida, come dichiarazioni di variabili, assegnazioni, chiamate a funzione, operazioni e altro.

**Esempio di ciclo `while`:**

Consideriamo un ciclo che stampa numeri da 1 a 10:

```javascript
let i = 1;
while (i <= 10) {
  console.log(i);
  i++; // Incrementa il contatore
}
```

In questo esempio:

* La variabile `i` viene inizializzata a 1.
* La condizione `i <= 10` viene valutata. Se `true`, il ciclo viene eseguito.
* Il valore di `i` viene stampato a console.
* Il valore di `i` viene incrementato di 1.
* Il ciclo torna all'inizio e la condizione viene valutata nuovamente.
* Il ciclo continua finché `i` è minore o uguale a 10, dopodiché termina.

**Comportamento del ciclo:**

* Il ciclo `while` controlla la condizione **prima** di ogni iterazione.
* Se la condizione è `false` all'inizio, il ciclo non viene mai eseguito.
* Il ciclo continua ad eseguire il blocco di codice finché la condizione rimane `true`.
* È importante aggiornare la variabile o l'espressione utilizzata nella condizione all'interno del blocco di codice per garantire che il ciclo alla fine termini.

**Esempi di utilizzo del ciclo `while`:**

* **Iterare su un array:**

```javascript
const numeri = [1, 5, 10, 15, 20];
let i = 0;
while (i < numeri.length) {
  console.log(numeri[i]);
  i++;
}
```

* **Eseguire un'azione fino a un input specifico:**

```javascript
let rispostaUtente;
while (rispostaUtente !== "sì" && rispostaUtente !== "no") {
  rispostaUtente = prompt("Vuoi continuare? (sì/no)");
}

if (rispostaUtente === "sì") {
  console.log("Hai scelto di continuare");
} else {
  console.log("Hai scelto di terminare");
}
```

* **Creare un menu interattivo:**

```javascript
let sceltaUtente;
while (sceltaUtente !== "0") {
  console.log("Menu:");
  console.log("1. Visualizza dati");
  console.log("2. Modifica dati");
  console.log("3. Elimina dati");
  console.log("0. Esci");

  sceltaUtente = prompt("Inserisci la tua scelta:");

  switch (sceltaUtente) {
    case "1":
      // Visualizza dati
      break;
    case "2":
      // Modifica dati
      break;
    case "3":
      // Elimina dati
      break;
    case "0":
      console.log("Arrivederci!");
      break;
    default:
      console.log("Scelta non valida");
  }
}
```

**Differenza tra `while` e `do-while`:**

Il ciclo `do-while` è simile al ciclo `while`, ma con una differenza fondamentale: il blocco di codice viene eseguito **almeno una volta**, indipendentemente dal valore iniziale della condizione.

```javascript
do {
  // Blocco di codice da eseguire almeno una volta
} while (condizione);
```

**Conclusione:**

Il ciclo `while` è uno strumento fondamentale per il controllo del flusso del
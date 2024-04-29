# JAVASCRIPT

##

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

## Selezionare Elementi Html

- **document.getElementByIdd("mioElemento")**: seleziona un elemento dal DOM con un ID specifico

- **document.querySelector("#mioElemento")**: seleziona il primo elemento che corrisponde a un selettore CSS specificato

- **document.querySelectorAll(".classeElemento")**: seleziona tutti gli elementi che corrispondono al selettore CSS specificato. Restituisce una NodeList.

- **document.getElementsByClassName("classeElemento")**: restituisce una collezione HTMLCollection di tutti gli elementi che hanno una specifica classe.

- **document.getElementsByTagName("div")**: Restituisce una collezione HTMLCollection di tutti gli elementi con il nome del tag specificato

- **document.getElementsByName("nomeElemento")**: Restituisce una NodeList di tutti gli elementi con il valore dell'attributo name specificato.

## Oggetti

Un **oggetto** JavaScript può essere pensato come una raccolta di coppie "chiave-valore", dove ogni valore è accessibile tramite una chiave associata ad esso. Questo consente di raggruppare dati correlati in una struttura organizzata e di accedere a questi dati in modo efficiente.

### Struttura di un oggetto

Un oggetto JavaScript è racchiuso tra parentesi graffe {} e può contenere zero o più coppie chiave-valore, chiamate anche "proprietà".

```
var persona = {
    nome: "Mario",
    cognome: "Rossi",
    eta: 30
};
```

In questo esempio, abbiamo creato un oggetto chiamato persona con tre proprietà: nome, cognome e eta. Ogni proprietà è definita da una chiave e un valore separati da due punti (:). Le proprietà sono separate da virgole.

### Accesso alle Proprietà di un Oggetto

Le proprietà di un oggetto possono essere accessibili utilizzando la notazione punto . o la notazione delle parentesi quadre [].

```
console.log(persona.nome);   // Output: Mario
console.log(persona["eta"]); // Output: 30
```

### Metodi degli oggetti

Le proprietà di un oggetto possono anche contenere funzioni, chiamate "metodi". I metodi sono azioni che possono essere eseguite sull'oggetto.

```
var persona = {
    nome: "Mario",
    cognome: "Rossi",
    eta: 30,
    saluta: function() {
        console.log("Ciao, sono " + this.nome + " " + this.cognome);
    }
};

persona.saluta(); // Output: Ciao, sono Mario Rossi
```

### Istruzioni

Le istruzioni condizionali in JavaScript, come in altri linguaggi di programmazione, permettono di eseguire diversi blocchi di codice a seconda che una condizione specifica sia vera o falsa. Questo tipo di controllo di flusso è essenziale per creare script che possono prendere decisioni durante la loro esecuzione.

- **"if"**: L'istruzione if esegue un blocco di codice solo se la condizione specificata è vera. Ad esempio:

```
if (condizione) {
   // codice da eseguire se la condizione è vera
}
```

- **"else"**: L'istruzione else viene utilizzata in combinazione con if. Esso permette di eseguire un blocco di codice nel caso in cui la condizione dell'istruzione if corrispondente sia falsa. Ad esempio:

```
if (condizione) {
   // codice da eseguire se la condizione è vera
} else {
   // codice da eseguire se la condizione è falsa
}

```

- **"else if"**: L'istruzione else if permette di definire una nuova condizione da testare, nel caso in cui la condizione dell'istruzione if precedente sia falsa. Puoi avere molteplici istruzioni else if una dopo l'altra per verificare serie di condizioni. Ad esempio:

```
if (condizione1) {
    // codice da eseguire se condizione1 è vera
} else if (condizione2) {
    // codice da eseguire se condizione1 è falsa e condizione2 è vera
} else {
    // codice da eseguire se sia condizione1 che condizione2 sono false
}


```

- **"switch"**: L'istruzione switch permette di eseguire diversi blocchi di codice in base al valore di una espressione. È utile quando si hanno molteplici casi da considerare. Ecco un esempio:

```
switch (espressione) {
    case valore1:
        // codice da eseguire se espressione == valore1
        break;
    case valore2:
        // codice da eseguire se espressione == valore2
        break;
    default:
        // codice da eseguire se espressione non corrisponde a nessuno dei valori precedenti
}

```

# JAVASCRIPT

JavaScript è un linguaggio di programmazione che viene principalmente utilizzato per creare pagine web interattivo.
È utilizzato per aggiungere interattività e funzionalità dinamiche.

---

- ### Variabili

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

---

- ### Classi
  Le classi sono un modo per definire modelli per gli oggetti. Ti permettono di creare oggetti con le stesse proprietà e metodi. Le classi sono un tipo di funzione che serve a creare gli oggetti.

```
class Persona {
  constructor(nome, cognome) {
    this.nome = nome;
    this.cognome = cognome;
  }

  saluta() {
    console.log(`Ciao, sono ${this.nome} ${this.cognome}`);
  }
}
```

Per creare un nuovo oggetto utilizzando questa classe, puoi fare quanto segue:

```
let persona1 = new Persona("Mario", "Rossi");
persona1.saluta(); // Stampa: Ciao, sono Mario Rossi

```

---

- ### Funzioni

Le funzioni in JavaScript sono blocchi di codice progettati per eseguire una particolare attività. Una funzione può essere definita una volta e richiamata molteplici volte. Può ricevere input tramite parametri e può restituire un valore.

Ci sono diverse sintassi per dichiarare una funzione in JavaScript:

1. **Funzione dichiarata**:Si dichiara una funzione con la parola chiave function, seguita da un nome, un elenco di parametri tra parentesi e il corpo della funzione racchiuso tra parentesi graffe.

```
function somma(a, b) {
    return a + b;
}
```

2. **Funzione espressa** :Le funzioni possono anche essere definite come espressioni, assegnando una funzione anonima a una variabile.

```
const moltiplica = function(a, b) {
    return a * b;
};
```

3. **Arrow Function** (Funzione Freccia):Introdotte in ES6, le arrow functions offrono una sintassi più concisa e gestiscono diversamente il valore di _this_.

```
const sottrai = (a, b) => a - b;
```

---

- ### Selezionare Elementi Html

- **document.getElementByIdd("mioElemento")**: seleziona un elemento dal DOM con un ID specifico

- **document.querySelector("mioElemento")**: seleziona il primo elemento che corrisponde a un selettore CSS specificato

- **document.querySelectorAll(".classeElemento")**: seleziona tutti gli elementi che corrispondono al selettore CSS specificato. Restituisce una NodeList.

- **document.getElementsByClassName("classeElemento")**: restituisce una collezione HTMLCollection di tutti gli elementi che hanno una specifica classe.

- **document.getElementsByTagName("div")**: Restituisce una collezione HTMLCollection di tutti gli elementi con il nome del tag specificato

- **document.getElementsByName("nomeElemento")**: Restituisce una NodeList di tutti gli elementi con il valore dell'attributo name specificato.

---

- ### Oggetti

Un oggetto JavaScript può essere pensato come una raccolta di coppie "chiave-valore", dove ogni valore è accessibile tramite una chiave associata ad esso. Questo consente di raggruppare dati correlati in una struttura organizzata e di accedere a questi dati in modo efficiente.

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

---

### Accesso alle Proprietà di un Oggetto

Le proprietà di un oggetto possono essere accessibili utilizzando la notazione punto . o la notazione delle parentesi quadre, nel caso degli array [].

```
console.log(persona.nome);   // Output: Mario
console.log(persona["eta"]); // Output: 30
```

---

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

#### Metodi "Child"

- appendChild(): Aggiunge un nodo alla fine della lista dei figli di un nodo padre specificato.
- removeChild(): Rimuove un nodo figlio da un nodo padre specificato. Il nodo da rimuovere deve essere un nodo figlio del nodo padre specificato, altrimenti si verifica un errore.
- insertBefore(): Inserisce un nodo figlio prima di un nodo specifico all'interno del nodo padre.
- replaceChild(): Sostituisce un nodo figlio specificato con un nuovo nodo all'interno del nodo padre.
- childNodes: Restituisce una NodeList degli elementi figlio di un nodo specificato, in ordine di apparizione.
- firstChild: Restituisce il primo nodo figlio di un nodo specificato, come un oggetto Node.
- lastChild: Restituisce l'ultimo nodo figlio di un nodo specificato, come un oggetto Node.
- parentNode: Restituisce il nodo genitore di un nodo specificato, come un oggetto Node.

---

- ### Selettori

- **document.getElementByIdd("mioElemento")**: seleziona un elemento dal DOM con un ID specifico

- **document.querySelector("#mioElemento")**: seleziona il primo elemento che corrisponde a un selettore CSS specificato

- **document.querySelectorAll(".classeElemento")**: seleziona tutti gli elementi che corrispondono al selettore CSS specificato. Restituisce una NodeList.

- **document.getElementsByClassName("classeElemento")**: restituisce una collezione HTMLCollection di tutti gli elementi che hanno una specifica classe.

- **document.getElementsByTagName("div")**: Restituisce una collezione HTMLCollection di tutti gli elementi con il nome del tag specificato

- **document.getElementsByName("nomeElemento")**: Restituisce una NodeList di tutti gli elementi con il valore dell'attributo name specificato.

---

- ### Istruzioni

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

- **"switch"**: L'istruzione switch permette di eseguire diversi blocchi di codice in base al valore di una espressione. È utile quando si hanno molteplici casi da considerare. Ecco un esempio, _break_ permette di eseguire una condizione e poi uscire, ècome uno ":

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

- **do...while**: il corpo del ciclo viene eseguito almeno una volta prima che la condizione venga testata. Questo è perché la condizione di verifica si trova alla fine del ciclo, non all'inizio:

```
let i = 0;
do {
    console.log(i);
    i++;
} while (i < 5);
```

---

- ### Array
  Gli array consentono di memorizzare più valori in una singola variabile. Gli elementi di un array possono essere di qualsiasi tipo di dato: numeri, stringhe, booleani, oggetti, altre array e così via.

```
let numeri = new Array(1, 2, 3, 4, 5);
let frutta = new Array("mela", "banana", "arancia");
```

**Accesso agli Elementi dell'Array**
Puoi accedere agli elementi di un array utilizzando l'indice dell'elemento. L'indice di un array inizia da 0, quindi il primo elemento ha indice 0, il secondo ha indice 1 e così via.

```
let numeri = [1, 2, 3, 4, 5];
console.log(numeri[0]); // Output: 1
console.log(numeri[2]); // Output: 3
```

**Modifica degli Elementi dell'Array**
Puoi modificare gli elementi di un array assegnando un nuovo valore a un indice specifico.

```
let frutta = ["mela", "banana", "arancia"];
frutta[1] = "fragola";
console.log(frutta); // Output: ["mela", "fragola", "arancia"]
```

**Proprietà e Metodi degli Array**
Gli array in JavaScript hanno molte proprietà e metodi utili per manipolarli. Alcuni dei più comuni includono:

- **length**: Restituisce il numero di elementi presenti nell'array

```
let numeri = [1, 2, 3, 4, 5];
console.log(numeri.length); // Output: 5

```

- **push()**: Aggiunge uno o più elementi alla fine dell'array e restituisce la nuova lunghezza dell'array.

```
let numeri = [1, 2, 3];
numeri.push(4);
console.log(numeri); // Output: [1, 2, 3, 4]
```

**pop()**: Rimuove l'ultimo elemento dall'array e restituisce quell'elemento.

```
let numeri = [1, 2, 3, 4];
let elementoRimosso = numeri.pop();
console.log(elementoRimosso); // Output: 4
console.log(numeri); // Output: [1, 2, 3]
```

**Reduce**: Questo metodo esegue una funzione di riduzione su ciascun elemento dell'array, producendo un singolo valore di output. La funzione di riduzione prende quattro argomenti: un accumulatore, un elemento corrente, l'indice corrente, e l'array su cui è chiamato. Puoi utilizzare reduce per eseguire operazioni come somma, calcolo di un valore massimo o minimo, concatenazione di stringhe.

```
var array = [1, 2, 3, 4, 5];
var somma = array.reduce(function(acc, cur) {
    return acc + cur;
}, 0); // somma diventa 15
```

**Filter**: Questo metodo crea un nuovo array contenente solo gli elementi che superano un certo test definito da una funzione callback.
È per rimuovere un elemento . Vuole come parametro una (funzione), la funzione che passa deve ritornare un buleano, passa (el, index, array)

```
var array = [1, 2, 3, 4, 5];
var numeriPari = array.filter(function(elemento) {
    return elemento % 2 === 0;
}); // numeriPari diventa [2, 4]
```

**Map**: Questo metodo crea un nuovo array applicando una funzione a ciascun elemento dell'array su cui è chiamato. È per trovare un elemento. La funzione di callback viene chiamata con tre argomenti: l'elemento corrente, l'indice corrente, e l'array su cui è chiamato.

```
var array = [1, 2, 3, 4, 5];
var raddoppiati = array.map(function(elemento) {
    return elemento * 2;
}); // raddoppiati diventa [2, 4, 6, 8, 10]

```

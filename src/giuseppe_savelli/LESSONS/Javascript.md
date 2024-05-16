# JavaScript
*JavaScript è un linguaggio di programmazione utilizzato principalmente per aggiungere interattività e dinamicità alle pagine web. È uno dei pilastri fondamentali della programmazione web insieme a HTML (HyperText Markup Language) e CSS (Cascading Style Sheets). JavaScript consente di creare elementi interattivi come animazioni, giochi, form di input dinamici e molto altro ancora. È un linguaggio di scripting versatile e potente che può essere utilizzato anche al di fuori dell'ambito del web, come nello sviluppo di applicazioni desktop e mobile.*

------------
*Caratteristiche del linguaggio JavaScript:*
1. Linguaggio interpretato: JavaScript viene eseguito direttamente nel browser o su altri ambienti di esecuzione, senza la necessità di un processo di compilazione separato.
2. Tipizzazione debole o dinamica: Le variabili in JavaScript non sono tipizzate staticamente, il che significa che non è necessario dichiarare esplicitamente il tipo di dati di una variabile. Il tipo di una variabile può cambiare durante l'esecuzione del programma.
3. Orientato agli oggetti: JavaScript è un linguaggio di programmazione orientato agli oggetti, il che significa che supporta la creazione e la manipolazione di oggetti e classi. Gli oggetti possono essere definiti con proprietà e metodi che consentono di organizzare e manipolare i dati in modo efficace.
4. Funzioni di prima classe: Le funzioni in JavaScript sono trattate come oggetti di prima classe, il che significa che possono essere assegnate a variabili, passate come argomenti ad altre funzioni e restituite come valori da altre funzioni. Questa caratteristica consente un'ampia flessibilità nella scrittura di codice.
5. Gestione degli eventi: JavaScript consente di gestire gli eventi che si verificano nella pagina web, come clic del mouse, pressioni di tasti e caricamenti della pagina. Ciò consente di creare interattività e reattività nelle pagine web.
6. Manipolazione del DOM: JavaScript consente di manipolare il Document Object Model (DOM), che rappresenta la struttura di una pagina web. Ciò consente di modificare dinamicamente il contenuto, la struttura e lo stile di una pagina web in risposta all'interazione dell'utente o ad altri eventi.
7. Librerie e framework: JavaScript dispone di una vasta gamma di librerie e framework che semplificano lo sviluppo di applicazioni web complesse. Alcuni esempi popolari includono React, Angular, Vue.js per lo sviluppo di interfacce utente, e Node.js per lo sviluppo di applicazioni server-side.

---

# *Variabili*
In JavaScript, le variabili sono usate per memorizzare dati. Esse possono contenere qualsiasi tipo di dato, come numeri, stringhe, oggetti, array e così via. Le variabili in JavaScript possono essere dichiarate utilizzando le parole chiave var, let, o const.
-Esempi:
 -*Const* viene utilizzato per dichiarare variabili costanti, il cui valore non può essere riassegnato dopo la loro inizializzazione. Tuttavia, le variabili dichiarate con const non sono immutabili; significa che il loro contenuto può essere modificato se sono oggetti o array.
```
const PI = 3.14; // Dichiarazione di una variabile costante

console.log(PI); // Output: 3.14

// Tentativo di riassegnare il valore della variabile costante (genera un errore)
PI = 3.14159; // Errore: TypeError: Assignment to constant variable.
```

# *Array*
In JavaScript, un array è una struttura dati che consente di memorizzare una sequenza ordinata di elementi. Gli elementi all'interno di un array possono essere di qualsiasi tipo, inclusi numeri, stringhe, oggetti, altre array e così via. Gli array in JavaScript sono oggetti speciali che hanno numeri come indici e una proprietà length che indica la lunghezza dell'array.

-Ecco un esempio di array in JavaScript:
```
// Dichiarazione di un array di numeri
let numeri = [1, 2, 3, 4, 5];

// Dichiarazione di un array di stringhe
let colori = ["rosso", "verde", "blu"];

// Dichiarazione di un array misto
let misto = [1, "due", true, { nome: "Mario", età: 30 }];

// Accesso agli elementi dell'array tramite gli indici
console.log(numeri[0]); // Output: 1
console.log(colori[1]); // Output: verde

// Modifica di un elemento dell'array
colori[1] = "giallo";
console.log(colori); // Output: ["rosso", "giallo", "blu"]

// Aggiunta di un elemento all'array
numeri.push(6);
console.log(numeri); // Output: [1, 2, 3, 4, 5, 6]

// Lunghezza dell'array
console.log(misto.length); // Output: 4
```

Ecco invece i *Metodi dell'array*:
- `push()`: Aggiunge uno o più elementi alla fine dell'array e restituisce la nuova lunghezza dell'array.
- `pop()`: Rimuove l'ultimo elemento dall'array e restituisce quell'elemento.
- `shift()`: Rimuove il primo elemento dall'array e restituisce quell'elemento. Gli indici di tutti gli altri elementi vengono ridotti di 1.
- `unshift()`: Aggiunge uno o più elementi all'inizio dell'array e restituisce la nuova lunghezza dell'array.
- `concat()`: Concatena due o più array e restituisce un nuovo array senza modificare gli array originali.
- `slice()`: Restituisce una copia superficiale di parte di un array in un nuovo array, specificando gli indici di inizio e fine.
- `splice()`: Aggiunge, rimuove o sostituisce elementi in un array modificando l'array originale.
- `spread()`: serve per 
- `indexOf()`: Restituisce l'indice della prima occorrenza di un elemento specificato all'interno dell'array, o -1 se l'elemento non viene trovato.
- `lastIndexOf()`: Restituisce l'ultimo indice della prima occorrenza di un elemento specificato all'interno dell'array, o -1 se l'elemento non viene trovato.
-``forEach()`: Esegue una funzione per ogni elemento dell'array.
- `map()`: MODIFICA array con i risultati della chiamata di una funzione specifica su ciascun elemento dell'array, `è un metodo immutabile`.
- `filter()`: Crea un nuovo array contenente solo gli elementi che superano un test specifico definito da una funzione.
- `find()`: Restituisce il primo elemento dell'array che soddisfa una condizione specificata in una funzione di callback.
- `findIndex()`: Restituisce l'indice del primo elemento dell'array che soddisfa una condizione specificata in una funzione di -callback.
- `reduce()`: Applica una funzione su tutti gli elementi dell'array, restituendo un valore singolo.
- `reduceRight()`: Applica una funzione su tutti gli elementi dell'array in ordine inverso, restituendo un valore singolo.
- *A cosa serve `console.log()`?*
`console.log()` è una funzione in JavaScript utilizzata per stampare un output di debug sulla console del browser o della console del terminale in ambiente Node.js. È uno strumento fondamentale per il debugging e il monitoraggio del flusso di esecuzione del codice durante lo sviluppo delle applicazioni.

# *Funzioni*
Le funzioni in JavaScript sono blocchi di codice riutilizzabili che eseguono una specifica azione quando vengono chiamate. Possono accettare input (parametri) e restituire un output. Le funzioni sono uno dei concetti fondamentali della programmazione e svolgono un ruolo chiave nello sviluppo di software modulare e organizzato.

-Esempio di funzioni:

```
// Dichiarazione di una funzione che calcola la somma di due numeri
function somma(a, b) {
    return a + b;
}

// Chiamata della funzione e assegnazione del risultato a una variabile
let risultato = somma(3, 5);

// Stampa del risultato
console.log(risultato); // Output: 8
```
# *Eventi in JavaScript*
Ecco alcuni esempi di eventi:

-`Eventi del mouse`: Come clic del mouse, movimenti del mouse, rilascio del mouse, passaggio del mouse su un elemento, ecc.

-`Eventi della tastiera`: Come pressione di un tasto, rilascio di un tasto, prevenzione del comportamento predefinito di un tasto, ecc.

-`Eventi del documento`: Come caricamento della pagina, ridimensionamento della finestra, scorrimento della finestra, ecc.

-`Eventi del modulo`: Come invio di un modulo, focus su un campo di input, cambiamento del valore di un campo di input, ecc.

-`Eventi dei media`: Come riproduzione di un video, riproduzione di un audio, pausa di un video o di un audio, ecc.

-`Event listener`
```
// Seleziona l'elemento del pulsante
let pulsante = document.getElementById('mioPulsante');

// Aggiunge un event listener per l'evento di clic
pulsante.addEventListener('click', function() {
    // Codice da eseguire quando il pulsante viene cliccato
    console.log('Il pulsante è stato cliccato!');
});
```
# *Operatori di confronto*
Gli operatori di confronto in JavaScript sono utilizzati per confrontare due valori e restituire un risultato booleano (true o false) che indica se il confronto è vero o falso. Questi operatori sono fondamentali per il controllo del flusso del programma e la logica decisionale.

Ecco alcuni degli operatori di confronto più comuni in JavaScript:

`Uguaglianza (==)`: Verifica se due valori sono uguali. Questo operatore effettua una conversione di tipo, quindi può restituire true anche se i tipi dei due valori sono diversi.
```
console.log(5 == "5"); // Output: true
```
`Identità (===)`: Verifica se due valori sono uguali e dello stesso tipo. Questo operatore non effettua la conversione di tipo, quindi restituirà true solo se i valori sono identici in valore e tipo.
```
console.log(5 === "5"); // Output: false
```
`Disuguaglianza (!=)`: Verifica se due valori non sono uguali. Effettua una conversione di tipo, quindi può restituire true anche se i tipi dei due valori sono diversi.
```
console.log(5 != "10"); // Output: true
```
`Non identità (!==)`: Verifica se due valori non sono uguali o non dello stesso tipo.
```
console.log(5 !== "5"); // Output: true
```
`Maggiore di (>)`: Verifica se un valore è maggiore di un altro.
```
console.log(10 > 5); // Output: true
```
`Maggiore o uguale a (>=)`: Verifica se un valore è maggiore o uguale a un altro.
```
console.log(10 >= 10); // Output: true
```
`Minore di (<)`: Verifica se un valore è minore di un altro.
```
console.log(5 < 10); // Output: true
```
`Minore o uguale a (<=)`: Verifica se un valore è minore o uguale a un altro.
```
console.log(5 <= 5); // Output: true
```

Questi sono gli operatori di confronto che utilizzeremo!
# *Classi*
- `object.kays(...)`: crea un array con all'interno le chiavi richiamate precedentemente.
- ``
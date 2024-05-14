<!-- @format -->

# Javascript

## Cos'è javascript?

JavaScript è un linguaggio di programmazione multi paradigma orientato agli eventi, utilizzato sia nella programmazione lato client web che lato server (Node.js) per la creazione di RESTful API, applicazioni desktop e embedded, siti web e applicazioni web, di effetti dinamici interattivi tramite funzioni di script invocate da eventi innescati a loro volta in vari modi dall'utente sulla pagina web in uso (mouse, tastiera, caricamento della pagina ecc...)

## Variabili

Una variabile è un contenitore per memorizzare dati. Questi dati possono essere di diversi tipi, come numeri, stringhe, oggetti, funzioni e altro ancora
Ci sono 3 tipi di variabili:

### Let e var

Let è var sono entrame variabili usate per dichiare variabili, tuttavia lo scopo e l'**hoisting** sono diversi:

### Scope

Var= Ha un scope di funzione o globale. Ciò significa che è visibile all'interno della funzione in cui è stata dichiarata o all'interno dell'intero programma se è stata dichiarata al di fuori di qualsiasi funzione.

Let: Ha un scope di blocco. Questo significa che è visibile solo all'interno del blocco in cui è stata dichiarata, come un blocco di codice racchiuso tra parentesi {} (ad esempio, un blocco if, for, while, ecc.).

### Hoisting (sollevamento)

var: Ha un comportamento di hoisting. Ciò significa che la dichiarazione di una variabile var viene spostata all'inizio della funzione o dello scope in cui è stata dichiarata, anche se l'assegnazione resta al suo posto. Di conseguenza, è possibile accedere alla variabile prima della sua dichiarazione, ottenendo undefined.

let: Non ha un comportamento di hoisting nello stesso modo di var. La variabile let non è accessibile prima della sua dichiarazione. Tentare di accedervi prima di essere dichiarata causerà un errore.

```javascript
// Esempio con var
console.log(x); // risulterà undefined
var x = 5;

// Esempio con let
console.log(y); // risulterà  errore: "ReferenceError: y is not defined"
let y = 10;
```

**Const** = const non sono immutabili. Ciò significa che se una variabile const contiene un oggetto o un array, le proprietà o gli elementi di quell'oggetto o array possono ancora essere modificati.

```javascript
const PI = 3.14159;
const nome = 'Mario';

// Tentativi di assegnazione successivi genereranno un errore
PI = 3.14; // Questo causerà un errore perché non è possibile riassegnare una variabile const

// Tuttavia, per gli oggetti e gli array, è possibile modificare le loro proprietà o elementi
const persona = {
  nome: 'Mario',
  età: 30,
};

persona.nome = 'Luigi'; // con questo si può modifcare la proprietà del nome
persona.professione = 'Ingegnere'; // con questa invece aggiungiamo un contenuto nuovo nell'oggeto
```

## Oggetti

Un oggetto è una collezione di coppie chiave-valore, dove le chiavi sono stringhe univoche e i valori possono essere di qualsiasi tipo di dato, come numeri, stringhe, booleani, funzioni, altri oggetti, array e così via.

```javascript
// Sintassi di un oggetto
let persona = {
  nome: 'Mario', //valore o value : key o chiave//
  cognome: 'Rossi',
  età: 30,
  professione: 'Insegnante',
  saluta: function () {
    console.log('Ciao, mi chiamo ' + this.nome + ' ' + this.cognome);
  },
};

// Come prendere il singolo dato dall'oggetto//
console.log(persona.nome); // Sulla console: "Mario"
console.log(persona.età); // Sulla console: 30

// Come modificare le proprietà degli oggetti
persona.professione = 'Ingegnere';

// Come aggiungere elementi agli oggetti
persona.indirizzo = 'Via Roma, 123';

// Chiamata di un metodo dell'oggetto
persona.saluta(); // Sulla console: "Ciao, mi chiamo Mario Rossi"
```

### Funzioni

Sono blocchi di codice che possono essere definiti una volta e poi richiamati più volte per eseguire un'azione specifica o per calcolare un risultato

1 Dichiarare una funzione

```javascript
function saluta() {
  console.log('Ciao, mondo!');
}
saluta(); //per stamparle nella console basterà usare il nome della funziona più ()
```

2 Parametri e argomenti: Le funzioni possono accettare parametri, che sono valori che la funzione riceve quando viene chiamata. Questi parametri possono essere utilizzati all'interno del corpo della funzione per eseguire operazioni o calcoli.

```javascript
function saluta(nome) {
  console.log('Ciao, ' + nome + '!');
}
saluta('Mario'); // Sulla console: "Ciao, Mario!" sulla console
```

3 Valore di ritorno: Le funzioni possono restituire un valore utilizzando la parola chiave return. Questo valore può essere utilizzato nel codice in cui la funzione è stata chiamata.

```javascript
function somma(a, b) {
  return a + b;
}
let risultato = somma(3, 5); // Qui, 'risultato' conterrà il valore 8
```

4 Funzioni come oggetti di prima classe: In JavaScript, le funzioni sono oggetti di prima classe, il che significa che possono essere trattate come qualsiasi altro tipo di dati. Possono essere passate come argomenti ad altre funzioni, assegnate a variabili, restituite da altre funzioni e memorizzate all'interno di strutture di dati.

### Eventi

Gli eventi sono azioni che si verificano nell'ambiente di esecuzione del browser, come l'interazione dell'utente con la pagina web, il caricamento della pagina, il clic del mouse, il movimento del mouse, la pressione dei tasti sulla tastiera, la modifica dei contenuti degli elementi HTML e altro ancora.

1 Ascoltatori di eventi (event listeners): Gli event listeners sono funzioni JavaScript che vengono eseguite quando si verifica un determinato evento su un elemento HTML. Per aggiungere un event listener a un elemento, è possibile utilizzare il metodo addEventListener().

```javascript
// Prende un elemento dell'html con l'ID
let myButton = document.getElementById('myButton');

// AddEventListener= aggiungere un evento (click, funzione)
myButton.addEventListener('click', function () {
  console.log('Il pulsante è stato cliccato!');
});
```

2
Tipi di eventi comuni: Alcuni esempi di eventi comuni includono click, mouseover, mouseout, keydown, keyup, submit, load e molti altri. Ciascun tipo di evento corrisponde a un'interazione specifica che può verificarsi sulla pagina web.
Gestione degli eventi inline: È possibile associare direttamente una funzione JavaScript agli attributi HTML degli elementi utilizzando gli eventi inline.

3 Gestione degli eventi inline: È possibile associare direttamente una funzione JavaScript agli attributi HTML degli elementi utilizzando gli eventi inline.

```html
<button onclick="myFunction()">Clicca qui</button>
```

4 Passaggio di parametri agli event listeners: È possibile passare parametri agli event listeners definendo una funzione anonima che chiama la tua funzione con i parametri desiderati.

```javascript
myButton.addEventListener('click', function () {
  myFunction(parametro1, parametro2);
});
```

5 Oggetto evento (event object): Quando viene scatenato un evento, viene creato un oggetto evento che contiene informazioni sull'evento stesso, come il tipo di evento, l'elemento coinvolto, le coordinate del mouse, i tasti della tastiera premuti, ecc. Questo oggetto evento viene passato come argomento alla funzione dell'event listener. Ad esempio:

```javascript
myButton.addEventListener('click', function (event) {
  console.log('Il pulsante è stato cliccato!');
  console.log('Coordinate del click: ' + event.clientX + ', ' + event.clientY);
});
```

6 Prevenzione dell'azione predefinita: In alcune situazioni, è possibile che si desideri impedire all'azione predefinita associata a un evento di verificarsi. Per fare ciò, è possibile chiamare il metodo preventDefault() sull'oggetto evento all'interno della funzione dell'event listener.

### Costrutto di controllo di flusso

è un costrutto sintattico di un linguaggio di programmazione la cui semantica afferisce al controllo del flusso di esecuzione di un programma, ovvero servono a specificare se, quando, in quale ordine e quante volte devono essere eseguite le istruzioni che compongono il codice sorgente in base alle specifiche di progetto del software da realizzare.

### If e if else

l'istruzione if è un costrutto di controllo di flusso che permette di eseguire un blocco di codice se una condizione specificata è vera.

Sintassi base:

```javascript
if (condizione) {
  //  il codice verrà eseguito se la condizione è vera
}
```

Se la condizione il blocco di codice verrà ignorato.

Si può anche aumentare la segnenza con else

```javascript
if (condizione) {
  // codice che verrà eseguito se la condizione risulterà vera
} else {
  //  codice che verrà eseguito se la condizione risulterà falsa
}

//  esempio
let numero = 10;
if (numero > 0) {
  console.log('Il numero è positivo');
} else {
  console.log('Il numero è negativo o zero');
}
```

### Do e do while

do e do...while sono costrutti di loop che consentono di eseguire un blocco di codice ripetutamente fino a quando una condizione specificata è vera. La principale differenza tra i due è quando la condizione viene valutata.

1 **_do_** inizia prima eseguendo il codice poi verifica la condizione, se è vera allora il loop continua fino a quando non diventa falsa

```javascript
do {
  // codice da eseguire
} while (condizione);

let i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);
```

2 **_do while_** simile al do ma il codice verrà eseguito almeno una volta indifferentemente dalla condiizone falsa o vera

```javascript
let i = 0;
do {
  console.log(i);
  i++;
} while (i < 0); //condizione falsa ma verrà eseguita ugualmente almeno una volta//
```

Entrambi do e do...while sono utilizzati quando si desidera eseguire un blocco di codice almeno una volta e poi decidere se continuare o meno in base a una condizione.

### Switch else

Switch è un costrutto di controllo di flusso che permette di eseguire uno dei molti blocchi di codice alternativi, basandosi sul valore di un'espressione specificata. È spesso utilizzato come alternativa all'utilizzo ripetuto di istruzioni if...else if...else quando si deve valutare una singola variabile o espressione contro più possibili valori.

Sintassi di base:

```javascript
switch (espressione) {
  case valore1:
    //codice che verrà eseguito se è uguale al 1 valore
    break;
  case valore2:
    // codice che verrà eseguito se è uguale al 2 valore
    break;
  // altri casi possibili...
  default:
    // codice che verrà eseguito se tutti i casi saranno falsi o vani

    //esempio

    let giorno = 'Lunedì';
    switch (giorno) {
      case 'Lunedì':
        console.log('Inizio della settimana');
        break;
      case 'Martedì':
        console.log('Secondo giorno della settimana');
        break;
      default:
        console.log('Non è un giorno valido');
    }
}
```

L'espressione viene valutata una volta, e il valore risultante viene confrontato con i valori dei casi.
Se il valore corrisponde a uno dei casi, il blocco di codice corrispondente viene eseguito.
L'istruzione break viene utilizzata per terminare l'esecuzione del blocco di codice corrente e uscire dallo statement switch. Se break non viene utilizzato, il controllo continuerà al prossimo caso.
Se nessun caso corrisponde al valore dell'espressione, il blocco di codice sotto default verrà eseguito (se presente). default è opzionale.

Lo statement switch è utile quando si ha una serie di possibili valori che si desidera confrontare con un'unica espressione, offrendo un codice più leggibile e mantenibile rispetto all'utilizzo di molteplici istruzioni if...else if...else.

### Operatori di confronto

Gli operatori di confronto in JavaScript sono utilizzati per confrontare due valori e restituire un valore booleano (true o false) che indica se il confronto è vero o falso.

Aluni operatori:
**_Uguaglianza (==)_**:
L'operatore di uguaglianza == confronta due valori per verificarne l'uguaglianza. Se i valori sono uguali, restituisce true, altrimenti restituisce false. Questo operatore esegue la conversione di tipo, quindi può essere meno rigoroso rispetto all'operatore di uguaglianza stretta (===)

```javascript
console.log(5 == 5); // true
console.log(5 == '5');
console.log(5 == 10); // false
```

**_Uguaglianza stretta (===)_**:
L'operatore di uguaglianza stretta === confronta due valori per verificarne l'uguaglianza e il tipo. Restituisce true solo se i valori e i tipi sono gli stessi.

```javascript
console.log(5 === 5); // true
console.log(5 === '5'); // false (uno tipo stringa l'altro tipo numero)
```

**_Operatore di negazione (!)_**:

L'operatore di negazione ! viene utilizzato per invertire il valore di verità di un'espressione. Se l'espressione è true, l'operatore ! restituisce false, e viceversa

```javascript
let vero = true;
let falso = !vero; // false
```

**_NaN (Not a Number)_**:

NaN è un valore speciale in JavaScript che rappresenta "non un numero". Viene restituito quando si tenta di eseguire un'operazione matematica che non produce un risultato valido

```javascript
let nonNumero = 'test' / 2; // NaN
```

**_peratore di OR logico (||)_**:
L'operatore di OR logico || viene utilizzato per eseguire una valutazione booleana OR tra due espressioni. Restituisce true se almeno una delle due espressioni è true, altrimenti restituisce false

```javascript
let risultato = 5 > 3 || 2 < 1; // true
```

**_Operatore di AND logico (&&)_**:
L'operatore di AND logico && viene utilizzato per eseguire una valutazione booleana AND tra due espressioni. Restituisce true solo se entrambe le espressioni sono true, altrimenti restituisce false

```javascript
let risultato = 5 > 3 && 2 < 1; // false
```

Possono essere combinati insieme per creare espressioni booleane più complesse e potenti. Ad esempio, l'uso di parentesi può determinare l'ordine di valutazione delle espressioni, consentendo di costruire condizioni logiche complesse.

### Array

un array è una struttura dati che consente di memorizzare più valori all'interno di una singola variabile, può contenere qualsiasi tipo di dato:
stringhe,numeri, boolean ecc.
Gli array in JavaScript sono oggetti speciali con un insieme di metodi e proprietà per manipolare e accedere ai loro elementi

Sintassi di un array:

```javascript
let numeri = [1, 2, 3, 4, 5];
```

Gli elementi all'interno di un array possono essere accessati utilizzando la loro posizione iniziano da 0:

```javascript
console.log(numeri[0]); // sulla console: 1
```

Gli elementi di un array possono essere modificati assegnando loro nuovi valori:

```javascript
numeri[2] = 10;
console.log(numeri); // sulla console: [1, 2, 10, 4, 5]
```

Si può controllare la lunghezza di un'array con .lenght

```javascript
console.log(numeri.length); // sulla console: 5
```

Gli array dispongono di una serie di metodi integrati che consentono di eseguire operazioni comuni come aggiungere, rimuovere, ordinare, filtrare e altro ancora. Alcuni esempi di metodi di array includono push(), pop(), splice(), concat(), slice(), sort() e forEach()

```javascript
frutta.push('pera');
console.log(frutta); // sulla console: ['mela', 'banana', 'arancia', 'pera']
```

Possono essere utilizzati in una vasta gamma di scenari, dall'archiviazione di dati semplici alla rappresentazione di strutture dati complesse.

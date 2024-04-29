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
console.log(x); // Restituirà undefined
var x = 5;

// Esempio con let
console.log(y); // Restituirà un errore: "ReferenceError: y is not defined"
let y = 10;
```

**Const** = const non sono immutabili. Ciò significa che se una variabile const contiene un oggetto o un array, le proprietà o gli elementi di quell'oggetto o array possono ancora essere modificati.

```javascript
const PI = 3.14159;
const nome = "Mario";

// Le variabili const devono essere inizializzate al momento della dichiarazione
// Tentativi di assegnazione successivi genereranno un errore
PI = 3.14; // Questo causerà un errore perché non è possibile riassegnare una variabile const

// Tuttavia, per gli oggetti e gli array, è possibile modificare le loro proprietà o elementi
const persona = {
  nome: "Mario",
  età: 30,
};

persona.nome = "Luigi"; // Questa operazione è consentita, modifica la proprietà 'nome' dell'oggetto
persona.professione = "Ingegnere"; // Questa operazione è consentita, aggiunge una nuova proprietà all'oggetto
```

## Oggetti

Un oggetto è una collezione di coppie chiave-valore, dove le chiavi sono stringhe univoche e i valori possono essere di qualsiasi tipo di dato, come numeri, stringhe, booleani, funzioni, altri oggetti, array e così via.

```javascript
// Dichiarazione di un oggetto
let persona = {
  nome: "Mario", //valore o value : key o chiave//
  cognome: "Rossi",
  età: 30,
  professione: "Insegnante",
  saluta: function () {
    console.log("Ciao, mi chiamo " + this.nome + " " + this.cognome);
  },
};

// Accesso alle proprietà dell'oggetto
console.log(persona.nome); // Output: "Mario"
console.log(persona.età); // Output: 30

// Modifica delle proprietà dell'oggetto
persona.professione = "Ingegnere";

// Aggiunta di nuove proprietà all'oggetto
persona.indirizzo = "Via Roma, 123";

// Chiamata di un metodo dell'oggetto
persona.saluta(); // Output: "Ciao, mi chiamo Mario Rossi"
```

### Funzioni

Sono blocchi di codice che possono essere definiti una volta e poi richiamati più volte per eseguire un'azione specifica o per calcolare un risultato

1 Dichiarare una funzione

```javascript
function saluta() {
  console.log("Ciao, mondo!");
}
saluta(); //per mandarle a schermo bisogna usare il nome della funzione per stamparla nella console
```

2 Parametri e argomenti: Le funzioni possono accettare parametri, che sono valori che la funzione riceve quando viene chiamata. Questi parametri possono essere utilizzati all'interno del corpo della funzione per eseguire operazioni o calcoli.

```javascript
function saluta(nome) {
  console.log("Ciao, " + nome + "!");
}
saluta("Mario"); // Questo stamperà "Ciao, Mario!" sulla console
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
// Seleziona un elemento HTML tramite ID
let myButton = document.getElementById("myButton");

// Aggiungi un event listener per il clic del mouse
myButton.addEventListener("click", function () {
  console.log("Il pulsante è stato cliccato!");
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
myButton.addEventListener("click", function () {
  myFunction(parametro1, parametro2);
});
```

5 Oggetto evento (event object): Quando viene scatenato un evento, viene creato un oggetto evento che contiene informazioni sull'evento stesso, come il tipo di evento, l'elemento coinvolto, le coordinate del mouse, i tasti della tastiera premuti, ecc. Questo oggetto evento viene passato come argomento alla funzione dell'event listener. Ad esempio:

```javascript
myButton.addEventListener("click", function (event) {
  console.log("Il pulsante è stato cliccato!");
  console.log("Coordinate del click: " + event.clientX + ", " + event.clientY);
});
```

6 Prevenzione dell'azione predefinita: In alcune situazioni, è possibile che si desideri impedire all'azione predefinita associata a un evento di verificarsi. Per fare ciò, è possibile chiamare il metodo preventDefault() sull'oggetto evento all'interno della funzione dell'event listener.

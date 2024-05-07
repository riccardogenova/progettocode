# Array in Programmazione

Gli array in programmazione sono strutture di dati fondamentali utilizzate per memorizzare collezioni ordinate di elementi. Sono particolarmente utili perché permettono di organizzare i dati in modo che possano essere facilmente accessibili tramite un indice, offrendo così un modo efficiente per manipolare e iterare su grandi quantità di dati.

## A cosa servono gli array?

Gli array sono utilizzati per vari scopi, come:

- **Conservazione di dati**: Possono memorizzare grandi quantità di dati dello stesso tipo, come liste di numeri, stringhe, ecc.
- **Manipolazione di dati**: Facilitano operazioni come l'ordinamento, la ricerca e l'inserimento di elementi.
- **Implementazione di strutture di dati complesse**: Come pile (stacks), code (queues) e altre strutture che beneficiano di accesso sequenziale.
- **Gestione di risorse**: Possono essere utilizzati per gestire gruppi di risorse simili, come file aperti o connessioni di rete.

# Metodi Principali degli Array in JavaScript

## Metodi Array Mutabili

Questi metodi modificano direttamente l'array su cui vengono chiamati:

- `push()`: Aggiunge un elemento alla fine dell'array.

  ```javascript
  let frutti = ["mela", "banana"];
  frutti.push("arancia");
  console.log(frutti); // Output: ['mela', 'banana', 'arancia']
  ```

- `pop()`: Rimuove l'ultimo elemento dell'array e lo restituisce.

  ```javascript
  let numeri = [1, 2, 3];
  numeri.pop();
  console.log(numeri); // Output: [1, 2]
  ```

- `shift()`: Rimuove il primo elemento dell'array e lo restituisce.

  ```javascript
  let numeri = [1, 2, 3];
  numeri.shift();
  console.log(numeri); // Output: [2, 3]
  ```

- `unshift()`: Aggiunge uno o più elementi all'inizio dell'array.

  ```javascript
  let numeri = [2, 3];
  numeri.unshift(1);
  console.log(numeri); // Output: [1, 2, 3]
  ```

- `splice()`: Cambia il contenuto di un array eliminando o sostituendo elementi esistenti e/o aggiungendo nuovi elementi.

  ```javascript
  let numeri = [1, 2, 4, 5];
  numeri.splice(2, 0, 3);
  console.log(numeri); // Output: [1, 2, 3, 4, 5]
  ```

## Metodi Array Immutabili

Questi metodi non modificano l'array originale ma creano una nuova copia:

- `slice()`: Restituisce una copia di una parte dell'array.

  ```javascript
  let numeri = [1, 2, 3, 4, 5];
  let parte = numeri.slice(1, 3);
  console.log(parte); // Output: [2, 3]
  ```

- `forEach()`: Esegue una funzione data su ogni elemento dell'array.

  ```javascript
  let numeri = [1, 2, 3];
  numeri.forEach((num) => console.log(num * 2));
  // Output: 2
  // Output: 4
  // Output: 6
  ```

- `map()`: Crea un nuovo array con i risultati della chiamata a una funzione fornita su ogni elemento dell'array.

  ```javascript
  let numeri = [1, 2, 3];
  let raddoppiati = numeri.map((num) => num * 2);
  console.log(raddoppiati); // Output: [2, 4, 6]
  ```

- `filter()`: Crea un nuovo array con tutti gli elementi che passano un test implementato da una funzione fornita.

  ```javascript
  let numeri = [1, 2, 3, 4, 5];
  let pari = numeri.filter((num) => num % 2 === 0);
  console.log(pari); // Output: [2, 4]
  ```

- `reduce()`: Applica una funzione contro un accumulatore e ogni valore dell'array (da sinistra a destra) per ridurlo a un singolo valore.
  ```javascript
  let numeri = [1, 2, 3, 4, 5];
  let somma = numeri.reduce((acc, num) => acc + num, 0);
  console.log(somma); // Output: 15
  ```

### Esempio Pratico Combinando Metodi Mutabili e Immutabili

Consideriamo un caso in cui vogliamo calcolare la media dei voti di una classe, ma solo per gli studenti che hanno superato l'esame (voto >= 6).

```javascript
let voti = [5, 8, 9, 3, 7, 6];

// Filtriamo i voti per considerare solo quelli >= 6 usando `filter()`, un metodo immutabile.
let votiSuperati = voti.filter((voto) => voto >= 6);

// Usiamo `reduce()` per calcolare la somma dei voti superati.
let sommaVotiSuperati = votiSuperati.reduce((acc, voto) => acc + voto, 0);

// Calcoliamo la media dei voti superati.
let mediaVotiSuperati = sommaVotiSuperati / votiSuperati.length;

console.log(mediaVotiSuperati); // Output: 7.5
```

Questo esempio mostra come `filter()` e `reduce()` possono essere combinati efficacemente. Entrambi i metodi sono immutabili, il che è vantaggioso per mantenere l'integrità dei dati specialmente in applicazioni più grandi o complesse.

Qui sotto trovi un file Markdown che spiega come usare le classi e i costruttori in JavaScript, perfetto per tutorial, documentazioni o note di studio.

# Uso delle Classi e del Costruttore in JavaScript

Le classi in JavaScript sono un modo per organizzare e strutturare il codice, specialmente quando si lavora con oggetti complessi e interazioni tra di essi. Introdotte in ES6, le classi in JavaScript offrono una sintassi più chiara e semplice per creare oggetti e gestire l'ereditarietà.

## Definizione di una Classe

Una classe in JavaScript si definisce usando la parola chiave `class`. Una classe può includere un costruttore, metodi per impostare o recuperare dati, e altro ancora.

### Sintassi Base

Ecco la sintassi base per definire una classe:

```javascript
class NomeClasse {
  constructor(parametro1, parametro2) {
    this.parametro1 = parametro1;
    this.parametro2 = parametro2;
  }

  metodo1() {
    console.log(this.parametro1);
  }
}
```

## Il Costruttore

Il costruttore è un metodo speciale di una classe. Viene chiamato automaticamente quando si crea un nuovo oggetto da quella classe. Il costruttore è spesso utilizzato per inizializzare le proprietà dell'oggetto.

### Esempio di Costruttore

```javascript
class Persona {
  constructor(nome, eta) {
    this.nome = nome;
    this.eta = eta;
  }

  presentati() {
    console.log(`Ciao, mi chiamo ${this.nome} e ho ${this.eta} anni.`);
  }
}
```

## Creazione di un Oggetto da una Classe

Per creare un oggetto da una classe, si utilizza la parola chiave `new` seguita dal nome della classe e dai parametri richiesti dal costruttore.

### Esempio di Creazione di un Oggetto

```javascript
let persona1 = new Persona("Mario", 30);
persona1.presentati(); // Output: Ciao, mi chiamo Mario e ho 30 anni.
```

## Conclusioni

Le classi in JavaScript forniscono un modo potente e intuitivo per organizzare il codice. Utilizzando costruttori, metodi e la parola chiave `new`, è possibile creare strutture complesse in modo efficiente e leggibile. Queste funzionalità rendono JavaScript ancora più potente e adatto alla programmazione orientata agli oggetti.

### Spread Operator (...)

Lo **spread operator** `...` viene utilizzato per espandere gli elementi di un array (o di un altro iterabile) in situazioni dove vengono attesi più argomenti (in chiamate di funzione) o più elementi (in array literali). È particolarmente utile per clonare array, unire più array insieme, passare elementi ad una funzione come argomenti separati, e molto altro, semplificando operazioni che altrimenti richiederebbero l'uso di metodi più verbosi come `concat()`.

```javascript
let parte1 = [
  1,

  2, 3,
];
let parte2 = [4, 5, 6];
let combinato = [...parte1, ...parte2];
console.log(combinato); // Output: [1, 2, 3, 4, 5, 6]
```

## Perché gli array vengono detti "puntatori"?

In molti linguaggi di programmazione, specialmente quelli di basso livello come C, gli array sono essenzialmente puntatori. Questo perché l'array stesso è effettivamente un blocco di memoria, e il nome dell'array rappresenta l'indirizzo di memoria del primo elemento. Quando accedi a un elemento dell'array, calcoli l'indirizzo di quel particolare elemento basandoti sul suo indice, facendo uso dell'aritmetica dei puntatori. Anche in linguaggi di alto livello come JavaScript, gli array non contengono direttamente i loro elementi, ma puntano a un blocco di memoria dove questi elementi sono conservati. Questo spiega perché gli array sono spesso descritti come "puntatori".

Ecco un file Markdown che include esempi pratici per diversi tipi di eventi JavaScript, spiegando brevemente cosa fanno e mostrando come potrebbero essere utilizzati in codice:

````markdown
# Eventi JavaScript

JavaScript offre una vasta gamma di eventi per gestire le interazioni degli utenti e altre attività nel browser. Qui di seguito sono riportati alcuni degli eventi più comuni, suddivisi per categoria, con esempi pratici di utilizzo.

## Eventi del Mouse

### `click`

Si verifica quando un utente clicca su un elemento.

```javascript
document.getElementById("myButton").addEventListener("click", function () {
  console.log("Button clicked!");
});
```
````

### `dblclick`

Si verifica quando un utente fa doppio clic su un elemento.

```javascript
document.getElementById("myButton").addEventListener("dblclick", function () {
  console.log("Button double-clicked!");
});
```

### `mouseover`

Si verifica quando il puntatore del mouse entra sull'elemento.

```javascript
document.getElementById("myElement").addEventListener("mouseover", function () {
  console.log("Mouse is over the element!");
});
```

### `mouseout`

Si verifica quando il puntatore del mouse esce dall'elemento.

```javascript
document.getElementById("myElement").addEventListener("mouseout", function () {
  console.log("Mouse is out of the element!");
});
```

### `mousemove`

Si verifica quando il puntatore del mouse si muove mentre è sopra l'elemento.

```javascript
document.getElementById("myElement").addEventListener("mousemove", function () {
  console.log("Mouse is moving over the element!");
});
```

## Eventi di Tastiera

### `keydown`

Si verifica quando un utente preme un tasto.

```javascript
document.addEventListener("keydown", function (event) {
  console.log(`Key pressed: ${event.key}`);
});
```

### `keyup`

Si verifica quando un utente rilascia un tasto premuto.

```javascript
document.addEventListener("keyup", function (event) {
  console.log(`Key released: ${event.key}`);
});
```

### `keypress` (deprecato)

Si verifica quando un utente preme un tasto che produce un carattere.

```javascript
document.addEventListener("keypress", function (event) {
  console.log(`Character pressed: ${event.charCode}`); // uso di charCode è deprecato
});
```

## Eventi del Form

### `submit`

Si verifica quando un form viene inviato.

```javascript
document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Previene il comportamento di invio predefinito
  console.log("Form submitted!");
});
```

### `change`

Si verifica quando il valore di un elemento di input, select o textarea viene cambiato.

```javascript
document.getElementById("mySelect").addEventListener("change", function () {
  console.log("Selection changed!");
});
```

### `focus`

Si verifica quando un elemento riceve il focus.

```javascript
document.getElementById("myInput").addEventListener("focus", function () {
  console.log("Input focused!");
});
```

### `blur`

Si verifica quando un elemento perde il focus.

```javascript
document.getElementById("myInput").addEventListener("blur", function () {
  console.log("Input lost focus!");
});
```

## Eventi del Touch

### `touchstart`

Si verifica quando un utente tocca lo schermo.

```javascript
document.addEventListener("touchstart", function (event) {
  console.log("Screen touched!");
});
```

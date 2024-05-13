<!-- @format -->

# Introduzione a JavaScript in HTML

JavaScript è un linguaggio di scripting ampiamente utilizzato per aggiungere interattività e dinamicità alle pagine web. In questa lezione, esploreremo i concetti fondamentali di JavaScript in HTML.

## 1. Che cos'è JavaScript?

JavaScript è un linguaggio di programmazione interpretato comunemente utilizzato per aggiungere funzionalità dinamiche e interattive alle pagine web. È un linguaggio di scripting del lato client, il che significa che il codice JavaScript viene eseguito sul computer dell'utente, nel suo browser web.

## 2. Incorporare JavaScript in HTML

È possibile incorporare JavaScript direttamente all'interno di un documento HTML utilizzando il tag `<script>`.

### Esempio:

```html
<script>
  // Codice JavaScript qui
  alert('Ciao, mondo!');
</script>
```

````

## 3. Variabili e tipi di dati

In JavaScript, è possibile dichiarare variabili utilizzando le parole chiave `var`, `let` o `const`.

### Esempio:

```html
<script>
  // Dichiarazione di una variabile
  var nome = "Mario";

  // Dichiarazione di una costante
  const PI = 3.14;

  // Dichiarazione di una variabile let
  let eta = 30;
</script>
```

I tipi di dati in JavaScript includono stringhe, numeri, booleani, array, oggetti, null e undefined.

## 4. Operazioni aritmetiche e operatori

JavaScript supporta le operazioni aritmetiche di base come addizione, sottrazione, moltiplicazione e divisione.

### Esempio:

```html
<script>
  var x = 10;
  var y = 5;
  var somma = x + y; // 15
  var differenza = x - y; // 5
  var prodotto = x * y; // 50
  var divisione = x / y; // 2
</script>
```

Gli operatori di confronto come `==`, `!=`, `>`, `<`, `>=`, `<=` vengono utilizzati per confrontare valori.

### Esempio:

```html
<script>
  var a = 5;
  var b = 10;

  if (a < b) {
    alert("a è minore di b");
  } else {
    alert("b è minore di a");
  }
</script>
```

## 5. Funzioni

Le funzioni in JavaScript sono blocchi di codice riutilizzabili. Possono accettare argomenti e restituire valori.

### Esempio:

```html
<script>
  // Definizione di una funzione
  function saluta(nome) {
    alert("Ciao, " + nome + "!");
  }

  // Chiamata alla funzione
  saluta("Mario");
</script>
```

## 6. Eventi

Gli eventi sono azioni che si verificano nel browser, come il clic del mouse o il caricamento di una pagina. È possibile gestire gli eventi utilizzando JavaScript.

### Esempio:

```html
<button onclick="saluta()">Clicca qui</button>

<script>
  // Funzione che gestisce l'evento click
  function saluta() {
    alert("Ciao, mondo!");
  }
</script>
```

## 7. DOM (Document Object Model)

Il DOM rappresenta la struttura della pagina web e consente a JavaScript di accedere e modificare gli elementi HTML.

### Esempio:

```html
<p id="demo">Questo è un paragrafo.</p>

<script>
  // Modifica del contenuto di un elemento HTML utilizzando il DOM
  document.getElementById("demo").innerHTML = "Questo è un nuovo testo.";
</script>
```

Questi sono solo alcuni dei concetti fondamentali di JavaScript in HTML. JavaScript è un linguaggio potente e flessibile che offre molte altre funzionalità per rendere le tue pagine web interattive e dinamiche. Continua a esplorare e praticare per acquisire familiarità con questo linguaggio!

```

```
````

# Lezioni sulle Classi in JavaScript

Le classi sono uno strumento fondamentale in JavaScript per la creazione di oggetti e la gestione della programmazione orientata agli oggetti (OOP). Le classi in JavaScript sono state introdotte in ECMAScript 2015 (ES6) e forniscono uno stile più dichiarativo e orientato agli oggetti per la creazione di oggetti.

## Creare una Classe

Per creare una classe in JavaScript, possiamo utilizzare la seguente sintassi:

```javascript
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

In questo esempio, abbiamo creato una classe `Persona` con un costruttore e un metodo `saluta()`.

## Creare un Oggetto da una Classe

Per creare un oggetto da una classe, utilizziamo la parola chiave `new` seguita dal nome della classe e dai parametri del costruttore (se presenti):

```javascript
let persona1 = new Persona('Mario', 'Rossi');
let persona2 = new Persona('Luigi', 'Verdi');

persona1.saluta(); // Output: Ciao, sono Mario Rossi
persona2.saluta(); // Output: Ciao, sono Luigi Verdi
```

## Ereditarietà

Le classi in JavaScript supportano anche l'ereditarietà. Possiamo creare una nuova classe che eredita da un'altra classe utilizzando la parola chiave `extends`:

```javascript
class Studente extends Persona {
  constructor(nome, cognome, corso) {
    super(nome, cognome);
    this.corso = corso;
  }

  presenta() {
    console.log(`Ciao, sono ${this.nome} ${this.cognome} e studio ${this.corso}`);
  }
}
```

In questo esempio, la classe `Studente` eredita dalla classe `Persona` utilizzando la parola chiave `extends`. Il metodo `presenta()` è specifico della classe `Studente`.

## Utilizzo dell'ereditarietà

Possiamo creare un oggetto della classe `Studente` e chiamare sia i metodi della classe `Studente` che quelli della classe `Persona`:

```javascript
let studente1 = new Studente('Anna', 'Bianchi', 'Informatica');

studente1.saluta(); // Output: Ciao, sono Anna Bianchi
studente1.presenta(); // Output: Ciao, sono Anna Bianchi e studio Informatica
```

In questo esempio, `studente1` ha accesso sia al metodo `saluta()` ereditato dalla classe `Persona` che al metodo `presenta()` definito nella classe `Studente`.

## Conclusioni

Le classi in JavaScript forniscono un modo più dichiarativo e orientato agli oggetti per creare e gestire oggetti. Con le classi, è possibile utilizzare concetti di ereditarietà e creare gerarchie di oggetti in modo più efficiente e organizzato.

# Operatori in JavaScript

In JavaScript, gli operatori sono simboli speciali utilizzati per eseguire operazioni su variabili e valori. Gli operatori possono essere suddivisi in diverse categorie, tra cui operatori di confronto, operatori di autenticità, operatori logici e operatori condizionali.

## Operatori di Confronto

Gli operatori di confronto confrontano due valori e restituiscono un valore booleano (`true` o `false`) in base al risultato del confronto.

| Operatore | Descrizione            | Esempio     | Risultato |
| --------- | ---------------------- | ----------- | --------- |
| `==`      | Uguaglianza            | `5 == 5`    | `true`    |
| `===`     | Uguaglianza (rigorosa) | `5 === '5'` | `false`   |
| `!=`      | Non uguale             | `5 != 10`   | `true`    |
| `!==`     | Non uguale (rigorosa)  | `5 !== '5'` | `true`    |
| `>`       | Maggiore di            | `10 > 5`    | `true`    |
| `<`       | Minore di              | `5 < 10`    | `true`    |
| `>=`      | Maggiore o uguale a    | `10 >= 10`  | `true`    |
| `<=`      | Minore o uguale a      | `5 <= 10`   | `true`    |

## Operatori di Autenticità

Gli operatori di autenticità sono utilizzati per verificare se un valore è vero o falso.

| Operatore | Descrizione                      | Esempio           | Risultato |
| --------- | -------------------------------- | ----------------- | --------- |
| `&&`      | Operatore logico AND             | `true && false`   | `false`   |
| `\|\|`    | Operatore logico OR              | `true \|\| false` | `true`    |
| `!`       | Operatore logico NOT (negazione) | `!true`           | `false`   |

## Operatori Logici

Gli operatori logici sono utilizzati per combinare o invertire valori booleani.

| Operatore | Descrizione                      | Esempio           | Risultato |
| --------- | -------------------------------- | ----------------- | --------- |
| `&&`      | Operatore logico AND             | `true && false`   | `false`   |
| `\|\|`    | Operatore logico OR              | `true \|\| false` | `true`    |
| `!`       | Operatore logico NOT (negazione) | `!true`           | `false`   |

## Operatori Condizionali

Gli operatori condizionali sono utilizzati per eseguire istruzioni in base a condizioni specifiche.

### Operatore ternario:

```javascript
condizione ? espressione1 : espressione2;
```

Esempio:

```javascript
let risposta = eta >= 18 ? 'Puoi guidare' : 'Non puoi guidare';
```

### Operatore `if...else`:

```javascript
if (condizione) {
  // blocco di codice se la condizione è vera
} else {
  // blocco di codice se la condizione è falsa
}
```

Esempio:

```javascript
let ora = 14;
if (ora < 12) {
  console.log('Buongiorno!');
} else {
  console.log('Buonasera!');
}
```

### Operatore `switch`:

```javascript
switch (espressione) {
  case valore1:
    // blocco di codice
    break;
  case valore2:
    // blocco di codice
    break;
  default:
  // blocco di codice
}
```

Esempio:

```javascript
let giorno = 2;
let nomeGiorno;
switch (giorno) {
  case 1:
    nomeGiorno = 'Lunedì';
    break;
  case 2:
    nomeGiorno = 'Martedì';
    break;
  case 3:
    nomeGiorno = 'Mercoledì';
    break;
  // altri casi...
  default:
    nomeGiorno = 'Giorno non valido';
}
console.log(nomeGiorno); // Output: Martedì
```

# Lezione sugli Array in JavaScript

Gli array sono una struttura dati fondamentale in JavaScript che consente di memorizzare più valori in una singola variabile. Gli array in JavaScript sono oggetti speciali che consentono l'accesso agli elementi attraverso un indice numerico.

## Creazione di un Array

Per creare un array in JavaScript, possiamo utilizzare una delle seguenti sintassi:

```javascript
// Array vuoto
let arrayVuoto = [];

// Array con valori iniziali
let numeri = [1, 2, 3, 4, 5];
let frutta = ['Mela', 'Banana', 'Arancia'];
```

## Accesso agli Elementi di un Array

Gli elementi di un array possono essere accessi utilizzando un indice numerico. Gli indici degli array iniziano da 0.

```javascript
let numeri = [1, 2, 3, 4, 5];

console.log(numeri[0]); // Output: 1
console.log(numeri[2]); // Output: 3
console.log(numeri[4]); // Output: 5
```

## Modifica degli Elementi di un Array

Gli elementi di un array possono essere modificati assegnando loro un nuovo valore utilizzando l'indice dell'elemento.

```javascript
let numeri = [1, 2, 3, 4, 5];

numeri[2] = 10;
console.log(numeri); // Output: [1, 2, 10, 4, 5]
```

## Proprietà e Metodi degli Array

Gli array in JavaScript dispongono di diverse proprietà e metodi utili per la manipolazione dei dati.

### Proprietà `length`

La proprietà `length` restituisce il numero di elementi presenti nell'array.

```javascript
let numeri = [1, 2, 3, 4, 5];

console.log(numeri.length); // Output: 5
```

### Metodo `push()`

Il metodo `push()` aggiunge uno o più elementi alla fine dell'array e restituisce la nuova lunghezza dell'array.

```javascript
let numeri = [1, 2, 3, 4, 5];

numeri.push(6);
console.log(numeri); // Output: [1, 2, 3, 4, 5, 6]
```

### Metodo `pop()`

Il metodo `pop()` rimuove l'ultimo elemento dall'array e restituisce l'elemento rimosso.

```javascript
let numeri = [1, 2, 3, 4, 5];
let ultimoElemento = numeri.pop();

console.log(ultimoElemento); // Output: 5
console.log(numeri); // Output: [1, 2, 3, 4]
```

### Metodo `forEach()`

Il metodo `forEach()` esegue una funzione per ogni elemento dell'array.

```javascript
let numeri = [1, 2, 3, 4, 5];

numeri.forEach(function (numero) {
  console.log(numero);
});
// Output:
// 1
// 2
// 3
// 4
// 5
```

## Conclusioni

Gli array sono una struttura dati versatile in JavaScript che consente di memorizzare e manipolare collezioni di valori in modo efficiente. Conoscere come creare, accedere e manipolare gli array è fondamentale per scrivere codice JavaScript efficace e ben strutturato.

# Metodi Mutabili e Immutabili in JavaScript

In JavaScript, molti metodi per la manipolazione di array e stringhe possono essere suddivisi in due categorie: metodi mutabili e metodi immutabili. La differenza principale tra i due è come trattano i dati originali durante l'esecuzione dell'operazione.

## Metodi Mutabili

I metodi mutabili modificano direttamente i dati originali su cui vengono chiamati. Questo significa che l'array o la stringa originale viene modificato nell'esecuzione del metodo.

### Array Mutabili

Gli esempi di metodi mutabili sugli array includono:

- `push()`: Aggiunge uno o più elementi alla fine dell'array.
- `pop()`: Rimuove l'ultimo elemento dall'array.
- `splice()`: Aggiunge o rimuove elementi dall'array.

```javascript
let numeri = [1, 2, 3, 4, 5];

numeri.push(6);
console.log(numeri); // Output: [1, 2, 3, 4, 5, 6]

numeri.pop();
console.log(numeri); // Output: [1, 2, 3, 4, 5]

numeri.splice(2, 1);
console.log(numeri); // Output: [1, 2, 4, 5]
```

### Stringhe Mutabili

Anche le stringhe supportano alcuni metodi mutabili:

- `toUpperCase()`: Converte la stringa in maiuscolo.
- `toLowerCase()`: Converte la stringa in minuscolo.

```javascript
let testo = 'Ciao Mondo';

testo.toUpperCase();
console.log(testo); // Output: "Ciao Mondo"

testo = testo.toUpperCase();
console.log(testo); // Output: "CIAO MONDO"
```

## Metodi Immutabili

I metodi immutabili non modificano i dati originali, ma restituiscono nuovi dati modificati. Questo significa che l'array o la stringa originale rimane invariata.

### Array Immutabili

Gli esempi di metodi immutabili sugli array includono:

- `concat()`: Restituisce un nuovo array che combina l'array originale con altri array o valori.
- `slice()`: Restituisce una copia superficiale dell'array, partendo da un indice specificato fino a un altro indice specificato, senza modificare l'array originale.

```javascript
let numeri = [1, 2, 3, 4, 5];

let nuovoArray = numeri.concat(6);
console.log(nuovoArray); // Output: [1, 2, 3, 4, 5, 6]

let arraySlice = numeri.slice(0, 3);
console.log(arraySlice); // Output: [1, 2, 3]
console.log(numeri); // Output: [1, 2, 3, 4, 5]
```

### Stringhe Immutabili

Anche le stringhe supportano alcuni metodi immutabili:

- `toUpperCase()`: Restituisce una nuova stringa convertita in maiuscolo.
- `toLowerCase()`: Restituisce una nuova stringa convertita in minuscolo.

```javascript
let testo = 'Ciao Mondo';

let testoMaiuscolo = testo.toUpperCase();
console.log(testoMaiuscolo); // Output: "CIAO MONDO"
console.log(testo); // Output: "Ciao Mondo"
```

## Conclusioni

Capire la differenza tra metodi mutabili e immutabili è fondamentale per scrivere codice JavaScript efficace e ben strutturato. Mentre i metodi mutabili modificano direttamente i dati originali, i metodi immutabili restituiscono nuovi dati modificati senza alterare i dati originali. La scelta tra i due dipende spesso dalle esigenze specifiche del progetto e dalla preferenza personale dello sviluppatore.

## Metodi privati in JavaScript

In JavaScript, non esiste una vera e propria keyword `private` per i metodi di una classe come in altri linguaggi di programmazione orientati agli oggetti come Java o C#. Tuttavia, è possibile simulare l'incapsulamento dei metodi all'interno di una classe JavaScript utilizzando delle funzioni all'interno del costruttore. Questa tecnica sfrutta il concetto di chiusure per nascondere i metodi all'esterno della classe.

Ecco un esempio di come puoi definire metodi privati all'interno di una classe JavaScript:

```javascript
class Contatore {
  constructor() {
    // Variabile privata
    let count = 0;

    // Metodo privato per incrementare il contatore
    const incrementa = () => {
      count++;
      console.log('Contatore incrementato:', count);
    };

    // Metodo pubblico per ottenere il valore del contatore
    this.getContatore = () => {
      return count;
    };

    // Metodo pubblico per incrementare il contatore
    this.incrementaContatore = () => {
      incrementa();
    };
  }
}

const contatore = new Contatore();
console.log(contatore.getContatore()); // Output: 0
contatore.incrementaContatore(); // Output: Contatore incrementato: 1
console.log(contatore.getContatore()); // Output: 1
```

In questo esempio:

- Il metodo `incrementa` è dichiarato all'interno del costruttore della classe `Contatore`. Questo metodo è accessibile solo all'interno del costruttore stesso.
- Il metodo `getContatore` è definito come una funzione membro dell'istanza (`this.getContatore`) e può essere chiamato dall'esterno della classe.
- In questo modo, il contatore (`count`) è accessibile solo tramite i metodi pubblici della classe e non può essere modificato direttamente dall'esterno della classe.

Questa è una tecnica comune per simulare l'incapsulamento dei metodi privati in JavaScript. Tuttavia, è importante notare che questi metodi non sono veramente privati; possono essere comunque acceduti tramite il meccanismo delle chiusure se si conosce il loro nome. Ma, questo approccio aiuta a nascondere i metodi che dovrebbero essere considerati come "privati" e fornisce un'interfaccia controllata per accedere ai dati e ai metodi dell'oggetto.

```

```

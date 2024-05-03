# La Document Object Model (DOM) è un'interfaccia di programmazione per rappresentare e interagire con documenti strutturati, come ad esempio documenti HTML, XHTML e XML.

## In termini più semplici, il DOM è una rappresentazione gerarchica degli elementi di una pagina web. Ogni elemento del documento (come tag HTML, attributi e testo) è rappresentato come un oggetto nel DOM, e questi oggetti possono essere manipolati tramite JavaScript per modificare dinamicamente la struttura, il contenuto e lo stile di una pagina web.

### Il DOM fornisce un'interfaccia per accedere e manipolare gli elementi di una pagina web, consentendo agli sviluppatori di scrivere script che possono aggiungere, rimuovere o modificare gli elementi di una pagina web in risposta a eventi come il caricamento della pagina, i clic del mouse e le pressioni di tasti. Questo consente la creazione di esperienze interattive e dinamiche sul web.

#### Il comando `document` in JavaScript si riferisce all'oggetto Document Object Model (DOM) del documento corrente. Il DOM rappresenta la struttura della pagina web e fornisce un'interfaccia che consente agli sviluppatori di accedere e manipolare gli elementi della pagina.

Alcuni dei metodi e delle proprietà comuni disponibili sull'oggetto document includono:

- `document.getElementById(id)`: Restituisce un riferimento all'elemento con l'id specificato.
- `document.getElementsByClassName(className)`: Restituisce una NodeList contenente tutti gli elementi con la classe specificata.
- `document.querySelector(selector)`: Restituisce il primo elemento che corrisponde al selettore specificato.
- `document.querySelectorAll(selector)`: Restituisce una NodeList contenente tutti gli elementi che corrispondono al selettore specificato.
- `document.createElement(tagName)`: Crea un nuovo elemento con il nome specificato.
- `document.createTextNode(text)`: Crea un nuovo nodo di testo con il testo specificato.

# Programmazione Orientata agli Oggetti (OOP) in JavaScript

La programmazione orientata agli oggetti è un paradigma di programmazione che si basa sulla concettualizzazione dei dati e delle operazioni come oggetti con proprietà e comportamenti associati. JavaScript supporta l'OOP tramite la definizione di classi e l'uso di prototipi.

## Definizione di una Classe

In JavaScript, una classe può essere definita utilizzando la sintassi `class`. Ecco un esempio di come definire una classe `Persona` con proprietà `nome` e `cognome`, e un metodo `saluta()`:

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

// Creare un'istanza della classe Persona
const persona1 = new Persona("Mario", "Rossi");
persona1.saluta(); // Output: Ciao, sono Mario Rossi
```

# L'oggetto `window` in JavaScript

In JavaScript, l'oggetto `window` rappresenta la finestra del browser. È l'oggetto globale che fornisce accesso a vari oggetti e funzionalità correlate alla finestra del browser, come i metodi per interagire con la finestra, il documento e altri oggetti del DOM.

## Proprietà Principali

- `window.document`: Rappresenta il documento HTML corrente caricato nella finestra del browser.
- `window.location`: Fornisce informazioni sull'URL del documento corrente e consente la navigazione verso altre pagine.
- `window.navigator`: Fornisce informazioni sul browser e sul sistema operativo dell'utente.
- `window.console`: Fornisce metodi per la visualizzazione di messaggi di debug e di output nella console del browser.
- `window.localStorage` e `window.sessionStorage`: Consentono di memorizzare dati sul lato client, persistenti (localStorage) o di sessione (sessionStorage).
- `window.alert()`, `window.confirm()`, `window.prompt()`: Metodi per mostrare finestre di dialogo standard.

## Metodi Principali

- `window.setTimeout(callback, delay)`: Esegue una funzione dopo un certo ritardo (in millisecondi).
- `window.setInterval(callback, interval)`: Esegue una funzione a intervalli regolari.
- `window.open(url, name, specs, replace)`: Apre una nuova finestra del browser o una scheda.
- `window.close()`: Chiude la finestra corrente.
- `window.scrollTo(x, y)`: Scorre la finestra del browser alla posizione specificata.

## Utilizzo

````javascript
// Esempio di utilizzo dell'oggetto `window`
console.log(window.document.title); // Stampa il titolo del documento corrente

window.alert("Ciao, mondo!"); // Mostra una finestra di avviso con il messaggio "Ciao, mondo!"

// Imposta un timeout per eseguire una funzione dopo 2 secondi
window.setTimeout(function() {
    console.log("Funzione eseguita dopo 2 secondi!");
}, 2000);

# Variabili in JavaScript

Le variabili in JavaScript vengono utilizzate per memorizzare dati. Possono contenere qualsiasi tipo di valore, come numeri, stringhe, booleani, oggetti e così via.

## Dichiarazione di Variabili

In JavaScript, le variabili possono essere dichiarate utilizzando le parole chiave `var`, `let`, o `const`.

- `var`: Era la parola chiave originale per dichiarare variabili in JavaScript. Ha uno scope di funzione e può essere ri-dichiarata all'interno della stessa funzione.

- `let`: È stata introdotta con ES6 ed è preferita rispetto a `var` per dichiarare variabili con scope di blocco. Non può essere ri-dichiarata nello stesso scope.

- `const`: Anche introdotta con ES6, dichiara una costante il cui valore non può essere riassegnato. Ha uno scope di blocco e non può essere ri-dichiarata.

## Esempi di Dichiarazione

```javascript
// Dichiarazione di variabili con var
var numero = 10;
var nome = "Alice";

// Dichiarazione di variabili con let
let x = 5;
let y = "Bob";

// Dichiarazione di una costante con const
const PI = 3.14;
const URL = "https://www.example.com";

# Operatori in JavaScript

Gli operatori in JavaScript sono simboli speciali che vengono utilizzati per eseguire operazioni su valori o variabili. Possono essere di diversi tipi, come operatori aritmetici, di confronto, logici e di assegnazione.

## Operatori Aritmetici

Gli operatori aritmetici vengono utilizzati per eseguire operazioni matematiche su numeri.

- `+`: Somma
- `-`: Sottrazione
- `*`: Moltiplicazione
- `/`: Divisione
- `%`: Resto della divisione
- `++`: Incremento
- `--`: Decremento

## Operatori di Confronto

Gli operatori di confronto vengono utilizzati per confrontare due valori e restituire un valore booleano.

- `==`: Uguaglianza
- `===`: Uguaglianza stretta (valore e tipo)
- `!=`: Non uguale
- `!==`: Non uguale stretto
- `>`: Maggiore di
- `<`: Minore di
- `>=`: Maggiore o uguale a
- `<=`: Minore o uguale a

## Operatori Logici

Gli operatori logici vengono utilizzati per eseguire operazioni logiche su valori booleani.

- `&&`: AND logico
- `||`: OR logico
- `!`: NOT logico

## Operatori di Assegnazione

Gli operatori di assegnazione vengono utilizzati per assegnare valori alle variabili.

- `=`: Assegnazione
- `+=`: Assegnazione con somma
- `-=`: Assegnazione con sottrazione
- `*=`: Assegnazione con moltiplicazione
- `/=`: Assegnazione con divisione
- `%=`: Assegnazione con resto

## Operatori di Concatenazione

- `+`: Concatenazione di stringhe

## Esempi

```javascript
// Operatori aritmetici
let x = 10;
let y = 5;
let somma = x + y; // somma = 15
let differenza = x - y; // differenza = 5
let prodotto = x * y; // prodotto = 50
let quoziente = x / y; // quoziente = 2
let resto = x % y; // resto = 0

// Operatori di confronto
console.log(x === y); // Output: false

// Operatori logici
let a = true;
let b = false;
console.log(a && b); // Output: false
console.log(a || b); // Output: true

// Operatori di assegnazione
let z = 5;
z += 3; // z = 8
z -= 2; // z = 6
````

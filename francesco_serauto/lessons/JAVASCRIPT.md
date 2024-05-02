## document

Il comando **document** in JavaScript è un oggetto che rappresenta l'intero documento HTML caricato nella finestra del browser. Questo oggetto fornisce metodi per manipolare il documento HTML e accedere ai suoi elementi.

### Selezione degli elementi

1. **getElementById():** Restituisce un riferimento all'elemento con l'ID specificato.

   ```javascript
   var element = document.getElementById("myId");
   ```

2. **getElementsByClassName():** Restituisce una collezione di tutti gli elementi con la classe specificata.

   ```javascript
   var elements = document.getElementsByClassName("myClass");
   ```

3. **getElementsByTagName():** Restituisce una collezione di tutti gli elementi con il nome del tag specificato.

   ```javascript
   var elements = document.getElementsByTagName("div");
   ```

4. **querySelector():** Restituisce il primo elemento che corrisponde al selettore CSS specificato.

   ```javascript
   var element = document.querySelector("#myId .myClass");
   ```

5. **querySelectorAll():** Restituisce una NodeList di tutti gli elementi che corrispondono al selettore CSS specificato.

   ```javascript
   var elements = document.querySelectorAll("div.myClass");
   ```

### Manipolazione del contenuto

6. **innerHTML:** Proprietà che rappresenta il contenuto HTML di un elemento.

   ```javascript
   element.innerHTML = "<p>Nuovo contenuto</p>";
   ```

7. **textContent:** Proprietà che rappresenta il testo di un elemento e dei suoi discendenti.

   ```javascript
   element.textContent = "Testo aggiornato";
   ```

### Modifica degli stili

8. **style:** Proprietà che consente di modificare gli stili CSS di un elemento.

   ```javascript
   element.style.color = "red";
   ```

### Gestione degli eventi

9. **addEventListener():** Aggiunge un gestore di eventi a un elemento per un determinato tipo di evento.

   ```javascript
   element.addEventListener("click", function () {
     console.log("Elemento cliccato");
   });
   ```

### Manipolazione della struttura del documento

10. **createElement():** Crea un nuovo elemento HTML specificato dalla stringa.

    ```javascript
    var newElement = document.createElement("div");
    ```

11. **appendChild():** Aggiunge un nuovo nodo alla fine della lista dei figli di un elemento.

    ```javascript
    parentElement.appendChild(newElement);
    ```

12. **removeChild():** Rimuove un nodo figlio dall'albero DOM.

    ```javascript
    parentElement.removeChild(childElement);
    ```

## window

In JavaScript, **l'oggetto window rappresenta la finestra del browser.** È l'oggetto globale e contiene variabili, funzioni e altri oggetti che sono disponibili globalmente all'interno del contesto di esecuzione JavaScript di una pagina web.

### Gestione della finestra del browser

1. **Apertura e chiusura della finestra:**

   - `window.open()`
   - `window.close()`
   - `window.closed`

2. **Dimensionamento e posizionamento della finestra:**

   - `window.resizeTo()`
   - `window.moveTo()`

3. **Scrolling:**
   - `window.scrollBy()`
   - `window.scrollTo()`

### Gestione della navigazione

4. **URL e pagine:**

   - `window.location`
   - `window.location.href`
   - `window.location.reload()`
   - `window.location.replace()`

5. **Storia della sessione:**
   - `window.history`
   - `window.history.back()`
   - `window.history.forward()`
   - `window.history.go()`

### Gestione degli eventi

6. **Eventi della finestra:**
   - `window.onload`
   - `window.onresize`
   - `window.onbeforeunload`

### Timer e temporizzazione

7. **Timer:**

   - `window.setTimeout()`
   - `window.setInterval()`
   - `window.clearTimeout()`
   - `window.clearInterval()`

8. **Orologio:**
   - `window.Date()`

# Programmazione Orientata agli Oggetti in JavaScript

In JavaScript, il paradigma orientato agli oggetti (OOP, Object-Oriented Programming) è un modo di scrivere codice che si concentra sugli "oggetti", che sono entità che rappresentano dati e comportamenti correlati. In questo contesto, "oriented" significa che il linguaggio è strutturato in modo da facilitare la programmazione orientata agli oggetti.

1. **Oggetti:** Gli oggetti sono entità che incapsulano dati (conosciuti come "proprietà") e comportamenti (conosciuti come "metodi"). Ad esempio, un oggetto "Auto" potrebbe avere proprietà come "marca", "modello" e "anno", insieme a metodi come "avvia()" e "ferma()".

2. **Classi:** In JavaScript, il concetto di classi è stato introdotto nelle versioni più recenti del linguaggio (ECMAScript 6 e successivi). Una classe è un modello per creare oggetti. Ad esempio, potresti avere una classe "Auto" che definisce la struttura generale di un'auto, e poi puoi creare molteplici istanze di questa classe con dati specifici per ciascuna auto.

3. **Ereditarietà:** In JavaScript, è possibile creare gerarchie di classi dove una classe (chiamata "figlio" o "sottoclasse") può ereditare proprietà e metodi da un'altra classe (chiamata "genitore" o "superclasse"). Questo permette di evitare la duplicazione del codice e di organizzare le classi in modo gerarchico basato sulle loro relazioni.

4. **Incapsulamento:** L'incapsulamento è il concetto di nascondere i dettagli interni di un oggetto e consentire l'accesso solo tramite un'interfaccia pubblica. In JavaScript, questo può essere raggiunto utilizzando la proprietà di visibilità come `public`, `private`, e `protected`. Tuttavia, JavaScript non offre un supporto nativo per queste parole chiave, ma è possibile ottenere un incapsulamento simile tramite tecniche di programmazione come i "closures" (chiusure) e i "modules" (moduli).

5. **Polimorfismo:** Il polimorfismo è il concetto per cui oggetti di diverse classi possono essere trattati allo stesso modo. In JavaScript, questo è spesso raggiunto grazie alla flessibilità del linguaggio, in cui una funzione può essere utilizzata per oggetti di diversi tipi senza la necessità di conoscere il tipo specifico in anticipo.

6. **Prototipi:** Prima dell'introduzione delle classi in JavaScript, il linguaggio usava un modello basato su prototipi per l'ereditarietà. Ogni oggetto ha un prototipo dal quale eredita proprietà e metodi. Questo approccio è ancora presente in JavaScript ed è utilizzato anche in combinazione con le classi.

In sintesi, la programmazione orientata agli oggetti in JavaScript si basa sull'uso di oggetti, classi, ereditarietà, incapsulamento, polimorfismo e prototipi per organizzare e strutturare il codice in modo efficace, facilitando la creazione e la gestione di grandi e complessi sistemi software.

# Operatori in JavaScript

Gli operatori in JavaScript sono simboli speciali che vengono utilizzati per eseguire operazioni su variabili e valori. Possono essere usati per eseguire calcoli matematici, confrontare valori, assegnare valori alle variabili e altro ancora. Ecco una spiegazione dei principali tipi di operatori in JavaScript:

1. **Operatori Aritmetici:** Questi operatori vengono utilizzati per eseguire operazioni matematiche su numeri.

   - `+` (addizione)
   - `-` (sottrazione)
   - `*` (moltiplicazione)
   - `/` (divisione)
   - `%` (resto della divisione)

   Esempio:

   ```javascript
   let risultato = 10 + 5; // risultato sarà 15
   ```

2. **Operatori di Assegnazione:** Questi operatori vengono utilizzati per assegnare valori alle variabili.

   - `=` (assegnazione)
   - `+=` (assegnazione con addizione)
   - `-=` (assegnazione con sottrazione)
   - `*=` (assegnazione con moltiplicazione)
   - `/=` (assegnazione con divisione)

   Esempio:

   ```javascript
   let x = 10;
   x += 5; // ora x è 15
   ```

3. **Operatori di Confronto:** Questi operatori vengono utilizzati per confrontare due valori e restituire un valore booleano (`true` o `false`).

   - `==` (uguaglianza)
   - `!=` (diversità)
   - `===` (uguaglianza stretta, controlla anche il tipo)
   - `!==` (diversità stretta, controlla anche il tipo)
   - `>` (maggiore di)
   - `<` (minore di)
   - `>=` (maggiore o uguale a)
   - `<=` (minore o uguale a)

   Esempio:

   ```javascript
   let a = 10;
   let b = 5;
   console.log(a > b); // restituirà true
   ```

4. **Operatori Logici:** Questi operatori vengono utilizzati per eseguire operazioni logiche su valori booleani e restituire un valore booleano.

   - `&&` (AND logico)
   - `||` (OR logico)
   - `!` (NOT logico)

   Esempio:

   ```javascript
   let x = 10;
   let y = 5;
   console.log(x > 5 && y < 10); // restituirà true
   ```

5. **Operatori di Incremento e Decremento:** Questi operatori vengono utilizzati per aumentare o diminuire il valore di una variabile di 1.

   - `++` (incremento)
   - `--` (decremento)

   Esempio:

```javascript
let count = 5;
count++; // ora count è 6
```

Ecco il testo completamente formattato in markdown:

````markdown
# Introduzione alle Variabili JavaScript

Le variabili in JavaScript sono contenitori per memorizzare dati. Possono contenere qualsiasi tipo di dato, come numeri, stringhe di testo, oggetti, funzioni e così via.

## Dichiarazione di Variabili

Puoi dichiarare una variabile utilizzando la parola chiave `var`, `let`, o `const`.

- `var`: Definisce una variabile globalmente o localmente ad una funzione senza alcuna restrizione di blocco.
- `let`: Definisce una variabile con portata di blocco, limitata al blocco, statement, o espressione in cui è stata dichiarata.
- `const`: Definisce una variabile a cui non può essere assegnato un nuovo valore in seguito.

Esempi di dichiarazione di variabili:

```javascript
var x = 10;
let y = "Hello";
const PI = 3.14;
```
````

## Nomi delle Variabili

Quando assegni un nome a una variabile, ci sono alcune regole da seguire:

- Il nome deve iniziare con una lettera, un carattere di sottolineatura (\_) o un dollaro ($).
- Dopo il primo carattere, puoi usare lettere, cifre, underscore o dollari.
- I nomi delle variabili sono sensibili alle maiuscole e minuscole.
- Non puoi usare parole riservate come nomi di variabili.

Esempi di nomi di variabili validi:

```javascript
let nomeUtente = "Mario";
let numeroDiTelefono = "123456789";
let _variabileSegreta = "segreto";
let $prezzo = 10.99;
```

## Convenzioni di Denominazione

È una pratica comune utilizzare una convenzione per i nomi delle variabili per rendere il codice più leggibile. Ad esempio, si può utilizzare il camelCase in cui il primo carattere di ogni parola tranne la prima è in maiuscolo.

Esempio di convenzione di denominazione:

```javascript
let nomeUtenteCompleto = "Mario Rossi";
let numeroDiTelefonoPrincipale = "123456789";
```

## Conversione di Tipo

La conversione di tipo si riferisce alla trasformazione esplicita di un tipo di dato in un altro tipo di dato. JavaScript può convertire automaticamente i tipi di dati durante le operazioni quando necessario, ma a volte è necessario convertire i tipi manualmente per ottenere il comportamento desiderato.

Esempi di conversione di tipo:

```javascript
// Conversione di una stringa in un numero
let stringaNumero = "123";
let numero = parseInt(stringaNumero);

// Conversione di un numero in una stringa
let numero2 = 456;
let stringa = numero2.toString();
```

## Coercizione

La coercizione è il processo implicito di conversione di un tipo di dato in un altro tipo di dato durante le operazioni. Questo processo può avvenire in situazioni in cui gli operatori o le funzioni richiedono tipi di dati diversi.

Esempi di coercizione:

```javascript
// Coercizione di stringhe in numeri
let somma = "10" + 5; // risultato: "105" (stringa)
let differenza = "10" - 5; // risultato: 5 (numero)

// Coercizione di valori booleani
let risultato = 10 > 5; // risultato: true (booleano)

// Coercizione di valori non booleani in valori booleani
let booleano = !!0; // risultato: false
```

La coercizione può essere implicita, come nei casi sopra, o esplicita, quando si utilizzano operatori come `==` o `===` per confrontare i valori. La coercizione implicite può portare a comportamenti imprevisti, quindi è importante comprendere come funziona per evitare errori nel codice.

````markdown
### Oggetti in JavaScript:

Un oggetto in JavaScript è una struttura dati che consente di raggruppare valori e funzionalità correlate come proprietà e metodi. Le proprietà di un oggetto sono coppie chiave-valore, dove la chiave è una stringa (o un simbolo a partire da ES6) e il valore può essere qualsiasi tipo di dato JavaScript, incluso un altro oggetto. I metodi di un oggetto sono funzioni associate ad esso.

Ecco un esempio di come definire un oggetto in JavaScript:

```javascript
// Definizione di un oggetto persona
let persona = {
  nome: "Mario",
  cognome: "Rossi",
  eta: 30,
  saluta: function () {
    return "Ciao, sono " + this.nome + " " + this.cognome + "!";
  },
};

// Accesso alle proprietà dell'oggetto
console.log(persona.nome); // Output: Mario
console.log(persona.saluta()); // Output: Ciao, sono Mario Rossi!
```
````

### Classi in JavaScript

Una classe in JavaScript è un tipo di struttura che consente di creare oggetti che condividono le stesse proprietà e metodi. Dalla versione ES6 di JavaScript, le classi sono state introdotte per rendere più semplice e intuitiva la creazione di oggetti e la definizione di relazioni tra di essi.

Ecco un esempio di come definire una classe in JavaScript:

```javascript
// Definizione di una classe Persona
class Persona {
  constructor(nome, cognome, eta) {
    this.nome = nome;
    this.cognome = cognome;
    this.eta = eta;
  }

  saluta() {
    return "Ciao, sono " + this.nome + " " + this.cognome + "!";
  }
}

// Creazione di un'istanza della classe Persona
let mario = new Persona("Mario", "Rossi", 30);

// Accesso alle proprietà e ai metodi dell'istanza
console.log(mario.nome); // Output: Mario
console.log(mario.saluta()); // Output: Ciao, sono Mario Rossi!
```

In questo esempio, `Persona` è una classe che ha tre proprietà (nome, cognome e eta) e un metodo (saluta). L'istruzione `let mario = new Persona("Mario", "Rossi", 30);` crea un'istanza della classe Persona chiamata `mario`, e possiamo accedere alle sue proprietà e ai suoi metodi utilizzando la notazione punto (`mario.nome`, `mario.saluta()`).

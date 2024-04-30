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
  alert("Ciao, mondo!");
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

Copiando e incollando questo codice in un file con estensione `.md`, otterrai una lezione su JavaScript in formato Markdown.
```
````

<!-- @format -->

## Introduzione al DOM (Document Object Model)

Il Document Object Model (DOM) è una rappresentazione ad albero di una pagina HTML/XML che permette di modificare dinamicamente il contenuto, la struttura e lo stile di una pagina web. Il DOM è un'interfaccia di programmazione per i documenti HTML e XML. In questa lezione, impareremo i concetti fondamentali del DOM.

### Cos'è il DOM?

Il DOM è una rappresentazione gerarchica degli elementi di una pagina web, che permette agli sviluppatori di accedere, manipolare e aggiornare i contenuti HTML, CSS e JavaScript di una pagina web. Il DOM divide una pagina web in un albero di nodi, dove ogni elemento HTML è rappresentato da un nodo nel DOM.

### Struttura del DOM

Il DOM inizia con un nodo radice che rappresenta l'intera pagina web. Da questo nodo radice si dipartono altri nodi che rappresentano gli elementi HTML all'interno della pagina.

Ecco un esempio semplice di struttura del DOM:

```html
<!doctype html>
<html>
  <head>
    <title>Titolo della Pagina</title>
  </head>
  <body>
    <h1>Titolo principale</h1>
    <p>Questo è un paragrafo.</p>
    <ul>
      <li>Elemento 1</li>
      <li>Elemento 2</li>
      <li>Elemento 3</li>
    </ul>
  </body>
</html>
```

Questa è la rappresentazione del DOM per la pagina HTML di esempio:

```
- Document
  - html
    - head
      - title
        - "Titolo della Pagina"
    - body
      - h1
        - "Titolo principale"
      - p
        - "Questo è un paragrafo."
      - ul
        - li
          - "Elemento 1"
        - li
          - "Elemento 2"
        - li
          - "Elemento 3"
```

### Manipolazione del DOM con JavaScript

JavaScript può essere utilizzato per accedere e manipolare il DOM. Ecco un esempio di come si può utilizzare JavaScript per modificare il contenuto di un elemento nel DOM:

```html
<!doctype html>
<html>
  <head>
    <title>Manipolazione del DOM</title>
  </head>
  <body>
    <h1 id="titolo">Titolo principale</h1>
    <button onclick="cambiaTitolo()">Cambia titolo</button>

    <script>
      function cambiaTitolo() {
        document.getElementById('titolo').innerHTML = 'Nuovo titolo';
      }
    </script>
  </body>
</html>
```

In questo esempio, quando si fa clic sul pulsante "Cambia titolo", il testo dell'elemento `h1` con l'id "titolo" viene modificato da "Titolo principale" a "Nuovo titolo".

### Conclusioni

Il Document Object Model (DOM) è un concetto fondamentale nello sviluppo web che permette agli sviluppatori di manipolare dinamicamente il contenuto di una pagina web utilizzando JavaScript. Con una comprensione approfondita del DOM, è possibile creare esperienze web interattive e dinamiche.

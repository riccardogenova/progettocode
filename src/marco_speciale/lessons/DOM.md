<!-- @format -->

# Dom

Il DOM (**_Document Object Model_**) è una rappresentazione gerarchica dei documenti strutturati come HTML, XHTML e XML. È essenzialmente una struttura ad albero che rappresenta tutti gli elementi di un documento web e la relazione tra di essi. Ecco alcuni punti chiave per capire meglio il DOM:

Definizione: Il Document Object Model (DOM) è una rappresentazione gerarchica di un documento web. Questo modello permette ai programmi e agli script di accedere e manipolare la struttura, il contenuto e lo stile del documento.

Gerarchia: Il DOM organizza un documento come una struttura ad albero, dove ogni elemento, attributo e testo è rappresentato come un nodo nell'albero.

![grafico Dom](https://www.ionos.it/digitalguide/fileadmin/DigitalGuide/Schaubilder/rappresentazione-grafica-di-un-albero-dom.png)

Interazione: Il DOM è la rappresentazione che il browser utilizza per creare una pagina web. Attraverso il DOM, gli sviluppatori possono accedere agli elementi HTML di una pagina e modificarli utilizzando script, come JavaScript.

Ecco un esempio di come il DOM rappresenta una semplice struttura HTML:

```html
<!doctype html>
<html>
  <head>
    <title>Esempio DOM</title>
  </head>
  <body>
    <div id="contenitore">
      <h1>Titolo</h1>
      <p>Questo è un paragrafo.</p>
      <ul>
        <li>Elemento 1</li>
        <li>Elemento 2</li>
        <li>Elemento 3</li>
      </ul>
    </div>
  </body>
</html>
```

In questo esempio, il DOM rappresenterebbe la struttura del documento HTML come una struttura ad albero:

In questo modo, il DOM rappresenta il documento HTML come un albero di nodi, che può essere navigato e modificato tramite script, come JavaScript.

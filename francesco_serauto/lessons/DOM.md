![alt](https://i.ibb.co/1m08n36/DOM.png)
Il DOM, acronimo di Document Object Model, è una rappresentazione gerarchica dei documenti HTML, XHTML o XML. È un concetto fondamentale per comprendere come interagiscono JavaScript e i browser web. Qui di seguito una lezione completa sul DOM:

### Introduzione al DOM

Il Document Object Model (DOM) è una rappresentazione gerarchica di un documento strutturato come HTML, XHTML o XML. Quando un browser carica una pagina web, crea un modello di questa pagina che può essere manipolato tramite JavaScript. Il DOM consente agli sviluppatori web di accedere, modificare, aggiungere o rimuovere elementi HTML e attributi dinamicamente, rendendo le pagine web interattive e dinamiche.

### Struttura del DOM

Il DOM è organizzato come un albero gerarchico, con un nodo radice che rappresenta l'intero documento HTML e nodi figlio che rappresentano gli elementi all'interno del documento. Ad esempio, un documento HTML di base potrebbe avere una struttura del DOM simile a questa:

```
html (node radice)
└─── head
│    └─── title
│          └─── "Titolo della pagina"
└─── body
     └─── h1
     │     └─── "Benvenuto!"
     └─── p
           └─── "Questo è un paragrafo."
```

In questo esempio, "html" è il nodo radice e contiene due nodi figlio: "head" e "body". A loro volta, questi nodi contengono ulteriori nodi figlio che rappresentano gli elementi HTML all'interno del documento.

### Selezione degli elementi del DOM

JavaScript consente di selezionare elementi nel DOM in vari modi. Il metodo più comune è utilizzare la funzione `document.querySelector()` per selezionare un elemento specifico utilizzando un selettore CSS. Ad esempio:

```javascript
const titolo = document.querySelector("h1");
```

Questo codice selezionerebbe il primo elemento `<h1>` trovato nel documento.

È anche possibile selezionare più elementi utilizzando `document.querySelectorAll()`, che restituisce una NodeList di tutti gli elementi che corrispondono al selettore specificato.

```javascript
const paragrafi = document.querySelectorAll("p");
```

### Manipolazione degli elementi del DOM

Una volta selezionati gli elementi, è possibile modificarli, aggiungerli o rimuoverli utilizzando JavaScript. Ecco alcuni esempi:

#### Modifica del contenuto di un elemento:

```javascript
titolo.textContent = "Nuovo titolo";
```

#### Aggiunta di un nuovo elemento:

```javascript
const nuovoParagrafo = document.createElement("p");
nuovoParagrafo.textContent = "Questo è un nuovo paragrafo.";
document.body.appendChild(nuovoParagrafo);
```

#### Rimozione di un elemento:

```javascript
const paragrafoDaRimuovere = document.querySelector("p");
paragrafoDaRimuovere.remove();
```

### Eventi del DOM

Il DOM supporta eventi, come il click di un pulsante o il caricamento di una pagina. È possibile aggiungere gestori di eventi agli elementi del DOM per eseguire azioni specifiche quando si verificano questi eventi. Ecco un esempio:

```javascript
const pulsante = document.querySelector("button");

pulsante.addEventListener("click", function () {
  alert("Hai cliccato il pulsante!");
});
```

### Conclusioni

Il Document Object Model (DOM) è una parte essenziale dello sviluppo web moderno. Consente agli sviluppatori di creare pagine web dinamiche e interattive, manipolando gli elementi HTML e rispondendo agli eventi dell'utente. Con una buona comprensione del DOM e delle sue funzionalità, è possibile creare esperienze utente coinvolgenti e interattive.

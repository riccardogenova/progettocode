<!-- @format -->

# DOM Document Object Model

rappresenta un'interfaccia tra un documento web e un linguaggio di scripting come JavaScript.
Permette di accedere e modificare la struttura e il contenuto di una pagina HTML in modo dinamico.

## Struttura ad albero del DOM:

Il DOM organizza gli elementi HTML in una struttura ad albero gerarchica, dove ogni elemento è un nodo. Il nodo radice è l'elemento <html> e i nodi successivi rappresentano elementi come `<head>` , `<body>`, `<div>`,` <p>`, `<img>`, e così via. Ogni nodo può avere attributi e proprietà che ne definiscono le caratteristiche.

## Accesso e manipolazione del DOM:

Il DOM fornisce metodi e proprietà per accedere e modificare i nodi della struttura ad albero.

### Ad esempio, è possibile:

- Selezionare elementi specifici utilizzando selettori CSS o XPath
  Aggiungere, rimuovere o modificare elementi
  Modificare il contenuto testuale degli elementi
  Applicare stili CSS agli elementi
  Gestire eventi come click del mouse o tastiera
  Vantaggi del DOM:

## L'utilizzo del DOM offre diversi vantaggi:

- Dinamicità: Permette di modificare il contenuto e l'aspetto di una pagina web in modo dinamico, senza ricaricare la pagina intera.

- Interattività: Consente di creare interazioni con l'utente, come moduli, menu a discesa e animazioni.

- Accessibilità: Facilita l'accesso e la modifica del contenuto di una pagina web da parte di script e applicazioni esterne.

## Esempio di utilizzo del DOM:

```
<p id="mioParagrafo">Questo è un paragrafo.</p>

<script>
  const paragrafo = document.getElementById('mioParagrafo');

  paragrafo.addEventListener('click', function() {
    this.style.color = 'red';
  });
</script>
```

- La prima riga definisce un paragrafo HTML con l'ID mioParagrafo.
- La seconda riga seleziona l'elemento paragrafo utilizzando il metodo getElementById del DOM.
- La terza riga aggiunge un evento click all'elemento paragrafo.
- La funzione callback definita gestisce l'evento click. All'interno della funzione, il colore del testo del paragrafo viene impostato su rosso utilizzando la proprietà style.color.

Questo è solo un semplice esempio di come il DOM può essere utilizzato per manipolare dinamicamente una pagina web. Le sue potenzialità sono molto più ampie e permettono di creare esperienze web interattive e complesse.

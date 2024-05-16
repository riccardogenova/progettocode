<!-- @format -->

# DOM: il Document Object Model

Il DOM è una rappresentazione gerarchica e strutturata di un documento HTML o XML che rappresenta la struttura del documento come un albero di oggetti. Permette di accedere e manipolare il contenuto, la struttura e lo stile di un documento web.

Nel DOM, ogni elemento, attributo, e pezzo di testo nella pagina HTML diventa un "nodo" nell'albero. Per esempio, un documento HTML semplice si trasformerà in un albero con elementi come `<html>`, `<head>`, `<body>`, `<div>`, `<p>` ..., dove ogni elemento è un nodo connesso in una struttura gerarchica.

JavaScript interagisce con il DOM per leggere e modificare il contenuto, la struttura e lo stile della pagina web. Questo rende il DOM fondamentale per aggiungere dinamicità e interattività alle pagine web.

## Manipolazione del DOM da parte del Browser

Quando un browser carica una pagina web, segue questi passaggi:

1. **Parsing del Documento HTML**: Il browser legge il codice HTML e costruisce il DOM. Questo processo trasforma il markup in un albero di nodi che rappresenta tutti gli elementi della pagina.

2. **Rendering della Pagina**: Dopo aver costruito il DOM, il browser legge i file CSS e applica gli stili ai nodi corrispondenti nel DOM. In combinazione con il CSSOM (CSS Object Model), il browser può renderizzare la pagina sullo schermo.

3. **Interattività con JavaScript**: JavaScript può essere utilizzato per manipolare il DOM. Gli sviluppatori possono scrivere script che modificano il DOM in varie maniere, come cambiare elementi esistenti, aggiungere nuovi elementi, rimuovere elementi, cambiare stili, ecc.

4. **Reflow e Repaint**: Ogni volta che il DOM viene modificato (ad esempio, attraverso JavaScript), il browser può eseguire un processo chiamato "reflow", in cui calcola nuovamente le posizioni e le dimensioni degli elementi, e successivamente un "repaint", dove applica i nuovi stili agli elementi. Questi processi sono fondamentali per l'aggiornamento visivo della pagina.

## Esempi di manipolazione del DOM

- Selezione di Elementi: JavaScript offre metodi come document.getElementById(), document.querySelector() per selezionare elementi dal DOM.

- Modifica degli Elementi: Una volta selezionato un elemento, si possono modificare le sue proprietà, come il contenuto (innerText, innerHTML), gli attributi (setAttribute) e lo stile (style).

- Aggiungere e Rimuovere Elementi: È possibile aggiungere nuovi elementi al DOM con metodi come appendChild() o insertBefore(), e rimuoverli con removeChild().

In conclusione, il DOM è un elemento essenziale nella creazione e manipolazione di pagine web. Permette ai browser di rappresentare il documento in una forma che può essere facilmente modificata e manipolata tramite linguaggi di scripting come JavaScript, portando a un'esperienza web ricca e interattiva per l'utente.

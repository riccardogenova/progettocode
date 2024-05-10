<!-- @format -->

# DOM

## Cos'è il DOM?

Il DOM, acronimo di Document Object Model, è una rappresentazione strutturata e gerarchica di un documento HTML/XML, che il browser crea quando carica una pagina web. Questo modello permette a JavaScript di accedere e manipolare dinamicamente gli elementi della pagina, aggiungendo interattività e reattività all'esperienza utente.

## Com'è strutturato il DOM?

Il DOM è organizzato come un albero, con un nodo radice che rappresenta l'intero documento HTML. Ogni elemento HTML, attributo, testo e commento sono rappresentati come nodi nel DOM. Ogni nodo può avere figli (elementi contenuti), genitori (elemento che lo contiene) e fratelli (elementi con lo stesso genitore).

## Come funziona il DOM?

- **Creazione del DOM**: Quando il browser carica una pagina web, analizza il codice HTML e costruisce il DOM corrispondente.

- **Accesso al DOM**: JavaScript può accedere al DOM utilizzando l'oggetto `document`. Ad esempio, `document.getElementById("id")` restituisce un elemento specifico basato sull'ID.

- **Manipolazione del DOM**: JavaScript può modificare il DOM aggiungendo, rimuovendo o modificando elementi e attributi. Ad esempio, `document.createElement("tag")` crea un nuovo elemento, mentre `element.appendChild(child)` aggiunge un nodo figlio a un elemento esistente.

- **Aggiornamento del DOM**: Quando il DOM viene modificato, il browser aggiorna automaticamente la visualizzazione della pagina per riflettere tali modifiche.

## Utilizzo pratico del DOM

- **Gestione degli eventi**: JavaScript può ascoltare eventi come clic, hover o submit e rispondere di conseguenza, modificando il DOM. Ad esempio, un clic su un pulsante può mostrare un modulo di contatto.
- **Validazione dei dati**: JavaScript può controllare i dati inseriti dagli utenti nei moduli, verificando che rispettino determinati criteri e aggiungendo messaggi di errore se necessario.
- **Creazione di interfacce utente dinamiche**: Il DOM può essere utilizzato per creare interfacce utente dinamiche e reattive. Ad esempio, una pagina web di shopping potrebbe aggiornare dinamicamente il carrello degli acquisti senza dover ricaricare l'intera pagina.

## linee guida

- **Separazione tra struttura, presentazione e comportamento**: È consigliabile mantenere il codice HTML, CSS e JavaScript separati per una migliore manutenibilità del codice.

- **Performance**: Manipolare il DOM può essere costoso in termini di prestazioni, quindi è importante utilizzare tecniche efficienti, come la delega degli eventi o l'uso di document fragment, per ottimizzare le prestazioni.

In breve, il DOM è un concetto fondamentale nello sviluppo web moderno, perchè fornisce agli sviluppatori gli strumenti necessari per creare esperienze utente interattive e dinamiche utilizzando JavaScript.

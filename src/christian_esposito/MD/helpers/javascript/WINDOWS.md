<!-- @format -->

In JavaScript, **windows** sono strumenti utilizzati per visualizzare contenuti web o raccogliere dati dall'utente. Esistono due tipi principali di finestre in JavaScript:

1. Finestre implicite (o "finestre di dialogo")

Le finestre implicite sono finestre predefinite fornite dal browser web e possono essere create utilizzando i metodi JavaScript alert(), confirm() e prompt(). Queste finestre sono semplici e non offrono molte opzioni di personalizzazione, ma sono utili per visualizzare messaggi semplici o raccogliere dati di base dall'utente.

- alert(): Mostra un messaggio di testo all'utente e richiede di premere un pulsante per chiudere la finestra. Esempio di alert in JavaScript: [URL non valido rimosso]

- confirm(): Mostra un messaggio di testo all'utente e fornisce due pulsanti: "OK" e "Annulla". Restituisce un valore booleano che indica se l'utente ha premuto "OK" o "Annulla". Esempio di confirm in JavaScript: [URL non valido rimosso]

- prompt(): Mostra un messaggio di testo all'utente e un campo di input. Restituisce una stringa contenente il testo inserito dall'utente o null se l'utente ha premuto il pulsante "Annulla". Esempio di prompt in JavaScript: [URL non valido rimosso]

2. Finestre personalizzate

Le finestre personalizzate sono finestre più flessibili che possono essere create utilizzando l'oggetto window di JavaScript. Queste finestre possono essere completamente personalizzate in termini di dimensioni, posizione, contenuto e comportamento.

Per creare una finestra personalizzata, è possibile utilizzare il metodo window.open(). Questo metodo restituisce un oggetto Window che rappresenta la nuova finestra. L'oggetto Window offre una serie di proprietà e metodi per controllare la finestra, come:

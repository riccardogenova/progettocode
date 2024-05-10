<!-- @format -->

Il DOM (Document Object Model) è una rappresentazione gerarchica dei documenti HTML (e XML) che formano una pagina web. Funziona come un'interfaccia di programmazione che consente agli sviluppatori di manipolare dinamicamente la struttura, il contenuto e lo stile di una pagina web utilizzando JavaScript.

### Come funziona il DOM:

1. **Creazione del DOM**: Quando un browser carica una pagina web, analizza il codice HTML della pagina e costruisce una rappresentazione del documento sotto forma di albero di nodi, chiamato DOM. Ogni nodo nell'albero rappresenta un elemento del documento, come tag HTML, attributi e testo.

2. **Interazione con il DOM tramite JavaScript**: Una volta che il DOM è stato costruito, gli sviluppatori possono interagire con esso utilizzando JavaScript. Questo consente loro di accedere agli elementi della pagina, modificarne il contenuto, aggiungere nuovi elementi, rimuovere elementi esistenti, aggiornare gli stili CSS e gestire eventi come clic del mouse, pressioni di tasti e altro ancora.

3. **Accesso agli elementi del DOM**: Gli sviluppatori possono accedere agli elementi del DOM utilizzando metodi come `getElementById`, `getElementsByClassName`, `getElementsByTagName` e altri. Una volta ottenuto un riferimento a un elemento, è possibile modificare il suo contenuto, attributi, stili e altro ancora.

4. **Manipolazione del DOM**: Utilizzando JavaScript, è possibile manipolare dinamicamente la struttura del DOM. Ad esempio, è possibile aggiungere un nuovo paragrafo alla pagina utilizzando `document.createElement('p')`, impostare il suo testo utilizzando `.textContent`, e quindi aggiungerlo alla pagina utilizzando `.appendChild`.

5. **Risposta agli eventi**: Il DOM consente anche di gestire eventi generati dagli utenti, come clic del mouse, pressioni di tasti e caricamento della pagina. Gli sviluppatori possono registrare funzioni di gestione degli eventi che verranno eseguite quando un determinato evento si verifica su un elemento specifico.

Il DOM è essenziale per la creazione di pagine web interattive e dinamiche, consentendo agli sviluppatori di manipolare la struttura e il contenuto di una pagina web in tempo reale utilizzando JavaScript, rendendo possibile la creazione di esperienze utente coinvolgenti e interattive.

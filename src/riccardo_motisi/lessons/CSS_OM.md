<!-- @format -->

# CSS OM

Il CSS Object Model (CSS OM) è una rappresentazione strutturata dei fogli di stile CSS all'interno di un documento HTML. È una parte fondamentale dell'ecosistema web moderno, in quanto consente agli sviluppatori di manipolare dinamicamente lo stile e l'aspetto degli elementi HTML utilizzando JavaScript.

Il CSS OM fornisce un'interfaccia programmatica che permette agli sviluppatori di accedere, modificare e manipolare i fogli di stile CSS in diversi modi.

Le principali funzionalità del CSS OM includono:

- **Accesso ai fogli di stile**: Gli sviluppatori possono accedere a tutti i fogli di stile associati a un documento HTML utilizzando l'oggetto document.styleSheets. Questo fornisce un elenco di tutti i fogli di stile presenti nella pagina.

- **Manipolazione delle regole CSS**: Ogni foglio di stile è rappresentato come un oggetto CSSStyleSheet, che contiene una serie di regole CSS. Gli sviluppatori possono accedere a queste regole e modificarle secondo necessità. È possibile aggiungere, rimuovere o modificare regole CSS utilizzando le API fornite dal CSS OM.

- **Accesso ai singoli stili**: L'oggetto CSSStyleDeclaration, rappresentato tramite Element.style, offre un modo per accedere e modificare gli stili associati a un elemento HTML specifico. Questo consente agli sviluppatori di aggiungere stili inline direttamente agli elementi HTML.

- **Calcolo dei valori degli stili**: Il metodo window.getComputedStyle() restituisce l'insieme di stili calcolati per un elemento dopo che sono stati applicati tutti i fogli di stile e le regole CSS. Questo è utile per ottenere i valori effettivi degli stili, inclusi quelli ereditati o derivati da altri selettori.

- **Media queries**: Il CSS OM offre supporto per gestire le media query attraverso l'oggetto MediaQueryList. Questo consente agli sviluppatori di scrivere codice JavaScript che risponde dinamicamente ai cambiamenti nelle media query, ad esempio per adattare l'interfaccia utente in base alle dimensioni dello schermo.

- **Eventi e animazioni CSS**: Utilizzando il CSS OM insieme agli eventi JavaScript, è possibile creare animazioni e transizioni fluide che rispondono agli input dell'utente o a determinati trigger. Questo consente di creare interazioni dinamiche e reattive nelle pagine web.

In sintesi, il CSS OM è una parte essenziale dello sviluppo web moderno, poiché offre agli sviluppatori gli strumenti necessari per manipolare dinamicamente lo stile di un documento HTML, creando esperienze utente ricche e coinvolgenti.

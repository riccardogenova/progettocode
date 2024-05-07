## CSS Object Model (CSSOM)

Il CSS Object Model (CSSOM) è una rappresentazione degli stili CSS applicati a un documento HTML all'interno di un browser web. Simile al DOM (Document Object Model), che rappresenta la struttura del documento HTML, il CSSOM rappresenta la struttura degli stili CSS applicati al documento.

### Caratteristiche del CSSOM:

1. **Struttura ad albero**: Il CSSOM organizza gli stili CSS in una struttura ad albero, simile alla struttura ad albero del DOM. Ogni elemento HTML che ha stili CSS associati è rappresentato come un nodo all'interno del CSSOM.

2. **Oggetti e proprietà**: Ogni nodo nel CSSOM è rappresentato come un oggetto JavaScript con proprietà e metodi corrispondenti agli stili CSS applicati all'elemento HTML. Ad esempio, è possibile accedere alle proprietà come `color`, `font-size`, `margin`, ecc.

3. **Accesso e manipolazione**: Gli sviluppatori possono accedere e manipolare il CSSOM utilizzando JavaScript per ottenere informazioni sugli stili applicati a un elemento HTML, aggiungere nuovi stili, modificare gli stili esistenti o rimuovere stili. Ciò consente di creare interazioni dinamiche e reattive basate sugli stili CSS.

4. **Interazione con il DOM**: Il CSSOM interagisce strettamente con il DOM, poiché gli stili CSS possono influenzare la visualizzazione e il layout degli elementi HTML all'interno del documento. Cambiamenti nel DOM possono richiedere aggiornamenti nel CSSOM e viceversa.

5. **Calcolo dei valori degli stili**: Il CSSOM è responsabile del calcolo dei valori degli stili, che tiene conto di molteplici fattori come specificità, ereditarietà e cascata dei CSS. Questo processo determina gli stili finali applicati agli elementi HTML.

Il CSSOM è fondamentale per la manipolazione dinamica degli stili CSS all'interno di una pagina web, consentendo agli sviluppatori di creare esperienze utente personalizzate e interattive.

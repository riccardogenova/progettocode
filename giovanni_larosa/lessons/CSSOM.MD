# CSSOM

Il **CSSOM (CSS Object Model)** è una rappresentazione in memoria di tutto il CSS associato a un documento HTML. Il CSSOM è creato automaticamente dal browser quando viene caricata una pagina web, utilizzando tutte le regole CSS definite sia nei fogli di stile esterni che in quelli interni alla pagina.

Il **CSSOM** è molto simile al **DOM** in quanto rappresenta una struttura ad albero dei diversi elementi di stile della pagina. Tuttavia, a differenza del DOM che rappresenta la struttura del documento HTML, il CSSOM rappresenta la struttura del CSS.

Le regole CSS sono rappresentate come oggetti, ognuno dei quali contiene un insieme di proprietà e valori CSS. Questi oggetti sono organizzati in una struttura ad albero che riflette la gerarchia dell'HTML, in modo tale da associare ogni regola CSS al corrispondente elemento HTML.

Il CSSOM non è visibile direttamente nel codice JavaScript, ma può essere manipolato come il DOM attraverso lo stesso linguaggio di scripting, consentendo agli sviluppatori di manipolare e modificare lo stile di una pagina web in modo dinamico.

Ad esempio, un programmatore potrebbe utilizzare **JavaScript** per selezionare un elemento HTML tramite il DOM e poi utilizzare il CSSOM per modificare il foglio di stile associato all'elemento, cambiando le proprietà CSS e i valori di stile. In questo modo, il CSSOM consente di manipolare i layout e lo stile di una pagina web in modo dinamico, aggiungendo funzionalità di animazione e di interattività.

In sintesi, il **CSSOM** è una rappresentazione in memoria di tutto il CSS associato a un documento HTML, che permette ai programmatori di modificare i layout e lo stile attraverso il linguaggio di scripting JavaScript. Attraverso l'uso del CSSOM, gli sviluppatori possono creare pagine web più dinamiche e personalizzate.

## COME SI UTILIZZA?

Il CSSOM (CSS Object Model) può essere utilizzato per manipolare il CSS di una pagina web in modo dinamico utilizzando il linguaggio di programmazione JavaScript. Di seguito sono riportati alcuni esempi di come utilizzare il CSSOM:

1. Selezionare un elemento HTML: per selezionare un elemento HTML sul quale applicare uno stile utilizzando il CSSOM, è possibile utilizzare il metodo **querySelector()** o **querySelectorAll()** in modo simile al **DOM** .
2. Modificare il CSS di un elemento: una volta selezionato l'elemento HTML desiderato, è possibile utilizzare il CSSOM per modificare le sue proprietà di stile. Ad esempio, si può utilizzare il metodo **style.backgroundColor** per cambiare il colore di sfondo dell'elemento.
3. Aggiungere uno stile personalizzato: è possibile utilizzare il metodo **insertRule()** per aggiungere uno stile personalizzato al CSSOM, che verrà applicato alla pagina web in modo dinamico. Ad esempio, si può aggiungere una regola CSS per modificare i colori di un'immagine al passaggio del mouse.
4. Rimuovere un'elemento di stile: è possibile rimuovere un'elemento di stile esistente utilizzando il metodo **deleteRule()**. Questo metodo rimuove una regola CSS specifica dal CSSOM e, quindi, dalla pagina web.

In generale, la manipolazione dinamica dei fogli di stile CSS attraverso il CSSOM consente di apportare modifiche e personalizzazioni al layout e allo stile della pagina web in modo dinamico. Il CSSOM consente di creare pagine web interattive e dinamiche, con animazioni e funzionalità personalizzate.

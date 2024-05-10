<!-- @format -->

# DOM

Il **Document Object Model** (DOM) è una rappresentazione gerarchica degli elementi di una pagina web, compresi gli elementi **HTML**, **XHTML** e **XML**. Il DOM fornisce una struttura ad albero di nodi, dove ogni nodo rappresenta un elemento o un attributo nella pagina web.

Il DOM viene creato quando il browser interpreta il codice HTML e costruisce la pagina web, fornendo quindi una struttura gerarchica che può essere manipolata con **JavaScript**. Questo consente agli sviluppatori web di accedere e modificare il contenuto, la struttura e lo stile dei documenti HTML in modo dinamico, rendendo la pagina web più interattiva.

Attraverso l'uso del DOM, gli sviluppatori possono selezionare e manipolare gli elementi della pagina web, aggiungere nuovi nodi e elementi, rimuovere nodi o elementi esistenti, manipolare gli attributi di un elemento e altro ancora.

Ad esempio, se si vuole cambiare il testo di un elemento HTML, è possibile selezionarlo tramite il DOM e utilizzare JavaScript per sostituire il testo esistente con quello nuovo. Inoltre, gli sviluppatori possono anche utilizzare il DOM per rendere elementi della pagina web visibili o invisibili, caricare immagini in modo dinamico o addirittura creare animazioni elaborate.

In sintesi, il DOM è uno strumento fondamentale per gli sviluppatori web, che consente la manipolazione dinamica dei documenti HTML attraverso il linguaggio di scripting JavaScript. Consentendo agli sviluppatori di selezionare e modificare gli elementi HTML in modo dinamico, il DOM rende le pagine web interactive, dinamiche e personalizzabili.

## Come si utilizza?

Per utilizzare il Document Object Model (DOM), è necessario utilizzare il linguaggio di scripting JavaScript. Di seguito sono riportati alcuni dei passaggi chiave per utilizzare il DOM nelle applicazioni web:

1. Selezionare l'elemento HTML: per selezionare un elemento HTML con JavaScript, è possibile utilizzare il metodo **getElementById()**, il metodo **querySelector()**, o il metodo **getElementsByClassName()**.Questi metodi consentono di selezionare l'elemento HTML desiderato sulla pagina web.
2. Manipolazione dell'elemento HTML: una volta selezionato l'elemento HTML, è possibile manipolarlo attraverso le proprietà e i metodi del DOM. Ad esempio, si può utilizzare il metodo **innerHTML** per modificare il contenuto di un elemento HTML o il metodo **setAttribute()** per aggiungere un attributo al tag HTML.
3. Gestione degli eventi: gli eventi come i clic del mouse, i movimenti del mouse o il completamento del caricamento della pagina possono essere gestiti attraverso l'utilizzo dei listener degli eventi. Per aggiungere un listener di evento a un elemento HTML, è possibile utilizzare il metodo **addEventListener()**. In questo modo, si può eseguire una determinata azione ogni volta che si verifica l'evento.
4. ggiungere o rimuovere elementi: il DOM consente di aggiungere o rimuovere nodi e elementi dalla pagina web in tempo reale utilizzando i metodi **createElement()**,**appendChild()**,**removeChild()** o **replaceChild()**.

### CONCLUSIONI

il Document Object Model (DOM) può essere utilizzato solo con JavaScript, in quanto è un'API specifica per il linguaggio di scripting.

Anche se il DOM è implementato da molti linguaggi di programmazione come Java, C++ e Python, l'interfaccia standard che fornisce l'accesso al DOM è lo script JavaScript. Infatti, JavaScript è stato creato proprio per lavorare in modo sinergico con il DOM per creare pagine web interattive e dinamiche.

Inoltre, gran parte della manipolazione dinamica dei documenti HTML che vengono eseguite tramite il DOM, richiedono un'interazione completa con la pagina web e questo è possibile solo attraverso JavaScript.

In sintesi, il DOM è un'API che fornisce accesso a tutti i nodi e gli elementi di una pagina web, ma può essere utilizzato solo in combinazione con il linguaggio di scripting JavaScript.

<!-- @format -->

## DOM (Document Object Model)

Il Document Object Model è un'interfaccia di programmazione per documenti HTML e XML.
Il documento rappresenta la pagina da modificare in modo chiaro e universalmente leggibile, così che si possa modificare la struttura, lo stile e il ontenuto del documento in maniera semplice.

~Una pagina Web è un documento~, sia che venga visualizzato nella finestra del browser sia in HTML.
Il DOM è un modo per accedere e aggiornare dinamicamente il contenuto, la struttura e lo stile dei documenti, che può essere modificata con un linguaggio di Scripting come **JavaScript**.

Tutte le proprietà, i metodi e gli eventi disponibili per la modifica e la creazione di pagine Web sono organizzati in oggetti. Ciò significa che il DOM propone una struttura a forma di albero per permettere ai tecnici informatici di organizzare il lavoro di programmazione nel modo più pulito e preciso possibile.

## DOM e API

Il DOM moderno è costruito utilzzando più **API** \*(Application Programming Interfaces) che lavorano insieme.
Le API del DOM forniscono un insieme di metodi proprietà ed eventi che consentono di interagire con gli elementi della pagina web in modi diversi.

Il DOM fornisce metodi per selezionare gli elementi del documento HTML tramite ID, classe, name tag, selettore CSS ed altri attributi. Ad esempio `getElementById()`, `getElementsByClassName()` ecc.
Una volta selezionati, gli elementi possono essere modificati, aggiornati o eliminati utilizzando metodi come `setAttribute()`, `removeAttribute()`, ecc.
Il DOM consente inoltre di assegnare eventi come clic, mouseover, keydown, agli elementi HTML utilizzando metodi come `addEvenetListener()`, `onmouseover`.
E' possibile creare nuovi elementi HTML dinamicamente utilizzando i metodi `createElement()`, `createTextNode()`.

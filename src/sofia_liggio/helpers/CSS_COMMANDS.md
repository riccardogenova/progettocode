<!-- @format -->

# COME FUNZIONA CSS?

CSS funziona applicando regole di stile ai documenti HTML e XML.

- **Selezionare gli elementi**: utilizza selettori per identificare gli elementi HTML ai quali applicare le regole di stile. I selettori possono essere basati su elementi HTML (come **p** per i paragrafi), classi (**.**), ID (**#**), attributi e molte altre caratteristiche.

- **Definire le regole di stile**: una volta selezionati gli elementi, vengono specificate le regole di stile che si desidera applicare a quegli elementi. Le regole di stile sono composte da una o più proprietà (come **color, font-size, margin**, ecc.) e i loro valori (come **blue, 16px, 10px**, ecc.).

- **Applicare le regole di stile**: una volta definite le regole di stile, vengono applicate agli elementi selezionati nel documento HTML. Questo può avvenire in diversi modi:

  1. Se le regole sono incluse direttamente nel documento HTML, vengono definite all'interno di un blocco < **style** > all'interno della sezione < **head** > del documento.
  2. Se le regole sono contenute in file esterni con estensione .css, vengono richiamate nell'HTML utilizzando l'elemento < **link** > all'interno della sezione < **head** >.

- **Priorità e cascata**: il termine "cascata" si riferisce al processo di risoluzione di conflitti tra regole di stile. Se più regole si applicano allo stesso elemento, il browser utilizza il concetto di "specificità" per determinare quale regola prendere in considerazione. Inoltre, le regole possono essere ereditate dagli elementi figlio ai genitori all'interno della struttura del documento.

- **Rendering**: Una volta applicate le regole di stile, il browser renderizza il documento HTML con il suo aspetto visivo definito dalle regole CSS. Ciò include la disposizione degli elementi, la dimensione del testo, i colori, il padding, il margine e molti altri aspetti dell'interfaccia utente.

CSS non ha "comandi" nel senso tradizionale, ma piuttosto regole e proprietà che vengono utilizzate per definire lo stile di un documento HTML. Ecco alcuni esempi di regole CSS comuni:

1. **Selettori**. I selettori identificano gli elementi HTML ai quali si applicano le regole CSS. Ad esempio:
   p {
   color: blue;
   }
   In questo caso, il selettore p indica tutti gli elementi < **p**> (paragrafi) nel documento HTML.

2. **Proprietà**. Le proprietà specificano quale aspetto degli elementi HTML verrà modificato. Ad esempio:
   p {
   color: blue;
   font-size: 16px;
   }
   Le proprietà color e font-size definiscono rispettivamente il colore del testo e la dimensione del carattere per tutti i paragrafi.
3. **Valori**. I valori sono i dati specifici assegnati alle proprietà. Ad esempio, "blue" è un valore per la proprietà color, e "16px" è un valore per la proprietà font-size.

4. **Commenti**: I commenti in CSS sono delimitati da /_ e _/ e vengono utilizzati per aggiungere annotazioni al codice CSS senza influenzare il rendering della pagina web. Ad esempio:
   /_ Questo è un commento CSS _/

5. Unità di misura. CSS supporta diverse unità di misura per specificare dimensioni e posizioni. Alcune delle più comuni includono **px** (pixel), **%** (percentuale), **em** (unità relativa alla dimensione del carattere), **rem** (unità relativa alla dimensione del carattere radice) e **vw/vh** (unità relative alla larghezza e altezza della viewport).

6. **Pseudoclassi e pseudoelementi**. Supporta pseudoclassi e pseudoelementi che consentono di selezionare e stilizzare elementi in base allo stato o alla posizione. Ad esempio:
   a:hover {
   color: red;
   }
   Questo selettore applica lo stile a un link quando il mouse ci passa sopra.

Ci sono molte altre proprietà e funzionalità avanzate che possono essere utilizzate per creare design sofisticati e dinamici per i siti web.

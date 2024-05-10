<!-- @format -->

## CSS

**CSS**, acronimo di Cascading Style Sheets (Fogli di stile a cascata), è un linguaggio di stile utilizzato per definire l'aspetto e la formattazione di un documento HTML o XML. Con CSS, è possibile controllare gli stili di layout, colori, dimensioni, font e altri aspetti visivi di un sito web o di una pagina web.

### principali caratteristiche e funzionalità di CSS:

- **Separazione della struttura e della presentazione**: **CSS** consente di separare la struttura del documento (definita in HTML) dalla sua presentazione visiva. Ciò consente una maggiore flessibilità e facilità di manutenzione del codice.

- **Stili a cascata**: CSS utilizza il concetto di "cascata" per determinare quali stili devono essere applicati agli elementi della pagina. Ciò significa che è possibile definire più regole di stile per gli stessi elementi e che tali regole vengono applicate in base alla specificità e all'ordine di dichiarazione.

- **Selettore di elementi**: CSS offre una varietà di selettori che consentono di selezionare gli elementi HTML e applicare loro stili specifici. Ad esempio, è possibile selezionare elementi per tipo, classe, ID o gerarchia.
- **Proprietà e valori**: CSS fornisce un'ampia gamma di proprietà e valori che possono essere utilizzati per definire stili visivi. Queste proprietà includono impostazioni per il colore, il layout, il testo, i margini, i padding, le dimensioni, le trasformazioni e molto altro ancora.
- **Supporto per la responsività**: CSS supporta la creazione di layout e stili responsivi che si adattano dinamicamente a diverse dimensioni di schermo e dispositivi, consentendo una migliore esperienza utente su dispositivi mobili e desktop.

## Principali Funzionalità CSS

- **Stili di testo**: CSS permette di controllare l'aspetto del testo all'interno di un documento HTML, inclusi carattere, dimensione, colore, spaziatura e stili di decorazione come grassetto, corsivo, sottolineato, barrato, ecc.
- Colori e sfondi: CSS consente di definire i colori dei testi, dei background e di altri elementi, sia utilizzando colori solidi che sfumati, trasparenti o immagini di sfondo.

- **Margini** e padding: CSS permette di controllare lo spazio intorno agli elementi di una pagina web, consentendo di impostare margini e padding per posizionare e allineare gli elementi come desiderato.

- **Layout**: CSS offre una varietà di tecniche per il layout dei contenuti, inclusi layout a griglia, layout flessibili (flexbox) e layout multi-colonna, che consentono di creare design flessibili e reattivi.
- **Box model**: Il modello a box di CSS definisce come gli elementi HTML vengono visualizzati come box rettangolari, con proprietà come larghezza, altezza, margini, padding e bordi che determinano la dimensione e la disposizione degli elementi.
- **Posizionamento**: CSS consente di controllare il posizionamento degli elementi all'interno della pagina, utilizzando proprietà come position, top, left, right e bottom per posizionare gli elementi in modo assoluto, relativo o fisso.
- **Trasformazioni e animazioni**: CSS permette di applicare trasformazioni come rotazioni, scalature, traslazioni e inclinazioni agli elementi HTML, oltre a definire animazioni e transizioni per creare effetti visivi dinamici.
- **Sfumature e ombre**: CSS consente di applicare sfumature di colore e ombre agli elementi, aggiungendo profondità e dimensione al design della pagina.
- **Tipografia**: CSS offre un controllo dettagliato sulla tipografia della pagina, consentendo di impostare famiglie di caratteri, dimensioni del testo, spaziatura tra le linee e altre proprietà tipografiche.
- **Media queries**: CSS supporta le media queries, che consentono di adattare il layout e lo stile di una pagina in base alle caratteristiche del dispositivo, come la larghezza del dispositivo, l'orientamento, la risoluzione dello schermo, ecc.

## Layout Responsive

- **Il layout responsive** in CSS si riferisce alla progettazione e all'implementazione di layout che si adattano e rispondono dinamicamente a diverse dimensioni di schermo e dispositivi, garantendo un'esperienza utente ottimale su qualsiasi dispositivo, come desktop, tablet e smartphone.

- L'obiettivo del layout responsive è creare siti web che si comportino in modo flessibile e si adattino in modo fluido alle dimensioni dello schermo e all'orientamento del dispositivo.
  Per creare un layout responsive, di solito vengono utilizzate le seguenti tecniche:

1.  Media queries: Le media queries sono una funzionalità di CSS che consente di applicare stili diversi in base alle caratteristiche del dispositivo, come la larghezza dello schermo, l'orientamento, la densità dei pixel, ecc. Le media queries vengono utilizzate per adattare il layout e gli stili della pagina in modo appropriato a diverse dimensioni di schermo.

2.  **Unità di misura flessibili**: Le unità di misura flessibili come percentuali (%) e unità relative come ""em" e "rem" consentono di creare layout che si adattano proporzionalmente alla dimensione del contenitore padre anziché a dimensioni fisse. Questo permette ai layout di adattarsi dinamicamente alle dimensioni dello schermo.

3.  **Flexbox**: Flexbox è un modulo CSS che offre un modo flessibile per organizzare gli elementi all'interno di un contenitore, consentendo di creare layout complessi e reattivi con facilità. Flexbox è particolarmente utile per la creazione di layout a una dimensione, come barre di navigazione, colonne e griglie.
4.  **Grid**: CSS Grid Layout è un modulo CSS avanzato che consente di creare layout a più dimensioni, definendo righe e colonne per posizionare e allineare gli elementi nella pagina. CSS Grid offre un controllo preciso sul layout della pagina e può essere utilizzato per creare layout complessi e reattivi.
5.  **Immagini e media flessibili**: Le immagini e altri media possono essere rese responsive utilizzando regole CSS appropriate, come max-width: 100% per impedire il superamento del bordo del contenitore e height: auto per mantenere le proporzioni originali.

## Classi e ID

Classi:

Una classe in CSS è un selettore utilizzato per identificare uno o più elementi HTML e applicare loro uno o più stili CSS.

- Le classi vengono definite utilizzando l'attributo class negli elementi HTML. Più elementi possono condividere la stessa classe.
- Per applicare uno stile a una classe, utilizziamo un selettore CSS preceduto da un punto (.), seguito dal nome della classe. Ad esempio, .mio-classe { ... }.

- Le classi possono essere riutilizzate in più elementi HTML. Ad esempio, class="mio-classe" può essere applicato a più elementi nella stessa pagina HTML.

- ID: Un ID in CSS è simile a una classe, ma deve essere univoco all'interno del documento HTML. Cioè, un ID può essere assegnato a un solo elemento HTML.

- Gli ID vengono definiti utilizzando l'attributo id negli elementi HTML. Un ID può essere utilizzato solo una volta nel documento HTML.

- Per applicare uno stile a un ID, utilizziamo un selettore CSS preceduto da un cancelletto (#), seguito dal nome dell'ID. Ad esempio, #mio-id { ... }.
- Gli ID sono spesso utilizzati per selezionare specifici elementi HTML che devono avere stili univoci o comportamenti specifici.

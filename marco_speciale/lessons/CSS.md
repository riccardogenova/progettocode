# Css desctiption

Css sta per **cascading style sheets** (in italiano fogli di stile a cascata).
Css è possibile dare un aspetto migliore al "lavoro" in svolgimento, mentre HTML serve a creare i testi e inserire le immagini css si occupa dello stile, tuttavia non è considerabile come un linguaggio di programmazione. Per utilizzarlo bisognera dare un id o una classe a un elemento HMLT da li si potranno fare, come detto in precendenza, delle modifiche

# Css commmands

## colore testo

**color : red**

### Cambio colore sfondo

**background-color : black**

## Larghezza elemento

**width : 100%**(ci sono varie grandezze tra cui px ecc)

## Altezza

**height : 100%** (diverse unità di misura)

## Posizione testo

**text-align = center** (ci sono varie posizioni)

## Bordo

**border : 1px solid black** (nel margine è possibile scegliere il tipo di margine, la grandezza, dove metterlo [se sopra o sotto ecc] e la possibilita di dargli un colore)

## Grandezza font

font-size : 10px (varie unita di misura)

## "Sparpagliare"

**float : left** (float permette di spostare nella direzione in cui scegliamo gli elementi)

## Proprietà flex

La proprietà display:flex abilita la modalità di layout flexbox,
consentendo di manipolare l'allineamento, la spazziatura e l'ordine
degli elementi all'interno di un contenitore. È uno strumento utile
per creare progetti e layout complessi che si adattano bene alle
diverse dimensioni dello schermo. con la proprieta display : flex
possono essere accompgnati diverse proprietà :

### Justify-content

allinea gli elementi orizzontalmente e accetta i seguenti valori:

**flex-start** : Allinea gli elementi alla sinistra del contenitore.
**flex-end**: Allinea gli elementi alla destra del contenitore.
**center**: Allinea gli elementi al centro del contenitore.
**space-between**: Separa gli elementi con uguale spazio tra di loro.
**space-around**: Separa gli elementi con uguale spazio attorno ad essi.
Per esempio, justify-content: flex-end; muoverà la rana sulla destra.

### Align-items

Questa proprietà CSS allinea gli elementi verticalmente ed accetta i seguenti valori:

**flex-start**: Allinea gli elementi all'inizio del loro contenitore.
**flex-end**: Allinea gli elementi alla fine del loro contenitore.
**center**: Centra gli elementi verticalmente.
**baseline**: Gli elementi vengono disposti in modo da allineare le loro linee di base.
**stretch**: Gli elementi sono allungati per occupare tutto il contenitore.

### Flex-direction

Questa proprietà definisce la direzione in cui gli elementi verranno posizionati nel contenitore e accetta i seguenti valori:

**row**: Gli elementi sono posizionati nella stessa direzione del testo.
**row-reverse**: Gli elementi sono posizionati nella direzione opposta al testo.
**column**: Gli elementi sono posizionati dall'alto verso il basso.
**column-reverse**: Gli elementi sono posizionati dal basso verso l'alto.

### Order

A volte invertire l'ordine di visualizzazione delle righe o delle colonne non è sufficiente.
In questi casi possiamo applicare la proprietà order sui singoli elementi. Ogni elemento ha assegnato il valore 0 di default,
ma è possibile utilizzare questa proprietà per assegnare un valore intero positivo o negativo.

### Flex-wrap

accetta i seguenti valori:

**nowrap**: Ogni elemento viene sistemato nella stessa riga.
**wrap**: Gli elementi vengono sistemati su più righe se non c'è spazio per tutti su una sola riga.
**wrap-reverse**: Gli elementi vengono disposti su più righe in ordine inverso.

### Flex-flow

Le due proprietà flex-direction e flex-wrap sono usate così di frequente che è stata
creata la proprietà flex-flow, che combina le due proprietà assieme.
Questa proprietà accetta un valore per ognuna delle due proprietà separati da uno spazio.
Per esempio, puoi utilizzare flex-flow: row wrap per impostare righe e wrap.

### Align-content

Puoi utilizzare align-content per decidere come le linee verranno distanziate tra di loro. Questa proprietà accetta i seguenti valori:

**flex-start**: Le linee sono raggruppate all'inizio del contenitore.
**flex-end**: Le linee sono raggruppate alla fine del contenitore.
**center**: Le linee vengono centrate verticalmente nel contenitore.
**space-between\***: Le linee occupano tutto lo spazio del contenitore e sono separate tra di loro dalla stessa quantità di spazio.
**space-around**: Le linee sono separate dalle altre linee, e dall'inizio e dalla fine del contenitore dalla stessa quantità di spazio.
**stretch:** Le linee vengono allungate per occupare tutto lo spazio disponibile.
Questo potrebbe creare confusione, ma align-content determina lo spazio tra le linee mentre align-items determina
come gli elementi nell'insieme vengono disposti nel contenitore. Se c'è una sola linea, align-content non ha alcun effetto.

<!-- @format -->

## CSSOM

Il CSS Object Model (CSSOM) è un concetto fondamentale nel rendering delle pagine web. Si tratta di una mappa che rappresenta tutti i selettori CSS e le loro proprietà. Il suo ruolo è cruciale nel determinare l'aspetto e il layout di una pagina web.
È possibile memorizzare nella cache i file CSS effettivi per caricare le risorse più rapidamente, ma il rendering di una pagina nel browser richiede sempre l'esecuzione del parser CSSOM .

## Come funziona?

Il _processo di funzionamento_ del CSSOM inizia con il download dell'HTML della pagina, seguito dall'analisi dei fogli di stile CSS esterni. Questi stili vengono mappati in una struttura ad albero che definisce come gli stili vengono applicati agli elementi del DOM. Il coaricamento completo del CSSOM è essenziale per la corretta visualizzazione della pagina, poiché definisce l'aspetto di ogni elemento.

## Rendering e Browser

Il parser CSSOM è responsabile di tradurre le regole CSS in istruioni comprensibili per il browser, che verranno poi applicate agli elementi HTML della pagina.
Queste regole definiscono come gli elementi HTML devono essere visualizzati, compresi attributi come colore, dimensione del testo, posizione, bordi, sfondi, ecc..
Una volta interpretate le regole CSS, il parser crea la struttura ad albero che rappresenza le relative proprietà CSS applicate, attraverso la quale il Browser applica gli stili CSS.

Poiché ogni _browser_ ha la propria implementazione del CSSOM, potrebbero esserci differenze nel modo in cui vengono interpretate e applicate le regole CSS.
Bisogna quindi sempre testare il codice su una varietà di browser per assicurarsi che la pagina web si comporti correttamente su tutte le piattaforme

## Regole CSS

Nel CSSOM, le regole CSS vengono applicate agli elementi HTML in base alla loro specificità. Quindi se ci sono più regole CSS che si applicano allo stesso elemento, il browser determinerà quale regola è prioritaria in base alla specificità delle selezioni CSS.

Il CSSOM gestisce anche il concetto di _cascata_ (cascading) e di _ereditarietà_ (inheritance) delle proprietà CSS.

- La **cascata** si riferisce all'ordine di priorità delle regole CSS quando più regole si applicano allo stesso elemento. Le regole CSS possono provenire da diverse fonti, come fogli di stile esterni, stili incorporati all'interno del tag `<style>`, e stili definiti direttamente negli attributi HTML
  Quando più regole si applicano allo stesso elemento e confliggono tra loro, il browser applicherà la regola con la maggiore specificità o l'importanza più alta.
- L'**ereditarietà** si riferisce alla capacità delle proprietà CSS di essere trasmesse da un elemento _genitore_ ai suoi elementi figlio.
  Alcune proprietà CSS sono ereditate automaticamente dagli elementi figlio dai loro genitori, a meno che non vengano esplicitamente sovrascritte.
  Le proprietà come il colore del testo, la dimensione del carattere e lo spazio tra le righe sono comunemente ereditate dagli elementi figlio dai loro genitori.
  L'ereditarietà è utile perché consente di definire stili di base su elementi genitore che si applicano automaticamente agli elementi figlio, riducendo così la necessità di ripetere le stesse regole su più elementi

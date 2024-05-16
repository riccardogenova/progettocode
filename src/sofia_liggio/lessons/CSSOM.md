<!-- @format -->

# CSSOM: CSS Object Model

È una rappresentazione ad albero degli stili CSS di un documento web.
È simile al DOM ma si concentra esclusivamente sugli stili CSS applicati a quel documento.

Il CSSOM è creato dal browser quando analizza e interpreta i file CSS collegati a una pagina web. Questo modello consente al browser di applicare gli stili CSS agli elementi HTML durante il rendering della pagina.

È utilizzato principalmente per:

- **Calcolare gli stili applicati**: Contiene tutte le regole CSS definite nei file CSS collegati a una pagina web. Quando il browser analizza il DOM e il CSSOM, calcola gli stili effettivi che devono essere applicati a ciascun elemento HTML.

- **Manipolare gli stili dinamicamente**: JavaScript può essere utilizzato per manipolare il CSSOM, consentendo di aggiungere, rimuovere o modificare dinamicamente le regole CSS applicate agli elementi HTML. Ciò consente di creare effetti dinamici, animazioni e interazioni utente basate sugli eventi.

- **Ottimizzazione delle prestazioni**: Il carico e il parsing dei file CSS possono avere un impatto significativo sul tempo di caricamento della pagina. Gli sviluppatori possono cercare di ridurre la complessità del CSSOM per migliorare le prestazioni complessive del sito.

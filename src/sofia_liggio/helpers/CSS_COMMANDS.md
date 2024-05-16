<!-- @format -->

# Comandi CSS

CSS non ha "comandi" nel senso tradizionale, ma piuttosto regole e proprietà che vengono utilizzate per definire lo stile di un documento HTML.

## Alcune regole CSS comuni

1. **Selettori**. Identificano gli elementi HTML ai quali si applicano le regole CSS:
   `p {
color: blue;
}`

2. **Proprietà**. Specificano quale aspetto degli elementi HTML verrà modificato:
   `p {
color: blue;
font-size: 16px;
}`

3. **Valori**. Sono i dati specifici assegnati alle proprietà: `"blue" è un valore per la proprietà color, e "16px" è un valore per la proprietà font-size`.

4. **Commenti**: Sono delimitati da `/_` e `_/` e vengono utilizzati per aggiungere annotazioni al codice CSS senza influenzare il rendering della pagina web: /_ Questo è un commento CSS _/

5. **Unità di misura**: Per specificare dimensioni e posizioni. Alcune delle più comuni includono `px (pixel)`, `% (percentuale)`, `em (dimensione del carattere)`, `rem (dimensione del carattere radice)` e `vw/vh (larghezza e altezza della viewport)`.

6. **Pseudoclassi e pseudoelementi**. Consentono di selezionare e stilizzare elementi in base allo stato o alla posizione:
   `a:hover {
color: red;
}`

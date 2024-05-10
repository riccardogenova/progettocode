<!-- @format -->

# CSSOM

## CSS Object Model

` come una mappa che descrive come il tuo browser interpreta e applica tutti i tuoi stili CSS.`

- **Parsing del CSS:**
  Il browser legge il tuo file CSS e analizza tutte le regole e le dichiarazioni CSS presenti.
- **Creazione del CSSOM:**
  Il browser organizza tutte queste regole CSS in una struttura ad albero, chiamata CSSOM. Ogni elemento nell'albero rappresenta una regola CSS e contiene tutte le informazioni su di essa, come il selettore e le proprietà.
- **Collegamento al DOM:**
  è collegato al DOM (Document Object Model) della tua pagina web. Questo collegamento permette al browser di applicare i corretti stili CSS agli elementi corrispondenti nella pagina HTML.
- **Rendering della pagina:** Una volta che il browser ha il CSSOM e il DOM, può procedere a combinare queste due rappresentazioni per visualizzare la pagina web nel modo desiderato, rispettando tutti i tuoi stili CSS.

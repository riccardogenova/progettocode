<!-- @format -->

# CSS Cascading Style Sheets

È fondamentalmente, un linguaggio che viene utilizzato per definire l'aspetto e la presentazione delle pagine web.

Immagina l'HTML come lo scheletro di una pagina web, che definisce i contenuti e la loro struttura.
Il CSS invece è come la pelle e i vestiti di questo scheletro: si occupa di renderlo bello e personalizzato stabilendo cose come i font, i colori, il layout e tanto altro.

## Alcuni dei vantaggi dell'utilizzo del CSS:

### Separazione dei contenuti dalla presentazione:

- Questo permette di modificare l'aspetto di un sito web senza dover cambiare il suo contenuto, rendendo il codice più pulito e facile da mantenere.

- Riuso del codice: Le stesse regole CSS possono essere applicate a più elementi di una pagina web o a pagine web diverse, evitando così di ripetere lo stesso codice più volte.

- Maggiore controllo sull'aspetto del sito web: Con il CSS si ha un alto grado di personalizzazione su come appare un sito web, permettendo di creare esperienze utente più accattivanti.

## classi e id

L'HTML definisce la struttura e il contenuto di una pagina web, mentre il CSS viene utilizzato per applicare stili e "agganciare" quegli elementi.

Tuttavia, esistono dei modi per identificare e puntare a tag specifici utilizzando degli attributi all'interno dell'HTML che poi il CSS può sfruttare per lo styling. Ecco i due metodi più comuni:

- id: L'attributo id assegna un identificatore univoco a un elemento HTML. Questo ID può poi essere usato nel CSS per puntare a quell'elemento specifico e applicare degli stili. Un elemento può avere un solo id.

```
<h1 id="titolo-principale">Questo è il titolo principale</h1>

<style>
 #titolo-principale {
   color: blue;
   font-size: 2em;
 }
</style>
```

- class: L'attributo class permette di assegnare una o più classi a un elemento HTML. Le classi possono essere utilizzate per puntare a più elementi che condividono la stessa classe. A differenza dell' id, un elemento può avere più classi.

```
<p class="importante">Questo è un testo importante</p>
<p class="importante">Anche questo è un testo importante</p>

<style>
  .importante {
    font-weight: bold;
  }
</style>
```

# Javascript

JavaScript è un linguaggio di programmazione multi paradigma orientato agli eventi, utilizzato sia nella programmazione lato client web che lato server (Node.js), siti web e applicazioni web, di effetti dinamici 
interattivi tramite funzioni di script invocate da eventi innescati a loro volta in vari modi dall'utente sulla pagina web in uso (mouse, tastiera, caricamento della pagina ecc...).

## Elementi

### Funzioni

Una funzione è un blocco di istruzioni, dotato di una lista di argomenti (eventualmente vuota) e che può avere un nome (anche se non è necessario). Una funzione può restituire un valore tramite l'istruzione return.

Ogni funzione è un'istanza di Function, un tipo di oggetto base. Le funzioni possono essere create e assegnate come ogni altro oggetto:

```
   var myFunc1 = new Function("alert('Hello')");
   var myFunc2 = myFunc1;
   myFunc2();
```
## Eventi

Esistono varie categorie di eventi:

- Eventi attivabili dai tasti del mouse
- Eventi attivabili dai movimenti del mouseì
- Eventi attivabili dall'utente con la tastiera
- Eventi attivabili dalle modifiche dell'utente

### Eventi attivabili dai tasti del mouse

- onClick: attivato quando si clicca su un oggetto;
- onDblClick: attivato con un doppio click;

## Implementazione

Il tag HTML <script> viene utilizzato per definire uno script lato client (JavaScript).
L'elemento contiene istruzioni script oppure punta a un file di script esterno tramite l'attributo 'src'.

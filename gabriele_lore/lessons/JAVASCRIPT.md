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

```
<script>
document.getElementById("demo").innerHTML = "Hello JavaScript!";
</script>
```

Il tag HTML <noscript> definisce un contenuto alternativo da mostrare agli utenti che hanno disabilitato gli script nel browser o che non supportano gli script:

```
<noscript>Sorry, your browser does not support JavaScript!</noscript>
```

## Variabili

Esistono tre tipi di variabili:
- const per le constanti
- var e let

## Operatori logici

### OR

Vero se almeno una delle due conidioni è vera

```
||
```
### AND

Vero se le due condizioni sono vere

```
&&
```
### Negato

Nega il risultato di una cosa

```
!
```

## Operatori di confronto

- ==: confronta contenuto
- !=: diverso da
- ===: confronta contenuto e tipo
- !==: diverso da contenuto e tipo

## Condizioni di esistenza

!variabile è falsa.
!!variabile è falsa se il contenuto è vuoto.
!!0 è false e !!>=1 di vero.

## Variabili costanti
- NaN
- Infinity

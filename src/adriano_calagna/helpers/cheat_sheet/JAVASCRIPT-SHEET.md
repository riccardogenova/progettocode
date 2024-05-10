<!-- @format -->

# Oggetto document

- document.activeElement restituisce l'elemento attualmente attivo nel DOM, ovvero l'elemento che ha attualmente il focus. Quando un utente interagisce con una pagina web tramite la tastiera o il mouse, un elemento del DOM può ricevere il focus, il che significa che è attualmente l'elemento che risponderà agli eventi di input.
- Ad esempio, se un utente ha fatto clic su un campo di input di testo, l'elemento <&lt;input&gt;> sarà l'elemento attivo e document.activeElement restituirà quel nodo <&lt;input&gt;>. Se non c'è nessun elemento attivo (ad esempio, se la pagina non ha ancora ricevuto alcun input dall'utente), document.activeElement restituirà l'elemento <&lt;body&gt;>.
- **Le "Adopted Style Sheets"** sono un'interfaccia del Document Object Model (DOM) in JavaScript
- questo meccanismo consente di applicare gli stili di un documento o di una parte di esso a un altro documento. Questo è particolarmente utile quando si lavora con Shadow DOM, dove le regole CSS definite in un componente Shadow possono non essere visibili all'esterno di esso. Le "Adopted Style Sheets" consentono di propagare queste regole CSS al documento principale in modo che possano essere applicate correttamente.
- Il metodo adoptNode è un'operazione del DOM in JavaScript che permette di "adottare" un nodo da un documento a un altro. Questo è utile quando si desidera spostare un nodo da un contesto DOM a un altro, ad esempio da un documento HTML a un documento XML, o viceversa.
- Gli anchor, o "ancore", sono i punti di destinazione nel documento HTML a cui è possibile navigare tramite link. Tali ancoraggi vengono definiti utilizzando l'elemento <&lt;a&gt;> con l'attributo href che punta all'identificatore unico di un elemento nel documento.

- Per accedere agli anchor presenti in un documento tramite JavaScript, puoi utilizzare il metodo **document.anchors.** Questo metodo restituisce una raccolta (HTMLCollection) di tutti gli elementi <&lt;a&gt;> con un attributo name definito. Gli elementi <&lt;a&gt;> con name definito possono essere utilizzati come ancoraggi.
- document.append: Il metodo append() è un metodo dei nodi DOM in JavaScript che consente di aggiungere uno o più nodi o stringhe di testo alla fine di un elemento. Può essere utilizzato per aggiungere nuovi nodi, come elementi HTML o testo, come figli di un elemento esistente nel DOM.
- document.appendchild: Il metodo appendChild() è un metodo del DOM in JavaScript che consente di aggiungere un nodo come figlio di un altro nodo. In particolare, viene utilizzato per aggiungere un nodo come figlio dell'elemento selezionato.
- document.applets <span style="color: red;">(DEPRECATED)</span> Il membro applets dell'oggetto document è stato utilizzato nelle versioni precedenti di JavaScript per accedere alla collezione degli elementi <&lt;applet&gt;> presenti nel documento HTML. Tuttavia, gli elementi <&lt;applet&gt;> sono deprecati in HTML5 e non sono più supportati nei browser moderni.
- document.captureEvents <span style="color: red;">(DEPRECATED)</span> Questa proprietà era utilizzata per abilitare la cattura di eventi specifici direttamente dal documento.
- La proprietà document.caretRangeFromPoint è una funzione non standard che era supportata solo in alcuni vecchi browser e non è parte dello standard DOM.

Questa funzione veniva utilizzata per ottenere un oggetto Range rappresentante la selezione del testo all'interno di un documento in base alle coordinate del punto specificato.

- La proprietà document.characterSet restituisce il set di caratteri utilizzato dalla pagina corrente, ovvero l'encoding dei caratteri del documento HTML corrente.

- Ad esempio, se il documento HTML è stato inviato con l'encoding UTF-8, document.characterSet restituirà "UTF-8". Se è stato inviato con un encoding diverso come ISO-8859-1, restituirebbe "ISO-8859-1". document.characterSet è una proprietà deprecata e il suo utilizzo è stato sostituito dalla proprietà document.charset. Quindi, preferibilmente, è consigliabile utilizzare document.charset anziché document.characterSet.
- La proprietà childElementCount restituisce il numero di elementi figlio di un elemento padre specifico. Ad esempio, se hai un elemento <div> con diversi elementi figlio al suo interno, divElement.childElementCount restituirà il numero di questi elementi figlio.
- La funzione document.clear() è stata utilizzata in passato per cancellare il contenuto di un documento HTML. Tuttavia, questa funzione è stata deprecata e non è più supportata nei browser moderni.
- Il metodo cloneNode() è un metodo dell'interfaccia Node nel DOM (Document Object Model) in JavaScript, che consente di creare una copia esatta di un nodo esistente. Questo metodo crea una copia "shallow" del nodo, che include solo il nodo stesso e i suoi attributi, ma non i suoi nodi figlio.
- La costante COMMENT_NODE è una delle numerose costanti definite nell'oggetto Node dell'interfaccia DOM (Document Object Model) in JavaScript. Rappresenta il tipo di nodo commento nel DOM.

Un nodo commento è un nodo che contiene un commento HTML o XML all'interno del documento. Questi commenti sono delimitati da <!-- e --> in HTML.

## Metodi Javascript

- **addEventListener** è un metodo in JavaScript che consente di ascoltare eventi su un elemento HTML e di eseguire una funzione quando l'evento si verifica. Questo metodo è utilizzato per aggiungere un "gestore di eventi" a un elemento DOM (Document Object Model).
  Sintassi:
  element.addEventListener(event, function,)
- **element**: è l'elemento HTML su cui si desidera ascoltare l'evento.
- **event**: è il tipo di evento che si desidera ascoltare, ad esempio "click", "mouseover", "keydown", ecc.
- **function**: è la funzione che verrà eseguita quando l'evento si verifica.
  es:
  assegno una variabile
  var button = document.getElementById("myButton");
  button.addEventListener("click", function() {
  alert("Hai cliccato sul pulsante!");
  dove button è attribuito dal nome della mia variabile es:(button) addevent listener è appunto il metodo,click mouseover è il tipo di evento messo tra gli apici; la funzione è ad es: un alert come sopra.
  eventi su .addeventlistener:

1. Mouse Events:

- click: Viene attivato quando viene fatto clic sull'elemento.
- dblclick: Viene attivato quando viene fatto doppio clic sull'elemento.
- mouseover: Viene attivato quando il puntatore del mouse entra nell'area dell'elemento
- mouseout: Viene attivato quando il puntatore del mouse esce dall'area dell'elemento.
- mousemove: Viene attivato quando il puntatore del mouse si sposta sull'elemento.

2. Keyboard Events:

- keydown: Viene attivato quando una tastiera viene premuta mentre il focus è sull'elemento.
- keyup: Viene attivato quando un pulsante della tastiera viene rilasciato mentre il focus è sull'elemento.
- keypress: Viene attivato quando un pulsante della tastiera viene premuto mentre il focus è sull'elemento e la tastiera produce un carattere visualizzabile.

3. Form Events:

- submit: Viene attivato quando il modulo viene inviato.
- reset: Viene attivato quando il modulo viene resettato.
- change: Viene attivato quando il valore di un elemento di input, di selezione o di testo

4. Window Events:

- load: Viene attivato quando il caricamento della pagina è completato.
- resize: Viene attivato quando la finestra del browser viene ridimensionata.
- scroll: Viene attivato quando si fa lo scrolling della pagina
- Rimozione dell'ascoltatore:
  È possibile rimuovere un ascoltatore specifico usando il metodo removeEventListener.

- **document.getElementById**
  è un metodo in JavaScript che viene utilizzato per selezionare un elemento HTML dal DOM (Document Object Model) utilizzando l'ID dell'elemento. es: nel caso di un div class .bottone nel caso di un id#bottone.
  Sintassi di base:
  var element = document.getElementById(id);
  Id è È il valore dell'attributo "id" dell'elemento HTML che si desidera selezionare.
  **.getElementById Non ha eventi specifici**

  - **document.querySelector()**: Seleziona il primo elemento che corrisponde a un selettore CSS specificato.
  - **document.querySelectorAll(): Seleziona tutti gli elementi che corrispondono a un selettore CSS specificato.**

# _Operatori di confronto_

- Gli operatori di confronto sono simboli utilizzati in programmazione per confrontare due valori e determinare se sono uguali, diversi, maggiori, minori o uguali tra loro.

- ## operatori di cofronto più comuni:

1. == (uguale a): Verifica se due valori sono uguali.
2. != (diverso da): Verifica se due valori non sono uguali.
3. _>_ (maggiore di): Verifica se il primo valore è maggiore del secondo.
4. _<_ (minore di): Verifica se il primo valore è minore del secondo.
5. _>=_ (maggiore o uguale a): Verifica se il primo valore è maggiore o uguale al secondo.
6. _<=_ (minore o uguale a): Verifica se il primo valore è minore o uguale al secondo.

- Questi operatori sono utilizzati principalmente nelle istruzioni condizionali (come gli if statement) e nelle espressioni booleane per determinare il flusso del programma in base alle condizioni specificate.

### Istruzioni condizionali

1. _if:_ Esegue un blocco di codice se una condizione è vera.
2. _if-else:_ Esegue un blocco di codice se una condizione è vera e un altro blocco di codice se la condizione è falsa.
3. _if-elif-else:_ Consente di specificare più condizioni alternative da verificare in sequenza. Se una condizione è vera, viene eseguito il relativo blocco di codice, altrimenti viene verificata la successiva condizione.
4. A differenza della struttura while, che verifica la condizione prima di eseguire il blocco di codice, la struttura do-while esegue il blocco di codice almeno una volta, quindi verifica la condizione e continua a eseguire il blocco finché la condizione risulta vera.

- La struttura generale di un ciclo do-while è la seguente:
  do {
  // blocco di codice da eseguire
  } while (condizione);

## Array

- Gli array sono strutture dati utilizzate in programmazione per memorizzare una collezione ordinata di elementi dello stesso tipo. Gli elementi all'interno di un array sono accessibili mediante un indice numerico, che rappresenta la posizione dell'elemento all'interno dell'array.
- Array unidimensionali: È l'array più comune, che consiste in una singola sequenza di elementi. Ogni elemento ha un indice numerico e può essere accessibile tramite questo indice. Esempio in JavaScript: [1, 2, 3, 4, 5].
- Array bidimensionali (matrici): Sono array che contengono altri array al loro interno, formando una struttura di tipo tabella o griglia. Possono essere pensati come una matrice di elementi, dove ogni elemento è identificato da due indici. Esempio in JavaScript:
- Array multidimensionali: Sono array che contengono array all'interno di altri array, creando una struttura di dati a più livelli. Possono essere usati per rappresentare dati complessi con molte dimensioni.
- Array sparsi: Sono array in cui la maggior parte degli elementi non ha un valore definito. Sono efficienti quando si lavora con grandi insiemi di dati in cui la maggior parte degli elementi è vuota o non definita. In JavaScript, possono essere implementati utilizzando oggetti, dove le chiavi rappresentano gli indici.
- Array dinamici: Sono array che possono cambiare dimensione dinamicamente durante l'esecuzione del programma. In linguaggi come JavaScript, questo è il comportamento predefinito degli array, in cui possono essere aggiunti o rimossi elementi senza dover dichiarare esplicitamente una dimensione fissa.

- Array immutabili:
  Gli array immutabili sono strutture dati simili agli array standard, ma con la caratteristica che non possono essere modificati dopo la loro creazione. In altre parole, una volta che un array immutabile è stato creato con un certo insieme di elementi, non è possibile aggiungere, rimuovere o modificare gli elementi all'interno di esso.

## Operatori logici

Il termine "or" è una parola chiave utilizzata in linguaggi di programmazione e in logica booleana per indicare un'operazione logica di disgiunzione inclusiva. In sostanza, l'operatore logico "or" restituisce true se almeno una delle condizioni che collega è vera, altrimenti restituisce false.l'operatore "or" è rappresentato con il simbolo ||.
Lo spread operator è un concetto utilizzato in alcuni linguaggi di programmazione, come JavaScript e Python, per eseguire operazioni di espansione su iterabili come array, oggetti o stringhe. Questo operatore consente di espandere gli elementi di un iterabile in un nuovo contesto, come ad esempio in una lista, in una chiamata di funzione o in una copia di oggetto.

- Spread operator
  In JavaScript, lo spread operator è rappresentato da tre punti (...). Ecco alcuni esempi di come può essere utilizzato:

## Tipi di Dato

JavaScript è un linguaggio di programmazione dinamico che supporta diversi tipi di dati. Ecco una panoramica dei principali tipi di dati in JavaScript:

- Number: Rappresenta sia interi che numeri in virgola mobile. Ad esempio: let numero = 10; o let piGreco = 3.14159;.
- String: Rappresenta una sequenza di caratteri. Ad esempio: let nome = "Alice";.
- Boolean: Rappresenta un valore vero o falso. Ad esempio: let vero = true; o let falso = false;.
- Array: Rappresenta una collezione ordinata di elementi. Ad esempio: let numeri = [1, 2, 3, 4, 5];.
- Object: Rappresenta un'entità complessa che può contenere molte proprietà. Ad esempio:
  let persona = {
  nome: "Marco",
  eta: 30,
  professione: "Sviluppatore"
  };
- Undefined: Rappresenta un valore non definito o una variabile non inizializzata. Ad esempio: let variabileNonInizializzata;.
- Null: Rappresenta l'assenza di valore. È spesso utilizzato per indicare che una variabile è intenzionalmente vuota o non valida. Ad esempio: let valoreNullo = null;.
- Symbol: Rappresenta un identificatore univoco, introdotto in ECMAScript 6. Ad esempio: let chiave = Symbol("chiave");.

# Array.map

- Il metodo map() è un metodo degli array in JavaScript che permette di creare un nuovo array con i risultati di una funzione chiamata su ogni elemento dell'array originale. Questo metodo non modifica l'array originale, ma restituisce un nuovo array.
- Il baseURI è una proprietà dell'oggetto Node, che è la classe base per tutti i nodi nel DOM, inclusi document, elementi, attributi e altri tipi di nodi. Questa proprietà restituisce l'URI assoluto della risorsa, ovvero l'URL da cui è stato recuperato il documento corrente.
-

# Propagazione degli eventi in js

La propagazione degli eventi in JavaScript si riferisce al modo in cui gli eventi vengono gestiti e propagati attraverso gli elementi DOM all'interno della struttura ad albero del documento.

- Fase di cattura (capture phase): In questa fase, l'evento viene catturato dagli elementi padre prima di raggiungere l'elemento di destinazione dell'evento. L'evento viene quindi propagato verso il basso lungo l'albero DOM fino all'elemento di destinazione.
- Fase di bubbling (bubbling phase): Dopo che l'evento ha raggiunto l'elemento di destinazione, viene propagato all'indietro lungo l'albero DOM, partendo dall'elemento di destinazione fino all'elemento padre più esterno.
- Per impostazione predefinita, gli eventi in JavaScript si propagano nella fase di bubbling. Tuttavia, è possibile catturare gli eventi nella fase di cattura specificando true come terzo argomento nella chiamata a addEventListener.
  es:

1.  element.addEventListener('click', myFunction, true);

- In questo caso, l'evento verrà gestito nella fase di cattura anziché nella fase di bubbling.
  Per fermare la propagazione degli eventi (sia nella fase di cattura che di bubbling), è possibile utilizzare il metodo stopPropagation() sull'oggetto evento. Questo impedisce all'evento di essere propagato ulteriormente lungo l'albero DOM.

  # Prendere degli elementi in js

  1.  getElementById: Puoi selezionare un elemento utilizzando il suo ID univoco.
  2.  getElementsByClassName: Puoi selezionare gli elementi utilizzando una classe comune. Questo restituirà una collezione di elementi con quella classe. Puoi accedere a un elemento specifico tramite l'indice.
  3.  getElementsByTagName: Puoi selezionare gli elementi utilizzando il loro tipo (tag). Questo restituirà una collezione di tutti gli elementi con quel tag.
  4.  querySelector: Puoi selezionare un elemento utilizzando un selettore CSS. Restituirà solo il primo elemento corrispondente.
  5.  querySelectorAll: Puoi selezionare tutti gli elementi che corrispondono a un selettore CSS. Questo restituirà una NodeList di elementi.
  6.  Accesso diretto tramite gerarchia DOM: Se conosci la struttura DOM, puoi navigare attraverso gli elementi utilizzando proprietà come parentNode, children, firstChild, lastChild, nextSibling, previousSibling, ecc.

  # Get attribute

  **Il metodo getAttribute in JavaScript viene utilizzato per ottenere il valore di un attributo specifico di un elemento del DOM.**

   <!-- Ad esempio, se hai un elemento HTML come questo: -->

  es:

- < div id="myElement" data-color="blue"></ div>
  Puoi ottenere il valore dell'attributo data-color utilizzando getAttribute:getAttribute restituirà sempre una stringa, anche se l'attributo in questione è un numero o un booleano.

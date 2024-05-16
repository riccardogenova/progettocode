<!-- @format -->

In JavaScript, ci sono diversi tipi di dati fondamentali che vengono utilizzati per rappresentare varie informazioni:

- **Stringhe (Strings):** Sequenze di caratteri, definite tra virgolette singole o doppie
  _let nome = "Mario";_

- **Numeri (Numbers):** Possono essere numeri interi o decimali
  _let eta = 25;_
  _let altezza = 1.75;_

- **Booleani (Booleans):** Possono essere solo due valori: true o false
  _let isSoleggiato = true;_

- **Array:** Una struttura dati che contiene una sequenza di elementi. Gli elementi possono essere di qualsiasi tipo, inclusi altri array
  _let numeri = [1, 2, 3, 4, 5];_

- **Oggetti (Objects):** Collezioni di coppie chiave-valore
  _let persona = {
  nome: "Luca",
  eta: 30,
  lavoro: "Programmatore"
  };_

- **Null:** Rappresenta l'assenza intenzionale di qualsiasi valore o oggetto.La variabile esiste ma non contiene alcun valore definito
  _let variabileNull = null;_

- **Undefined:** Indica che una variabile è stata dichiarata ma non le è stato assegnato un valore, quindi è vuota
  _let variabileNonInizializzata;_

- **Symbol:** Introdotto in ECMAScript 6, rappresenta un identificatore univoco che non può essere modificato
- **Undefined:** Indica che una variabile è stata dichiarata ma non inizializzata
  _let variabileNonInizializzata;_

- **Symbol:** Introdotto in ECMAScript 6, rappresenta un identificatore univoco
  _const chiave = Symbol('descrizione');_ <br/>

# If...else

Si utilizza per eseguire un blocco di codice se una condizione è vera e un altro blocco di codice se la condizione è falsa.
È possibile anche utilizzare l'istruzione if senza else se si vuole controllare solo una condizione senza alcun ramo alternativo. <br/>

# Switch... case

Si utilizza per eseguire diverse azioni basate su condizioni multiple. È spesso una soluzione più pulita rispetto a una serie di istruzioni _if...else_ annidate quando si devono eseguire molte verifiche sulla stessa variabile. <br/>

# Do... while

Questo tipo di costrutto può essere utile quando si vuole assicurare che un blocco di codice venga eseguito almeno una volta, indipendentemente dalla condizione di partenza.

# Array

Un array in programmazione è una struttura dati che contiene una sequenza ordinata di elementi. Gli array sono utilizzati per memorizzare più valori in una singola variabile, consentendo un accesso facile e efficiente a ciascun elemento tramite un indice.

Alcuni concetti chiave relativi agli array:

- **Indice:** Gli elementi all'interno di un array sono accessibili tramite un numero intero chiamato indice. Gli indici degli array solitamente iniziano da zero, quindi il primo elemento ha indice 0, il secondo ha indice 1 e così via.
- **Dimensione:** La dimensione di un array è il numero di elementi contenuti al suo interno. In molti linguaggi di programmazione, la dimensione di un array può essere fissa o dinamica, ma in JavaScript gli array sono dinamici, il che significa che possono crescere o ridursi dinamicamente aggiungendo o rimuovendo elementi.
- **Tipo degli elementi:** Gli array possono contenere elementi di qualsiasi tipo di dato, inclusi numeri, stringhe, oggetti, altri array, booleani e così via. In alcuni linguaggi di programmazione, gli array possono contenere solo elementi dello stesso tipo, ma in linguaggi come JavaScript, gli array possono contenere una miscela di tipi di dati.
- **Operazioni sugli array:** Gli array supportano varie operazioni comuni, come aggiungere o rimuovere elementi, accedere agli elementi in base all'indice, iterare su tutti gli elementi, ordinare gli elementi e molto altro ancora.

# Metodi array immutabili

Gli array supportano molti metodi che possono essere utilizzati per eseguire operazioni su di essi. Alcuni di questi metodi sono considerati "immutabili", il che significa che non modificano direttamente l'array originale, ma restituiscono un nuovo array o un nuovo valore basato sulle operazioni eseguite. Questo è utile quando si desidera mantenere l'integrità dell'array originale.

Alcuni esempi di metodi array immutabili:

- **map():** Restituisce un nuovo array applicando una funzione a ciascun elemento dell'array originale
- **filter():** Restituisce un nuovo array contenente solo gli elementi che soddisfano una determinata condizione
- **concat():** Concatena uno o più array a un array esistente, restituendo un nuovo array
- **slice():** Restituisce una parte di un array, senza modificarlo
- **reduce():** Applica una funzione riduttiva a ciascun elemento dell'array, restituendo un singolo valore risultante

# Proprietà e metodi

JavaScript fornisce una serie di proprietà e metodi integrati per lavorare con gli array. Alcuni di questi includono:

- **length:** Proprietà che restituisce il numero di elementi in un array
- **push():** Metodo che aggiunge uno o più elementi alla fine di un array
- **pop():** Metodo che rimuove e restituisce l'ultimo elemento di un array
- **shift():** Metodo che rimuove e restituisce il primo elemento di un array
- **unshift():** Metodo che aggiunge uno o più elementi all'inizio di un array
- **splice():** Metodo che consente di aggiungere, rimuovere o sostituire elementi in un array

## Ritorno di una funzione

Quando diciamo che una funzione "ritorna qualcosa", intendiamo che la funzione produce un valore che può essere utilizzato in seguito nel programma. Questo valore può essere di qualsiasi tipo: numerico, stringa, array, oggetto o persino un'altra funzione.

# Eventi

Gli eventi in JavaScript sono azioni che si verificano durante l'interazione dell'utente con una pagina web o con altri elementi interattivi, come i componenti di un'applicazione web. Questi eventi possono essere causati da azioni come clic del mouse, movimenti del mouse, pressione dei tasti della tastiera, caricamento della pagina, cambiamenti nei campi di input e altro ancora.

Quando un evento si verifica, JavaScript può essere utilizzato per catturare, gestire e rispondere ad esso. Il meccanismo principale per catturare e gestire gli eventi in JavaScript è l'utilizzo di listener degli eventi.

Esempi di eventi comuni includono:

- **Click del mouse:** Si verifica quando l'utente clicca su un elemento della pagina
- **Mouseover e Mouseout:** Si verificano quando l'utente sposta il cursore sopra o fuori da un elemento
- **Keydown, Keyup e Keypress:** Si verificano quando l'utente preme o rilascia un tasto della tastiera
- **Caricamento della pagina:** Si verifica quando la pagina web è completamente caricata nel browser
- **Submit di un modulo:** Si verifica quando un utente invia un modulo
- **Focus e Blur:** Si verificano quando un elemento ottiene o perde il focus
- **Cambio di valore di un campo di input:** Si verifica quando l'utente modifica il valore di un campo di input

## Gestione degli eventi con JavaScript

Per gestire gli eventi in JavaScript, è possibile utilizzare i cosiddetti _event listeners_ o "gestori di eventi". Questi sono metodi che permettono di ascoltare gli eventi su un elemento specifico del DOM e di eseguire una funzione quando l'evento si verifica. Un esempio di come si utilizza un event listener per gestire un click del mouse su un pulsante:

// Seleziona l'elemento del pulsante dal DOM
const myButton = document.getElementById('myButton');

// Aggiungi un event listener per il click del mouse
myButton.addEventListener('click', function() {
// Questa funzione verrà eseguita quando il pulsante viene cliccato
console.log('Il pulsante è stato cliccato!');
});

In questo esempio, addEventListener è un metodo che permette di ascoltare gli eventi su un elemento specifico del DOM. Quando il pulsante viene cliccato, la funzione fornita come secondo argomento verrà eseguita. In questo caso, la funzione stampa un messaggio di log sulla console del browser.

# SCOP LOCALE VS SCOP GLOGABLE

Lo "scopo locale" si riferisce agli obiettivi, alle azioni o alle finalità di un'entità specifica, come un'azienda, un'organizzazione o un individuo, limitati a un contesto specifico, come un progetto, un dipartimento o una comunità locale. È focalizzato sulle attività e sugli obiettivi immediati all'interno di un ambito ristretto.

Lo "scopo globale", d'altra parte, riguarda gli obiettivi, le aspirazioni o le finalità che hanno un impatto su una scala più ampia, che possono coinvolgere una vasta gamma di interessi, comunità o ambiti geografici. Può trattare questioni di portata internazionale, come la sostenibilità ambientale, la pace mondiale, la riduzione della povertà o altri obiettivi che hanno un impatto su scala globale.

# VARIABILI MUTABILI E IMMUTABILI

Le "variabili mutabili" e "immutabili" sono concetti comuni nella programmazione, particolarmente in linguaggi di programmazione che supportano il paradigma di programmazione funzionale o che gestiscono dati in modo più rigoroso.

1. **Variabili mutabili:**
   Queste sono variabili il cui valore può essere modificato dopo essere stato assegnato.
   In molti linguaggi di programmazione orientati agli oggetti, come Python o Java, gli oggetti sono spesso considerati mutabili perché è possibile modificare i loro attributi dopo che sono stati creati.
   Possono comportare rischi in determinati contesti, specialmente in programmi complessi dove il cambiamento di stato può causare effetti collaterali difficili da gestire.

2. **Variabili immutabili:**
   Queste sono variabili il cui valore non può essere modificato una volta che sono stati assegnati.
   Nei linguaggi funzionali come Haskell o in alcuni concetti di programmazione orientata agli oggetti, si preferisce l'uso di strutture dati immutabili per garantire la sicurezza e la prevedibilità del codice.
   Ad esempio, in Python, le tuple sono strutture dati immutabili, mentre le liste sono mutabili. Una volta creata una tupla, non è possibile modificarne i valori.
   Sono spesso preferite in situazioni dove è importante garantire la stabilità e prevedibilità del codice, poiché evitano effetti collaterali indesiderati. Offrono una maggiore flessibilità, ma richiedono una maggiore attenzione per gestire le modifiche di stato in modo appropriato.

# MAP, FILTER E REDUCE

Map, filter e reduce sono tre funzioni molto utili e potenti presenti in molti linguaggi di programmazione, in particolare nei linguaggi orientati alla programmazione funzionale come Python, JavaScript e molti altri. Come funzionano:

**Map:**
Prende una funzione e un iterabile (come una lista) come input e applica la funzione a ciascun elemento dell'iterabile, restituendo un nuovo iterabile con i risultati.
Il metodo map() è un metodo degli array che viene utilizzato per trasformare ogni elemento dell'array in un nuovo elemento, applicando una funzione a ciascun elemento e creando un nuovo array con i risultati delle trasformazioni.

La sintassi di base del metodo map() è la seguente:
const newArray = array.map(callback(currentValue[, index[, array]]))
Dove:

- callback è una funzione che verrà chiamata per ogni elemento dell'array
- currentValue è il valore corrente dell'elemento dell'array che viene elaborato
- index (opzionale) è l'indice corrente dell'elemento nell'array
- array (opzionale) è l'array su cui è stato chiamato il metodo map
  La funzione di callback riceve tre argomenti:

1. currentValue: il valore corrente dell'elemento dell'array
2. index: (opzionale) l'indice corrente dell'elemento nell'array
3. array: (opzionale) l'array su cui è stato chiamato il metodo map
   La funzione di callback deve restituire il nuovo valore per l'elemento, che verrà quindi incluso nel nuovo array risultante.

Ecco un esempio di come utilizzare il metodo map() per raddoppiare ogni elemento di un array:
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map(number => number \* 2);

console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]

In questo esempio, la funzione di callback number => number \* 2 viene chiamata per ogni elemento dell'array numbers. Raddoppia il valore di ogni elemento e restituisce il nuovo valore, che viene incluso nel nuovo array doubledNumbers. Alla fine, doubledNumbers contiene tutti gli elementi di numbers raddoppiati.

**Filter:**
Prende una funzione di predicato e un iterabile come input e restituisce un iterabile contenente solo gli elementi dell'input per i quali il predicato è vero.
Il metodo filter() è un metodo degli array che viene utilizzato per filtrare gli elementi di un array in base a una determinata condizione, restituendo un nuovo array contenente solo gli elementi che soddisfano tale condizione. La sintassi di base del metodo filter() è la seguente:

ES.: const newArray = array.filter(callback(element[, index[, array]])[, thisArg])
Dove:

- callback è una funzione che verrà chiamata per ogni elemento dell'array
- element è l'elemento corrente che viene elaborato dall'array
- index (opzionale) è l'indice corrente dell'elemento nell'array
- array (opzionale) è l'array su cui è stato chiamato il metodo filter
- thisArg (opzionale) è il valore da utilizzare come this quando si esegue la funzione callback
  La funzione callback deve restituire true per includere l'elemento nell'array filtrato, altrimenti deve restituire false

  Ecco un esempio di come utilizzare il metodo filter() per filtrare solo i numeri pari da un array:
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const evenNumbers = numbers.filter(number => number % 2 === 0);

console.log(evenNumbers); // Output: [2, 4, 6, 8, 10]
In questo esempio, la funzione di callback number => number % 2 === 0 viene chiamata per ogni elemento dell'array numbers. Restituisce true solo per gli elementi che sono divisibili per 2, cioè i numeri pari. Gli elementi che soddisfano questa condizione vengono quindi inclusi nell'array evenNumbers.

**Reduce:**
Prende una funzione binaria (che prende due argomenti) e un iterabile come input. Riduce l'iterabile ad un unico valore applicando la funzione ripetutamente ai suoi elementi.
Il metodo reduce() è un metodo degli array in JavaScript che esegue una funzione di riduzione su ciascun elemento dell'array, restituendo un singolo valore risultante. Può essere utilizzato per eseguire diverse operazioni di aggregazione, come la somma di tutti gli elementi dell'array, la concatenazione di stringhe, la ricerca del valore massimo o minimo, e così via.

La sintassi di base del metodo reduce() è la seguente:
const result = array.reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue])
Dove:

- callback è una funzione che verrà chiamata per ogni elemento dell'array
- accumulator è il valore accumulato fino a quel momento
- currentValue è il valore corrente dell'elemento dell'array che viene elaborato
- index (opzionale) è l'indice corrente dell'elemento nell'array
- array (opzionale) è l'array su cui è stato chiamato il metodo reduce
- initialValue (opzionale) è il valore iniziale dell'accumulatore. Se non viene fornito, il primo elemento dell'array sarà usato come valore iniziale e la funzione di callback inizierà ad essere eseguita dal secondo elemento.
  La funzione di callback deve restituire il valore che diventerà il nuovo valore di accumulator. Questo valore verrà passato alla funzione di callback come primo argomento nella successiva iterazione.

Ecco un esempio di come utilizzare il metodo reduce() per calcolare la somma di tutti gli elementi di un array:
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(sum); // Output: 15

In questo esempio, la funzione di callback (accumulator, currentValue) => accumulator + currentValue viene chiamata per ogni elemento dell'array. Aggiunge il valore corrente al valore accumulato fino a quel momento. Il valore iniziale dell'accumulatore è 0, quindi il calcolo della somma inizia da 0. Alla fine, il risultato della somma di tutti gli elementi viene restituito.

# CLASSI E OGGETTI

Sono concetti fondamentali utilizzati per organizzare e strutturare il codice.

Gli oggetti sono strutture dati che contengono una raccolta di coppie chiave-valore, dove ogni chiave è una stringa univoca e ogni valore può essere di qualsiasi tipo, inclusi altri oggetti, funzioni e array. Sono dinamici, il che significa che è possibile aggiungere o rimuovere proprietà in qualsiasi momento.

Le classi sono uno strumento per creare oggetti con la stessa struttura e comportamento. È una sorta di schema o modello da cui è possibile creare istanze di oggetti specifici. Le classi possono anche estendere altre classi, consentendo la creazione di gerarchie di classi e l'ereditarietà di proprietà e metodi.

# POLYFILL

Termine usato nello sviluppo software per riferirsi a un pezzo di codice (tipicamente JavaScript) che fornisce una funzionalità che manca in alcune versioni dei browser o di altri ambienti di esecuzione.

Il termine deriva da "poly" (molti) e "fill" (riempire). Un polyfill riempie il vuoto tra ciò che un ambiente di esecuzione non supporta nativamente e ciò di cui hai bisogno per far funzionare il tuo codice.

Consiste in una libreria JavaScript che implementa le nuove funzionalità del linguaggio o dell'API in modo da renderle disponibili anche in ambienti che non le supportano nativamente. Questo può essere particolarmente utile quando si sviluppano applicazioni web che devono funzionare su una vasta gamma di browser e versioni.

# TOGGLE

In ambito informatico, "toggle" è un termine utilizzato per riferirsi a una funzione o un meccanismo che alterna lo stato di un'entità da un valore a un altro. Può essere utilizzato in vari contesti, come interfacce utente, applicazioni, script, etc.

Per esempio, nel contesto delle interfacce utente, "toggle" può riferirsi a un pulsante o un'interruttore che cambia lo stato di una funzionalità o di un elemento tra attivo e non attivo, visibile e non visibile, aperto e chiuso, etc.

const array = ["a", "b", "c"];
array.push("z")
Non posso riassegnare array

Array mutabili:

- array.push
- array.splice(0, 2)

Array immutabili:

- array.map() vuole come parametro una funzione da eseguire per ogni ciclo. Serve per fare una modifica in un array
  array abbiamo c e z
  function nome(){

}

Lo posso anche scrivere così:
array.map(function(el, i, array){
return el;
})

.filter vuole una funzione che ritorna un booleano
array.filter(function(el){
return false
})

- array.reduce()
- array.find()
- array.filter()
- array.findIndex()
- forEach()

[...array] lo spread crea un nuovo array come se "svuotasse" il precedente. Mi creo un nuovo array e non modifico quello su cui stavo lavorando

array.find() vuole come parametro una funzione che torna un booleano. differenza con filter che torna solo il primo elemento, non un nuovo array

array.find(function(){
return true
})

.findIndex ritorna solo l'indice
.reduce vuole come parametro funzione e valore inziale, cioè accumulatore. Riceve come parametro accumulatore, indice e array
array = ["c", "z"]
array.reduce(function (acc,el, i){
acc= acc+i
return acc
}, 0)

Oggetti:
const obj = { name: "Emanuele" }
Per modificare una chiave, si usa l'operatore "."
obj.name mi dà il suo contenuto
obj.lastName non dà niente perche non è ancora ssegnato
obj.lastName = "Fava" quindi lo posso riassegnare
delete.obj lastName per eliminare la chiave

const obj2 = {...obj, lastName: ["Il marchese", "Consuelo"]}
obj2 in questo modo ho copiato l'oggetto precedente
{...obj, lastName: ["Giuseppe", "Il marchese"]
obj.lastName[0] così accedo al nome Il marchese

const value = obj2.lastName sto assegnando a value il contenuto

const obj = new Object() Object è una classe che permette di costruire un oggetto e ha diverse funzionalità:
const superHero = {
name: "Tony Stark",
nickname: "Ironman"
}
Object.keys(superHero) il keys, dato un oggetto, ti costruisce un array con le chiavi dell'oggetto, quindi li trasforma in stringhe. keys vuole come parametro un oggetto
Object.values(superHero) recupera un array con la chiave valore, quindi tony stark e ironman

L'oggetto viene definito come l'istanza di una classe.
class HeroDC {
message = "I'm loser!"
} Dentro una classe, non usiamo const/let/var ma direttamente il nome

new HeroDC() mi creerà una classe che conterrà sempre il mio oggetto, ovvero la stringa I'm loser. Posso "parametrizzare" il comportamento della classe, usando la classe constructor()

class HeroDC {
constructor(){ questa è la funzione che viene eseguita quando faccio il new. Un oggetto è l'istanza di una classe. constructor viene eseguita quando la funzione viene istanziata. Dentro il constructor si utilizza "this."

}
}

chiave extends rientra nel concetto di ereditarietà perchè estenderà proprietà e metodi. partivo da una classe ma ne creo una nuova con extend. solo che i parametri nuovi sono undefined.

- cercare concetto di polimorfismo
- funzione super: è un metodo che chiama una classe e la passa alla classe "padre"

# OPERATORE DI CONFRONTO

<p> Un operatore di confronto è un simbolo o una sequenza di simboli utilizzato in programmazione per confrontare due valori.</p> Questi operatori vengono utilizzati principalmente in condizioni logiche, come negli statement *if, while* e *for*, per determinare se una certa condizione è vera o falsa. <p>Gli operatori di confronto confrontano due valori e restituiscono un risultato booleano, cioè vero o falso, a seconda che la condizione sia soddisfatta o meno.</p> Esempi comuni di operatori di confronto includono "=", "!=", ">", "<", ">=", "<=" utilizzati per confrontare l'uguaglianza, la disuguaglianza e l'ordine tra i valori. <br/>

# !

Il simbolo "!" è l'operatore di negazione logica, che viene comunemente chiamato operatore _"not"_. Questo operatore viene utilizzato per invertire il valore di verità di un'espressione booleana. Ad esempio:

- Se una variabile booleana è vera, l'operatore "!" la renderà falsa.
- Se una variabile booleana è falsa, l'operatore "!" la renderà vera. <br/>

# ||

Il simbolo "||" è l'operatore logico OR (o). Questo operatore viene utilizzato per eseguire una operazione di confronto tra due espressioni booleane, restituendo true se almeno una delle espressioni è vera e false se entrambe le espressioni sono false. <br/>

# &&

Il simbolo "&&" è l'operatore logico AND (e). Questo operatore viene utilizzato per eseguire un confronto tra due espressioni booleane, restituendo true se entrambe le espressioni sono vere e false se almeno una delle espressioni è falsa. <br/>

# Nan

Sta per "Not a Number" ed è un valore speciale che rappresenta un risultato non valido in operazioni numeriche. Questo valore viene restituito quando si tenta di eseguire operazioni aritmetiche non valide, come dividere per zero, convertire una stringa non numerica in un numero, o quando si verifica un errore durante il parsing di numeri. <br/>

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

**Metodi array immutabili**:

Gli array supportano molti metodi che possono essere utilizzati per eseguire operazioni su di essi. Alcuni di questi metodi sono considerati "immutabili", il che significa che non modificano direttamente l'array originale, ma restituiscono un nuovo array o un nuovo valore basato sulle operazioni eseguite. Questo è utile quando si desidera mantenere l'integrità dell'array originale.

Alcuni esempi di metodi array immutabili:

- **map():** Restituisce un nuovo array applicando una funzione a ciascun elemento dell'array originale
- **filter():** Restituisce un nuovo array contenente solo gli elementi che soddisfano una determinata condizione
- **concat():** Concatena uno o più array a un array esistente, restituendo un nuovo array
- **slice():** Restituisce una parte di un array, senza modificarlo
- **reduce():** Applica una funzione riduttiva a ciascun elemento dell'array, restituendo un singolo valore risultante

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

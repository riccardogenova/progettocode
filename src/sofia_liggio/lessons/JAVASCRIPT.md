<!-- @format -->

# Javascript

È un linguaggio di programmazione utilizzato per lo sviluppo di applicazioni web interattive e aggiunge funzionalità dinamiche alle pagine web.

Viene utilizzato per lo sviluppo di applicazioni lato server (attraverso piattaforme come Node.js) o lato client.

Per inserire un codice JavaScript in una pagina HTML, è necessario semplicemente usare l'etichetta < script >.

## Java vs Javascript

Java e JavaScript non sono correlati, nonostante condividano il termine “Java”. Sono linguaggi nati per sviluppare pagine e applicazioni web. Tuttavia, hanno differenze distintive:

- **Programmazione orientata agli oggetti**: Java è un linguaggio di programmazione orientato agli oggetti. JavaScript è un linguaggio di scripting basato sugli oggetti.
- **Sintassi**: La sintassi di JavaScript non è così formale o strutturata come quella di Java. Quindi, è più semplice per la maggior parte degli utenti.
- **Compilazione**: Java è un linguaggio compilato, mentre JavaScript è un linguaggio interpretato, che viene interpretato linea per linea in fase di esecuzione; i linguaggi compilati tendono ad essere più veloci, ma i linguaggi interpretati tendono ad essere più flessibili.
- **Ambiente**: È possibile utilizzare le applicazioni Java in qualsiasi ambiente, eseguendole in macchine virtuali o in browser; JavaScript è solo per i browser.
- **Utilizzo della memoria**: Java richiede più memoria di JavaScript; questo rende JavaScript preferibile per le pagine e le applicazioni web.

## Come funziona

Utilizza le variabili per identificare le posizioni in cui vengono memorizzati i dati.
Le variabili possono essere globali (accessibili da qualsiasi funzione nel codice) o locali (accessibili solo nel blocco in cui sono dichiarate).

### Costanti

Sono create utilizzando la dichiarazione `const`. Crea delle costanti di sola lettura, immutabili e non accessibili dall’esterno del loro blocco dichiarato. Il nome deve iniziare con una lettera (minuscola o maiuscola), il carattere di sottolineatura `_` o il simbolo del dollaro `$`. Sono sensibili alle maiuscole e alle minuscole.
Alle costanti, a differenza delle variabili, deve essere assegnato un valore al momento della creazione.

### Variabili

Sono dichiarate utilizzando la parola chiave `var`. Non è necessario che abbiano un valore assegnato al momento della dichiarazione. La parola chiave var ha uno scopo globale piuttosto che di blocco. Le dichiarazioni in JavaScript devono finire con un punto e virgola.

### Lavorare con costanti e variabili

Come per altri linguaggi, JavaScript ha diversi tipi di operatori adoperati con variabili e funzioni, la maggior parte dei quali saranno immediatamente riconoscibili:

- Operatori di assegnazione `(=, +=, -=, \*=, /=, %=)`
- Operatori di confronto `(==, ===, !=, !==, >, >=, <, <=)`
- Operatori logici e bitwise `(&&, ||, !, ~)`
- Operatori aritmetici `(+, -, \*, /, %, ++, --)`

Da ricordare:

#### !

Il simbolo "!" è comunemente chiamato operatore _"not"_ ed è utilizzato per invertire il valore di un'espressione booleana.

#### ||

Il simbolo "||" è l'operatore logico _OR_ ed è utilizzato per eseguire una operazione di confronto tra due espressioni booleane, restituendo true se almeno una delle espressioni è vera e false se entrambe le espressioni sono false.

#### &&

Il simbolo "&&" è l'operatore logico _AND_ ed è utilizzato per eseguire un confronto tra due espressioni booleane, restituendo true se entrambe le espressioni sono vere e false se almeno una delle espressioni è falsa.

#### Nan

Sta per "Not a Number" ed è un valore speciale che rappresenta un risultato non valido in operazioni numeriche. Questo valore viene restituito quando si tenta di eseguire operazioni aritmetiche non valide, come dividere per zero o convertire una stringa non numerica in un numero.

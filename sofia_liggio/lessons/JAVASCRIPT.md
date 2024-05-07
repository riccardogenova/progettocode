# COS'E' JAVASCRIPT?

JavaScript è un linguaggio di programmazione ampiamente utilizzato per lo sviluppo di applicazioni web interattive. È uno dei pilastri fondamentali del web moderno insieme a HTML e CSS.

È principalmente utilizzato per aggiungere funzionalità dinamiche e interattive alle pagine web. Questo linguaggio consente agli sviluppatori di creare siti web che possono rispondere agli input degli utenti, modificare il contenuto delle pagine in modo dinamico, gestire eventi come clic e hover del mouse, comunicare con i server per aggiornare i dati senza dover ricaricare l'intera pagina, ecc.

Oltre ad essere utilizzato per lo sviluppo web lato client _(client-side)_, JavaScript viene anche utilizzato per lo sviluppo di applicazioni lato server _(server-side)_ attraverso piattaforme come Node.js. Questo consente agli sviluppatori di utilizzare JavaScript sia sul front-end che sul back-end di un'applicazione web, offrendo una coerenza nel linguaggio di programmazione in tutta l'applicazione.

Ha varie applicazioni che chiunque abbia visitato pagine web interattive o applicazioni mobili avrà probabilmente conosciuto. Anche se JavaScript è utilizzato tradizionalmente per lo sviluppo di siti web, compresa l’aggiunta di elementi come moduli interattivi e animazioni, trova impiego anche in:

- Giochi basati su browser web
- Sviluppo di applicazioni mobili
- Presentazioni

Per inserire un codice JavaScript in una pagina HTML, è necessario semplicemente usare l'etichetta < script >.

# JAVA VS JAVASCRIPT

Java e JavaScript non sono correlati, nonostante condividano il termine _“Java”_. Sia Java che JavaScript sono linguaggi nati per sviluppare pagine e applicazioni web. Tuttavia, hanno differenze distintive, tra cui:

- **Programmazione orientata agli oggetti**: Java è un linguaggio di programmazione orientato agli oggetti. JavaScript è un linguaggio di scripting basato sugli oggetti.
- **Sintassi**: La sintassi di JavaScript non è così formale o strutturata come quella di Java. Quindi, è più semplice per la maggior parte degli utenti.
- **Compilazione**: Java è un linguaggio compilato, mentre JavaScript è un linguaggio interpretato, che viene interpretato linea per linea in fase di esecuzione; i linguaggi compilati tendono ad essere più veloci, ma i linguaggi interpretati tendono ad essere più flessibili.
- **Ambiente**: È possibile utilizzare le applicazioni Java essenzialmente in qualsiasi ambiente, eseguendole in macchine virtuali o in browser; JavaScript è solo per i browser.
- **tilizzo della memoria**: Java richiede più memoria di JavaScript; questo rende JavaScript preferibile per le pagine e le applicazioni web

# COMPONENTI DI BASE

Come per altri linguaggi di programmazione, usa le variabili per identificare le posizioni in cui vengono memorizzati i dati. Le variabili possono essere globali (accessibili da qualsiasi funzione nel codice) o locali, note anche come block-scoped (accessibili solo nel blocco in cui sono dichiarate).

Le variabili possono contenere sia valori fissi (costanti note come literal) che valori modificabili. JavaScript ha una sintassi particolare per dichiarare (creare) costanti e variabili, e assegnare loro dei valori.

# COSTANTE

Le costanti vere sono create utilizzando la dichiarazione _const_. Const crea delle costanti di sola lettura, immutabili e con un block-scoped (“block-scoped” significa che la costante non è accessibile dall’esterno del suo blocco dichiarato).
nomi delle variabili, inclusi quelli delle costanti, devono iniziare con una lettera (minuscola o maiuscola), il carattere di sottolineatura (\_) o il simbolo del dollaro ($). Sono sensibili alle maiuscole e alle minuscole.
Alle costanti, a differenza delle variabili, deve essere assegnato un valore al momento della creazione.

# VARIABILE

Le variabili sono dichiarate utilizzando la parola chiave _var_. Non è necessario che abbiano un valore assegnato al momento della dichiarazione, anche se è permesso farlo e viene fatto spesso. La parola chiave var ha uno scopo globale piuttosto che di blocco (a meno che non sia in una funzione, allora ha uno scopo di funzione). Le dichiarazioni in JavaScript devono finire con un punto e virgola.

# LAVORARE CON COSTANTI E VARIABILI

Come per altri linguaggi, JavaScript ha diversi tipi di operatori adoperati con variabili e funzioni, la maggior parte dei quali saranno immediatamente riconoscibili:

- Operatori di assegnazione (=, +=, -=, \*=, /=, %=)
- Operatori di confronto (==, ===, !=, !==, >, >=, <, <=)
- Operatori logici e bitwise (vedi sotto)
- Operatori aritmetici (+, -, \*, /, %, ++, --)
- Operatori speciali

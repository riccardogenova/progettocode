# Git

## Che cos'è Git?

Git è un sistema di controllo versione distribuito, ovvero un software che
consente di gestire il codice sorgente di un progetto software durante lo
sviluppo collaborativo senza bisogno del supporto di un server centrale.

Grazie a Git i programmatori possono:
-registrare ogni modifica che viene fatta al codice nel tempo;
-confrontare diverse versioni di uno stesso file;
-collaborare contemporaneamente a uno stesso programma per
implementare nuove funzionalità, senza interferire con il lavoro degli altri
membri del team e molto altro ancora che vedremo più avanti.
Git è open-source e può essere utilizzato su diversi sistemi operativi ed è uno
strumento davvero fondamentale per qualsiasi sviluppatore di software:
lo utilizzano aziende importanti come Google, Microsoft, Twitter e Linkedin, ma
può rivelarsi davvero utile anche per progetti molto più piccoli, persino se
sono portati avanti da un singolo sviluppatore.

Le funzionalità di Git sono davvero numerose, in questa lezione esploreremo le
più importanti facendo una panoramica degli argomenti che seguono:
-I repository di Git
-I comandi di Git
-Esempi di utilizzo di Git

## I repository di Git
La funzionalità principale di Git sono i repository (in italiano “depositi”), archivi
digitali in cui viene conservato e gestito il codice sorgente di un progetto
software e che tengono traccia delle modifiche apportate ai file nel corso
tempo.
Un repository consente di recuperare versioni precedenti, confrontare le
differenze tra le versioni e collaborare contemporaneamente con altri
sviluppatori in team senza interferire gli uni con gli altri.
I repository possono essere ospitati su diversi servizi di hosting che utilizzano
Git come sistema di controllo versione, come GitHub, GitLab e Bitbucket.
Questi strumenti consentono di condividere, collaborare e gestire i repository
in modo più facile e efficiente attraverso interfacce web e strumenti di
gestione del progetto.
Nell'immagine potete vedere un esempio di repository ospitato su GitHub:
In questo caso vediamo degli script in linguaggio JavaScript per l'estensione
di Google "Tampermonkey",
un'estensione che ti permette di avere delle agevolazioni, trucchi o mod, su
certi siti, in base allo script che viene aggiunto, cioè in base alla pagina di
codice aggiunta.
## I comandi di Git:
Prima di parlare di come utilizzare Git nella pratica, dobbiamo prendere un po’
di confidenza con i suoi comandi principali. Utilizzare Git non è difficile, ma ci
sono moltissime funzionalità da conoscere e imparare a padroneggiare!
Cerchiamo di farci un’idea di tutto quello che possiamo fare con Git, questi
sono solamente alcuni dei comandi più importanti da conoscere e oggi ne
vedremo alcuni:
-git config
Configuriamo il nostro git con le nostre credenziali di GitHub:
git config --global user.name 'Tuo Nome GitHub'
git config --global user.email email@github.com
-git init
Il comando git init è utilizzato per inizializzare un nuovo repository Git vuoto
nella cartella corrente. Crea una nuova directory .git (nascosta) che contiene
tutti i file di configurazione e i metadati necessari per gestire il repository.
git init
Una volta che il repository è stato inizializzato, possiamo aggiungere dei file
tramite il comando git add.
-git add
Il comando git add è utilizzato per aggiungere le modifiche al prossimo
commit.
I commit rappresentano una sorta di “istantanea” del repository e descrivono
le modifiche che abbiamo fatto. Queste modifiche possono riguardare tutto il
progetto, come cambiamenti del codice, creazione o cancellazione di nuovi file
o cartelle ecc., e il comando non le salva direttamente nel repository locale o
remoto, ma le prepara aggiungendole ad una "staging area", ovvero una sorta
di "area temporanea". Una volta aggiunte le modifiche a quest’area, è possibile
effettuare il commit.
Per aggiungere file specifici alla staging area utilizziamo il seguente comando:
git add nome_file
Per aggiungere tutti i file del progetto (nuovi o modificati) alla staging area:
git add .
-git commit
Una delle funzionalità più utili e importanti di Git sono i commit. Un commit (in
italiano potremmo tradurlo con “impegno”) rappresenta una singola modifica
apportata al contenuto del progetto.
Tipicamente queste modifiche saranno di tipo testuale come l'aggiornamento
del codice sorgente di un file .py o .js, ma possono rappresentare anche
l'aggiunta o la rimozione di altre tipologie di file come ad esempio immagini di
un sito web. Quando si crea un commit in Git, si selezionano i file che si
desidera includere e si aggiunge un messaggio che descrive le modifiche
apportate.
git commit -m "UPDATE post views to convert markdown post content to HTML"
Quando il commit viene creato, Git crea un hash univoco per identificarlo
attraverso l’algoritmo SHA, che associa una stringa di 40 caratteri a ciascun
commit nel repository.
Questo è un esempio di codice obsoleto che deve essere aggiornato alla
versione più recente.
Scegliere con cura il messaggio che descrive il commit è fondamentale per la
gestione del repository, sia per noi che lo scriviamo, sia per coloro che
eventualmente stanno lavorando al nostro stesso progetto e dovranno
leggerlo. Un messaggio di commit preciso e chiaro consente di comprendere
facilmente le modifiche effettuate e il motivo per cui sono state apportate: ciò
potrebbe rivelarsi incredibilmente utile non solo quando collaboriamo con
altri, ma anche in fase di debugging del nostro stesso codice!
Come si scrive un buon messaggio di commit?
-Meglio se in inglese: è la lingua predominante nel mondo dell'informatica ed è
più facile farsi capire da tutti, soprattutto se si collabora a un progetto con
persone provenienti da diverse parti del mondo.
-Dovrebbe iniziare con una parola chiave esplicativa che descriva il tipo di
modifica che si sta implementando. Alcune delle parole chiave più utilizzate
sono: Add, Merge, Fix, Remove, Update, Change, Refactor, Hide, Test, ecc.
-Bisogna utilizzare l’indicativo presente: ad esempio scriviamo “Add” e non
“Added”.
-Deve essere specifico: dovrebbe descrivere esattamente le modifiche
apportate e non dovrebbe essere mai generico o vago come "Aggiornamenti
vari". Ad esempio potremmo scrivere un commit come:
“ADD get_URL method to View class”, ovvero "Aggiunge il metodo get_URL alla
classe View".
-Deve essere conciso e andare dritto al punto, evitando di includere
informazioni superflue o dettagli non pertinenti.
Tenete comunque a mente che ciascun progetto open source o team di lavoro
potrebbe avere delle linee guida di riferimento che hanno comunque sempre
precedenza.
-git log
Per visualizzare la cronologia dei commit di un repository, possiamo andare
sul sito dell’hosting che lo ospita, come GitHub, oppure utilizzare direttamente
il comando git log:
git log
Il comando ci mostrerà nel terminale una lista dei commit nell'ordine in cui
sono stati effettuati, insieme ai relativi metadati come l'autore, la data, il
messaggio di commit e l'hash:
Author: fran-00 <XXXXXX@XXX.com>
Date: Thu Apr 13 17:06:24 2023 +0200
Add Python .gitignore template
commit 614d165aba121911ec63312fea388f4d8079c1ae
Questi sono solamente alcuni dei comandi usati su git, con questa lezione
abbiamo solo cominciato ad esplorare le funzionalità di Git che sono
veramente tantissime.
Con quello che abbiamo visto insieme dovreste esservi fatti un’idea delle
funzionalità di Git e GitHub.
Grazie mille dell’attenzione.
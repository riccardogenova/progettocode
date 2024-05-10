<!-- @format -->

# git flow

<!-- https://devdev.it/guida-gitflow/come-funziona-gitflow-branch-develop-e-master/ -->

## Installazione e configurazione GitFlow

### Installare GitFlow su Windows

Per Windows, git-flow è integrato nell’installer principale di git . È possibile scaricarlo gratuitamente all’indirizzo https://git-scm.com/download/win

### Installare GitFlow su Linux

Probabilmente git è già installato sul nostro sistema. Se non lo fosse è possibile installarlo velocemente tramite il gestore dei pacchetti di sistema. Se usi linux Fedora, CentOS o RedHat usa yum :

yum install git-flow
Se invece usi un sistema come Ubuntu o Debian usa apt-get :

apt-get install git-flow

### Installazione GitFlow su Mac

Il mio consiglio è di usare brew, è un package manager open source davvero eccezionale. Permette di installare, proprio come su qualsiasi distro linux, il porting per macOS dei pacchetti più comuni, tra i quali, appunto, anche git-flow :

Prima, installiamo brew utilizzando i comandi all’indirizzo https://brew.sh/ Una volta terminata l’installazione, possiamo utilizzare il comando:

brew install git-flow

### Inizializzazione

A questo punto, siamo pronti per dare il comando git flow init all’interno del nostro progetto. Non preoccuparti, git flow è un’estensione di git, quindi non cambierà nulla nel repository già esistente.

L’approccio GitFlow utilizza due rami principali per gestire il controllo di versione (versioning) del progetto. Il primo, master che conserva, come detto, tutte le release. Il secondo è il ramo develop, che è fondamentale per lo sviluppo delle prossime versione e serve come base per le future integrazioni che vedremo nei vari capitoli. È inoltre conveniente taggare tutti i commit (o merge) verso il master con un numero di versione progressiva.

## Come funziona GitFlow: branch develop e master

Tutta la (futura) vita del nostro progetto ruoterà quindi attorno ai due rami master e develop ed essi saranno il punto di partenza e di arrivo degli altri rami e saranno l’ossatura vera e propria del repository.

<img src="https://devdev.it/wp-content/uploads/2020/06/gitflow-branch-master-develop.svg" whidth="5em"/>

Cominciamo. Allo stato iniziale del nostro progetto, se non utilizziamo ancora GitFlow, non avremo un ramo develop, perciò dovremmo crearlo a partire da quello master . Vediamo come fare:

git branch develop
git push -u origin develop

A questo punto, se ci fossero altri sviluppatori, dovrebbero clonare e fare il track di questo ramo per l’integrazione di nuove funzioni.

Come ci siamo detti nell’introduzione a GitFlow, i comandi git-flow sono una forma abbreviata di uno o più comandi git . Il comando git flow init controllerà l’esistenza dei rami master e develop per noi e li creerà automaticamente nel caso non ci fossero. Lasciamo pure le impostazioni di default:

$ git flow init
Initialized empty Git repository in ~/project/.git/
No branches exist yet. Base branches must be created now.
Branch name for production releases: [master]
Branch name for "next release" development: [develop]
How to name your supporting branch prefixes?
Feature branches? [feature/]
Release branches? [release/]
Hotfix branches? [hotfix/]
Support branches? [support/]
Version tag prefix? []
$ git branch

- develop
  master

## Nuove funzionalità (feature branch)

Ogni nuova feature, quindi, dovrebbe avere il proprio branch, che deve essere presente anche su origin in modo da permettere agli altri sviluppatori di collaborare. I rami delle nuove funzionalità devono essere creati a partire da quello develop e, quando abbiamo completato lo sviluppo della funzionalità, deve essere unito (merge) di nuovo in develop. Non deve, MAI, essere unito direttamente a master .

Creare un feature branch
Vediamo come farlo con i comuni comandi git. Partiremo, come detto, dall’ultima versione del ramo develop:

git checkout develop
git checkout -b feature/nuova_funzione
Lo stesso esempio utilizzando git-flow :

git flow feature start nuova_funzione
È prassi che i nomi dei rami abbiamo la forma tipo/nome_ramo. Nel nostro caso il nome del nuovo branch è feature/nuova_funzione.

<img src="https://devdev.it/wp-content/uploads/2020/06/gitflow-branch-feature.svg"/>

Completare un feature branch
Dopo aver completato lo sviluppo della nuova funzione, è ora di aggiornare il ramo develop con le ultime modifiche.

Con i semplici comandi git, ci spostiamo sui develop ed effettuiamo l’unione (merge) del ramo:

git checkout develop
git merge feature/nuova_funzione
Utilizzando git-flow la forma è più breve:

git flow feature finish feature/nuova_funzione
Finito. A questo punto, le nostre novità scritte nel ramo feature/nuova_funzione non sono pronte per essere rilasciate, essendo state unite nel ramo develop e non in quello master che, come dicevamo, corrisponde alla versione pubblica del nostro progetto, cioè quella attualmente utilizzata dagli utenti.

<img src="https://devdev.it/wp-content/uploads/2020/06/gitflow-feature-branch-merge.svg"/>

## Finalizzare una release

Una volta che il ramo develop ha accumulato, tramite unioni (merge), abbastanza feature, siamo pronti per approcciare una nuova release del progetto. Per farlo, creiamo un ramo (branch) a partire da develop. Su questo nuovo ramo, che per prassi avrà un nome del tipo release/1.2, non dovremmo scrivere nuove integrazioni, ma limitarci a quei piccoli compiti che porta dietro ogni release, come fixare gli ultimi bug, aggiungere documentazione, pulire o aggiungere commenti, etc.

Quando il ramo è pronto, dovremmo unirlo nel ramo master e poi nuovamente nel ramo develop.

Utilizzare questo approccio permette agli sviluppatori di lavorare e finalizzare una release mentre è possibile ancora lavorare parallelamente su altre funzioni (cioè su altri rami feature/\*) che non sono state ancora rilasciate. Inoltre, utilizzando una struttura dei nomi formale e condivisa, si può capire subito, a colpo d’occhio, lo stato attuale del progetto.

Non ci rimane poi che aggiungere un tag al merge (ovvero al commit risultante dall’unione) tra master e release/1.2 con appunto il numero di versione 1.2.

Vediamo come creare un branch di release con i comuni comandi git:

git checkout develop
git checkout -b release/1.2
Se volessimo farlo con git-flow:

$ git flow release start 1.2
Switched to a new branch 'release/1.2'
Come dicevamo, a questo punto ci troviamo sul nuovo ram e possiamo andare ad eseguire bugfix e altre operazioni per prepararci al rilascio di questa versione. Una volta pronti, faremo il merge di questo ramo in master, poi in develop e poi potremmo semplicemente cancellarlo. Il motivo dell’unione in develop è semplice: ipotizzando di aver fixato qualche bug critico, l’avremmo fixato anche nelle altre (future) versioni.

<img src="https://devdev.it/wp-content/uploads/2020/06/gitflow-branch-release.svg"/>

Per finalizzarlo, ovvero rilasciare una nuova versione del nostro progetto, lo uniremo in master, poi in develop:

Con i comandi git:

git checkout develop
git merge release/1.2
git checkout master
git merge release/1.2
git tag 1.2
git branch -D release/1.2
Con l’estensione git-flow tutto si riassume in un unico comando:

git flow release finish '1.2'

## Creare un hotfix

I rami (branch) di hotfix vengono usati per aggiustare bug che affliggono la release attualmente in produzione. Sono fondamentali perché ci permetteranno di gestire bug che al momento i nostri utenti stanno “subendo” oppure di tappare falle di sicurezza zero-day.

Per questo motivo i rami hotfix hanno un flusso più rapido rispetto ai rami visti in precedenza. Visto che fixano bug già distribuiti, un ramo hotfix/nomebug verrà creato a partire direttamente da master e, una volta corretto il problema, dovrà essere unito (merge) sia in master che develop (oppure nella release che attualmente si sta preparando).

Un approccio di questo tipo ci permetterà quindi di fare bug fix senza interrompere i lavori al progetto su altri rami rendendo però questo nuovo fix disponibile anche per le future release.

Vediamo come creare un ramo hotfix con i comuni comandi git:

git checkout master
git checkout -b hotfix/nomebug
Utilizzando l’estensione git-flow, invece:

git flow hotfix start nomebug
Quando avremo terminato la scrittura del nostro fix, facciamo il merge di questo ramo in develop e in master. Poi, possiamo semplicemente cancellarlo. Usando i comandi git:

git checkout master
git merge hotfix/nomebug
git tag 1.2.1
git checkout develop
git merge hotfix/nomebug
git branch -D hotfix/nomebug
Con git-flow basterà un solo comando:

git flow hotfix finish nomebug
Come già detto in precedenza, ogni commit o merge nel ramo master genererà una nuova release number, che nel nostro esempio sarà 1.2.1.

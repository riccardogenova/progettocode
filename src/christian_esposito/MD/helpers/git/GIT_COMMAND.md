<!-- @format -->

# Comandi base di Git

## Inizializzazione progetto

- git init
  - crea una cartella di salvataggio dei file da dare dentro la cartella

## configurazione di git

- git config --global credential.helper store
  - in Git configura l'helper delle credenziali globali per memorizzare le credenziali (username e password) in un file di testo non cifrato sulla tua macchina. Questo evita la necessità di digitare le credenziali ogni volta che interagisci con un repository Git remoto che richiede l'autenticazione

## download di un progetto

- git clone URL

  - scaricare un progetto dalla repository in remoto

- git clone --bare
  - viene utilizzato per creare un repository Git bare sul tuo computer locale. Un repository bare è essenzialmente una copia del repository Git che contiene solo i dati essenziali (commit, puntatori di riferimento, oggetti del blob) necessari per il versionamento del codice, senza la working directory e il suo contenuto.

## aggiungere e salvare i cambiamenti

- git add . o nomeFile

  - aggiingi i file all changes locale

- git commit -m "Messaggio del commit"

  - salva i cambiamenti in un commit

- git commit --amend

  - serve a modificare la desc dell'ultimo commit

- git commit -p

  - serve a vedere i cambiamenti fatti ed approvarli prima di dare il commit e push

- git tag [ nome_tag ] [ commit ]
  - Git ti consente di creare tag per contrassegnare commit specifici nella cronologia del tuo repository. Questi tag fungono da riferimento facilmente individuabile per versioni, milestone o punti specifici di sviluppo del tuo progetto.

## verificare i commit e cambiamenti

- git log

  - per vedere i log dei commit

- git log --oneline

  - vedere i log in oneline

- git blame [ file ]
  - in Git ti consente di esaminare la cronologia dei commit per una riga o un file specifico e scoprire quali commit hanno introdotto o modificato ciascuna riga di codice.

## branch

- git branch -M main

  - cambia branch da master a main

- git checkout -b nomebranch
  - per cambiare e creare una nuova BRANCH

### Cancellazione di un ramo:

Puoi eliminare un ramo dopo averlo integrato con successo o se non è più necessario, utilizzando il comando git branch -d [ nome-ramo ].

## collegamento con i remote

- git remote add <"remote-name"> <"remote-url">

  - aggiungere remote

- git remote -v

  - sapere il link della repository

- git remote rename <"nome vecchio"> <"nome nuovo">

  - rinominare il remote da origin a main ecc

- git remote set-url nome URL

## aggiornare la repository locale

- git pull

  - scarica gli aggiornamenti della repositori

- git rebase nomeBranchPrincipale
  - serve per aggiornare una seconda branch con la branch principale

## annullare i commit

- git reset codice hash

  - il codice lo prendi da git log

- git reset --hard

  - resetta il progetto all' ultimo commit sul locale

  - git reset --soft
  - è utilizzato per modificare la cronologia dei commit di Git in modo sicuro, spostando il puntatore HEAD (che indica l'ultimo commit) a un commit precedente, senza eliminare alcun dato

  - git checkout --[ file ]
  - Il comando git checkout con un argomento file opzionale serve a ripristinare un file o una directory specifica dal repository Git nella tua working directory. In pratica, consente di annullare le modifiche apportate a un file o di recuperare una versione precedente.

## verifica differenze in locale o con il remote

- git diff nomeFile

  - Mostra le differenze tra le modifiche non ancora registrate e la versione più recente nel repository.

- git fetch origin
  - Recupera le modifiche dal repository remoto senza integrarle automaticamente nella tua branch locale corrente. In pratica, scarica le informazioni aggiornate delle branch remote sul tuo computer locale.

## unire le branch

- git merge origin < branch_name >
  - Integra le modifiche scaricate dalla branch remota specificata con la tua branch locale corrente. Simile al comando pull, anche questo passaggio potrebbe richiedere la risoluzione manuale di eventuali conflitti.

### Merge di rami:

Dopo aver sviluppato una funzionalità in un ramo separato, puoi integrare le modifiche nel ramo principale utilizzando il comando git merge [ nome-ramo ].

## archiviare dei commit

- git stash

  - git stash è un comando di Git prezioso che consente di temporaneamente accantonare le modifiche non committate nella tua working directory. Immagina di dover cambiare rapidamente attività o di voler provare qualcosa di sperimentale con il tuo codice, ma non vuoi ancora effettuare un commit delle modifiche in corso. In questi scenari

- git stash upplay

  - Il comando git stash apply in Git ti consente di anteprima o testare le modifiche memorizzate in uno stash specifico senza applicarle in modo permanente alla tua working directory

- git stash -list

  - Il comando git stash -list in italiano elenca tutti gli stash attualmente presenti nel tuo repository Git, mostrando informazioni utili per decidere quale ripristinare o gestire.

- git stash push ''
  - Quando esegui il comando git stash push, includi un messaggio racchiuso tra virgolette singole subito dopo il comando

## restore change commit whit new branch

**1. new branch**
**2. git cherry-pick ash last commit**
**3. git stash upplay ashh old commit**
**4. le modifiche del commit di cherrypick sono in storage (rosso in git status)**
**5. add i file**
**6. git commit**
**7. git push**

## trasporto commit tra branch

- git cherry-pick
  - Il comando git cherry-pick in Git ti consente di selezionare e applicare in modo specifico un commit specifico da una branch diversa alla tua branch corrente. È utile in diversi scenari

## unire le branch

- git merge --squash [ nome branch ]
  - ti consente di integrare le modifiche da un'altra branch ([nome_branch ]) nella tua branch corrente, creando un singolo nuovo commit invece di un tradizionale commit di merge. Questo può aiutare a mantenere lo storico Git più pulito e lineare riducendo il numero di commit di merge

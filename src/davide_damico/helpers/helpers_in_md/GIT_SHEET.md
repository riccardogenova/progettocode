<!-- @format -->

# Git Cheat Sheet

## Comandi di Base

### Configurazione

- `git config --global user.name "Tuo Nome"`: Imposta il nome dell'utente.
- `git config --global user.email "tua@email.com"`: Imposta l'indirizzo email dell'utente.
- `git config --global core.editor "nome_del_tuo_editor"`: Imposta l'editor di testo preferito.

### Creazione e Clonazione di Repository

- `git init`: Inizializza un nuovo repository Git nella directory corrente.
- `git clone url_repository`: Clona un repository Git esistente nella tua directory locale.

### Operazioni sui File

- `git add nome_file`: Aggiunge un file all'area di staging.
- `git add .`: Aggiunge tutti i file modificati all'area di staging.
- `git rm nome_file`: Rimuove un file dalla repository e dall'area di staging.
- `git mv vecchio_nome nuovo_nome`: Rinomina un file e aggiunge la modifica all'area di staging.
- `git checkout -- nome_file`: Ripristina il file al suo ultimo stato committato.

### Commit

- `git commit -m "Messaggio del commit"`: Esegue un commit con un messaggio descrittivo.
- `git commit -a -m "Messaggio del commit"`: Aggiunge automaticamente e committa tutti i file modificati.
- `git commit --amend`: Modifica l'ultimo commit.

## Gestione del Repository

### Stato

- `git status`: Mostra lo stato del repository.
- `git log`: Mostra la cronologia dei commit.
- `git log --oneline`: Mostra la cronologia dei commit in formato breve.
- `git log --graph --oneline --all`: Mostra una visualizzazione grafica dei rami e dei commit.

### Branching

- `git branch`: Mostra l'elenco dei rami presenti.
- `git branch nome_ramo`: Crea un nuovo ramo.
- `git branch -d nome_ramo`: Cancella il ramo.
- `git branch --contains <commit>`: Elenca tutti i rami che includono un certo commit. (Dove <commit> può essere un hash di commit, un nome di tag o anche un riferimento a HEAD (come HEAD~2 per due commit indietro da HEAD).)
- `git checkout nome_ramo`: Cambia ramo.
- `git checkout -b nome_ramo`: Crea e passa a un nuovo ramo.
- `git branch -m nuovo_nome`: Rinomina il ramo corrente.
- `git branch -D nome_del_branch`: Per eliminare un branch senza la conferma
- `git push origin --delete nome-branch`: Per eliminare un branch su GitHub remoto , tramite vsc

### Merge e Riunione

- `git merge nome_ramo`: Esegue il merge di un ramo nel ramo corrente.
- `git merge --squash nome_branch`: Combina tutte le modifiche di `nome_branch` in un singolo commit in staging, senza committare.
- `git rebase nome_ramo`: Riunisce il ramo corrente con un altro ramo.

### Remoti

- `git remote`: Mostra l'elenco dei repository remoti collegati.
- `git push nome_remoto nome_ramo`: Carica un ramo su un repository remoto.
- `git pull nome_remoto nome_ramo`: Scarica e fonde un ramo da un repository remoto.
- `git remote rename origin nuovo-nome`: Rinomina il repo da origin a nuovo-nome.
- `git remote remove origin`: Per eliminare il collegamento, se si vuole si può riaggiungere tramite il comando precedente.
- `git remote add origin URL`: Per connettere il repository così che ogni volta che si fa un push, lo farà automaticamente in quel repository.
- `git fetch --prune`: Serve ad aggiornare la lista dei branch remoti, rimuovendo quelli che non esistono più sul remote.

### Altro

- `git clone url_repository`: Clona un repository Git esistente nella tua directory locale.
- `git fetch`: Recupera i riferimenti dai repository remoti senza effettuare il merge.
- `git diff`: Mostra le modifiche tra l'area di staging e l'ultimo commit.
- `git stash`: Mette da parte temporaneamente le modifiche non commesse.
- `git stash push`: Salva le modifiche correnti in uno stash e ripulisci il working directory.
- `git stash save "messaggio"`: Salva lo stash con un messaggio.
- `git stash list`: Mostra l'elenco di tutti gli stash salvati.
- `git stash show`: Mostra un sommario delle modifiche nel più recente stash.
- `git stash apply`: Riapplica le modifiche salvate nello stash più recente.
- `git stash pop`: Applica le modifiche dello stash più recente e lo rimuove dall'elenco degli stash.
- `git stash drop`: Elimina lo stash specificato dall'elenco degli stash.
- `git stash clear`: Rimuove tutti gli stash salvati.
- `git stash branch nome_ramo`: Crea un nuovo ramo e applica lo stash più recente a quel ramo.
- `git tag nome_tag hash.commit`: Crea un tag per un commit specifico.
- `git blame nome_file`: Mostra chi ha fatto quali modifiche e quando, in ciascuna riga di un file.
- `git checkout nome_del_file`: Dopo essere tornati indietro a prima della modifica, se vogliamo cancellare il file precedentemente modificato perché non ci serve più.

## Risoluzione dei Conflitti

- `git diff nome_branch1..nome_branch2`: Mostra le differenze tra due rami.
- `git mergetool`: Avvia un tool di merge per risolvere conflitti.
- `git reset nome_del_file`: Rimuove il file dalla zona di staging.
- `git reset --hard HASH_del_commit`: Resetta il repo al commit specificato eliminando quelli successivi.
- `git reset id_unico_del_commit`: Per tornare ad una versione precedente del file.
- `git reset --hard origin/master`: Per cancellare ciò che ho in locale su VSC e prendere ciò che ho in remoto sul repo.
- `git reset --hard HEAD`: Per ripristinare il tuo repository Git allo stato dell'ultimo commit, annullando tutte le modifiche non committate

## Sviluppo Distribuito

- `git remote -v`: Visualizza gli URL dei repository remoti collegati.
- `git fetch origin`: Recupera i cambiamenti dal repository remoto origin.
- `git push origin nome_ramo`: Carica un ramo nel repository remoto origin.
- `git pull origin nome_ramo`: Tira i cambiamenti dal repository remoto origin e fonde con il ramo corrente.
- `git push origin --delete nome_branch`: Serve a cancellare il branch dal repository remoto.
- `git branch -r`: Serve a mostrare tutti i branch remoti.

## Applicazione di Singoli Commit

- `git cherry-pick commit_hash`: Applica le modifiche del commit specificato al ramo corrente.
- `git cherry-pick --edit commit_hash`: Applica il commit specificato ma consente di modificare il messaggio del commit prima di finalizzare l'operazione.
- `git cherry-pick --no-commit commit_hash`: Applica le modifiche del commit specificato al ramo corrente senza creare un nuovo commit.
- `git cherry-pick --signoff commit_hash`: Applica il commit specificato aggiungendo una riga 'Signed-off-by' con il tuo nome e indirizzo email, come configurato in Git.
- `git cherry-pick --continue`: Continua un cherry-pick dopo aver risolto i conflitti.
- `git cherry-pick --abort`: Annulla un'operazione di cherry-pick in corso.
- `git cherry-pick --skip`: Salta il commit corrente durante un cherry-pick, utile se il commit è già stato applicato o non è necessario.

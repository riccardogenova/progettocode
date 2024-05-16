<!-- @format -->

# Comandi di Git

## Comandi di base

### 1. Configurazione

- `git config --global user.name "Tuo Nome"`: Imposta il nome dell'utente.
- `git config --global user.email "tua@email.com"`: Imposta l'indirizzo email dell'utente.
- `git config --global core.editor "nome_del_tuo_editor"`: Imposta l'editor di testo preferito.

### 2. Creazione e Clonazione di Repository

- `git init`: Inizializza un nuovo repository Git nella directory corrente.
- `git clone url_repository`: Clona un repository Git esistente nella tua directory locale.

### 3. Operazioni sui File

- `git add nome_file`: Aggiunge un file alla zona di staging.
- `git add .`: Aggiunge tutti i file modificatiall'area di staging.

### 4. Commit

- `git commit -m "Messaggio del commit"`: Esegue un commit con un messaggio descrittivo.
- `git commit -a -m "Messaggio del commit"`: Aggiunge automaticamente e committa tutti i file modificati.
- `git commit --amend`: Modifica l'ultimo commit.
- `git revert`: Annulla le modifiche di un commit precedente.
- `git cherry-pick`: Applica un commit specifico da un ramo a un altro.
- `git log -- follow [file]`: Mostra i commit che hanno cambiato un file specifico.
- `git log -- oneline`: Visualizza i log in una sola linea.
- `git blame [file]`: Visualizza chi ha modificato una riga specifica in un file.

## Gestione del Repository

### 1. Stato

- `git status`: Mostra lo stato del repository.
- `git log`: Mostra la cronologia dei commit.

### 2. Branching

- `git branch`: Mostra l'elenco dei rami presenti.
- `git branch nome_ramo`: Crea un nuovo ramo.
- `git branch -m nuovo_nome`: Rinomina un ramo.
- `git branch -d nome_ramo`: Cancella il ramo.
- `git branch -D nome_ramo`: Elimina un ramo in modo forzato.
- `git branch -a`: Visualizza tutti i rami, sia locali che remoti.
- `git branch -- merged`: Elenca tutti i rami che sono stati uniti.
- `git checkout nome_ramo`: Cambia ramo.
- `git checkout -b nome_ramo`: Crea e passa a un nuovo ramo.
- `git checkout --nome_file`: Annulla le modifiche in un file prima di aggiungerlo al commit.
- `git branch -- contains nome_commit`: Visualizza i branch in cui è presente un commit specifico.

### 3. Merge e Riunione

- `git merge nome_ramo`: Esegue il merge di un ramo nel ramo corrente.
- `git rebase nome_ramo`: Riunisce il ramo corrente con un altro ramo.
- `git merge -- squash nome_branch`: per unire un branch senza creare un commit di merge. Gli ultimi commit vanno sempre in cima.

### 4. Remoti

- `git remote`: Mostra l'elenco dei repository remoti collegati.
- `git remote add nome_remoto url_remoto`: Collega un repository remoto.
- `git push nome_remoto nome_ramo`: Carica un ramo su un repository remoto.
- `git pull nome_remoto nome_ramo`: Scarica e fonde un ramo da un repository remoto.
- `git remote rename origin nuovo-nome`: Rinomina il repo da origin a nuovo-nome.

### 5. Altro

- `git clone url_repository`: Clona un repository Git esistente nella tua directory locale.
- `git fetch`: Recupera i riferimenti dai repository remoti senza effettuare il merge.
- `git diff`: Mostra le modifiche tra l'area di staging e l'ultimo commit.
- `git stash`: Mette da parte temporaneamente le modifiche non commesse.
- `git stash apply`: Riprende le modifiche. Se usiamo il comando due volte, non possiamo più riprendere la prima modifica.
- `git stash list`: Elenca gli stash.
- `git tag nome_tag`: Crea un tag per un commit specifico.

## Risoluzione dei conflitti

- `git diff nome_branch1..nome_branch2`: Mostra le differenze tra due rami.
- `git mergetool`: Avvia un tool di merge per risolvere conflitti.
- `git reset nome-del-file`: Rimuove il file dalla zona di staging.
- `git reset --hard HASH-del-commit`: Resetta il repo al commit specificato eliminando quelli successivi.

## Sviluppo Distribuito

- `git remote -v`: Visualizza gli URL dei repository remoti collegati.
- `git fetch origin`: Recupera i cambiamenti dal repository remoto origin.
- `git push origin nome_ramo`: Carica un ramo nel repository remoto origin.
- `git pull origin nome_ramo`: Tira i cambiamenti dal repository remoto origin e fonde con il ramo corrente.

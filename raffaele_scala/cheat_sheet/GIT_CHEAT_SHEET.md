# Configuration

`git config`: Configura le impostazioni di Git, come il nome utente, l'email, ecc.

`git config --global user.name "Tuo Nome"`: Imposta il nome dell'utente.

`git config --global user.email "tua@email.com"`: Imposta l'indirizzo email dell'utente.

---

# Creation and Cloning of a Repository

`git init`: Crea un nuovo repository Git nella directory corrente.

`git clone <url>`: Clona un repository Git esistente nella directory corrente.

---

# Files operations

`git add <file>`: Aggiunge un file al prossimo commit.

`git add .`: Aggiunge tutti i file al prossimo commit.

`git rm <file>`: Rimuove un file dal repository e dall'indice.

`git mv <file_originale> <file_rinominato>`: Rinomina o sposta un file nel repository.

`git reset`: Annulla le modifiche locali nel repository.

---

# Commit

`git commit -m "<messaggio>"`: Registra le modifiche nel repository con un messaggio descrittivo.

`git commit -a -m "Messaggio del commit"`: Aggiunge automaticamente e committa tutti i file modificati.

`git commit --amend`: Modifica l'ultimo commit.

`git reset codice del commit`: passa a una versione di commit a scelta.

`git show <commit>`: Visualizza informazioni dettagliate su un commit specifico.

---

# Repository status

`git status`: Mostra lo stato dei file nel repository.

`git log`: Visualizza la cronologia dei commit.

`git log --oneline`: Mostra la cronologia dei commit in formato breve.

`git log --graph --oneline --all`: Mostra una visualizzazione grafica dei rami e dei commit.

---

# Branching

`git branch`: Visualizza, crea o elimina rami.

`git branch <nome del ramo>`: Crea un nuovo ramo.

`git branch -m <nome del ramo>`: Cambia nome al ramo.

`git checkout <branch>`: Cambia ramo o recupera file dalla commit storiche.

`git checkout -b <nome del branch>`: per creare e spostarti direttamente su quel branch.

`git branch -d "seguito dal nome del branch che desideri eliminare"`: elimina il branch che hai nominato. Se utilizzi "-D" (Maiuscolo) forzi l'eliminazione.

`git cherry-pick <ID commit>`: Applica le modifiche di un singolo commit al ramo in cui siamo.

---

# Merge and Rebase

`git merge <branch>`: Unisce un altro ramo al ramo corrente.

`git rebase`: Ricostruisce la cronologia del ramo corrente riapplicando i commit su un'altra base.

---

# Remote Controls

`git remote add <name> <url>`: Aggiunge un repository remoto con un nome specificato.

`git remote -v`: Visualizza i repository remoti collegati.

`git remote rm <name>`: Rimuove un repository remoto collegato al repository locale.

`git remote`: Mostra l'elenco dei repository remoti collegati.

`git push <nome remoto> <nome ramo>`: Carica i commit locali sul repository remoto.

`git pull <nome remoto> <nome ramo>`: Aggiorna il repository locale con le modifiche del repository remoto.

`git push origin --delete <nome del branch remoto>`: se vuoi eliminare il branch remoto.

---

# Conflict Resolution

`git diff nome_branch1..nome_branch2`: Mostra le differenze tra due rami.

`git mergetool`: Avvia un tool di merge per risolvere conflitti.

`git reset nome-del-file`: Rimuove il file dalla zona di staging.

`git reset --hard HASH-del-commit`: Resetta il repo al commit specificato eliminando quelli successivi.

`git bisect`: Per individuare un file che ha introdotto un bug

---

# Others

`git stash`: Nasconde le modifiche non commesse temporaneamente.

`git tag <nome del tag>`: Crea un tag per segnare un momento importante.

`git tag`: Gestisce i tag annotati per marcare punti importanti nella storia del repository.

`git diff`: Mostra le differenze tra le modifiche non commesse e lo stato attuale dei file nel repository.

`git fetch`: Recupera i commit, i rami e le modifiche dal repository remoto senza unire automaticamente nulla nel ramo locale.

`git submodule`: Gestisce i repository incorporati all'interno di un altro repository Git.

`git blame <file>`: Mostra chi ha modificato ogni riga di un file e in quale commit.

`git grep <pattern>`: Cerca un testo nei file del repository.

---

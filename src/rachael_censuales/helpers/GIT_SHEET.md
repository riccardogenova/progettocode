<!-- @format -->

## Comandi GIT

### Comandi iniziali

**git init**: Inizializza un nuovo repository Git nella directory corrente.
**git clone**: [URL] Clona un repository Git esistente dalla sua URL remota sulla tua macchina locale.
**git remote add origin**: [URL] // Collega il repository remoto a quello locale.
**git remote -v**: Mostra i repository remoti collegati e le rispettive URL.
**git add [file]**: Aggiunge un file al tuo "staging area", preparandolo per essere committato.
**git commit -m [messaggio]**: Committa le modifiche presenti nel tuo staging area con un messaggio di commit descrittivo.
**git status**: Mostra lo stato attuale del tuo repository Git, inclusi i file modificati, i file nel staging area e altro.
**git diff**: Mostra le differenze tra il working directory e l'area di staging.
**git reset [file]**: Rimuove un file dallo staging area, mantenendo le modifiche nel working directory.
**git rm [file]**: Rimuove un file dal repository Git.

### Gestione dei rami

**git branch**: Visualizza l'elenco dei rami nel repository.
**git checkout [branch]**: Passa a un altro ramo del repository.
**git checkout -b [nome_branch]**: Crea un nuovo ramo e passa ad esso in un'unica operazione.
**git merge [branch]**: Unisce un altro ramo al ramo attuale.
**git branch -d [branch]**: Elimina un ramo locale dopo averlo unito al ramo principale.
**git branch -m [nuovo_nome]**: Rinomina il ramo attuale.

### Gestione dei tag e della cronologia dei commit

**git tag [tagname]**: Crea un nuovo tag per un commit specifico.
**git log**: Controlli la lista dei commit in ordine cronologico.

### Operazioni avanzate

**git revert [commit]**: Annulla un commit specifico, creando un nuovo commit che annulla le modifiche introdotte da quello specifico.
**git cherry-pick [commit]**: Applica le modifiche introdotte da un commit specifico su un altro ramo.
**git rebase [branch]**: Riapplica i commit del ramo corrente sopra il ramo specificato, spesso utilizzato per mantenere una storia dei commit più pulita.
**git bisect**: Utilizzato per il debugging, aiuta a identificare il commit che ha introdotto un bug.

### Operazioni di sincronizzazione con il repository remoto

**git push origin main**: Carica i tuoi commit locali sul repository remoto.
**git pull origin main**: Aggiorna il tuo repository locale con le modifiche dal repository remoto.
**git fetch**: Recupera i dati dal repository remoto senza unire i cambiamenti nel tuo repository locale.

### Altri comandi utili

**git stash**: Nasconde le modifiche locali temporaneamente, permettendo di lavorare su un'altra parte del codice.

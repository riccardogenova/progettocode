<!-- @format -->

# COMANDI GIT

**git init:** Crea un nuovo repository Git nella directory corrente.

**git clone [URL]:** Clona un repository esistente dall'URL specificato.

**git add [file]:** Aggiunge un file alla staging area per il commit. Puoi anche usare git add . per aggiungere tutti i file modificati.

**git commit -m "[messaggio]":** Esegue il commit dei file nella staging area con il messaggio di commit specificato.

**git status:** Mostra lo stato attuale dei file nel repository.

**git push:** Invia i tuoi commit locali al repository remoto.

**git pull:** Recupera e unisce i cambiamenti dal repository remoto al tuo repository locale.

**git branch:** Mostra l'elenco dei rami presenti nel repository.

**git checkout [nome-branch]:** Passa al ramo specificato.

**git merge [nome-branch]:** Unisce il ramo specificato al ramo attuale.

**git log:** Visualizza la cronologia dei commit.

**git reset [file]:** Rimuove il file specificato dalla staging area, ma mantiene le modifiche nel working directory.

**git revert [commit]:** Annulla il commit specificato, creando un nuovo commit che annulla le modifiche effettuate da quel commit.

**git remote:** Visualizza l'elenco dei repository remoti associati al tuo repository locale.

**git remote add [nome] [URL]:** Aggiunge un nuovo repository remoto con il nome specificato e l'URL fornito.

**git remote remove [nome]:** Rimuove il repository remoto con il nome specificato.

**git fetch [remote]:** Recupera tutti i rami e i commit dal repository remoto specificato senza unire nulla nel tuo repository locale.

**git checkout -b [nome-branch]:** Crea un nuovo ramo e passa ad esso contemporaneamente.

**git merge --abort:** Annulla un tentativo di merge che ha causato conflitti.

**git stash:** Mette da parte le modifiche non commesse in un "stash" temporaneo, pulendo l'area di lavoro per altre operazioni.

**git cherry-pick [commit]:** Applica le modifiche di un commit specifico sul branch corrente.

**git rebase [branch]:** Riapplica i commit del branch corrente sopra al branch specificato, creando una storia lineare dei commit.

**git tag [nome-tag]:** Crea un tag annotato nella posizione HEAD corrente.

**git blame [file]:** Mostra chi ha modificato ciascuna riga di un file e in quale commit è stata effettuata la modifica.

**git clean -n:** Mostra una lista dei file non tracciati che verrebbero rimossi dalla directory di lavoro utilizzando git clean -f.

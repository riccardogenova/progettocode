![alt](https://i.ibb.co/mDcVL6Z/Git.png)

### Configurazione

- `git config`: Impostare le configurazioni di Git come nome utente, email, alias, ecc.
- `git config --global user.name "Nome"`: Impostare il nome utente a livello globale.
- `git config --global user.email "email@example.com"`: Impostare l'email utente a livello globale.
- `git config --global core.editor "editor"`: Impostare l'editor predefinito per i messaggi di commit.
- `git config --global alias.<alias-name> "<git-command>"`: Creare alias per comandi Git frequentemente utilizzati.
- `git remote add origin repository_URL`: Viene utilizzato per aggiungere un "remote" al repository Git locale.
- `git remote remove origin`: Questo comando viene utilizzato per rimuovere il repository remoto chiamato "origin" dal tuo repository Git.
- `git config --globalcredential.helperstore`:Questo comando viene utilizzato per configurare Git in modo da memorizzare le credenziali

### Inizializzazione e clonazione

- `git init`: Inizializzare un nuovo repository Git nella directory corrente.
- `git clone <url>`: Clonare un repository Git esistente.

### Gestione dei cambiamenti

- `git add <file>`: Aggiunge file al staging area.
- `git add .`: Aggiunge tutti i file modificati nella directory corrente allo staging area.
- `git add -p`: Aggiunge in modo interattivo solo alcune parti di un file allo staging area.
- `git commit -m "messaggio"`: Committa i cambiamenti nello staging area nel repository.
- `git commit --amend`: Modifica l'ultimo commit aggiungendo nuove modifiche o modificando il messaggio di commit.
- `git status`: Mostra lo stato dei file nel repository.
- `git diff`: Mostra le differenze tra il working directory e lo staging area.
- `git diff --cached`: Mostra le differenze tra lo staging area e l'ultimo commit.
- `git checkout -- <file>`: Annulla le modifiche non commesse a un file nel working directory.
- `git log -p <file>`: Mostra la history dei commit per un file specifico insieme alle modifiche apportate in ciascun commit.
- `git mv <file_originale> <file_destinazione>`: Sposta o rinomina un file e gestisce le modifiche in Git.
- `git rm <file>`: Rimuove un file dal repository Git e lo elimina dalla directory di lavoro.
- `git restore <file>`: Ripristina file dallo staging area o dal commit precedente.
- `git --hard <hash>`: Viene utilizzato per spostare il ramo corrente e l'HEAD a un commit specifico nel repository Git
`git checkout [file]`: Questo comando permette di cambiare il ramo o di recuperare uno specifico file dallo stato precedente. 
`git stash`: Questo comando viene utilizzato per mettere da parte le modifiche non commesse in un deposito temporaneo, consentendo di ripulire il working directory e tornare a uno stato pulito.
`git stash apply`:Dopo aver messo da parte le modifiche con git stash, questo comando viene utilizzato per applicare di nuovo le modifiche al working directory, in modo che si possa riprendere il lavoro da dove si era lasciato.
`git stash list`: Questo comando elenca tutte le modifiche che sono state messe da parte utilizzando git stash.
`git cherry-pick`: Questo comando permette di applicare un singolo commit da un ramo a un altro. È utile quando si vuole applicare solo specifiche modifiche da un ramo a un altro, anziché unire l'intero ramo.
`git log--follow file`: Questo comando visualizza la cronologia dei commit che hanno modificato un determinato file, anche se il file è stato rinominato. Il flag --follow è utilizzato per seguire la storia del file attraverso i suoi spostamenti di nome.


### Branching e merging

- `git branch`: Elencare, creare o eliminare branch.
- `git branch <nome_branch>`: Creare un nuovo branch con il nome specificato.
- `git branch -d <branch>`: Eliminare un branch locale.
- `git push origin --delete <branch>`: Eliminare un branch remoto.
- `git branch -m <old-branch> <new-branch>`: Rinominare un branch.
- `git checkout <branch>`: Passare tra branch o ripristinare file dalla history.
- `git checkout -b <new-branch>`: Creare un nuovo branch e passarci immediatamente.
- `git merge <branch>`: Unire i cambiamenti di un branch in un altro.
- `git merge --abort`: Annullare un merge in corso e ripristinare lo stato precedente.
- `git rebase <branch>`: Riapplicare i commit di un branch su un altro.
- `git branch -a`: Questo comando elenca tutti i rami disponibili nel repository, inclusi i rami remoti. L'opzione -a sta per "all", quindi mostra sia i rami locali che quelli remoti.
- `git merge--squash branch`: Questo comando fonde i cambiamenti dal ramo specificato in un unico nuovo commit sul ramo attuale, ma senza effettuare una vera e propria fusione. Invece, i cambiamenti vengono "spalmati" su un singolo commit, rendendo più pulita la cronologia dei commit. Questo è utile quando si desidera incorporare le modifiche da un ramo senza conservare la struttura del ramo stesso.
- `git branch --contains commit`: Questo comando elenca tutti i rami che contengono il commit specificato. Mostra quindi tutti i rami in cui il commit è stato integrato nella storia del repository.


### Sincronizzazione con il repository remoto

- `git fetch`: Recuperare i commit dal repository remoto senza integrarli.
- `git pull`: Estrarre e integrare i cambiamenti dal repository remoto nella branch corrente.
- `git push`: Caricare i commit locali sul repository remoto.
- `git push -f`:Forza i commit locali sul repository remoto ignorando eventuali conflitti.

### Ricerca e visualizzazione della history

- `git log`: Visualizzare la history dei commit.
- `git show <commit>`: Visualizzare i dettagli di un commit specifico.
- `git blame <file>`: Visualizzare l'ultimo commit che ha modificato ciascuna linea di un file.
- `git grep <testo>`: Cercare testo nei file del repository.
- `git diff`: Questo comando mostra le differenze tra lo stato attuale dell'area di lavoro e lo stato degli ultimi commit nell'area di stage (quello che verrà commesso) o nell'ultimo commit (quello che è già stato commesso). È utile per visualizzare le modifiche apportate ai file prima di aggiungerle all'area di stage o prima di commetterle.
- `it log --oneline`: Questo comando visualizza la cronologia dei commit in una forma compatta, mostrando solo l'hash abbreviato del commit e il suo messaggio in una riga per ogni commit. È utile per avere una visione panoramica della cronologia dei commit senza dover leggere i messaggi completi di ogni commit.
- `git tag[nome_tag][commit]`: Questo comando viene utilizzato per aggiungere un tag (un'etichetta) a un determinato commit. Il tag può essere utilizzato per contrassegnare punti importanti nella cronologia dei commit, come versioni software stabili o milestone significative. Il parametro [nome_tag] specifica il nome del tag che si desidera creare, mentre [commit] specifica l'hash del commit a cui si desidera applicare il tag. Se [commit] non viene specificato, il tag viene applicato all'ultimo commit corrente.

### Gestione dei conflitti

- `git status`: Mostrare lo stato del repository, inclusi eventuali conflitti.
- `git merge <branch>`: Unire i cambiamenti di un branch in un altro e risolvere i conflitti.
- `git mergetool`: Utilizzare uno strumento grafico per risolvere i conflitti di merge.

### Altro

- `git stash`: Nascondere le modifiche non commesse per utilizzarle in seguito.
- `git tag <nome>`: Etichettare un commit con un nome significativo.
- `git remote -v`: Mostrare i repository remoti configurati.
- `git fetch --all`: Recuperare tutti i riferimenti dal repository remoto.

# **GEAT CHEAT SHEET**

## _Un "Git cheat sheet" è un foglio di riferimento rapido che elenca i comandi più comuni e utili di Git insieme a una breve spiegazione di ciascuno_

---

### _CREAZIONE_

- `git init`: Inizializza un nuovo repository

---

### _AGGIORNAMENTO E SALVATAGGIO_

- `git add nomefile:` Aggiunge un file alla staging area
- `git add.:` modo rapido per aggiungere tutti i file alla staging area in una sola volta
- `git reset nome del file:` Rimuove il file dalla zona di staging.
- `git commit -m "messaggio del commit":` crea un nuovo commit nel repository Git, il messaggio descrive le modifiche apportate.
- `git push origin nome-branch:` Carica i commit nel repository remoto sul branch specificato.
- `git pull origin nome-branch:` Scarica i cambiamenti dal repository remoto sul branch specificato e li unisce con il tuo repository locale.

---

### _VISUALIZZAZIONE DELLO STATO_

- `git status:` Mostra lo stato attuale del repository.
- `git log:` Visualizza la cronologia dei commit.

  ***

### _BRANCH_

- `git branch:` Visualizza i branch locali.
  `git branch nome-branch:` Crea un nuovo branch.
- `git checkout -b nome del branch:` creare un nuovo branch e passare immediatamente a esso

- `git checkout nome-branch:` Passa a un branch esistente.
- `git merge nome-branch:` Unisce un branch al branch corrente.
- `git branch -m vecchio-nome nuovo-nome:` cambiare il nome di un branch in Git

  ***

  ### _ANNULLARE_

- `git checkout:` viene utilizzato per spostarsi tra i branch
- `git checkout nomefile:` annullerà le modifiche non ancora committate nel file e lo ripristinerà allo stato dell'ultimo commit

  ***

  ### _CLONAZIONE_

  - `git clone URL repository:` Clona una copia locale di un repository

  ***

### _REMOTI_

- `git remote:` Mostra l'elenco dei repository remoti collegati. \*`git remote add nome_remoto url_remoto:` Collega un repository remoto.

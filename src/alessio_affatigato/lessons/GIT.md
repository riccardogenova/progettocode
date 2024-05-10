<!-- @format -->

# Git

## Comandi e descrizione

**Git** è un _sistema di controllo di versione distribuito_ utilizzato per gestire progetti software e tracciare le modifiche apportate ai file nel corso del tempo. Consente ai team di collaborare, tenere traccia delle modifiche, coordinare il lavoro e gestire il codice sorgente in modo efficiente. Git consente agli sviluppatori di lavorare in modo collaborativo su progetti di qualsiasi dimensione, mantenendo un registro delle modifiche e consentendo di tornare a versioni precedenti del codice se necessario.

Ecco alcuni comandi essenziali per chi comincia ad utilizzare Git:

- **git init**: Inizializza un nuovo repository Git nella directory corrente.

- **git clone < URL>** : Clona un repository Git esistente dalla specificata URL. Questo è il modo più comune per iniziare a lavorare su un progetto esistente.

- **git add < file >**: Aggiunge un file specifico al "staging area", preparandolo per il commit.

- **git add .** : Aggiunge tutte le modifiche nella directory corrente al "staging area".

- **git commit -m "messaggio"**: Crea un nuovo commit con le modifiche che sono state precedentemente aggiunte al "staging area", con un messaggio descrittivo.
- **git commit --amend -m "messaggio"** :Cambia il messaggio dell'ultimo commit

- **git status**: Mostra lo stato corrente del repository, inclusi i file modificati, i file nell'area di staging e i file non tracciati.

- **git log**: Visualizza la cronologia dei commit, elencando tutti i commit nel repository con i relativi dettagli.

- **git branch**: Visualizza l'elenco delle branch presenti nel repository e mostra quella attualmente selezionata.

- **git branch -d nome del branch**: cancella un branch dal locale

- **git checkout -b <nome_branch>**: Crea una nuova branch e si sposta su di essa.

- **git checkout <nome_branch>**: Si sposta su una branch esistente.

- **git merge <nome_branch>**: Unisce una branch specificata con quella attualmente selezionata.

- **git pull**: Recupera le modifiche dal repository remoto e le integra nel branch locale corrente.

- **git push**: Carica i commit locali su un repository remoto.

- **git remote add origin < URL di github >** : viene utilizzato per associare un repository remoto esistente al tuo repository locale.

- **git cherry-pick < hash-del-commit >** : Il "cherry picking" è un'operazione utilizzata nei sistemi di controllo versione come Git per selezionare e applicare specifici commit da un ramo a un altro. In sostanza, permette di scegliere singoli commit da una sequenza di commit e applicarli su un altro ramo, ignorando il resto della sequenza.

- **git fetch**: Scarica gli ultimi cambiamenti dal repository remoto senza unire i cambiamenti nel tuo ramo locale.

- **git reset**: Resetta lo stato di staging area.

- **git diff**: Mostra le differenze tra il tuo lavoro corrente e ciò che è stato committato.
- **git stash**: Nasconde le modifiche non committate in modo temporaneo, consentendoti di lavorare su altre attività.
- **git rebase**: Trasferisce i commit di un branch su un altro branch in modo da mantenere una storia di commit più lineare.

- **git tag**: Crea, visualizza o elimina tag associati a punti specifici nella cronologia del repository.

- **git blame [file]**: Mostra l'ultimo commit che ha modificato ciascuna riga di un file, utile per identificare chi ha fatto quali modifiche.

- **git remote remove [nome-remoto]**: Rimuove un repository remoto dal tuo repository locale
- **git fork**: clona una repository restando collegato all'originale

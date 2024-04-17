### git init 

`Inizializza un nuovo repository Git nella directory corrente. `

### git clone [URL]
`Clona un repository Git esistente dalla specificata URL.`

### git add [file]
 `Aggiunge uno o più file alla zona di staging per essere preparati per il commit.`

### git remove [file]
 `rimuove il file`

### git commit -m "[messaggio]"
 `Crea un nuovo commit contenente i cambiamenti nella zona di staging, con un messaggio descrittivo.`

### git status
 `Mostra lo stato corrente del repository, inclusi i file modificati, quelli nella zona di staging, ecc.`

### git push
 `Invia i tuoi commit locali al repository remoto.`

### git pull
`Recupera le modifiche dal repository remoto e le unisce con il tuo repository locale.`

### git branch
 `Mostra un elenco delle branch presenti nel repository.`

### git checkout [nome_branch]
 `Cambia la branch corrente del repository.`

### git merge [nome_branch]
 `Unisce i cambiamenti dalla branch specificata nella branch corrente.`

### git fetch
 `Recupera tutti i dati dal repository remoto senza unire alcuna modifica con il tuo lavoro locale.`

### git log
 `Visualizza la cronologia dei commit del repository.`

  ### git config --global user.name "Your Name"
  ### git config --global user.email "your.email@example.com" 
  `configura nome utente e email`
   
### git checkout -b "nomedocumento"
 `per creare un nuovo branch`

 ### git branch -d 
 `per eliminare una branch già mergiata`

 ### git branch -D
 `per eliminare una branch ancora non mergiata`
### git origin [branch] -f
`forza il push sovrascrivendo i file da locale a remoto`

### git diff [file]
`confronta le differenze del file in due diversi momenti` 
### git reset head-1 --soft
`annulla un commit mantenendo le modifiche in locale`
### git remote add origin
`aggiunge una repository remoto in git ``
### git branch -m "nome nuovo"
`rinomina il nome della branch`
### git checkout "file"
`annullo modifiche in un file prima di aggiungerlo al commit`
### git clone --bare "url"
`per creare uno copia della repository senz
### git stash
` stora un cambio temporaneo dell'attuale stato di lavoro`
### git cherry-pick 
`applica un commit da un branch all'altro`
### git merge --squash "nome branch"
`unire un branch senza creare un commit di merge ` 
### git log --follow "file"
mostra lo storico dei commit
### git config --global credential helper store
`memorizza le credenziali dell'utente`
### git branch --contains "commit"
`otterrai un elenco di tutti i branch che includono il commit specificato. Questo può essere utile per comprendere quali branch sono stati influenzati da un determinato cambiamento nel repository`

### git log --oneline
`visualizza i commit in una linea≠``
### git tag "nome tag" "commit"
`aggiungere tag a un commit ``
### git blame "file"
`per vedere chi ha modificato una riga specifica di un file`
### git reset --hard HEAD
`riporterà il repository allo stato del commit corrente, scartando tutte le modifiche non commesse nell'area di staging e nel working directory`
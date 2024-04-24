# COMANDI DI GIT

- **git init**: Inizializza un nuovo repository Git nella directory corrente.

- **git clone**: copia una cartella pubblicata di un utente. Clonare sempre i file sul desktop.

- **git clone [URL]**: Clona un repository esistente da GitHub o da un altro repository Git. L'URL è l'indirizzo del repository remoto.

- **git add [file]**: Aggiunge uno o più file alla zona di stage in preparazione per il commit. Puoi utilizzare . per aggiungere tutti i file modificati.

- **git commit -m "[messaggio]"**: Esegue il commit delle modifiche aggiunte allo stage. Il messaggio di commit fornisce una breve descrizione delle modifiche apportate.

- **git push [remote] [branch]**: Invia i tuoi commit al repository remoto specificato. Il ramo di destinazione può essere specificato, altrimenti di solito si tratta del ramo corrente.

- **git pull [remote] [branch]**: Recupera le modifiche dal repository remoto e le integra nel tuo repository locale. Questo comando è utile per aggiornare il tuo repository locale con le ultime modifiche dal repository remoto.

- **git branch [nome-branch]**: Crea un nuovo branch con il nome specificato.

- **git checkout [branch]**: Cambia il branch corrente a quello specificato.

- **git merge [branch]**: Unisce un altro branch al branch corrente. Questo è comunemente usato per integrare le modifiche da un branch di sviluppo a un branch principale come master.

- **git status**: Mostra lo stato attuale del repository, inclusi i file modificati, gli elementi nello stage e il ramo corrente.

- **git log**: Visualizza la cronologia dei commit nel repository.

- **git remote -v**: Mostra l'elenco dei repository remoti collegati al repository locale, insieme agli URL associati.

- **git reset [codice commit]**: annulla una commit, solo se lavoriamo ad un progetto locale e/o non abbiamo pushato su un server remoto; questo perché il comando cancella lo storico della commit e diventa problematico se la commit è stata eseguita da altri.

- **git revert**: quando le commit che vogliamo sistemare sono state eseguite da altri. non caneclla la commit, ne crea una nuova ripristinando lo stato precedente.

- **git diff "..."**: apre un terminale dove si vedono le modifiche fatte in un file. In rosso ciò che non c'è più, in verde le cose aggiunte.

- **git branch -- merged**: serve a verificare che i due branch siano stati uniti. Serve anche per eliminare un altro branch che non ci serve.

- **git branch -d [nome branch]**: lo elimina.

- **git branch -D [nome branch]**: per cancellare un branch che non abbiamo ancora unito.

- **git push origin -- delete [nome branch]**:

- **git remote add origin [url]**: serve ad aggiungere una repository remota in git

- **git remote remove origin**:

- **git flow**: aiuta a mantenere un flusso di lavoro ordinato, a separare le diverse fasi di sviluppo e a facilitare la gestione dei rilasci e delle correzioni di bug. Utile per progetti di grandi dimensioni o team di sviluppo per collaborare in modo efficiente.

- **git fetch**: scarica le modifiche dal repository remoto senza unirle.

- **git branch -m [nuovo nome]**: per rinominare un branch locale.

- **git branch -a**: per visualizzare tutti i branch, sia locali che remoti.

- **git checkout --[nome file]**: per annullare le modifiche in un file prima di aggiungerlo al commit.

- **git reset [file]**: torno indietro ma non annulla le modifiche (infatti i file rimangono rossi).

- **git clone -- bare [url]**: per creare una copia di un repository remoto sul pc senza i file di progetto.

- **git stash**: mette da parte le modifiche per un cambio temporaneo dell'attuale stato di lavoro.

- **git stash apply**: per riprendere le modifiche. Se mettiamo due cose da parte, quindi usiamo il comando due volte, non possiamo più riprendere la prima modifica.

- **git stash list**: per vedere la lista di stash.

- **git cherry-pick**: prende un commit da un altro branch e lo applica al branch corrente.

- **git merge -- squash [nome branch]**: per unire un branch senza creare un commit di merge. Gli ultimi commit vanno sempre in cima.

- **git log -- follow [file]**: mostra i commit che hanno cambiato un file specifico.

- **git config -- global credential.helper store**: per configurare git e memorizzare le credenziali dell'utente.

- **git branch -- contains [commit]**: per visualizzare i branch in cui è presente un commit specifico.

- **git log -- oneline**: per visualizzare i log in una sola linea.

- **git tag [nome tag] [commit]**: per aggiungere un tag a un commit.

- **git blame [file]**: per vedere chi ha modificato una riga specifica in un file.

- **git reset -- hard head**: per reimpostare l'head del repository all'ultimo stato di commit.

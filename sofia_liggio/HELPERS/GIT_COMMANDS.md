# COMANDI DI GIT

- **git init**: Inizializza un nuovo repository Git nella directory corrente.

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
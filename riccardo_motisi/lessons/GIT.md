# Git
1. **Cos'è Git?**
 - Git è un sistema di controllo versione distribuito che traccia le modifiche al codice sorgente durante lo sviluppo del software.

2. **Come funziona?**
 - Git memorizza una serie di snapshot o copie del tuo progetto nel tempo, l’azione di registrare tale snapshot nella storia del repository(archivio digitale) insieme ad un messaggio descrittivo delle modifiche apportate viene detto commit. Ogni volta che fai una modifica al codice, puoi registrare quei cambiamenti per tenerli tracciati.

3. **Principali concetti di Git:**
- Repository: una struttura di dati che archivia file e documenti tenendo traccia delle versioni dei file nel tempo facilitando il lavoro collaborativo.
- Branch: Una "diramazione" dal codice principale che permette di lavorare su nuove funzionalità o correzioni di bug senza influenzare il codice principale.
- Commit: Una singola revisione del codice sorgente(la base su cui viene costruito un software), che rappresenta uno stato del tuo progetto in un determinato   momento.
- Merge: Il processo di combinare i cambiamenti da un branch all'altro.
- Pull/Push: Prendere i cambiamenti da un repository remoto (pull) o inviare i tuoi cambiamenti ad esso (push).

Sintetizzando in poco parole, Git ti aiuta a tenere traccia delle modifiche al codice facilitando la collaborazione.

### I comandi di git in sintesi:

 - git init: Inizializza un nuovo repository Git nella directory corrente.

 - git clone [url]: Clona un repository esistente nella directory corrente.

 - git add [file]: Aggiunge un file alla staging area per il successivo commit.

 - git commit -m "[messaggio]": Crea un nuovo commit con le modifiche nella staging area, associando un messaggio descrittivo.

 - git status: Mostra lo stato attuale del repository, inclusi i file modificati, aggiunti o eliminati.

 - git push: Carica i commit locali sul repository remoto.

 - git pull: Scarica i cambiamenti dal repository remoto e li applica al repository locale.

 - git branch [nome]: Crea un nuovo branch con il nome specificato.

 - git checkout [branch/nome_file]: Cambia il branch corrente o ripristina un file a una versione precedente.

 - git merge [branch]: Unisce un branch specificato con il branch corrente.

 - git log: Visualizza la cronologia dei commit.

 - git remote add [nome] [url]: Aggiunge un repository remoto con un nome specificato.

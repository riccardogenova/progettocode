<!-- @format -->

# GIT

### Git

Git è un sistema di controllo delle versioni ampiamente utilizzato per gestire il codice sorgente di progetti software. Consente di tenere traccia delle modifiche apportate ai file nel tempo e permette ai membri del team di lavorare simultaneamente sullo stesso progetto, facilitando così la collaborazione e consentendo di tornare a versioni precedenti del codice quando necessario.

#### Concetti Fondamentali

**Repository**: Un repository Git è una cartella o uno spazio di archiviazione in cui sono memorizzati tutti i file del progetto e il loro storico di modifiche.

**Commit**: Un commit è una singola modifica o un insieme di modifiche apportate a uno o più file nel repository. Quando si esegue un commit, si crea uno snapshot dei file nel repository, che può essere successivamente visualizzato o utilizzato per tornare a quel punto specifico nella cronologia delle modifiche.

**Branch**: Un branch è una linea di sviluppo separata dal ramo principale del progetto (spesso chiamato "master"). I branch consentono di lavorare su nuove funzionalità o correzioni di bug senza influenzare il ramo principale.

**Merge**: Il merge è il processo di unire due branch diversi. Quando hai finito di lavorare su una funzionalità su un branch separato, puoi unire le modifiche nel branch principale tramite un merge.

**Remote**: Un repository remoto è ospitato su un server remoto, che può essere raggiunto attraverso Internet o una rete locale. I repository remoti sono essenziali per la collaborazione tra sviluppatori, consentendo loro di condividere il codice sorgente, coordinare il lavoro e mantenere una copia centralizzata del progetto.

#### Comandi Base di Git

1. **Inizializzazione del repository**: Puoi creare un nuovo repository Git o clonare un repository esistente sul tuo computer.

git init: Inizializza un nuovo repository Git nella cartella corrente.

"git clone < URL >": Clona un repository esistente da un server remoto.

1. **Lavorare sui file**: Dopo aver inizializzato o clonato il repository, puoi iniziare a lavorare sui tuoi file.

2. **Aggiungere i file allo staging area**: Quando sei pronto per registrare le modifiche, aggiungi i file che desideri includere nel prossimo commit allo staging area.
   "git add <nome_file>": Aggiunge i file allo staging area.

3. **Effettuare un commit delle modifiche**: Una volta che hai aggiunto i file allo staging area, esegui il comando "git commit -m "messaggio del commit" per creare un nuovo commit con le modifiche registrate.

4. **Gestire la cronologia dei commit**: Puoi visualizzare la cronologia dei commit utilizzando il comando "git log" e tornare a versioni precedenti del codice se necessario.

5. **Lavorare con branch**: Puoi creare nuovi branch utilizzando il comando "git branch <nome_branch>" e passare da un branch all'altro utilizzando il comando "git checkout <nome_branch>".

6. **Unire i branch**: Quando hai finito di lavorare su un branch e vuoi incorporare le modifiche nel branch principale, puoi unire i branch utilizzando il comando "git merge <nome_branch>".

7. **Collaborare con repository remoti**: Puoi condividere il tuo codice con gli altri utilizzando repository remoti come GitHub o GitLab.
   "git remote add <nome_remoto> <URL_remoto>": Aggiunge un repository remoto.
   "git push <nome_remoto> <branch>": Invia le modifiche al repository remoto.
   "git pull <nome_remoto> <branch>": Recupera le modifiche dal repository remoto.

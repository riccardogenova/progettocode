# Cosa è Git?
Git è uno strumento che traccia le modifiche apportate ai file nel tempo. 
Piuttosto che salvare solo le ultime **versioni** dei file, Git tiene traccia delle modifiche apportate nel tempo, 
consentendo di visualizzare e ripristinare versioni precedenti dei file.

# Come utilizzarlo:

## Installazione di Git:
Puoi trovarlo sul sito ufficiale di Git [Sito Ufficiale](https://git-scm.com/), è disponibile per **Windows**, **macOS** e **Linux**.

## Configurazione iniziale:
Apeena dopo l'avvio è importante configurare il nome utente e l'email in Git, è possibile farlo grazie a dei semplici comandi da eseguire nel terminale.

```
git config --global user.name "IlTuoNome"
```

```
git config --global user.email "tua@email.com"
```

## Inizializzazione di un repository
Per iniziare a utilizzare Git bisogna creare un nuovo **repository** o **clonando** uno gia esistente.
- Per iniziare un nuovo repository bisogna eseguire un comando nella directory del progetto:

```
git init
```

- Per clonare un repository gia esistente bisogna invece conoscere **l'URL** del repository remoto, aprire il terminale (come per esempio **PowerShell** o su Windows il prompt di comandi,
per aprirlo bisogna premere il tasto Windows e digitare **cmd** e infine inviare), digitare il comando di clonazione:

```
git clone URL_del_repository
```

## Aggiunta di file al repository:
Dopo aver inizializzato il repository, puoi aggiungere i file che desideri tracciare utilizzando il seguente comando:

```
git add nome_file
```

## Commit delle modifiche:
Una volta aggiunti i file, devi confermare le modifiche eseguite. Fai ciò tramite il comando:

```
git commit -m "Descrizione delle modifiche"
```

## Gestione dei rami:
Git consente di creare **rami** secondari in modo di apportare modifiche senza influenzare il ramo principale, chiamato **mater** o **main** , 
- Puoi creare un nuovo ramo eeguendo il comando:

```
git branch nome_del_ramo
```


- Quindi puoi pasare al ramo che piu ti interessa utilizzando il comando:

```
git checkout nome_del_ramo
```

- Oppure puoi creare e spostarti direttamente in un nuovo ramo utilizzando il comando:

```
git checkout -b nome_del_ramo
```

## Push e Pull da repository remoto:
Se stai collaborando a un progetto su un repository remoto come u **GitHub**, **GitLab** o **Bitbucket** puoi scaricare e inviare le modifiche con due comandi:
- Per scaricare le modifica fatte da altri utenti devi eseguire il comando:

```
git pull origin nome_del_ramo
```

- Per inviare le tue modifiche invece devi eseguire:

```
git push origin nome_del_ramo
```
## Storico
Per vedere lo storico
```
git log
```
## Tornare a una verisone precedente
per tornare a una versione precedente

```
git reset codice del commit
```
## scartare le modifiche
Per scartare le modifiche
```
git checkout nome del file
```


Questi sono solo i fondamenti di Git. Ci sono molte altre funzionalità e concetti più avanzati, ma questi ti daranno una buona base per iniziare.

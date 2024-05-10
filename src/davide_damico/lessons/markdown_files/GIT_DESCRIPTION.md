<!-- @format -->

# Git: Una Guida Introduttiva

Git è un sistema di controllo di versione distribuito che consente a voi e ai vostri team di tracciare le modifiche nei file di progetto e di collaborare efficacemente, indipendentemente dalla dimensione del progetto. È diventato uno strumento indispensabile per sviluppatori, programmatori e professionisti che lavorano su documenti o progetti che richiedono revisioni o contributi multipli.

## A cosa serve Git?

- **Tracciamento delle Modifiche**: Git vi aiuta a monitorare ogni cambiamento nei vostri file, permettendovi di ripristinare versioni precedenti in caso di errori o di necessità.
- **Collaborazione**: Facilita la collaborazione tra più persone su un unico progetto, consentendo a ciascuno di lavorare su una propria copia e poi unire le modifiche senza perdere il lavoro altrui.
- **Branching e Merging**: Vi permette di sviluppare nuove funzionalità o correggere bug in modo isolato attraverso i rami (branches), per poi unire (merge) tali cambiamenti al progetto principale quando siete pronti.

## Come si usa Git?

### 1. Installazione

Per iniziare, installate Git sul vostro computer. È disponibile per Windows, macOS e Linux.

### 2. Configurazione Iniziale

Una volta installato, aprite il terminale o il prompt dei comandi e configurate il vostro nome utente e email con i comandi:

`git config --global user.name "Il vostro nome"`
`git config --global user.email "la_vostra_email@example.com"`

Questo è importante perché ogni commit che fate sarà associato a queste informazioni.

## Iniziare un Nuovo Repository

Per iniziare a tracciare un progetto con Git, dovrete navigare nella cartella del progetto tramite il terminale e digitare:

`git init`

Questo comando crea un nuovo sottodirectory `.git` nella vostra cartella del progetto, che contiene tutti i file necessari per il tracciamento delle versioni.

## Tracciare i File e Fare Commit

Dopo aver modificato i file nel vostro progetto, potete usare i seguenti comandi per tracciarli e registrare le vostre modifiche:

`git add .`
`git commit -m "Un messaggio che descrive la modifica"`

Il comando `git add .` aggiunge tutti i file modificati all'area di staging, preparandoli per il commit. `git commit` registra effettivamente le modifiche, con un messaggio che descrive cosa avete fatto.

## Collaborare

Per collaborare con altri, di solito caricherete il vostro repository su un servizio di hosting Git come GitHub, GitLab o Bitbucket. Da lì, potete clonare repository, fare push delle vostre modifiche, fare pull delle modifiche degli altri, e gestire le merge delle divergenze.

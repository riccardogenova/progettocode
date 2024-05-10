<!-- @format -->

Git è un programma utilissimo per modificare, risolvere bug e aggiungere funzione nel codice.
Permette anche a più persone di lavorare contemporaneamente sullo stesso codice.
Tra le sue funzioni possiamo trovare:

1. la creazione di repository: ovvero delle librerie digitali che contengono un singolo progetto( es. codice di un gioco javascript)
1. ogni volta che si modifica un progetto è possibile tenere traccia di tutte le modifiche, cosa è stato modificato e da chi.
1. È possibile vedere tutte le versioni precedenti delle parti modificate, grazie alla funzione snapshot.
1. Possibilità di creare "branch" di codice, ovvero parti del codice principale modificabili senza intaccare il codice principale. Sviluppare una nuova funzionalità isolata dal ramo principale (solitamente chiamato "master")
   git branch <nome*ramiificazione>
   git checkout <nome_ramificazione>
   Quando hai completato il lavoro sulla nuova funzionalità, puoi unire la tua ramificazione al ramo principale con:
   git checkout master(branch di default, detta anche main)
   git merge <nome_ramificazione>
   Le cartelle dentro le cartelle, devono essere aperte trascinandole su visul studio code, NON APRIRLE SU GIT.
   Per aggiungere i file, mettere il link che segue https://github.com/Flavioleot/progettocode.git
   Il prompt di windows è diverso da quello del mac!
   Ecco una lista di comandi base di GIT divisi per funzione:
   \_CONFIGURAZIONE*

- git config --global user.name "Tuo Nome": Imposta il nome dell'utente.
- git config --global user.email "tua@email.com": Imposta l'indirizzo email dell'utente.
- git config --global core.editor "nome*del_tuo_editor": Imposta l'editor di testo preferito.
  \_CREAZIONE E CLONAZIONE DI UNA REPOSITORY*
- git init: Inizializza un nuovo repository Git nella directory corrente.
- git clone url*repository: Clona un repository Git esistente nella tua directory locale.
  \_OPERAZIONI SUI FILE*
- git add nome_file: Aggiunge un file all'area di staging.
- git add .: Aggiunge tutti i file modificati all'area di staging.
- git rm nome_file: Rimuove un file dalla repository e dall'area di staging.
- git mv vecchio*nome nuovo_nome: Rinomina un file e aggiunge la modifica all'area di staging.
  \_COMMIT*
- git commit -m "Messaggio del commit": Esegue un commit con un messaggio descrittivo.
- git commit -a -m "Messaggio del commit": Aggiunge automaticamente e committa tutti i file modificati.
- git commit --amend: Modifica l'ultimo commit.
- git cherry-pick codicecommit: prendi un commit e lo sposti in un altro
  _COMANDI PER GESTIRE IL REPOSITORY DELLO STATO_
- git status: fa vedere quanti fai sono stati caricati e quali in attesa di caricamento
- git log: fa vedere tutti i commit, chi ci ha lavorato e quando
- git log --online
- git log --graph --online --all
  _COMANDI PER GESTIRE IL REPOSITORY DEL BRANCHING_
- git branch nome_ramo: Crea un nuovo ramo.
- git branch -d nome_ramo: Cancella il ramo.
- git checkout nome_ramo: Cambia ramo.
- git checkout -b nome*ramo: Crea e passa a un nuovo ramo.
  \_COMANDI PER CONTROLLO REMOTO*
  -git remote: Mostra l'elenco dei repository remoti collegati.
- git remote add nome_remoto url_remoto: Collega un repository remoto.
- git push nome_remoto nome_ramo: Carica un ramo su un repository remoto.
- git pull nome_remoto nome_ramo: Scarica e fonde un ramo da un repository remoto.
- git remote rename origin nuovo-nome: Rinomina il repo da origin a nuovo-nome. _ALTRI COMANDI MOLTO UTILI_
- git clone url_repository: Clona un repository Git esistente nella tua directory locale.
- git fetch: Recupera i riferimenti dai repository remoti senza effettuare il merge.
- git diff: Mostra le modifiche tra l'area di staging e l'ultimo commit.
- git stash: Mette da parte temporaneamente le modifiche non commesse.
- git tag nome*tag: Crea un tag per un commit specifico.
  \_COMANDI PER RISOLVERE I CONFLITTI*
- git diff nomebranch1..nome branch2: fa vedere le differenze tra i due rami
- git mergetool: per iniziare uno strumento per il merge e la risoluzione dei conflitti.
- git reset nomefile: toglie il file dalla zona di staging
- git reset --hard HASH-nomecommit: resetta la repository al commit specificato, eliminando quelli successivi
  _COMANDI PER LAVORARE SU FILE IN REMOTO_
  - git remote -v: visualizza gli URL dei repository remoti collegati.
  - git fetch origin: recupera i cambiamenti del repository remoto origin.
  - git push origin nomebranch: carica un branch nel repostiroy remoto origin.
  - git pull origin nomebranch: scarica i cambiamenti del repository remoto origin e li unisce al ramo corrente.

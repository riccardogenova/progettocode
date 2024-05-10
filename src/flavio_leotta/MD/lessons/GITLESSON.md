<!-- @format -->

Git è un programma utilissimo per modificare, risolvere bug e aggiungere funzione nel codice.
Permette anche a più persone di lavorare contemporaneamente sullo stesso codice.
Tra le sue funzioni possiamo trovare:

1. la creazione di repository: ovvero delle librerie digitali che contengono un singolo progetto( es. codice di un gioco javascript)
1. ogni volta che si modifica un progetto è possibile tenere traccia di tutte le modifiche, cosa è stato modificato e da chi.
1. È possibile vedere tutte le versioni precedenti delle parti modificate, grazie alla funzione snapshot.
1. Possibilità di creare "branch" di codice, ovvero parti del codice principale modificabili senza intaccare il codice principale. Sviluppare una nuova funzionalità isolata dal ramo principale (solitamente chiamato "master")
   git branch <nome_ramiificazione>
   git checkout <nome_ramificazione>
   Quando hai completato il lavoro sulla nuova funzionalità, puoi unire la tua ramificazione al ramo principale con:
   git checkout master(branch di default, detta anche main)
   git merge <nome_ramificazione>
   Le cartelle dentro le cartelle, devono essere aperte trascinandole su visul studio code, NON APRIRLE SU GIT.
   Per aggiungere i file, mettere il link che segue https://github.com/Flavioleot/progettocode.git

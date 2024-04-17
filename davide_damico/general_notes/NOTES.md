Quando bisogna scartare tramite il git checkout una modifica fatta ad un file , consigliato chiudere prima il file , perchè VSC potrebbe farti confondere e col file aperto ti lascia le modifiche apportate , ma ti spunterà il pallino come se non avessi salvato

Comandi git generali:

git add nome.file

git commit -m "messaggio da inserire"

git push

git pull link.repository (per pullare dei file da un repository su vsc , attenzione a essere sul branch che si vuole)

git status

git log

git checkout nome.del.file (
Dopo essere tornati indietro a prima della modifica , se vogliamo cancellare il file precedentemente modificato perchè non ci serve più)

git reset id.unico.del.commit (Per tornare ad una versione precedente del file)

git branch (per capire in che ''tunnel'' siamo)

Per cambiare il nome del branch usando il comando: git branch -m "nome nuovo

git remote add origin URL (per connettere il repository) così che ogni volta che faccio un push , lo farà automaticamente in quel repository ('origin' è un nome creato automaticamente di default , però può essere modificato a proprio piacere)

git remote remove origin (per eliminare il collegamento, se si vuole si può riaggiungere tramite il comando precedente)

git clone URL.repository (consente di copiare i file di quel repository)

git checkout nome.branch (per spostarci su un branch)

git checkout -b nome.branch (per spostarci su un branch non esistente che quindi verrà creato)

git remote add origin URL , ricordiamo che origin è un nome che diamo noi di default , ma possiamo scrivere qualsiasi cosa

git diff nome.del.file.su.git.status (serve a far vedere le differenze che ci sono state fatte dopo una commit)

git branch -m nuovo.nome (serve a rinominare il branch in cui ci troviamo)

git branch -D nome.del.branch (per eliminare un branch)

git fetch --prune (serve ad aggiornare la lista dei branch remoti , rimuovendo quelli che non esistono più sul remote)

git branch -r (serve a mostrare tutti i branch remoti)

git push origin --delete nome.branch (serve a cancellare il branch dal repository remoto)

git reset --hard origin/master (per cancellare ciò che ho in locale su vsc e prendere ciò che ho in remoto sul repo)

[Lighthouse , programma usato per ''votare'' un sito da diversi lati]

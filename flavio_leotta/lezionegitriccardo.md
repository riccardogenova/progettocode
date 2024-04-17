GITHUB
Possiamo mettere il link nel nostro github per fare push(upload) e pull(download), ricorda il comando :
git remote add origin *url di pagina github con username e repository*. Ti dice di puntare su quell'url per scaricare i dati
se poi si vuole rimuovere: git remote remove origin

Nel caso si voglia fare l'upload, si scrive:
git push ori *branch*

Nel caso in cui si vogliano scaricare le modifiche di un file in remoto, si usa il comando:
git pull

Esiste anche il comando per copiare una repository di un altro utente, scrivendo:
git clone *qui si aggiunge il link  URL della cartella da copiare* 
La clonerà nel percorso in cui vi mettete(esempio git su desktop o su vs studio in cartella specifica)

altri codici simpatici:
git init
git add
git commit
git log: mette un'anteprima dei vari commit(modifiche al codice) svolti
git push origin : per fare l'upload del codice seguito dal nome della branch che si vuole aggiungere e del profilo git e la repository
git pull: per estrarre file, ma su git hub c'è  un tasto per il pulls request(merge) request, per unire i branch al codice principale
git clone: modalità ssp, ssh, github oppure zip()
git remote

parlando dei *branch*, è paragonabile ad una via con più diramazioni.
es branch 1, branch 2, branch 3.
Come storie parallele di un libro con più versioni che si diramano, per poi ricongiungersi nella storia principale o meno. Agevola il lavoro di gruppo.

Quando si vogliono unire tutto il branch, si effettua il merge:l'unione dei branch al codice principale, ci sono tre metodi diversi. merge e reba(es. il sito composto da più parti)
I codici da usare per il branch sono:
git branch
git checkout -b "nominativo branch" per crearne uno nuovo
git checkout "nome branch" è per spostarsi tra le varie branch
 per cambiare il nome del branch usa git branch -m +nome vecchio nome nuovo+
 poi metti git push origin -u *nome nuovo*
 la cosa da fare spesso è di strutturare la nostra cartella, rinominandola e aggiustando un pò nel profilo github.
 Evitare di scrivere in più caratteri, tutto maiuscolo o tutto minuscolo.
 I file markdown devono essere in maiuscolo.
 Schematizzare e organizzare i file
 in maniera semplice e chiara,sopratttuto coi nomi.
 creare cartelle per le sheet dei comandi, le lezioni e via dicendo e poi caricarli su git.

Risistemare appunti git e markdown, rendila bella nonostante le difficoltà artistiche.
obiettivo oggi: ripasso e sistema bene le lezioni su git e markdown.

Cerca e aggiungi nuovi comandi git fatti oggi 16 aprile.
 Oggi si parlerà di javascript e con altri linguaggi di formattazione, tipo html.
 Nel documento index si possono trovare le informazioni sul sito, ogni tag ha un suo significato, scopo e definizione.
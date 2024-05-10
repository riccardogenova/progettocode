<!-- @format -->

<h1>Cos'è CSS?</h1>
CSS è un linguaggio di stile utilizzato per definire l'aspetto e la formattazione di un documento HTML.
Consente di controllare il layout, i colori, i tipi di carattere e altri aspetti visivi del contenuto web.

Struttura di un File CSS:
Un file CSS è costituito da un insieme di regole di stile, ognuna delle quali si applica a uno o più elementi HTML.
Ogni regola di stile è composta da un selettore e un blocco di dichiarazioni.

Ad esempio:

selettore {<br>
proprietà: valore;<br>
}

<hr>

**Selettori CSS:** <br>
I selettori CSS identificano gli elementi HTML a cui verranno applicati i regole di stile.
Possono essere basati su elementi, classi, ID, attributi e altro ancora.

-Selettori di elementi:
Si applicano a tutti gli elementi di un determinato tipo (ad esempio, p per i paragrafi). <br>
-Selettori di classe: Si applicano agli elementi che hanno un determinato valore nell'attributo class (ad esempio, .classe). <br>
-Selettori di ID: Si applicano agli elementi che hanno un determinato valore nell'attributo id (ad esempio, #id).

<hr>
**Dichiarazioni CSS:** <br>
Le dichiarazioni specificano quali attributi di stile devono essere applicati agli elementi selezionati. Ogni dichiarazione è composta da una proprietà e un valore separati da due punti.

Esempio:

p { <br>
color: blue; <br>
font-size: 16px; <br>
}

<hr>

**Box Model:** <br>
Il Box Model è un concetto fondamentale in CSS che descrive come gli elementi HTML vengono visualizzati
e occupano spazio sullo schermo. È composto da margini, padding, bordi e content area.

**Selezione di Priorità (Specificità):** <br>
Quando più regole di stile si applicano a uno stesso elemento, viene utilizzata la selezione di
priorità per determinare quale regola deve prevalere. La specificità è una misura di quale regola
ha maggiore peso ed è basata sui selettori utilizzati.

**Media Queries:** <br>
Le media queries consentono di applicare regole di stile diverse in base alle caratteristiche del dispositivo,
come larghezza dello schermo, orientamento e altro ancora. Sono comunemente utilizzate per rendere un sito web
reattivo e adattabile a diverse dimensioni e tipi di dispositivi.

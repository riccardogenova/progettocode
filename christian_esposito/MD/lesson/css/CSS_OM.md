# Cascading Style Sheets Object Model

 Non esiste un vero e proprio modello a oggetti per i CSS standardizzato universalmente come il DOM (Document Object Model) per l'HTML. Tuttavia, ci sono due concetti correlati che riguardano l'accesso e la manipolazione degli stili CSS usando JavaScript:

+ ## 1. Fogli di stile CSS (CSSOM)
  + Il CSSOM è un'API (Application Programming Interface - Interfaccia di programmazione dell'applicazione) che consente di accedere e modificare le regole CSS definite in un foglio di stile o incorporate nel documento HTML. Fornisce un modo programmatico per interagire con gli stili applicati agli elementi su una pagina web
  + Ecco alcuni aspetti chiave del CSSOM

      + Accesso agli stili: Puoi utilizzare metodi come document.styleSheets e element.style per accedere rispettivamente ai fogli di stile e agli stili di singoli elementi.

      + Modifica degli stili: Il CSSOM consente di modificare gli stili esistenti o aggiungerne di nuovi in modo dinamico utilizzando JavaScript.

      + Funzionalità limitata: Sebbene il CSSOM offra l'accesso agli stili, non fornisce lo stesso livello di capacità di manipolazione del DOM per gli elementi HTML. Non puoi direttamente aggiungere, rimuovere o riordinare le regole CSS utilizzando il CSSOM.

+ ## 2. Modello a oggetti tipizzato CSS (CSSOM-TR)
  + Il modello a oggetti tipizzato CSS è una specifica più recente che si basa sul CSSOM introducendo una rappresentazione tipizzata dei valori CSS.
  
  + Invece di lavorare con valori stringa per proprietà come "color" o "font-size", il CSS Typed OM consente di interagire con questi valori come tipi di dati specifici (ad esempio, Color, UnitValue). Ciò consente una manipolazione più robusta e sicura dei tipi di stili CSS.

  + Vantaggi:
    + Migliorata leggibilità e manutenzione del codice.
    + Riduzione degli errori dovuti a mancata corrispondenza dei tipi.
    + Abilita funzionalità come completamento automatico e controllo dei tipi negli ambienti di sviluppo.

  + Supporto del browser:
    Il CSS Typed OM è una specifica relativamente nuova e il supporto del browser è ancora in evoluzione. Sebbene non tutti i principali browser lo supportino ancora completamente, l'adozione sta aumentando. Puoi controllare caniuse.com per le informazioni di compatibilità più recenti.
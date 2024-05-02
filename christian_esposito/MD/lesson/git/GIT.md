# GIT

+ Git è un sistema di controllo versione (version control system, VCS) molto utilizzato, in particolare per progetti software. Immagina Git come uno strumento che ti permette di tenere traccia di tutte le modifiche apportate ai tuoi file nel corso del tempo. È come avere una macchina del tempo per il tuo codice!

## A cosa serve Git?

### Ecco alcuni dei vantaggi principali di utilizzare Git:

+ Cronologia: Git registra ogni modifica effettuata ai tuoi file, creando una cronologia (o storico) che puoi consultare in qualsiasi momento. Puoi vedere esattamente chi ha fatto cosa e quando.
+ Controllo delle versioni: Puoi tornare a qualsiasi versione precedente del tuo progetto con un semplice comando. Questo è utilissimo se hai fatto qualche cambiamento indesidertato e vuoi tornare indietro.
+ Collaborazione: Git è fantastico per lavorare con altri sviluppatori sullo stesso progetto. Consente a più persone di lavorare su diverse parti del codice contemporaneamente, senza pestarsi i piedi a vicenda.
Come funziona Git?

Git funziona creando "istantanee" (snapshot) del tuo progetto a intervalli regolari. Queste istantanee, chiamate commit, memorizzano lo stato di tutti i file in quel momento specifico. Ogni commit ha un messaggio associato, che descrive le modifiche apportate.

Pensa a Git come a una serie di scatole impilate una sopra l'altra. Ogni scatola rappresenta un commit, e contiene una copia esatta di tutti i tuoi file in quel momento. Puoi sempre tornare a una scatola precedente (commit) per vedere come era il tuo progetto in quel preciso istante.

## Hash (Commit Hash):

### Cos'è un hash di commit?
Ogni commit in Git è identificato da un hash SHA-1, una stringa di 40 caratteri esadecimali univoca che rappresenta uno stato specifico del tuo progetto.

### Generazione dell'hash:
L'hash viene generato prendendo in considerazione tutti i dettagli del commit, inclusi i cambiamenti apportati, l'autore, la data e il messaggio di commit.

### Riferimento al commit:
Gli hash sono utilizzati per riferirsi a commit specifici, consentendo di identificare univocamente una versione specifica del tuo progetto.

### Commit univoci:
Anche una singola modifica può generare un nuovo hash di commit univoco.

### Visualizzazione degli hash:
Puoi visualizzare la cronologia dei commit con i rispettivi hash utilizzando il comando git log.

### Utilizzo degli hash in comandi Git:
Puoi utilizzare gli hash per eseguire operazioni specifiche su commit particolari, ad esempio per spostarti su un commit specifico con git checkout [ hash ].
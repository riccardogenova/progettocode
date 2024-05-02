Ecco un testo markdown che spiega cosa è JavaScript, le sue funzionalità, e come viene utilizzato, con focus sulle sue proprietà di linguaggio dinamico, l'uso in ambiente server-side tramite Node.js, e il supporto alla programmazione orientata agli oggetti:

# JavaScript: Cosa è e a Cosa Serve

JavaScript è un linguaggio di programmazione ad alto livello, dinamico, e interpretato, comunemente utilizzato per lo sviluppo di siti web interattivi. Originariamente creato per aggiungere interattività alle pagine web nei browser, il suo ruolo si è significativamente espanso negli anni.

## Caratteristiche e Utilizzo di JavaScript

JavaScript viene eseguito principalmente nei browser client-side, dove permette di creare risposte dinamiche agli input degli utenti. Ad esempio, può essere utilizzato per aggiornare il contenuto mostrato in una pagina web senza ricaricarla, per creare mappe interattive, animazioni grafiche, giochi in-browser e molto altro.

### JavaScript è Dinamicamente Tipizzato

A differenza dei linguaggi staticamente tipizzati, dove il tipo di ogni variabile deve essere dichiarato esplicitamente, JavaScript è un linguaggio dinamicamente tipizzato. Ciò significa che le variabili possono essere assegnate e riassegnate con valori di diversi tipi senza che il programmatore debba specificare di che tipo sono:

```javascript
let data = 42; // inizialmente un numero
data = "cambiato in una stringa"; // ora diventa una stringa
data = true; // e infine un booleano
```

Questa flessibilità può aumentare la velocità di sviluppo, ma anche portare a errori più difficili da rilevare.

### JavaScript sul Server con Node.js

Node.js ha esteso l'utilizzo di JavaScript agli ambienti server-side, permettendo agli sviluppatori di scrivere il backend delle loro applicazioni in JavaScript. Questo ha unificato lo sviluppo di frontend e backend sotto un unico linguaggio, semplificando lo sviluppo di applicazioni web full-stack. Node.js utilizza un modello di I/O non bloccante e orientato agli eventi, ottimale per costruire applicazioni web scalabili.

### Programmazione Orientata agli Oggetti (OOP)

JavaScript supporta la programmazione orientata agli oggetti (OOP). Utilizza un modello basato sui prototipi, piuttosto che sulle classi tradizionali come in altri linguaggi. Tuttavia, recenti aggiornamenti al linguaggio hanno introdotto la sintassi `class` per semplificare la scrittura di codice orientato agli oggetti:

```javascript
class Persona {
  constructor(nome, età) {
    this.nome = nome;
    this.età = età;
  }

  saluta() {
    console.log(`Ciao, mi chiamo ${this.nome} e ho ${this.età} anni.`);
  }
}

const mario = new Persona("Mario", 30);
mario.saluta(); // "Ciao, mi chiamo Mario e ho 30 anni."
```

In conclusione, JavaScript è un linguaggio versatile che può essere utilizzato sia per lo sviluppo di frontend che di backend, supportando diversi stili di programmazione inclusa la OOP, e facilitando lo sviluppo di applicazioni ricche e interattive.

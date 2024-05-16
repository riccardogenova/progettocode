# *OOP DI JAVASCRIPT*
OOP (Object-Oriented Programming) in JavaScript consente di creare oggetti con proprietà e metodi per organizzare il codice in maniera più modulare e riutilizzabile.

CARATTERISTICHE
-
Alcune catteristiche principali dell'OOP sono le seguenti:

- Incapsulamento: Incapsulamento significa raggruppare dati e operazioni correlate in un'unica entità, che è l'oggetto. Le proprietà e i metodi di un oggetto possono essere nascosti o resi privati, consentendo di proteggere i dati da modifiche accidentali o indesiderate.

- Ereditarietà: La ereditarietà consente agli oggetti di ereditare proprietà e metodi da altri oggetti, consentendo di creare una gerarchia di classi e sottoclassi. In JavaScript, questo è spesso realizzato tramite prototipi.

- Polimorfismo: Il polimorfismo permette a oggetti di diverse classi di rispondere allo stesso metodo in modo diverso. Ad esempio, due oggetti di classi diverse possono implementare lo stesso metodo in modi diversi.

- Astrazione: L'astrazione consente di focalizzarsi sui dettagli rilevanti di un oggetto e nascondere i dettagli non necessari. Questo permette di semplificare la complessità del codice e migliorare la sua comprensione e manutenibilità.

Funzionalità
-
- `Oggetti`: Gli oggetti sono la base dell'OOP in JavaScript. Possono essere creati in due modi: utilizzando oggetti letterali `{}` o utilizzando il costruttore `new Object()`.
```
// Utilizzando oggetti letterali
let persona = {
  nome: "Mario",
  cognome: "Rossi",
  eta: 30,
  saluta: function() {
    return "Ciao, sono " + this.nome + " " + this.cognome + "!";
  }
};

// Utilizzando il costruttore Object()
let animale = new Object();
animale.tipo = "Cane";
animale.razza = "Labrador";
animale.abbaiare = function() {
  return "Woof!";
};
```
Questo è un esempio della creazione di un oggetto.

- `Prototipi`: In JavaScript, gli oggetti ereditano proprietà e metodi da altri oggetti tramite prototipi. Ogni oggetto ha un riferimento al suo prototipo padre, che può essere utilizzato per condividere funzionalità tra gli oggetti.

```
function Persona(nome, cognome) {
  this.nome = nome;
  this.cognome = cognome;
}

Persona.prototype.saluta = function() {
  return "Ciao, sono " + this.nome + " " + this.cognome + "!";
};

let mario = new Persona("Mario", "Rossi");
console.log(mario.saluta()); // Output: Ciao, sono Mario Rossi!
```

- `Classi`: A partire da ECMAScript 2015 (ES6), JavaScript supporta la sintassi delle classi, che consente di definire oggetti e prototipi in modo più simile ad altri linguaggi di programmazione orientati agli oggetti.

```
class Animale {
  constructor(tipo, razza) {
    this.tipo = tipo;
    this.razza = razza;
  }
  
  abbaiare() {
    return "Woof!";
  }
}

let cane = new Animale("Cane", "Labrador");
console.log(cane.abbaiare()); // Output: Woof!
```
<!-- @format -->

# Object-Oriented Programming

- Programmazione Orientata agli Oggetti, è un paradigma di programmazione che si basa sull'idea di "oggetti" che contengono dati e metodi che operano su questi dati. Questi oggetti sono istanze di classi, che fungono da modelli o template per creare gli oggetti stessi.

## Classe

- Una classe è un modello per creare oggetti. Definisce gli attributi (dati) e i metodi (comportamenti) che gli oggetti di quella classe possiedono.
  es: class Persona {
  // Metodo costruttore
  constructor(nome, cognome, eta) {
  this.nome = nome;
  this.cognome = cognome;
  this.eta = eta;
  }
  nomeCompleto() {
  return this.nome + ' ' + this.cognome;
  }
  isMaggiorenne() {
  return this.eta >= 18;
  }
  }
  const persona1 = new Persona('Mario', 'Rossi', 25);
  console.log(persona1.nomeCompleto())
  console.log(persona1.isMaggiorenne());
  - persona: è il nome della classe, che si identifica con le parentesi graffe
  - Il metodo constructor è il metodo costruttore, che viene chiamato automaticamente quando si crea un nuovo oggetto della classe. Viene utilizzato per inizializzare le proprietà dell'oggetto.
  - nomeCompleto e isMaggiorenne sono due metodi (funzioni) della classe Persona.
  - Viene creato un nuovo oggetto persona1 utilizzando il costruttore della classe Persona, passando i parametri nome, cognome e eta.
  - Viene chiamato il metodo nomeCompleto() sull'oggetto persona1 per ottenere il nome completo della persona.
  - Viene chiamato il metodo isMaggiorenne() sull'oggetto persona1 per verificare se la persona è maggiorenne.

## Oggetto:

- Un oggetto è un'istanza di una classe. Contiene dati, sotto forma di attributi, e metodi che possono accedere e manipolare quei dati.
  si definisce con {}

## Incapsulamento:

- Questo è il concetto di raggruppare dati e metodi all'interno di un'unità chiamata "classe". L'incapsulamento protegge i dati all'interno di una classe da modifiche accidentali o indesiderate da parte di codice esterno.

es:

- class ContoBancario {
  constructor(titolare, saldoIniziale) {
  this.titolare = titolare;
  this.saldo = saldoIniziale;
  }
  deposita(ammontare) {
  this.saldo += ammontare;
  }
  preleva(ammontare) {
  if (ammontare <= this.saldo) {
  this.saldo -= ammontare;
  } else {
  console.log('Fondi insufficienti');
  }
  }
  ottieniSaldo() {
  return this.saldo;
  }
  }
  const mioConto = new ContoBancario('Mario Rossi', 1000);

- In questo esempio, le variabili titolare e saldo sono incapsulate all'interno della classe ContoBancario
- possono essere modificate solo attraverso i metodi pubblici deposita, preleva e ottieniSaldo.

## Ereditarietà:

- È il meccanismo che consente a una classe di ereditare attributi e metodi da un'altra classe. Questo consente di creare gerarchie di classi, con classi più specifiche che ereditano comportamenti da classi più generiche.
  es:
  class Animale {
  constructor(nome) {
  this.nome = nome;
  }

  saluta() {
  return `Ciao, sono ${this.nome}`;
  }
  }

class Cane extends Animale {
abbaia() {
return 'Woof woof!';
}
}
const fido = new Cane('Fido');
console.log(fido.saluta());
console.log(fido.abbaia());
In questo esempio, abbiamo una classe base Animale che ha un metodo saluta. La classe Cane eredita da Animale utilizzando la parola chiave extends e aggiunge un metodo abbaia. L'oggetto fido è un'istanza della classe Cane e può utilizzare sia il metodo saluta della classe base che il metodo abbaia della classe figlia.

con const fido = new Cane('Fido');
stiamo utilizzando la parola chiave new per creare un nuovo oggetto chiamato fido utilizzando il costruttore della classe Cane, passando 'Fido' come argomento al costruttore. Questo crea un'istanza della classe Cane con il nome 'Fido'.

## Polimorfismo:

- Il polimorfismo è un concetto fondamentale della programmazione orientata agli oggetti che si riferisce alla capacità di un oggetto di apparire sotto forma di varie forme o tipi. In altre parole, più oggetti possono essere trattati allo stesso modo se appartengono alla stessa gerarchia di classi, ma ciascuno può comportarsi in modo diverso.
  es:
  class Animale {
  emettiSuono() {
  console.log('Un animale generico emette un suono.');
  }
  }
  class Cane extends Animale {
  emettiSuono() {
  console.log('Il cane abbaia: Woof!');
  }
  }
  class Gatto extends Animale {
  emettiSuono() {
  console.log('Il gatto fa il verso: Meow!');
  }
  }
  const animale1 = new Cane();
  const animale2 = new Gatto();
  animale1.emettiSuono();
  animale2.emettiSuono();
- Nel codice fornito, animale1 è un'istanza della classe Cane, che estende la classe Animale.
- animale2 è un'istanza della classe Gatto he estende la classe Animale.
- Quando chiamiamo animale1.emettiSuono(), JavaScript cerca prima il metodo emettiSuono() nella classe Cane. Se trova una definizione di metodo in Cane, la esegue. Se non la trova, risale nella gerarchia delle classi e cerca nella classe genitore, cioè Animale. Se trova una definizione di metodo in Animale, la esegue.

<!-- @format -->

# Oggetti in JavaScript

Gli oggetti sono una parte fondamentale di JavaScript e sono utilizzati per rappresentare dati complessi e organizzati. In questa lezione, impareremo cosa sono gli oggetti, come vengono definiti e come accedere ai loro membri.

## Cos'è un Oggetto in JavaScript?

Un oggetto in JavaScript è una collezione di coppie **chiave-valore**, dove ogni chiave è una stringa (o Symbol) e ogni valore può essere di qualsiasi tipo di dato JavaScript, compresi altri oggetti, funzioni e array.

## Definizione di un Oggetto

Per definire un oggetto in JavaScript, possiamo utilizzare le parentesi graffe `{}`:

```javascript
let persona = {
  nome: 'Mario',
  cognome: 'Rossi',
  eta: 30,
  professione: 'Programmatore',
};
```

In questo esempio, abbiamo definito un oggetto persona con quattro proprietà: nome, cognome, eta e professione, ciascuna con il suo valore corrispondente.

## Accesso alle Proprietà degli Oggetti

Possiamo accedere alle proprietà degli oggetti utilizzando la notazione a punto (`.`) o la notazione con le parentesi quadre (`[]`).

### Notazione a Punto

```javascript
console.log(persona.nome); // Output: "Mario"
console.log(persona.eta); // Output: 30
```

### Notazione con Parentesi Quadre

```javascript
console.log(persona['nome']); // Output: "Mario"
console.log(persona['eta']); // Output: 30
```

### Aggiunta di Nuove Proprietà

```javascript
persona.sesso = 'Maschio';
console.log(persona.sesso); // Output: "Maschio"
```

## Metodi degli Oggetti

Gli oggetti possono anche contenere funzioni, che sono chiamate metodi degli oggetti. Ecco un esempio:

```javascript
let persona = {
  nome: 'Mario',
  cognome: 'Rossi',
  nomeCompleto: function () {
    return this.nome + ' ' + this.cognome;
  },
};

console.log(persona.nomeCompleto()); // Output: "Mario Rossi"
```

## Conclusione

Gli oggetti in JavaScript sono strumenti potenti per organizzare e manipolare dati. Conoscere come definire, accedere e manipolare gli oggetti.

# Classi in JavaScript

Le classi sono uno strumento fondamentale della programmazione orientata agli oggetti in JavaScript. In questa lezione, esploreremo cosa sono le classi, come vengono definite e come vengono utilizzate per creare oggetti.

## Cos'è una Classe in JavaScript?

Una classe in JavaScript è un modello per creare oggetti. Definisce le proprietà e i comportamenti comuni a tutti gli oggetti che ne derivano.

## Definizione di una Classe

Per definire una classe in JavaScript, utilizziamo la parola chiave **class**, seguita dal nome della classe. All'interno delle parentesi graffe, definiamo il **costruttore** e altri metodi della classe.

```javascript
class Persona {
  constructor(nome, cognome, eta) {
    this.nome = nome;
    this.cognome = cognome;
    this.eta = eta;
  }

  nomeCompleto() {
    return this.nome + ' ' + this.cognome;
  }
}
```

In questo esempio, abbiamo definito una classe **Persona** con un _costruttore_ che accetta tre parametri: **nome**, **cognome** e **eta**. Abbiamo anche definito un metodo **nomeCompleto** che restituisce il nome completo della persona.

## Creazione di Oggetti da una Classe

Per creare un nuovo oggetto da una classe, utilizziamo la parola chiave **new**, seguita dal nome della classe e gli eventuali argomenti per il costruttore.

```javascript
let persona1 = new Persona('Mario', 'Rossi', 30);
let persona2 = new Persona('Luigi', 'Verdi', 25);
```

Abbiamo creato due oggetti **persona1** e **persona2** utilizzando la classe **Persona**.

## Accesso alle Proprietà e Metodi delle Classi

Per accedere alle proprietà e ai metodi di un oggetto creato da una classe, utilizziamo la notazione a punto (**.**).

```javascript
console.log(persona1.nome); // Output: "Mario"
console.log(persona2.nomeCompleto()); // Output: "Luigi Verdi"
```

## Ereditarietà delle Classi

Le classi in JavaScript supportano _l'ereditarietà_, consentendo a una classe di ereditare le proprietà e i metodi da un'altra classe. Utilizziamo la parola chiave **extends** per realizzare l'ereditarietà.

```javascript
class Studente extends Persona {
  constructor(nome, cognome, eta, corso) {
    super(nome, cognome, eta);
    this.corso = corso;
  }
}
```

In questo esempio, la classe **Studente** eredita la struttura della classe **Persona** e aggiunge una proprietà corso.

## Conclusione

Le classi in JavaScript forniscono un modo conveniente per creare oggetti con proprietà e comportamenti comuni.

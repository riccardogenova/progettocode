<!-- @format -->

# Che cos’è l'OOP?

L'OOP è un paradigma di programmazione che si basa sulla creazione e manipolazione di oggetti che conatengono dati e operazioni. Gli ogetti sono istanze di classi.

# Caratteristiche dekk'OOP:

1. ## Incapsulamento

- È il concetto di racchiudere i dati e le operazioni che li manipolano all'interno di un'unica entità, ovvero la classe.

- L'accesso ai dati avviene attraverso metodi definiti nella classe, permettendo di proteggere i dati da modifiche indesiderate.

```javascript
class Persona {
  constructor(nome, cognome, eta) {
    this.nome = nome;
    this.cognome = cognome;
    this.eta = eta;
  }
  getAge() {
    console.log(this.eta);
  }
}
const persona1 = new Persona('Raffaele', 'Scala', 23);

persona1.getAge();
```

2. ## Ereditarietà

- Consente di definire una nuova classe basata su una classe esistente, _ereditando_ le sue caratteristiche.

- Aiuta a organizzare meglio il codice evitando la duplicazione di codice.

```javascript
class Persona {
  constructor(nome, cognome, eta) {
    this.nome = nome;
    this.cognome = cognome;
    this.eta = eta;
  }
  getAge() {
    console.log(this.eta);
  }
}
class Studente extends Persona {
  constructor(nome, cognome, eta, corso) {
    super(nome, cognome, eta);
    this.corso = corso;
  }
}
const persona1 = new Persona('Raffaele', 'Scala', 23);

persona1.getAge();

const studente1 = new Studente('Raffaele', 'Scala', 23, 'Progetto CODE');
console.log(studente1.corso);
```

3. ## Polimorfismo

- Significa che ogetti di diverse classi possono essere trattati allo stesso modo.

- Esistono due tipi di polimorfismo:

1. Polimorfismo di inclusione: un ogetto di una classe può rappresentare istanze di qualsiasi classe derivata.
2. Polimorfismo di sovraccarico: permette di usare lo stesso nome di metodo può essere utilizzato per metodi con comportamenti diversi.

```javascript
class Persona {
  constructor(nome, cognome, eta) {
    this.nome = nome;
    this.cognome = cognome;
    this.eta = eta;
  }
  getAge() {
    console.log(this.eta);
  }
}
class Studente {
  constructor(nome, cognome, eta) {
    this.nome = nome;
    this.cognome = cognome;
    this.eta = eta;
  }
  getAge() {
    console.log(this.eta, 'Sono uno studente del Progetto CODE');
  }
}

const persona1 = new Persona('Raffaele', 'Scala', 23);
const studente1 = new Studente('Raffaele', 'Scala', 23);
persona1.getAge();
studente1.getAge();
```

4. ## Astrazione

- Consette di modellare ogetti reali come entità astratte con caratteristiche rilevanti per il sistema in cui sta lavorando

- Nasconde i dettagli di implementazione, fornendo una visione ad alto livello del funzionamento degli ogetti.

```javascript
class Macchina {
  constructor(marca, modello) {
    this.marca = marca;
    this.modello = modello;
  }

  displayInfo() {
    console.log(`${this.marca} ${this.modello}`);
  }
}

// Utilizzo della classe
const car = new Macchina('Opel', 'Karl');
car.displayInfo();
```

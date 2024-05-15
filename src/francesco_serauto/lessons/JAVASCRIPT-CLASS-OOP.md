# 1.Oggetti

Gli oggetti sono le entità fondamentali nella programmazione orientata agli oggetti in JavaScript. Un oggetto è una collezione di dati (proprietà) e operazioni (metodi) correlate.

```javascript
const volo = {
  partenza: "Palermo",
  arrivo: "Roma",
  orarioPartenza: "8:00",
  orarioArrivo: "9:00",

  info: function () {
    console.log(
      `Partenza ${this.partenza}, Arrivo ${this.arrivo}, Orario di Partenza ${this.orarioPartenza}, Orario di Arrivo ${this.orarioArrivo}`
    );
  },
};
```

# 2.Classi

Una classe è un modello per creare gli oggetti. In JavaScript, le classi sono state introdotte in ECMAScript 2015 (ES6). Puoi definire una classe e quindi creare nuovi oggetti basati su questa classe.

```javascript
class Volo {
  constructor(partenza, arrivo, orarioP, orarioA) {
    this.partenza = partenza;
    this.arrivo = arrivo;
    this.orarioP = orarioP;
    this.orarioA = orarioA;
  }
  info() {
    console.log(
      `Partenza : ${this.partenza}, Arrivo : ${this.arrivo}, Orario di Partenza : ${this.orarioP}, Orario di Arrivo : ${this.orarioA}`
    );
  }
}

const primoVolo = new Volo("Palermo", "Roma", "8:00", "9:00");

primoVolo.Info();
```

# 3.Eraditarietà

In JavaScript, è possibile creare gerarchie di classi utilizzando l'ereditarietà. Una classe può ereditare proprietà e metodi da un'altra classe.

```javascript
class Persona extends Volo {
  constructor(partenza, arrivo, orarioP, orarioA, nome, cognome, email) {
    super(partenza, arrivo, orarioP, orarioA);
    this.nome = nome;
    this.cognome = cognome;
    this.email = email;
  }
  info() {
    console.log(
      `Perona : ${this.nome} ${this.cognome} , Partenza : ${this.partenza}, Arrivo : ${this.arrivo}`
    );
  }
}

const primaPersona = new Persona(
  "Palermo",
  "Roma",
  "8:00",
  "9:00",
  "Mario",
  "Rossi",
  "mariorossi@gmail.com"
);

primaPersona.info();
```

# 4. Incapsulamento

Questo concetto implica l'incapsulamento dei dati (proprietà) e delle operazioni (metodi) all'interno di un oggetto in modo che possano essere accessibili solo tramite interfacce pubbliche. In JavaScript, l'incapsulamento è spesso ottenuto utilizzando chiusure o variabili locali all'interno di una funzione costruttrice.

```javascript
class Volo {
  #partenza;
  #arrivo;
  #orarioP;
  #orarioA;
  constructor(partenza, arrivo, orarioP, orarioA) {
    this.#partenza = partenza;
    this.#arrivo = arrivo;
    this.#orarioP = orarioP;
    this.#orarioA = orarioA;
  }
  info() {
    console.log(
      `Partenza : ${this.#partenza}, Arrivo : ${
        this.#arrivo
      }, Orario di Partenza : ${this.#orarioP}, Orario di Arrivo : ${
        this.#orarioA
      }`
    );
  }
}

const primoVolo = new Volo("Palermo", "Roma", "8:00", "9:00");
primoVolo.info();
```

# 5.Polimorfismo

Questo concetto si riferisce alla capacità di oggetti di classi diverse di rispondere allo stesso messaggio in modi diversi. In JavaScript, il polimorfismo può essere ottenuto sovrascrivendo metodi ereditati da una classe base nelle classi figlio.

```javascript
class Animali {
  verso() {
    console.log("");
  }
}
class Cane extends Animali {
  verso() {
    super.verso();
    console.log("Bau Bau");
  }
}
class Rana extends Animali {
  verso() {
    console.log("Cra Cra");
  }
}

const versoCane = new Cane();
versoCane.Verso();
const versoRana = new Rana();
versoRana.Verso();
```

# 6. Get Set

I metodi di accesso, noti anche come getter e setter, sono una tecnica che consente di controllare l'accesso e la modifica delle proprietà di un oggetto. In JavaScript, puoi definire getter e setter utilizzando le parole chiave get e set all'interno di una classe.

```javascript
class Persona {
  #nome;
  #cognome;
  constructor(nome, cognome) {
    this.#nome = nome;
    this.#cognome = cognome;
  }

  #validateName(name) {
    return (
      name.trim() !== "" &&
      name.length >= 2 &&
      name.length <= 20 &&
      !/\d/.test(name)
    );
  }
  get nome() {
    return this.#nome;
  }
  set nome(nuovoNome) {
    if (this.#validateName(nuovoNome)) {
      this.#nome = nuovoNome;
    } else {
      console.log("Il nome non è valido.");
    }
  }
}

const primaPersona = new Persona("Mario", "Rossi");
console.log(primaPersona.nome);
primaPersona.nome = "Luca";
console.log(primaPersona.nome);
primaPersona.nome = "123";
console.log(primaPersona.nome);
```

# 7.Metodi Statici

Sono metodi che appartengono alla classe stessa anziché alle istanze della classe. Possono essere chiamati direttamente sulla classe e non richiedono un'istanza dell'oggetto.

```javascript
class Math {
  static add(num1, num2) {
    return num1 + num2;
  }
  static sub(num1, num2) {
    return num1 - num2;
  }
  static mult(num1, num2) {
    return num1 * num2;
  }
  static div(num1, num2) {
    return num1 / num2;
  }
  static rem(num1, num2) {
    return num1 % num2;
  }
}

Math.add(1, 1);
Math.sub(1, 1);
```

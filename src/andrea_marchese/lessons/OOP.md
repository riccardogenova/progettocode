<!-- @format -->

## OOP (Object-Oriented Programming)

In JavaScript, l'**OOP** è supportata principalmente attraverso il concetto di prototipi. Nonostante JavaScript non abbia una classica implementazione basata sul concetto di classi come alcuni altri linguaggi orientati agli oggetti (come Java o C++), è comunque possibile implementare il paradigma OOP attraverso prototipi e costruttori di oggetti.

### 1. Classi e Oggetti

- **Classi**: Introdotte in ECMAScript 6 (ES6), le classi sono una sintassi per creare oggetti e gestire l'ereditarietà. Le classi in JavaScript sono essenzialmente funzioni che servono come modelli per creare oggetti.
- **Oggetti**: Gli oggetti sono istanze di classi e rappresentano entità con proprietà (attributi) e metodi (funzionalità).

```javascript
class Persona {
  constructor(nome, età) {
    this.name = nome;
    this.age = età;
  }

  descrizione() {
    return `Nome: ${this.name}, Età: ${this.age}`;
  }
}

const persona1 = new Persona('Marco', 30);
console.log(persona1.descrizione()); // Output: Nome: Marco, Età: 30
```

### 2. Costruttori di Oggetti

Le classi in JavaScript possono avere un metodo `constructor()`, che viene chiamato quando viene creata una nuova istanza della classe, permettendo di inizializzare l'oggetto.

```javascript
class Persona {
  constructor(nome, età) {
    this.name = nome;
    this.age = età;
  }

  saluta() {
    return `Ciao, mi chiamo ${this.name} e ho ${this.age} anni.`;
  }
}

const persona = new Persona('Luca', 21);
console.log(persona.saluta()); // Output: Ciao, mi chiamo Luca e ho 21 anni.
```

### 3. Prototipi

In JavaScript, ogni oggetto ha un prototipo che può contenere proprietà e metodi che possono essere condivisi tra tutte le istanze di quell'oggetto. È possibile aggiungere metodi a un prototipo per consentire la condivisione di codice tra tutte le istanze di un oggetto.

```javascript
Persona.prototype.saluta = function () {
  console.log('Ciao, sono ' + this.nome);
};

const mario = new Persona('Mario', 25);
mario.saluta(); // Output: "Ciao, sono Mario"
```

### 4. Ereditarietà

- **Prototipi**: Prima di ES6, JavaScript utilizzava la prototipazione per l'ereditarietà. Ogni oggetto in JavaScript ha un prototipo, un altro oggetto da cui eredita proprietà e metodi.
- **Parola chiave `extends`**: Con ES6, l'ereditarietà è resa più semplice con l'uso della parola chiave `extends`, che permette a una classe di ereditare le proprietà e i metodi di un'altra classe.

```javascript
class Animale {
  constructor(nome) {
    this.name = nome;
  }

  faiVerso() {
    return `${this.name} fa un verso.`;
  }
}

class Cane extends Animale {
  faiVerso() {
    return `${this.name} abbaia.`;
  }
}

const cane = new Cane('Fido');
console.log(cane.faiVerso()); // Output: Fido abbaia.
```

### 5. Incapsulamento

L'incapsulamento è una delle caratteristiche fondamentali della programmazione orientata agli oggetti (OOP). Consiste nel nascondere i dettagli interni di un oggetto e nell'esporre solo le parti necessarie tramite un'interfaccia pubblica.

- Gli oggetti in JavaScript incapsulano dati e comportamenti, permettendo di nascondere i dettagli interni e di esporre solo ciò che è necessario tramite metodi pubblici.
- **Membri privati**: Anche se JavaScript non ha un supporto nativo per i membri privati fino all'introduzione delle proprietà private, si può ottenere l'incapsulamento usando closure o convenzioni come il prefisso `_`.

```javascript
class ContoBancario {
  #saldo = 0; // Proprietà privata

  deposita(importo) {
    this.#saldo += importo;
  }

  preleva(importo) {
    if (importo <= this.#saldo) {
      this.#saldo -= importo;
    } else {
      console.log('Fondi insufficienti');
    }
  }

  getSaldo() {
    return this.#saldo;
  }
}

const conto = new ContoBancario();
conto.deposita(100);
conto.preleva(30);
console.log(conto.getSaldo()); // Output: 70
```

### 6. Polimorfismo

Il polimorfismo in JavaScript si ottiene attraverso l'ereditarietà, dove le classi derivate possono sovrascrivere i metodi delle classi base, permettendo un comportamento diverso per metodi con lo stesso nome.

```javascript
class Forma {
  area() {
    return 0;
  }
}

class Rettangolo extends Forma {
  constructor(larghezza, altezza) {
    super();
    this.larghezza = larghezza;
    this.altezza = altezza;
  }

  area() {
    return this.larghezza * this.altezza;
  }
}

class Cerchio extends Forma {
  constructor(raggio) {
    super();
    this.raggio = raggio;
  }

  area() {
    return Math.PI * this.raggio ** 2;
  }
}

const forme = [new Rettangolo(5, 10), new Cerchio(7)];
forme.forEach(forma => console.log(forma.area()));
// Output: 50 (area del rettangolo), 153.93804002589985 (area del cerchio)
```

### 7. Astrazione

L'astrazione in JavaScript si ottiene definendo classi e oggetti che modellano concetti reali, nascondendo dettagli implementativi e esponendo solo funzionalità rilevanti.

```javascript
class Veicolo {
  constructor(marca, modello) {
    if (new.target === Veicolo) {
      throw new Error('Questa è una classe astratta e non può essere istanziata direttamente.');
    }
    this.marca = marca;
    this.modello = modello;
  }

  dettagli() {
    return `${this.marca} ${this.modello}`;
  }
}

class Auto extends Veicolo {
  constructor(marca, modello, tipo) {
    super(marca, modello);
    this.tipo = tipo;
  }

  dettagli() {
    return `${super.dettagli()} (${this.tipo})`;
  }
}

const auto = new Auto('Toyota', 'Corolla', 'Berlina');
console.log(auto.dettagli()); // Output: Toyota Corolla (Berlina)
```

### 8. Metodi e Proprietà

- **Metodi**: Funzioni associate a oggetti o classi.
- **Proprietà**: Attributi di un oggetto o classe, che possono essere dati o getter/setter per controllare l'accesso e la modifica dei valori.

```javascript
class Persona {
  constructor(nome, età) {
    this.name = nome;
    this.age = età;
  }

  get nomeCompleto() {
    return `${this.name} ha ${this.age} anni.`;
  }

  saluta() {
    return `Ciao, mi chiamo ${this.name}.`;
  }
}

const persona = new Persona('Anna', 25);
console.log(persona.nomeCompleto); // Output: Anna ha 25 anni.
console.log(persona.saluta()); // Output: Ciao, mi chiamo Anna.
```

### 9. Metodi Statici

Le classi possono avere metodi e proprietà statici, che appartengono alla classe piuttosto che alle istanze.

```javascript
class Matematica {
  static somma(a, b) {
    return a + b;
  }
}

console.log(Matematica.somma(5, 3)); // Output: 8
```

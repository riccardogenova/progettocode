<!-- @format -->

# OOP

## Programmazione Orientata agli Oggetti (OOP) in JavaScript

Sebbene JavaScript sia un linguaggio di programmazione basato sui prototipi, supporta i principi fondamentali della programmazione orientata agli oggetti (OOP) per creare codice strutturato, modulare e riutilizzabile. L'OOP in JavaScript si basa su concetti chiave come:

**1. Classi:**

Le classi sono i blocchi costitutivi dell'OOP. Definiscono un modello o una struttura per creare oggetti che condividono caratteristiche e comportamenti simili. In JavaScript, le classi vengono create utilizzando la parola chiave `class`.

```javascript
class Persona {
  // Definizione delle proprietà (variabili)
  nome;
  cognome;
  eta;

  // Definizione dei metodi (funzioni)
  saluta() {
    console.log(`Ciao, mi chiamo ${this.nome} ${this.cognome}`);
  }
}
```

**2. Oggetti:**

Gli oggetti sono istanze di una classe e rappresentano entità concrete con le proprie caratteristiche e comportamenti. Vengono creati utilizzando l'operatore `new` seguito dal nome della classe.

```javascript
const persona1 = new Persona();
persona1.nome = 'Mario';
persona1.cognome = 'Rossi';
persona1.eta = 30;

persona1.saluta(); // Output: Ciao, mi chiamo Mario Rossi
```

**3. Proprietà:**

Le proprietà sono attributi che definiscono le caratteristiche di un oggetto. Possono essere accessibili e modificati dall'interno della classe o da oggetti esterni utilizzando la notazione a punti.

```javascript
console.log(persona1.nome); // Output: Mario
persona1.eta = 32;
console.log(persona1.eta); // Output: 32
```

**4. Metodi:**

I metodi sono funzioni associate a una classe che definiscono il comportamento degli oggetti. Possono accedere e modificare le proprietà dell'oggetto su cui vengono chiamati.

```javascript
persona1.saluta(); // Output: Ciao, mi chiamo Mario Rossi
```

**5. Incapsulamento:**

```javascript
class Calcolatrice {
  #primoNumero;
  #secondoNumero;

  get primoNumero() {
    return this.#primoNumero;
  }

  set primoNumero(numero) {
    this.#primoNumero = numero;
  }

  get secondoNumero() {
    return this.#secondoNumero;
  }

  set secondoNumero(numero) {
    this.#secondoNumero = numero;
  }

  somma() {
    if (!this.#primoNumero || !this.#secondoNumero) {
      throw new Error('Impostare entrambi i numeri prima di sommare');
    }
    return this.#primoNumero + this.#secondoNumero;
  }

  sottrai() {
    if (!this.#primoNumero || !this.#secondoNumero) {
      throw new Error('Impostare entrambi i numeri prima di sottrarre');
    }
    return this.#primoNumero - this.#secondoNumero;
  }
}
```

- I getter primoNumero e secondoNumero permettono di leggere i valori delle proprietà private corrispondenti.
- I setter primoNumero e secondoNumero permettono di impostare i valori delle proprietà private corrispondenti, con un controllo del tipo di dato (numero) per evitare errori.
- I metodi `somma` e `sottrai` utilizzano i getter per accedere ai valori delle proprietà.
- I metodi `somma` e `sottrai` eseguono le operazioni matematiche
- L'utilizzo di getter e setter offre maggiore flessibilità e controllo sull'accesso alle proprietà private, mantenendo l'incapsulamento e la coesione della classe.

**6. Ereditarietà:**

L'ereditarietà permette a una classe di ereditare proprietà e metodi da un'altra classe padre. Questo consente di riutilizzare il codice e creare gerarchie di classi con relazioni "è un tipo di".

```javascript
class Studente extends Persona {
  matricola;

  iscrittoA() {
    console.log(`Lo studente ${this.nome} ${this.cognome} è iscritto al corso ${this.matricola}`);
  }
}

const studente1 = new Studente();
studente1.nome = 'Marco';
studente1.cognome = 'Verdi';
studente1.eta = 22;
studente1.matricola = '123456';

studente1.saluta(); // Output: Ciao, mi chiamo Marco Verdi
studente1.iscrittoA(); // Output: Lo studente Marco Verdi è iscritto al corso 123456
```

**7. Polimorfismo:**

Il polimorfismo permette a oggetti di classi diverse di rispondere allo stesso messaggio in modi diversi. Questo consente di definire comportamenti generici che vengono implementati in modo specifico da classi diverse.

```javascript
class Animale {
  parla() {
    console.log('Non so parlare!');
  }
}

class Cane extends Animale {
  parla() {
    console.log('Bau Bau!');
  }
}

class Gatto extends Animale {
  parla() {
    console.log('Miao Miao!');
  }
}

const cane1 = new Cane();
const gatto1 = new Gatto();

cane1.parla(); // Output: Bau Bau!
gatto1.parla(); // Output: Miao Miao!
```

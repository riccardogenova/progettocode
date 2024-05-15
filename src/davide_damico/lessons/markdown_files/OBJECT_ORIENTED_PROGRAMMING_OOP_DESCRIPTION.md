<!-- @format -->

# La OOP in Javascript

La programmazione orientata agli oggetti (OOP, Object-Oriented Programming) è un paradigma di programmazione basato sull'idea di "oggetti", che possono contenere dati sotto forma di campi (spesso chiamati attributi o proprietà) e codice sotto forma di procedure (conosciute come metodi). La OOP si concentra sulla creazione di oggetti che raggruppano sia dati che funzionalità correlate, che possono essere utilizzati per modellare oggetti del mondo reale o astrazioni concettuali.

### Incapsulamento

L'incapsulamento è il concetto di nascondere i dettagli interni di un oggetto e mostrare solo le funzionalità necessarie all'esterno. In JavaScript, l'incapsulamento può essere ottenuto tramite l'uso di funzioni e chiusure.

**Esempio:**

```javascript
function Automobile(marca, modello) {
  let velocita = 0; // Proprietà privata

  // Metodo pubblico
  this.accelera = function () {
    velocita += 10;
    console.log(`${marca} ${modello} sta accelerando, velocità attuale: ${velocita}`);
  };

  // Metodo pubblico
  this.frena = function () {
    velocita -= 10;
    console.log(`${marca} ${modello} sta frenando, velocità attuale: ${velocita}`);
  };
}

const miaAuto = new Automobile('Toyota', 'Corolla');
miaAuto.accelera();
miaAuto.frena();
```

### Ereditarietà

L'ereditarietà è un principio in cui una classe (chiamata sottoclasse) può ereditare proprietà e metodi da un'altra classe (chiamata superclasse). In JavaScript, l'ereditarietà può essere realizzata tramite la catena dei prototipi o usando la sintassi `class` di ES6.

#### Esempio con la sintassi `class`:

```javascript
class Veicolo {
  constructor(marca) {
    this.marca = marca;
  }

  mostraMarca() {
    console.log(`La marca del veicolo è ${this.marca}`);
  }
}

class Automobile extends Veicolo {
  constructor(marca, modello) {
    super(marca); // Chiama il costruttore della classe genitore
    this.modello = modello;
  }

  mostraModello() {
    console.log(`Il modello dell'automobile è ${this.modello}`);
  }
}

const miaAuto = new Automobile('Toyota', 'Corolla');
miaAuto.mostraMarca();
miaAuto.mostraModello();
```

#### Esempio con l'approccio funzionale:

In JavaScript, prima dell'introduzione delle classi in ES6, l'ereditarietà veniva spesso realizzata attraverso funzioni costruttrici e la catena dei prototipi.

```javascript
function Veicolo(marca) {
  this.marca = marca;
}

Veicolo.prototype.mostraMarca = function () {
  console.log(`La marca del veicolo è ${this.marca}`);
};

function Automobile(marca, modello) {
  Veicolo.call(this, marca); // Chiama il costruttore del genitore con il contesto dell'Automobile
  this.modello = modello;
}

// Eredita da Veicolo
Automobile.prototype = Object.create(Veicolo.prototype);
Automobile.prototype.constructor = Automobile;

Automobile.prototype.mostraModello = function () {
  console.log(`Il modello dell'automobile è ${this.modello}`);
};

const miaAuto = new Automobile('Toyota', 'Corolla');
miaAuto.mostraMarca();
miaAuto.mostraModello();
```

In questo esempio, `Automobile` eredita da `Veicolo` utilizzando funzioni costruttrici. `Veicolo.call(this, marca);` chiama il costruttore di `Veicolo` nel contesto di un'istanza di `Automobile`, permettendo così di inizializzare la proprietà `marca`. Con `Automobile.prototype = Object.create(Veicolo.prototype);`, impostiamo il prototipo di `Automobile` per ereditare da `Veicolo`, e con `Automobile.prototype.constructor = Automobile;`, assicuriamo che il costruttore punti correttamente ad `Automobile`.

Questi due esempi mostrano come l'ereditarietà può essere implementata in JavaScript sia con la sintassi delle classi introdotta in ES6 sia con l'approccio funzionale più tradizionale.

### Polimorfismo

Il polimorfismo è la capacità di una variabile, funzione o oggetto di assumere più forme. In JavaScript, il polimorfismo si verifica principalmente tramite l'overriding dei metodi, dove una sottoclasse può sovrascrivere un metodo della superclasse.

**Esempio:**

```javascript
class Veicolo {
  avvia() {
    console.log('Il veicolo è stato avviato');
  }
}

class Automobile extends Veicolo {
  // Overriding del metodo avvia
  avvia() {
    console.log("L'automobile è stata avviata con un rumore specifico del motore");
  }
}

const mioVeicolo = new Veicolo();
mioVeicolo.avvia(); // Output: Il veicolo è stato avviato

const miaAuto = new Automobile();
miaAuto.avvia(); // Output: L'automobile è stata avviata con un rumore specifico del motore
```

### Astrazione

L'astrazione è il concetto di nascondere la complessità dettagliata e mostrare solo l'informazione essenziale all'utente. Può essere ottenuta usando classi astratte o interfacce (TypeScript offre supporto per le interfacce).

**Esempio in TypeScript:**

```typescript
abstract class Dispositivo {
  abstract accendi(): void;
  spegni() {
    console.log('Il dispositivo è stato spento');
  }
}

class Smartphone extends Dispositivo {
  accendi() {
    console.log('Lo smartphone è stato acceso');
  }
}

const mioSmartphone = new Smartphone();
mioSmartphone.accendi();
mioSmartphone.spegni();
```

In questo esempio, `Dispositivo` è una classe astratta che definisce un'astrazione per i dispositivi, specificando che devono avere un metodo `accendi`, ma non fornisce un'implementazione. `Smartphone` implementa questa astrazione fornendo un'implementazione per `accendi`.

Questi esempi dimostrano come i principi chiave della programmazione orientata agli oggetti possano essere applicati in JavaScript e TypeScript.

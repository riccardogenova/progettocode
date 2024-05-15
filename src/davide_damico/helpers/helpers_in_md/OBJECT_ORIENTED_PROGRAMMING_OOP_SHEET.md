<!-- @format -->

# La OOP in Javascript

## Introduzione

La programmazione orientata agli oggetti (OOP, Object-Oriented Programming) è un paradigma di programmazione basato sull'idea di "oggetti", che possono contenere dati sotto forma di campi (spesso chiamati attributi o proprietà) e codice sotto forma di procedure (conosciute come metodi). La OOP si concentra sulla creazione di oggetti che raggruppano sia dati che funzionalità correlate, che possono essere utilizzati per modellare oggetti del mondo reale o astrazioni concettuali.

## Incapsulamento

**Descrizione**: L'incapsulamento è il concetto di nascondere i dettagli interni di un oggetto e mostrare solo le funzionalità necessarie all'esterno. In JavaScript, l'incapsulamento può essere ottenuto tramite l'uso di funzioni e chiusure.

**Esempio di Codice**:

```javascript
function Automobile(marca, modello) {
  let velocita = 0; // Proprietà privata
  this.accelera = function () {
    velocita += 10;
    console.log(`${marca} ${modello} sta accelerando, velocità attuale: ${velocita}`);
  };
  this.frena = function () {
    velocita -= 10;
    console.log(`${marca} ${modello} sta frenando, velocità attuale: ${velocita}`);
  };
}
const miaAuto = new Automobile('Toyota', 'Corolla');
miaAuto.accelera();
miaAuto.frena();
```

Spiegazione: L'automobile ha una proprietà privata `velocita` e due metodi pubblici `accelera` e `frena`. L'incapsulamento è mostrato dal fatto che la variabile `velocita` non è accessibile direttamente dall'esterno della funzione `Automobile`.

## Ereditarietà

**Descrizione**: L'ereditarietà è un principio in cui una classe (chiamata sottoclasse) può ereditare proprietà e metodi da un'altra classe (chiamata superclasse). In JavaScript, l'ereditarietà può essere realizzata tramite la catena dei prototipi o usando la sintassi `class` di ES6.

### Esempio con la sintassi `class`:

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

Spiegazione: `Automobile` eredita da `Veicolo` usando la sintassi `class`. Il metodo `super()` viene utilizzato per chiamare il costruttore della classe genitore.

#### Esempio con l'approccio funzionale:

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

Spiegazione: Questo esempio mostra come l'ereditarietà può essere implementata usando funzioni costruttrici e la catena dei prototipi in JavaScript. `Veicolo.call(this, marca);` chiama il costruttore di `Veicolo` nel contesto di `Automobile`.

## Polimorfismo

**Descrizione**: Il polimorfismo è la capacità di una variabile, funzione o oggetto di assumere più forme. In JavaScript, il polimorfismo si verifica principalmente tramite l'overriding dei metodi, dove una sottoclasse può sovrascrivere un metodo della superclasse.

**Esempio**:

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

Spiegazione: `Automobile` sovrascrive il metodo `avvia` di `Veicolo`, dimostrando polimorfismo attraverso l'overriding dei metodi.

## Astrazione

**Descrizione**: L'astrazione è il concetto di nascondere la complessità dettagliata e mostrare solo l'informazione essenziale all'utente. Può essere ottenuta usando classi astratte o interfacce (TypeScript offre supporto per le interfacce).

**Esempio in TypeScript**:

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

Spiegazione: `Dispositivo` è una classe astratta che non può essere istanziata direttamente e richiede che le classi derivate implementino il metodo `accendi`.

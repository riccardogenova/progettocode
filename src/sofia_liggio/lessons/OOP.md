<!-- @format -->

# OOP: Object-Oriented Programming

Si basa sul concetto di "oggetti", che possono contenere dati sotto forma di attributi e codice sotto forma di metodi. Mira a strutturare il codice rendendolo più comprensibile.

Gli oggetti sono istanze di classi, che agiscono come modelli per la creazione di oggetti. Le classi definiscono le proprietà e i comportamenti che gli oggetti di quel tipo possono mostrare.

Dobbiamo distinguere tra:

1. **Classi**: Sono uno strumenti per creare oggetti con la stessa struttura e comportamento.

```javascript
class Animal {
  constructor(zampe, tipologia, cosaFa) {
    //si possono anche chiamare a, b, c
    this.zampe = zampe;
    this.animale = tipologia;
    this.verso = cosaFa;
  }
}
// const myAnimal = new Animal(4, "cane", "bau-bau")
```

2. **Oggetti o Istanze**: Sono strutture dati che contengono una raccolta di coppie chiave-valore, dove ogni chiave è una stringa univoca e ogni valore può essere di qualsiasi tipo, inclusi altri oggetti, funzioni e array.

```javascript
class Animal {
  constructor(zampe, tipologia, cosaFa) {
    this.zampe = zampe;
    this.animale = tipologia;
    this.verso = cosaFa;
  }
}
const myAnimal = new Animal(4, 'cane', 'bau-bau'); // creazione di un'istanza (oggetto) della classe Animal
```

3. **Attributi**: Rappresentano le caratteristiche o i dati associati a un oggetto.

```javascript
class Animal {
  constructor(zampe, tipologia, cosaFa) {
    this.zampe = zampe; // attributo: zampe. Ciò che viene dopo il "this." si chiama attributo.
    this.animale = tipologia;
    this.verso = cosaFa;
  }
}
```

4. **Metodi**: Sono funzioni associate a un oggetto o a una classe. Definiscono il comportamento degli oggetti e per consentire loro di eseguire azioni specifiche.

```javascript
class Animal {
  constructor(zampe, tipologia, cosaFa) {
    this.zampe = zampe;
    this.animale = tipologia;
    this.verso = cosaFa;
  }
  correre() {
    console.log('Questo animale corre');
  }
  faiIlVerso() {
    console.log(`Questo animale fa ${this.verso} quando ha fame`);
  }
}
```

## Caratteristiche principali

#### Incapsulamento

Si riferisce al raggruppamento dei dati (attributi) e dei metodi che operano su quei dati in un'unica unità, chiamata classe. Consente di nascondere i dati e di esporre solo le funzionalità necessarie all'esterno.

Viene realizzato utilizzando modificatori di accesso come "public", "private" e "protected":

1. Attributi privati: Vengono nascosti all'esterno della classe e possono essere accessibili solo dai metodi della stessa classe.
2. Attributi pubblici: Sono accessibili da qualsiasi parte del programma.
3. Attributi protetti: sono accessibili dalla stessa classe e dalle sue sottoclassi.

**Vantaggi**:
Può portare a un codice più sicuro e gestibile, poiché riduce la dipendenza da dettagli di implementazione specifici e organizza meglio il codice.

```javascript
class Animal {
  #zampe;
  constructor(zampe, tipologia, cosaFa) {
    this.#zampe = zampe; // il # lo rende privato
    this.animale = tipologia;
    this.verso = cosaFa;
  }
  correre() {
    console.log('Questo animale corre');
  }
  faiIlVerso() {
    console.log(`Questo animale fa ${this.verso} quando ha fame`);
  }
}
```

#### Ereditarietà

Consente a una classe di ereditare attributi e metodi da un'altra classe nota come superclasse o classe base. Questo favorisce il riutilizzo del codice e permette di creare gerarchie di classi in cui le classi figlie ereditano le caratteristiche delle classi genitore.

**Vantaggi**:

- Evita la duplicazione del codice, riutilizzandolo.
- Organizza il codice in una struttura gerarchica.
- Migliora la modularità, la manutenibilità e la flessibilità del codice.

**Extends**: viene utilizzato per creare una sottoclasse (o classe figlia) che eredita attributi e metodi da una superclasse (o classe genitore).

#### Polimorfismo

Si basa sulla capacità di oggetti di classi diverse di rispondere allo stesso messaggio in modi diversi. Questo significa che oggetti di classi diverse possono avere comportamenti diversi quando vengono chiamati gli stessi metodi.

Tipi di polimorfismo:

1. Di inclusione: Consente a un oggetto di una classe specifica di essere trattato come un oggetto di una delle sue superclassi. Questo consente di scrivere codice che lavora con oggetti generici senza dover conoscere il loro tipo specifico.

2. Di sovraccarico: Consente a una classe di avere più metodi con lo stesso nome ma con firme diverse (numero e tipo di parametri). Il metodo appropriato da chiamare viene selezionato in base ai parametri con cui viene chiamato.

3. Di ridefinizione: Consente a una sottoclasse di fornire una propria implementazione di un metodo che è già definito nella sua superclasse. Questo permette alle sottoclassi di personalizzare il comportamento dei metodi ereditati.

**Vantaggi**:

- Permette di scrivere codice più generico e flessibile, che può essere utilizzato con oggetti di classi diverse senza modifiche significative.
- Favorisce il riutilizzo del codice grazie alla capacità di utilizzare le stesse interfacce per oggetti con implementazioni diverse.

## Tipi di dati in JavaScript

JavaScript è un linguaggio di programmazione dinamico e tipizzato in modo leggero, il che significa che non è necessario dichiarare esplicitamente il tipo di variabile quando la si definisce. Tuttavia, JavaScript dispone di diversi tipi di dati primitivi e di un tipo di dato complesso per rappresentare i valori in modo efficiente e coerente.

**Tipi di dati primitivi:**

1. **Number:** Memorizza numeri interi e decimali. Gli esempi includono 10, 3.14, -200, e 0.01.

2. **String:** Memorizza sequenze di caratteri testuali. Le stringhe sono racchiuse tra virgolette doppie ("") o apici singoli ('). Esempi includono "Ciao mondo!", 'Benvenuto', e "Questo è un esempio di stringa".

3. **Boolean:** Memorizza valori booleani, ovvero true o false. I valori booleani rappresentano rispettivamente vero o falso.

4. **Null:** Indica l'assenza di un valore. La variabile null rappresenta un valore intenzionalmente vuoto o non definito.

5. **Undefined:** Indica che una variabile non è stata ancora definita o è stata eliminata. Il valore undefined rappresenta l'assenza di un'assegnazione esplicita alla variabile.

**Esempio di tipi di dati primitivi:**

```javascript
// Numeri
let numeroIntero = 10;
let numeroDecimale = 3.14;

// Stringhe
let testo1 = "Hello, world!";
let testo2 = 'Benvenuto';

// Booleani
let vero = true;
let falso = false;

// Null
let valoreNull = null;

// Undefined
let variabileIndefinita;
```

**Tipi di dato complessi:**

1. **Object:** Memorizza collezioni di coppie chiave-valore. Gli oggetti sono rappresentati da chiavi racchiuse tra graffe (`{}`) e valori separati da virgole. Gli oggetti possono contenere proprietà di diversi tipi di dati, anche altri oggetti.

**Esempio di tipo di dato complesso (Object):**

```javascript
// Oggetto persona
let persona = {
  nome: "Mario",
  cognome: "Rossi",
  eta: 30,
  professione: "Sviluppatore"
};

// Accesso alle proprietà dell'oggetto
console.log(persona.nome); // Stampa "Mario"
console.log(persona.eta);  // Stampa 30
```

**Comportamento dinamico dei tipi:**

In JavaScript, il tipo di una variabile può cambiare in base al valore assegnato. Ad esempio, una variabile inizialmente dichiarata come numero può contenere successivamente una stringa. Questo comportamento dinamico consente una flessibilità nello sviluppo di applicazioni.

**Verifica del tipo di dato:**

L'operatore `typeof` consente di verificare il tipo di dato di una variabile.

```javascript
let valore = 10;
console.log(typeof valore);

let testo = "Ciao";
console.log(typeof testo);

let booleano = true;
console.log(typeof booleano);
```
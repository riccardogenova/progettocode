### Uso di `const` in JavaScript

In JavaScript, `const` è una parola chiave che viene utilizzata per dichiarare variabili con un valore che non può essere riassegnato dopo la sua inizializzazione. `const` sta per "costante", ma ciò non implica che il valore sia immutabile — significa solo che l'identificatore non può essere riassegnato. L'utilizzo di `const` è particolarmente utile quando vuoi assicurarti che il valore di una variabile non cambi per tutta la durata del programma.

#### Sintassi

```javascript
const NOME_COSTANTE = valore;
```

#### Esempio di Utilizzo

```javascript
const PI = 3.14;
console.log(PI); // Output: 3.14
```

In questo esempio, PI è una costante il cui valore è 3.14. Se provi a riassegnare un valore a PI, JavaScript genererà un errore:

```javascript
PI = 3.14159; // TypeError: Assignment to constant variable.
```

#### `const` e Oggetti

Se il valore di `const` è un oggetto o un array, gli elementi interni dell'oggetto o dell'array possono essere modificati:

```javascript
const myObject = { key: "value" };
myObject.key = "newValue";
console.log(myObject.key); // Output: 'newValue'
```

Anche se `myObject` è una costante, puoi modificare il valore delle sue proprietà. Tuttavia, non puoi riassegnare `myObject` a un nuovo oggetto:

```javascript
myObject = { newKey: "newValue" }; // TypeError: Assignment to constant variable.
```

Quando usi `const` con un array, la stessa regola si applica:

```javascript
const myArray = ["apple", "banana"];
myArray.push("orange");
console.log(myArray); // Output: ['apple', 'banana', 'orange']
```

In questo caso, puoi modificare il contenuto di myArray (ad esempio, aggiungendo un elemento), ma non puoi riassegnare myArray a un nuovo array:

```javascript
myArray = ["strawberry", "kiwi"]; // TypeError: Assignment to constant variable.
```

#### Conclusione

L'utilizzo di `const` con oggetti e array ti permette di proteggere la variabile di riferimento da riassegnazioni, mentre permette ancora la modifica del contenuto interno. Questo è particolarmente utile in programmi dove l'integrità del riferimento deve essere mantenuta durante tutto il ciclo di vita del programma, prevenendo così errori derivanti da riassegnazioni accidentali.

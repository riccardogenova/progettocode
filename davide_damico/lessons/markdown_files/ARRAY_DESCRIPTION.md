# Array in Programmazione

Gli array in programmazione sono strutture di dati fondamentali utilizzate per memorizzare collezioni ordinate di elementi. Sono particolarmente utili perché permettono di organizzare i dati in modo che possano essere facilmente accessibili tramite un indice, offrendo così un modo efficiente per manipolare e iterare su grandi quantità di dati.

## A cosa servono gli array?

Gli array sono utilizzati per vari scopi, come:

- **Conservazione di dati**: Possono memorizzare grandi quantità di dati dello stesso tipo, come liste di numeri, stringhe, ecc.
- **Manipolazione di dati**: Facilitano operazioni come l'ordinamento, la ricerca e l'inserimento di elementi.
- **Implementazione di strutture di dati complesse**: Come pile (stacks), code (queues) e altre strutture che beneficiano di accesso sequenziale.
- **Gestione di risorse**: Possono essere utilizzati per gestire gruppi di risorse simili, come file aperti o connessioni di rete.

## Metodi principali degli array

Ecco alcuni dei metodi più comuni utilizzati con gli array in JavaScript, con esempi pratici:

- `push()`: Aggiunge un elemento alla fine dell'array.

  ```javascript
  let frutti = ["mela", "banana"];
  frutti.push("arancia");
  console.log(frutti); // Output: ['mela', 'banana', 'arancia']
  ```

- `pop()`: Rimuove l'ultimo elemento dell'array e lo restituisce.

  ```javascript
  let numeri = [1, 2, 3];
  numeri.pop();
  console.log(numeri); // Output: [1, 2]
  ```

- `shift()`: Rimuove il primo elemento dell'array e lo restituisce.

  ```javascript
  let numeri = [1, 2, 3];
  numeri.shift();
  console.log(numeri); // Output: [2, 3]
  ```

- `unshift()`: Aggiunge uno o più elementi all'inizio dell'array.

  ```javascript
  let numeri = [2, 3];
  numeri.unshift(1);
  console.log(numeri); // Output: [1, 2, 3]
  ```

- `slice()`: Restituisce una copia di una parte dell'array.

  ```javascript
  let numeri = [1, 2, 3, 4, 5];
  let parte = numeri.slice(1, 3);
  console.log(parte); // Output: [2, 3]
  ```

- `splice()`: Cambia il contenuto di un array eliminando o sostituendo elementi esistenti e/o aggiungendo nuovi elementi.

  ```javascript
  let numeri = [1, 2, 4, 5];
  numeri.splice(2, 0, 3);
  console.log(numeri); // Output: [1, 2, 3, 4, 5]
  ```

- `forEach()`: Esegue una funzione data su ogni elemento dell'array.

  ```javascript
  let numeri = [1, 2, 3];
  numeri.forEach((num) => console.log(num * 2));
  // Output: 2
  // Output: 4
  // Output: 6
  ```

- `map()`: Crea un nuovo array con i risultati della chiamata a una funzione fornita su ogni elemento dell'array.

  ```javascript
  let numeri = [1, 2, 3];
  let raddoppiati = numeri.map((num) => num * 2);
  console.log(raddoppiati); // Output: [2, 4, 6]
  ```

- `filter()`: Crea un nuovo array con tutti gli elementi che passano un test implementato da una funzione fornita.

  ```javascript
  let numeri = [1, 2, 3, 4, 5];
  let pari = numeri.filter((num) => num % 2 === 0);
  console.log(pari); // Output: [2, 4]
  ```

- `reduce()`: Applica una funzione contro un accumulatore e ogni valore dell'array (da sinistra a destra) per ridurlo a un singolo valore.
  ```javascript
  let numeri = [1, 2, 3, 4, 5];
  let somma = numeri.reduce((acc, num) => acc + num, 0);
  console.log(somma); // Output: 15
  ```

### Spread Operator (...)

Lo **spread operator** `...` viene utilizzato per espandere gli elementi di un array (o di un altro iterabile) in situazioni dove vengono attesi più argomenti (in chiamate di funzione) o più elementi (in array literali). È particolarmente utile per clonare array, unire più array insieme, passare elementi ad una funzione come argomenti separati, e molto altro, semplificando operazioni che altrimenti richiederebbero l'uso di metodi più verbosi come `concat()`.

```javascript
let parte1 = [
  1,

  2, 3,
];
let parte2 = [4, 5, 6];
let combinato = [...parte1, ...parte2];
console.log(combinato); // Output: [1, 2, 3, 4, 5, 6]
```

## Perché gli array vengono detti "puntatori"?

In molti linguaggi di programmazione, specialmente quelli di basso livello come C, gli array sono essenzialmente puntatori. Questo perché l'array stesso è effettivamente un blocco di memoria, e il nome dell'array rappresenta l'indirizzo di memoria del primo elemento. Quando accedi a un elemento dell'array, calcoli l'indirizzo di quel particolare elemento basandoti sul suo indice, facendo uso dell'aritmetica dei puntatori. Anche in linguaggi di alto livello come JavaScript, gli array non contengono direttamente i loro elementi, ma puntano a un blocco di memoria dove questi elementi sono conservati. Questo spiega perché gli array sono spesso descritti come "puntatori".

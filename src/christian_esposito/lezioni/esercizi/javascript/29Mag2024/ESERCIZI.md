<!-- @format -->

<!--


        BANNATO l'utilizzo di vsCode delle docs e internet
         solo utilizzo della console di ISPEZIONA

 -->

### Esercizi Base

1. **Triplicare i numeri di un array:**

```
const numeri = [1, 2, 3, 4, 5];

// Risultato: [3, 6, 9, 12, 15]
numeri.map(a => a * 3)
```

2. **Filtrare numeri dispari maggiori di 3:**

```
const numeri = [1, 2, 3, 4, 5, 6, 7, 23];

// Risultato: [3, 5]
numeri.filter(e => e >= 3 && e % 2 !== 0)
```

3. **Trovare la prima persona con età inferiore a 18 anni:**

```
const persone = [
  { nome: "Alice", età: 25 },
  { nome: "Bob", età: 17 },
  { nome: "Charlie", età: 20 }
];

// Risultato: { nome: "Bob", età: 17 }
persone.find(e => e.età < 18)
```

4. **Calcolare la somma di tutti i numeri in un array:**

```
const numeri = [1, 2, 3, 4, 5, 5, 200, 23];

// Risultato: 243
const somma = numeri.reduce((accumulatore, valoreCorrente) => accumulatore + valoreCorrente);
```

5. **Trovare l'indice della prima persona con età tra 18 e 24 anni:**

```
const persone = [
  { nome: "Alice", età: 25 },
  { nome: "Bob", età: 17 },
  { nome: "Charlie", età: 20 }
];

// Risultato: 2 (indice di Charlie)
persone.findIndex(e => e.età >= 18 && e.età <= 24)
```

### Esercizi Complessi

1. **Creare un array di nomi di persone con età superiore a 20 anni:**

```
const persone = [
  { nome: "Alice", età: 25 },
  { nome: "Bob", età: 17 },
  { nome: "Charlie", età: 20 },
  { nome: "David", età: 30 }
];

// Risultato: ["Alice", "David"]
const maggiori20 = persone.filter(e => e.età > 20).map(e => e.nome);
```

2. **Calcolare il prezzo totale degli acquisti di Alice:**

```
const acquisti = [
  { cliente: "Alice", prezzo: 20 },
  { cliente: "Bob", prezzo: 30 },
  { cliente: "Alice", prezzo: 15 },
  { cliente: "Charlie", prezzo: 25 }
];


  const acquistiAlice = acquisti.filter(e => e.cliente === "Alice")
  const prezzi = acquistiAlice.map( e => e.prezzo)
  prezzi.reduce((a,b) => a + b)

```

3. **Trovare l'indice della prima persona con nome che inizia per B:**

```
const persone = ["Alice", "Bob", "Charlie", "Alice"];

// Risultato: 1 (indice di Bob)
persone.findIndex(e => e[0] === "B")
```

4. **Calcolare la somma delle lunghezze delle parole che iniziano con la E:**

```
const parole = ["mela", "banana", "gatto", "cane", "elefante", "eirone" ];

// Risultato: 8
const paroleInizianoConE = parole.filter(e => e[0] === "e")

paroleInizianoConE.reduce((a, c) => a.length + c).length;

```

5. **Creare un array di radici quadrate e calcolarne la somma:**

```
const numeri = [1, 4, 9, 16, 25];

// Risultato: 12
const radiciQuadrate = numeri.map(e => Math.sqrt(e)).reduce((a, c) => a + c);
```

<!-- @format -->

```javascript
// 1. Triplica ciascun numero presente nell'array
const numbers = [1, 2, 3, 4, 5];
const triplica = numbers.map(a => a * 3);
triplica;
// [3, 6, 9, 12, 15]
```

```javascript
// 2. Filtra solo i numeri dispari maggiori di 3
const numbers = [1, 2, 3, 4, 5, 6, 7, 23];
numbers.filter(a => a > 3 && a % 2 !== 0);
// [5, 7, 23]
```

```javascript
// 3. Trova la prima persona con l'età inferiore a 18 anni
const people = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 17 },
  { name: 'Charlie', age: 20 },
];
people.find(a => a.age > 18);
// {name: 'Alice', age: 25}
```

```javascript
// 4. Calcola la somma di tutti i numeri nell'array
const numbers = [1, 2, 3, 4, 5, 5, 200, 23];
numbers.reduce((a, b) => a + b);
// 243
```

```javascript
// 5. Trova l'indice della prima persona con l'età compresa tra 18 e 24 anni
const people = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 17 },
  { name: 'Charlie', age: 20 },
];
people.filter(a => a.age <= 18 && a.age <= 24);
//{name: 'Bob', age: 17}
```

// Esercizi Complessi

```javascript
// 6. Crea un nuovo array contenente solo i nomi delle persone di età maggiore di 20 anni
const people = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 17 },
  { name: 'Charlie', age: 20 },
  { name: 'David', age: 30 },
];
const newArray = people.filter(a => a.age > 20);

// {name: 'Alice', age: 25}
// {name: 'David', age: 30}
```

```javascript
// 7. Trova il prezzo totale degli acquisti fatti da Alice
const purchases = [
  { customer: 'Alice', price: 20 },
  { customer: 'Bob', price: 30 },
  { customer: 'Alice', price: 15 },
  { customer: 'Charlie', price: 25 },
];

// function sommaTotale() {
//   let sum = 0;
//   for (let i = 0; i < purchases.length; i++) {
//     if (purchases[i].customer === "Alice") {
//       sum += purchases[i].price;
//     }
//   }
//   return sum;
// }

// function sommaTotale(a, b) {
//   if (b.customer === "Alice") {
//     a += b.price;
//   }
//   return a;
// }
// purchases.reduce(sommaTotale, 0);

purchases.reduce((a, b) => {
  return b.customer === 'Alice' ? a + b.price : a;
}, 0);
// 35
```

```javascript
// 8. Trova l'indice della prima persona il cui nome inizia con la B
const people = ['Alice', 'Bob', 'Charlie', 'Alice'];
people.find(a => a.charAt('B') === 'B');
// 'Bob'
```

```javascript
// 9. Calcola la somma delle lunghezze delle parole che iniziano con la e
const words = ['mela', 'banana', 'gatto', 'cane', 'elefante'];
const findE = words.find(a => a.startsWith('e'));
findE.length;
// 8
```

```javascript
// 10. Crea un nuovo array contenente la radice quadrata di ciascun numero e poi calcola la somma di tutte le radici quadrate
const numbers = [1, 4, 9, 16, 25];
const radice = numbers.map(a => Math.sqrt(a));
radice.reduce((a, b) => a + b);
// [1, 2, 3, 4, 5]
// 15
```

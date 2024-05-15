/** @format */

// 1 // Dato un array di numeri, triplica ciascun numero presente nell'array.

const numbers = [1, 2, 3, 4, 5];

function triplicator(a) {
  return a * 3;
}

numbers.map(triplicator);

// 2 // Dato un array di numeri, filtra solo i numeri dispari maggiori di 3.

const _numbers = [1, 2, 3, 4, 5, 6, 7, 23];

function divide(el) {
  return el > 3 && el % 2 == 0;
}

_numbers.filter(divide);

// 3 // Dato un array di persone, trova la prima persona con l'età inferiore a 18 anni.

const people = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 17 },
  { name: 'Charlie', age: 20 },
];

function finder(el) {
  return el.age < 18;
}

people.find(finder);

// 4 // Dato un array di numeri, calcola la somma di tutti i numeri nell'array.

function tot(i, a) {
  return i + a;
}
numbers.reduce(tot, 0);
243;

// 5 // Dato un array di persone, trova l'indice della prima persona con l'età compresa tra 18 e 24 anni.

const peopleNew = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 17 },
  { name: 'Charlie', age: 20 },
];
function findAge(a) {
  return a.age > 18 && a.age < 25;
}
peopleNew.findIndex(findAge);
2;

// 6 // Data un'array di persone, crea un nuovo array contenente solo i nomi delle persone di età maggiore di 20 anni.

const _people = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 17 },
  { name: 'Charlie', age: 20 },
  { name: 'David', age: 30 },
];

function over20(el) {
  return el.age > 20;
}
_people.filter(over20);
const result = people.filter(over20);
function namePeople(n) {
  return n.name;
}
result.map(namePeople);

// 7 // Data un'array di acquisti, trova il prezzo totale degli acquisti fatti da Alice

const purchases = [
  { customer: 'Alice', price: 20 },
  { customer: 'Bob', price: 30 },
  { customer: 'Alice', price: 15 },
  { customer: 'Charlie', price: 25 },
];

function alice(a) {
  if (a.customer === 'Alice') {
    return true;
  } else {
    return false;
  }
}
purchases.filter(alice);
// SALVARE IL VALORE IN UNA COSTANTE PRIMA DI CONTINUARE

const onlyAlice = purchases.filter(alice);

function total(i, a) {
  return i + a;
}
console.log(total);

onlyAlice.reduce(tot, 0);

function totalAll() {
  purchases.Alice.pric;
}
console.log(totalAll);

// 8 // Data un'array di persone, trova l'indice della prima persona il cui nome inizia con la B

const peopleAll = ['Alice', 'Bob', 'Charlie', 'Alice'];

function justBLetter(el) {
  if (el[0] == 'B') {
    return true;
  }
  return false;
}

const findSolution = peopleAll.findIndex(justBLetter);
console.log(findSolution);

// 9 // Data un'array di parole, calcola la somma delle lunghezze delle parole che iniziano con la e

const words = ['mela', 'banana', 'gatto', 'cane', 'elefante'];

function justELetter(acc, el) {
  if (el[0] == 'e') {
    acc = acc + el.length;
  }
  return acc;
}
const length = words.reduce(justELetter, 0);

length;

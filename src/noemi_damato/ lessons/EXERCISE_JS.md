<!-- @format -->

1.Dato un array di numeri, triplica ciascun numero presente nell'array.

const numbers = [1, 2, 3, 4, 5];
function newNumbers(el){return n\*3}
numbers.map(newNumbers);
(5) [3, 6, 9, 12, 15]

---

2.Dato un array di numeri, filtra solo i numeri dispari maggiori di 3.

const numbers = [1, 2, 3, 4, 5, 6 , 7 , 23];
function newNumbers(n) { if (n>3 && n%2!==0) return true}
numbers.filter(newNumbers);
(3) [5, 7, 23]

---

3.Dato un array di persone, trova la prima persona con l'età inferiore a 18 anni.

const people = [
{ name: 'Alice', age: 25 },
{ name: 'Bob', age: 17 },
{ name: 'Charlie', age: 20 }
];
function findAge(people) { return people.age <=18}
people.find(findAge)
{name: 'Bob', age: 17}

---

4.Dato un array di numeri, calcola la somma di tutti i numeri nell'array.

const numbers = [1, 2, 3, 4, 5 , 5 , 200 , 23];
function add(acc, n) { return acc= acc+n}
numbers.reduce(add)
243

---

5.Dato un array di persone, trova l'indice della prima persona con l'età compresa tra 18 e 24 anni.

const people = [
{ name: 'Alice', age: 25 },
{ name: 'Bob', age: 17 },
{ name: 'Charlie', age: 20 }
];
function between(p) {if (p.age>18 && p.age<24) {return true}}
people.find(between)
{name: 'Charlie', age: 20}

---

6.Data un'array di acquisti, trova il prezzo totale degli acquisti fatti da Alice

const purchases = [
{ customer: 'Alice', price: 20 },
{ customer: 'Bob', price: 30 },
{ customer: 'Alice', price: 15 },
{ customer: 'Charlie', price: 25 }
];

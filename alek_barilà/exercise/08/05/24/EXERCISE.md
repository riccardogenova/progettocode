<!-- 1.Dato un array di numeri, triplica ciascun numero presente nell'array. -->

const numbers = [1, 2, 3, 4, 5];
undefined
const tripledNumbers = numbers.map(number => number \* 3);
undefined
console.log(tripledNumbers);
(5) [3, 6, 9, 12, 15]

<!-- 2.Dato un array di numeri, filtra solo i numeri dispari maggiori di 3. -->

const numbers = [1, 2, 3, 4, 5, 6 , 7 , 23];
undefined
const filteredNumbers = numbers.filter(number => number % 2 !== 0 && number > 3);
undefined
console.log(filteredNumbers);
(3) [5, 7, 23]

<!-- 3.Dato un array di persone, trova la prima persona con l'età inferiore a 18 anni. -->

const people = [
{ name: 'Alice', age: 25 },
{ name: 'Bob', age: 17 },
{ name: 'Charlie', age: 20 }
];

undefined
const underagePerson = people.find(person => person.age < 18);
undefined
console.log(underagePerson);
{name: 'Bob', age: 17}

<!-- 4.Dato un array di numeri, calcola la somma di tutti i numeri nell'array. -->

const numbers = [1, 2, 3, 4, 5, 5, 200, 23];
undefined
const somma = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
undefined
console.log(somma);
243

<!-- 5.Dato un array di persone, trova l'indice della prima persona con l'età compresa tra 18 e 24 anni. -->

const people = [
{ name: 'Alice', age: 25 },
{ name: 'Bob', age: 17 },
{ name: 'Charlie', age: 20 }
];
undefined
const index = people.findIndex(person => person.age >= 18 && person.age <= 24);
undefined

console.log(index);
2

<!-- 6.Data un'array di persone, crea un nuovo array contenente solo i nomi delle persone di età maggiore di 20 anni. -->

const people = [
{ name: 'Alice', age: 25 },
{ name: 'Bob', age: 17 },
{ name: 'Charlie', age: 20 },
{ name: 'David', age: 30 }
];
undefined
const namesOver20 = people
.filter(person => person.age > 20)
.map(person => person.name);
undefined
console.log(namesOver20)
(2) ['Alice', 'David']

<!-- 7.Data un'array di acquisti, trova il prezzo totale degli acquisti fatti da Alice.-->

const purchases = [
{ customer: 'Alice', price: 20 },
{ customer: 'Bob', price: 30 },
{ customer: 'Alice', price: 15 },
{ customer: 'Charlie', price: 25 }
];
undefined

const numbers = [1, 2, 3, 4, 5];
undefined
function onMap (element, index, array) { if (element != "") return element \*3}  
undefined
numbers.map(onMap)
(5) [3, 6, 9, 12, 15]

---

const numbers = [1, 2, 3, 4, 5, 7, 23];
numbers.filter(el => el % 2 != 0 && el >= 3)
(4) [3, 5, 7, 23]

---

const people = [
{ name: 'Alice', age: 25 },
{ name: 'Bob', age: 17 },
{ name: 'Charlie', age: 20 }
];
undefined
people.find
ƒ find() { [native code] }
people.find(name, age)
VM4750:1 Uncaught ReferenceError: age is not defined
at <anonymous>:1:19
(anonimo) @ VM4750:1

        [NEW] Explain Console errors by using Copilot in Edge: click
         to explain an error.
        Learn more
        Don't show again

people.find( {name})
VM4844:1 Uncaught TypeError: object is not a function
at Array.find (<anonymous>)
at <anonymous>:1:8
(anonimo) @ VM4844:1
32Third-party cookie will be blocked. Learn more in the Issues tab.
people.find (guy < 18 = guy.age)
VM5215:1 Uncaught SyntaxError: Invalid left-hand side in assignment
people.find (guy => guy.age < 18)
{name: 'Bob', age: 17}

---

const numbers = [1, 2, 3, 4, 5, 5, 200, 23];
undefined
numbers.reduce()
VM5714:1 Uncaught TypeError: undefined is not a function
at Array.reduce (<anonymous>)
at <anonymous>:1:9
(anonimo) @ VM5714:1
function onReduce (totale, elemento) { return totale + elemento }
undefined
numbers.reduce(onReduce)
243

---

const people = [
{ name: 'Alice', age: 25 },
{ name: 'Bob', age: 17 },
{ name: 'Charlie', age: 20 }
];
function findIndex (el) {
return el.age > 18 && el.age < 24
}

undefined
people.findIndex(findIndex)
2

---

const people = [
{ name: 'Alice', age: 25 },
{ name: 'Bob', age: 17 },
{ name: 'Charlie', age: 20 },
{ name: 'David', age: 30 }
];

undefined

function filterAge (el) { return el > 20 }
undefined
people.filter(filterAge)
[]
function filterAge (el) { return el.age > 20 }
undefined
people.filter(filterAge)
(2) [{…}, {…}]0: {name: 'Alice', age: 25}1: {name: 'David', age: 30}length: 2[[Prototype]]: Array(0)

const people2 = people.filter(filterAge)
undefined

people2.map(showName)
(2) [undefined, undefined]
function showName (el) { return el.name }
undefined
people2.map(showName)
(2) ['Alice', 'David']

---

const purchases = [
{ customer: 'Alice', price: 20 },
{ customer: 'Bob', price: 30 },
{ customer: 'Alice', price: 15 },
{ customer: 'Charlie', price: 25 }
];

undefined

function priceFilter (el) {
if (el.customer === "Alice")
{return true}
else
{return false}
}
undefined
const alicePurchase = purchases.filter(priceFilter)
undefined
function purchaseTotal (total, el) { return el + total }
undefined
alicePurchase.reduce(purchaseTotal)
'[object Object][object Object]'
alicePurchase
(2) [{…}, {…}]0: {customer: 'Alice', price: 20}1: {customer: 'Alice', price: 15}length: 2[[Prototype]]: Array(0)
function purchaseTotale (total, el) {return el.price + total}
undefined
alicePurchase.reduce(purchaseTotale, 0)
35

---

.Data un'array di persone, trova l'indice della prima persona il cui nome inizia con la B

const people = ['Alice', 'Bob', 'Charlie', 'Alice'];
function filterPerson (el) { if (el[0] === B ) return true };
people.filter(filterPerson)

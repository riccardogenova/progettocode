<!-- @format -->

#es1
const numbers = [1, 2, 3, 4, 5];
function multiPly(n){return n\*3;}
numbers.map(multiPly);
(5) [3, 6, 9, 12, 15]
#es2
const numbers = [1, 2, 3, 4, 5, 6 , 7 , 23];
function filtra(n){if (n > 3){return n%2!== 0}};
numbers.filter(filtra);
(3) [5, 7, 23]
#es3
const people = [
{ name: 'Alice', age: 25 },
{ name: 'Bob', age: 17 },
{ name: 'Charlie', age: 20 }
];
function trova(p){return p. age < 18};
people.find(trova);
{name: 'Bob', age: 17}
#es4
const numbers = [1, 2, 3, 4, 5 , 5 , 200 , 23];
var somma = 0;
for(var i=0;i < numbers.length; i++){somma+=numbers[i];}
243
console.log("La somma dei numeri dell'array è: " + somma);
La somma dei numeri dell'array è: 243
oppure:
function sum(acc, n){return acc = acc + n};
numbers.reduce(sum);
243
#es5
const people = [
{ name: 'Alice', age: 25 },
{ name: 'Bob', age: 17 },
{ name: 'Charlie', age: 20 }
];
function checkAge(eta){if (eta.age > 18 && eta.age < 24){return eta};}
people.findIndex(checkAge);
2
più corretto di esta doveva essere true per correttezza
#es6

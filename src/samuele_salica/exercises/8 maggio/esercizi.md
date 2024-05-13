# ESERCIZIO 1

const numbers = [1 , 2 , 3 , 4 , 5]
undefined
function triplicator(el , index, array ){
return el \* 3
}
numbers.map(triplicator)
(5) [3, 6, 9, 12, 15]

# ESERCIZIO 2

const numbers = [1, 2, 3, 4, 5, 6, 7, 23]
function divide(el, index, array){
return el > 3 && el % 2 == 1
}
numbers.filter(divide)
(3) [5, 7, 23]

# ESERCIZIO 3

const people = [
{ name: 'Alice', age: 25 },
{ name: 'Bob', age: 17 },
{ name: 'Charlie', age: 20 }
]
function finder(el, index, array) {
return el.age < 18
}
people.find(finder)
{name: 'Bob', age: 17}

# ESERCIZIO 4

const numbers = [1, 2, 3, 4, 5 , 5 , 200 , 23]
function additional(accumulator, el, index, array){
return accumulator + el }
numbers.reduce(additional)
243

# ESERCIZIO 5

const people = [
{ name: 'Alice', age: 25 },
{ name: 'Bob', age: 17 },
{ name: 'Charlie', age: 20 }
]
function finder(el, index, array) {
return el.age > 18 && el.age < 25

    }
    people.findIndex(finder)
    -1

# ESERCIZIO 6

const people = [
{ name: 'Alice', age: 25 },
{ name: 'Bob', age: 17 },
{ name: 'Charlie', age: 20 },
{ name: 'David', age: 30 }
]

function filterName(a, b , c){
return a.age > 20 }
people.filter(filterName)
(2) [{…}, {…}]
0
:
{name: 'Alice', age: 25}
1
:
{name: 'David', age: 30}

function nomiOnly(a){
return a.name
}
nomi.map(nomiOnly)
(2) ['Alice', 'David']

# ESERCIZIO 7

const purchases = [
{ customer: 'Alice', price: 20 },
{ customer: 'Bob', price: 30 },
{ customer: 'Alice', price: 15 },
{ customer: 'Charlie', price: 25 }
]

function onFilter(a,b,c) {
return a.customer === "Alice"

}
const filtered = purchases.filter(onFilter)

function onReduce(acc, a , b , c) {
return acc + a.price
}
const somma = filtered.reduce(onReduce,0)

# ESERCIZIO 8

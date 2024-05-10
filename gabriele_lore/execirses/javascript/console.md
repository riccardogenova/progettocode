```
const numbers = [1, 2, 3, 4, 5];
function triple(ele) {
   return ele*3; 
}
const triplearray = numbers.map(triple)
```

```
const numbers = [1, 2, 3, 4, 5, 6 , 7 , 23];
function onFilter(ele) {
    return ele>3 && ele % 2 != 0;
}
const array = numbers.filter(onFilter)
```

```
const people = [
{ name: 'Alice', age: 25 },
{ name: 'Bob', age: 17 },
{ name: 'Charlie', age: 20 }
];
function onFind(ele) {
    return ele.age < 18;
}
const person = people.find(onFind)
```

```
const numbers = [1, 2, 3, 4, 5 , 5 , 200 , 23];
function Sum(count,ele) {
    return count = count + ele;
}
const sum = numbers.reduce(Sum, 0)
```

```
const people = [
{ name: 'Alice', age: 25 },
{ name: 'Bob', age: 17 },
{ name: 'Charlie', age: 20 }
];
function onFind(ele) {
    return ele.age >=18 && ele.age <= 24;
}
const person = people.find(onFind)
```

====

```
const people = [
{ name: 'Alice', age: 25 },
{ name: 'Bob', age: 17 },
{ name: 'Charlie', age: 20 },
{ name: 'David', age: 30 }
];
function onFilter(ele) {
    return ele.age>20;
}
function FilterName(ele) {
    return ele.name;
}
const p = people.filter(onFilter);
const nomi = p.map(FilterName)
```

```
const purchases = [
{ customer: 'Alice', price: 20 },
{ customer: 'Bob', price: 30 },
{ customer: 'Alice', price: 15 },
{ customer: 'Charlie', price: 25 }
];
function Sum(count,ele) {
    if(ele.customer == 'Alice')
    return count = count + ele.price;
    else
    return count;
}
const sum = purchases.reduce(Sum, 0)
```

```
const people = ['Alice', 'Bob', 'Charlie', 'Alice'];
function findIndex(ele) {
    return ele.charAt(0) == 'B';
}
const person = people.findIndex(findIndex)
```

```
const words = ['mela', 'banana', 'gatto', 'cane', 'elefante'];
function Sum(count,ele) {
    if(ele.charAt(0) == 'e')
    return count = count + ele.length;
    else
    return count;
}
const sum = words.reduce(Sum, 0)
```

```
const numbers = [1, 4, 9, 16, 25];
function sqrt(ele) {
   return Math.sqrt(ele); 
}
function Sum(count,ele) {
    return count = count + ele;
}
const sqrts = numbers.map(sqrt);
const sum = sqrts.reduce(Sum, 0)
```

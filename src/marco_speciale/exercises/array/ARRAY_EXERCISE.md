<!-- @format -->

```javascript

// 1 Dato un array di numeri, triplica ciascun numero presente nell'array

const numeri = [1, 2, 3, 4, 5];
function triplica(numero) {
return numero * 3;
}

const numeriTriplicati = numeri.map(triplica);

const numeri = [1, 2, 3, 4, 5];
function triplica(numero) {
return numero.lenght > 3;
}

const numeriTriplicati = numeri.filter(triplica);

// 2 Dato un array di numeri, filtra solo i numeri dispari maggiori di 3.

function filtroDispari (e){
if ( e> 3 && e % 2 !== ){
return true
} else { return false}
}
numbers.filter(filtriDispari)

// 3 Dato un array di persone, trova la prima persona con l'età inferiore a 18 anni.

const people = [
{ name: 'Alice', age: 25 },
{ name: 'Bob', age: 17 },
{ name: 'Charlie', age: 20 }
];

function minor(k) {
if (k.age < 18) {
return true
} else {
return false
}
}

people.map(minor)

// 4 Dato un array di numeri, calcola la somma di tutti i numeri nell'array.
const numbers = [1, 2, 3, 4, 5 , 5 , 200 , 23];

function sommaArray(a, b) {
    return a + b
}
numbers.reduce(sommaArray)



//  5 Dato un array di persone, trova l'indice della prima persona con l'età compresa tra 18 e 24 anni.
const people = [
{ name: 'Alice', age: 25 },
{ name: 'Bob', age: 17 },
{ name: 'Charlie', age: 20 }
];

function tra(l) {
if (l.age >= 18 && l.age <= 24) {
return true
} else {
return false
}
}
people.filter(tra)

// 6 Data un'array di persone, crea un nuovo array contenente solo i nomi delle persone di età maggiore di 20 anni.

const people = [
{ name: 'Alice', age: 25 },
{ name: 'Bob', age: 17 },
{ name: 'Charlie', age: 20 },
{ name: 'David', age: 30 }
];

function major(v) {
    if (v.age > 20) {
        return true
    } else {
        return false
    }
}

people.filter(major)

// 7 Data un'array di acquisti, trova il prezzo totale degli acquisti fatti da Alice

const purchases = [
{ customer: 'Alice', price: 20 },
{ customer: 'Bob', price: 30 },
{ customer: 'Alice', price: 15 },
{ customer: 'Charlie', price: 25 }
];

function alice(b) {
    if ( b.price == 20  ||b.price == 15  ) {
        return true
    } else {
        return false
    }
}
const arrayFilter= purchases.filter(alice)

function sommaPrice(a, b) {
    return a.price + b.price
}
arrayFilter.reduce(sommaPrice)

// 8 Data un'array di persone, trova l'indice della prima persona il cui nome inizia con la B
const people = ['Alice', 'Bob', 'Charlie', 'Alice'];
function filterArray(a) {
    if (a.charAt() == 'B') {
        return true
    } else {
        return false
    }
}
people.filter(filterArray)



// 9 Data un'array di parole, calcola la somma delle lunghezze delle parole che iniziano con la e
const words = ['mela', 'banana', 'gatto', 'cane', 'elefante'];
function calcolo(a) {
    if (a.charAt() == 'e') {
        return true
    } else {
        return false
    }
}
const calcoloWord= words.filter(calcolo)
const arrayToString=calcoloWord.join()
arrayToString.length


//  10 Dato un'array di numeri, crea un nuovo array contenente la radice quadrata di ciascun numero e poi calcola la somma di tutte le radici quadrate.
const numbers = [1, 4, 9, 16, 25];

function radiceQuadrata(b) {
    return  Math.sqrt(b)
}
const radice=numbers.map(radiceQuadrata)

function totaleRadiceQuadrata(a ,b ) {
    return a + b
}

radice.reduce(totaleRadiceQuadrata)
```

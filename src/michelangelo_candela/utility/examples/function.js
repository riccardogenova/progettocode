/** @format */

//una variabile immutabile è una variabile il cui valore non può essere modificato una volta che è stato assegnato
const numeri = [1, 2, 3, 4, 5, 6, 7];

const numeriCopy = [...numero, 8, 9, 10]; // ... restituisce un array con tutti i valori di un array (spread), .
function onFilter(numero, indice, array) {}
if (numer % 2 === 0) {
  return true;
} else {
  return false;
}

const el = [1, 2, 3, 4, 5, 6, 7];
function onMap(el, indice, array) {
  return el * 2;
}

const numeriPari = numeri.filter(num => num % 2 === 0); // % restituisce il residuo della divisione tra due numeri, filtra i numeri pari (filter), .filter per rimuovere, deve tornare true o false
console.log(numeriPari); //il filter restituisce un array

const numeriRaddoppiati = numeri.map(onMap); // * restituisce il prodotto tra due numeri, modifica i numeri (map),
console.log(numeriRaddoppiati); //il map restituisce un array

function onReduce(acc, el, indice, array) {
  acc = acc + el;
  return acc;
}
const sommaNumeri = numeri.reduce(onReduce, 0);

const numeroTrovato = numeri.find(onFind); //find restituisce un elemento

function onFind(el, indice, array) {}
if (el % 2 === 0) {
  return true;
} else {
  return false;
}

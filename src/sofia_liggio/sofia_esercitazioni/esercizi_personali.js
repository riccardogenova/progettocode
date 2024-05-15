/** @format */

// Scrivi un programma che chieda all'utente il suo nome e visualizzi un messaggio di benvenuto con il nome inserito.
let nome = prompt('Inserisci il tuo nome');
console.log(`Benvenuto ${nome}!`);

// Scrivi una funzione che prenda due numeri come input e restituisca la loro somma.
let num1 = 5;
let num2 = 7;
let total = num1 + num2;
console.log(total);

// Scrivi una funzione che prenda un numero come input e restituisca true se è pari e false se è dispari.
let numero1 = 4;
let numero2 = 7;
function isPari(numero) {
  if (numero % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(`${numero1} ${isPari(numero1)}`);
console.log(`${numero2} ${isPari(numero2)}`);

// Scrivi un programma che chieda all'utente un numero e visualizzi se è positivo, negativo o zero.
let numero = prompt('Inserisci un numero');
numero = parseFloat(numero);
if (numero > 0) {
  console.log('Il numero inserito è positivo');
} else if (numero < 0) {
  console.log('Il numero inserito è negativo');
} else {
  console.log('Il numero inserito è 0');
}

// Scrivi una funzione che prenda un array di numeri come input e restituisca la loro somma.

// Scrivi un programma che prenda una stringa come input e restituisca la lunghezza della stringa.
let stringt = 'Ho fame';
let long = stringt.length;
console.log(long);

// Scrivi una funzione che prenda un numero come input e restituisca la sua tabellina fino al 10.

// Scrivi un programma che prenda un numero come input e verifichi se è primo o no.

// Scrivi una funzione che prenda una stringa come input e restituisca la stringa al contrario.

// Scrivi un programma che prenda una frase come input e conti quante vocali contiene.

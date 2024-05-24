/** @format */

// PRIMO ESERCIZIO

// Inserimento di Elementi
// Scrivi una funzione aggiungiElemento che accetta un array e un elemento come parametri
// e aggiunge l'elemento alla fine dell'array.

const addArray = [];

//Funzione dinamica
function aggiungiElemento(e, array) {
  array.push(e);
}

aggiungiElemento('davide', addArray); //(elemento da aggiungere, nome variabile)

// SECONDO ESERCIZIO

// Rimozione di Elementi
// Scrivi una funzione rimuoviUltimoElemento che accetta un array e rimuove l'ultimo elemento dell'array.
const removeArray = ['davide', 'paolo', 'giorgio'];
const removeArray2 = ['cani', 'gatti', 'tori'];

//Funzione dinamica
function rimuoviUltimoElemento(array) {
  array.pop();
}

rimuoviUltimoElemento(removeArray); //Parametro che gli passo
rimuoviUltimoElemento(removeArray2); //Parametro che gli passo

// TERZO ESERCIZIO

// Ricerca di Elementi:
// Scrivi una funzione trovaElemento che accetta un array e un elemento come parametri e
// restituisce true se l'elemento è presente nell'array, altrimenti false.

const findArray = ['sole', 'mare', 'montagna'];

function trovaElemento(e, array) {
  array.find(function (x) {
    if (x === e) return console.log(e, true);
    else {
      return console.log(e, false);
    }
  });
}

trovaElemento('sole', findArray);

// QUARTO ESERCIZIO

// Creazione di Oggetti
// Scrivi una funzione creaPersona che accetta nome, età e indirizzo come parametri e restituisce
// un oggetto persona.

function creaPersona(nome, età, indirizzo) {
  return (persona = { nome, età, indirizzo });
}

// QUINTO ESERCIZIO

// Aggiunta di Proprietà
// Scrivi una funzione aggiungiProprietà che accetta un oggetto, una chiave e un valore
// come parametri e aggiunge la nuova proprietà all'oggetto.

let persona = {};
let animali = {};
let meteo = {};

//Funzione dinamica
function aggiungiProprietà(obj, key, value) {
  obj[key] = value;
}

aggiungiProprietà(persona, 'nome', 'davide');
aggiungiProprietà(animali, 'razza', 'pitbull');
aggiungiProprietà(meteo, 'nuvoloso', 'pioggia');

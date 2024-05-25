/** @format */

//  AL CLIC, CAMBIA IL COLORE DEL TESTO DI UN PARAGRAFO IN ROSSO //
const paragrafo = document.getElementById('testoNero');
const bottoneColore = document.getElementById('cambiaColore');

bottoneColore.addEventListener('click', cambiaColore);
function cambiaColore() {
  paragrafo.style.color = 'red';
}

//  NASCONDI UN ELEMENTO QUANDO VIENE CLICCATO //

function nascondiBottone() {
  paragrafo.style.visibility = 'hidden';
}
console.log(nascondiBottone)

//  MOSTRA UN ELEMENTO QUANDO VIENE CLICCATO //

function mostraBottone() {
  paragrafo.style.visibility = 'visible';
}
console.log(mostraBottone)

//  AL CLIC, AGGIUNGI UN NUOVO PARAGRAFO AL DIV ESISTENTE //
const paragrafoNuovo = document.getElementById('nuovo');

function aggiungiParagrafo() {
  paragrafoNuovo.textContent = 'Questo è un nuovo paragrafo';
}
console.log(aggiungiParagrafo)

// AL CLIC, CAMBIA IL TESTO DI UN ELEMENTO SPECIFICO //
const bottone = document.getElementById('bottoneTesto');

bottone.addEventListener('click', nuovoTesto);

function nuovoTesto() {
  paragrafoNuovo.textContent = 'Il testo del paragrafo è stato cambiato';
}

// AL CLIC, AGGIUNGI UNA CLASSE CSS A UN ELEMENTO //
const colorami = document.getElementById('css');

function coloraRosso() {
  colorami.style.backgroundColor = 'red';
}

colorami.addEventListener('click', coloraRosso);

// AL CLIC DI UN BOTTONE, RIMUOVI UN ALTRO ELEMENTO SPECIFICO DAL DOM //
const nascondinoBottone = document.getElementById('nascondiColorami');

function sparizioneColorami() {
  colorami.remove();
}

nascondinoBottone.addEventListener('click', sparizioneColorami);

// AL CLIC DI UN BOTTONE, SOSTITUISCI UN ELEMENTO ESISTENTE CON UN NUOVO ELEMENTO //
const bottoneSost = document.getElementById('bottoneSostituisci');

function nuovoElemento() {
  paragrafo.style.color = 'yellow';
}

bottoneSost.addEventListener('click', nuovoElemento);

// AL CLIC DI UN ELEMENTO, MODIFICA UNA PROPRIETA' CSS DI UN ELEMENTO //
const nuovoCss = document.getElementById('nuovaProprieta');

function modificaProprieta() {
  nuovoCss.style.fontWeight = 'bold';
}
nuovoCss.addEventListener('click', modificaProprieta);

// IN JAVASCRIPT (NON CSS) CAMBIA IL COLORE DI SFONDO DI UN ELEMENTO QUANDO IL MOUSE PASSA SOPRA //

const cambiaSfondo = document.getElementById('differentbackground');

function changeBackground() {
  cambiaSfondo.style.backgroundColor = 'green';
}

cambiaSfondo.addEventListener('mouseenter', changeBackground);

// CAMBIA L'IMMAGINE VISUALIZZATA QUANDO L'UTENTE CLICCA SU UN BOTTONE //
const cambiareImmagine = document.getElementById('immagineCarne');
const bottoneCarne = document.getElementById('bottoneImmagine');

function changeImage() {
  cambiareImmagine.src =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8IhczNxXSzEGtSTFUld_c1jh4Vk13ejUIackDcV7DT9EsI-KG74dO__P-kLREOtDOxCo&usqp=CAU';
}

bottoneCarne.addEventListener('click', changeImage);

// AL CLIC DI UN BOTTONE, AGGIUNGI UN NUOVO PARAGRAFO PRIMA DI UN ELEMENTO ESISTENTE //

const bottoneNuovoParagrafo = document.getElementById('nuovoParagrafo');

function addParagraph() {
  paragrafo.textContent = 'Questo è un nuovo paragrafo';
}

bottoneNuovoParagrafo.addEventListener('click', addParagraph);

// Rimozione di Elementi. 
// Scrivi una funzione rimuoviUltimoElemento che accetta un array e rimuove l'ultimo elemento dell'array.

const persone = ["consuelo", "christian", "andrea", "gabriele"];
const animali = ["cani", "gatti"];

function rimuoviUltimoElemento(array){ // rendo una funzione dinamica, qualsiasi array riceve andrà a modificare quello specifico. 
  // il nome che è stato passato come elemento (array) sarà TUTTI  i parametri che passerò quando richiamo la funzione (vedi 120-121).
  array.pop();
}

rimuoviUltimoElemento(persone); // qui scrivo il tipo di parametro che dovrò passare
rimuoviUltimoElemento(animali); // in console spunterà solo cani e tutti i nomi tranne gabriele


// Inserimento di Elementi. 
// Scrivi una funzione aggiungiElemento che accetta un array e un elemento come parametri e aggiunge l'elemento alla fine dell'array.
const colori = ["rosso", "verde", "blu"];

function aggiungiElemento(e, array) {
  array.push(e);
}
aggiungiElemento("giallo", colori);


// Ricerca di Elementi.
// Scrivi una funzione trovaElemento che accetta un array e un elemento come parametri e 
// restituisce true se l'elemento è presente nell'array, altrimenti false.

const luoghi = ["mare", "montagna", "campeggio"];


function trovaElemento(elementoDaTrovare, arrayDaInserire) {
  arrayDaInserire.find(function (elementoDaCercare) {
    if (elementoDaCercare === elementoDaTrovare) console.log(elementoDaTrovare,true);
    else console.log(elementoDaTrovare,false);
    });
}
trovaElemento("montagna", luoghi);
// spunta false/true/false perché cicla i tre elementi e ne restitutisce true soltanto uno.


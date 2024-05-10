//  AL CLIC, CAMBIA IL COLORE DEL TESTO DI UN PARAGRAFO IN ROSSO //
const paragrafo = document.getElementById("testoNero");
const bottoneColore = document.getElementById("cambiaColore");

bottoneColore.addEventListener("click", cambiaColore);
function cambiaColore() {
  paragrafo.style.color = "red";
}

//  NASCONDI UN ELEMENTO QUANDO VIENE CLICCATO //

function nascondiBottone() {
  paragrafo.style.visibility = "hidden";
}

//  MOSTRA UN ELEMENTO QUANDO VIENE CLICCATO //

function mostraBottone() {
  paragrafo.style.visibility = "visible";
}

//  AL CLIC, AGGIUNGI UN NUOVO PARAGRAFO AL DIV ESISTENTE //
const paragrafoNuovo = document.getElementById("nuovo");

function aggiungiParagrafo() {
  paragrafoNuovo.textContent = "Questo è un nuovo paragrafo";
}

// AL CLIC, CAMBIA IL TESTO DI UN ELEMENTO SPECIFICO //
const bottone = document.getElementById("bottoneTesto");

bottone.addEventListener("click", nuovoTesto);

function nuovoTesto() {
  paragrafoNuovo.textContent = "Il testo del paragrafo è stato cambiato";
}

// AL CLIC, AGGIUNGI UNA CLASSE CSS A UN ELEMENTO //
const colorami = document.getElementById("css");

function coloraRosso() {
  colorami.style.backgroundColor = "red";
}

colorami.addEventListener("click", coloraRosso);

// AL CLIC DI UN BOTTONE, RIMUOVI UN ALTRO ELEMENTO SPECIFICO DAL DOM //
const nascondinoBottone = document.getElementById("nascondiColorami");

function sparizioneColorami() {
  colorami.remove();
}

nascondinoBottone.addEventListener("click", sparizioneColorami);

// AL CLIC DI UN BOTTONE, SOSTITUISCI UN ELEMENTO ESISTENTE CON UN NUOVO ELEMENTO //
const bottoneSost = document.getElementById("bottoneSostituisci");

function nuovoElemento() {
  paragrafo.style.color = "yellow";
}

bottoneSost.addEventListener("click", nuovoElemento);

// AL CLIC DI UN ELEMENTO, MODIFICA UNA PROPRIETA' CSS DI UN ELEMENTO //
const nuovoCss = document.getElementById("nuovaProprieta");

function modificaProprieta() {
  nuovoCss.style.fontWeight = "bold";
}
nuovoCss.addEventListener("click", modificaProprieta);

// IN JAVASCRIPT (NON CSS) CAMBIA IL COLORE DI SFONDO DI UN ELEMENTO QUANDO IL MOUSE PASSA SOPRA //

const cambiaSfondo = document.getElementById("differentbackground");

function changeBackground() {
  cambiaSfondo.style.backgroundColor = "green";
}

cambiaSfondo.addEventListener("mouseenter", changeBackground);

// CAMBIA L'IMMAGINE VISUALIZZATA QUANDO L'UTENTE CLICCA SU UN BOTTONE //
const cambiareImmagine = document.getElementById("immagineCarne");
const bottoneCarne = document.getElementById("bottoneImmagine");

function changeImage() {
  cambiareImmagine.src =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8IhczNxXSzEGtSTFUld_c1jh4Vk13ejUIackDcV7DT9EsI-KG74dO__P-kLREOtDOxCo&usqp=CAU";
}

bottoneCarne.addEventListener("click", changeImage);

// AL CLIC DI UN BOTTONE, AGGIUNGI UN NUOVO PARAGRAFO PRIMA DI UN ELEMENTO ESISTENTE //

const bottoneNuovoParagrafo = document.getElementById("nuovoParagrafo");

function addParagraph() {
  paragrafo.textContent = "Questo è un nuovo paragrafo";
}

bottoneNuovoParagrafo.addEventListener("click", addParagraph);

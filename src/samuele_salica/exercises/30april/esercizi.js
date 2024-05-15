/** @format */

//esercizio 1
const paragrafo = document.getElementById('paragrafo');
function changeColor() {
  paragrafo.style.color = 'red';
}
paragrafo.addEventListener('click', changeColor);

//esercizio 2
const button = document.querySelector('button');
function hide() {
  button.style.display = 'none';
}
button.addEventListener('click', hide);

// esercizio 3
const mybutton = document.getElementById('mybutton');
function addparagraph() {
  const newParagraph = document.createElement('p');
  newParagraph.textContent = 'vive';
  var nodocontenitore = document.getElementById('mydiv');
  nodocontenitore.appendChild(newParagraph);
}
mybutton.addEventListener('click', addparagraph);

//Esercizio 4
const bottone = document.getElementById('es4');
var testo = document.getElementById('testodacambiare');
function cambiaTesto() {
  testo.textContent = 'Il testo è da cambiare';
}
bottone.addEventListener('click', cambiaTesto);

//Esercizio 5
const bottoneCss = document.getElementById('escss');
function addClassCss() {
  bottoneCss.classList.add('bottonecambiato');
}
bottoneCss.addEventListener('click', addClassCss);

//Esercizio 6
const bottonremove = document.getElementById('remove_elem');
const testoremove = document.getElementById('esplodi');
function rimuovitesto() {
  esplodi.remove();
}
bottonremove.addEventListener('click', rimuovitesto);

//esercizio 7
const pulsanteOriginale = document.getElementById('nome1');
const nodeContainer = document.getElementById('container');
function sostituisci() {
  const nuovoPulsante = document.createElement('button');
  nuovoPulsante.textContent = 'Nuovo Pulsante';
  nodeContainer.replaceChild(nuovoPulsante, pulsanteOriginale);
}
pulsanteOriginale.addEventListener('click', sostituisci);

//Esericizio 8
const cambiaColore = document.getElementById('cambiailcolore');
function cambiaIlCss() {
  cambiaColore.classList.toggle('modificato');
}
cambiaColore.addEventListener('click', cambiaIlCss);

//Esercizio 9
const passaciSopra = document.getElementById('passaci');
function passaci() {
  passaciSopra.style.color = 'red';
}
function sopra() {
  passaciSopra.style.color = 'black';
}
passaciSopra.addEventListener('mouseover', passaci);
passaciSopra.addEventListener('mouseout', sopra);

//Esercizio 10

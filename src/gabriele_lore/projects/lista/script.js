/** @format */

var lista = document.getElementById('list');
var bottone = document.getElementById('button');
var casella = document.getElementById('name');
var gr = document.getElementById('gruppi');
var NodoDiv = document.getElementById('cont');
var nomi = [];

//var bottoneGruppo = document.getElementById('gruppi');
//var dropdown = document.getElementById('numero');
function aggiungiAllaLista() {
  var elemento = document.createElement('li');
  elemento.innerHTML = casella.value;
  nomi.push(casella.value);
  lista.appendChild(elemento);
}
function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function raggruppa() {
  var list = [];

  for (let i = 0; i < nomi.length; i++) {
    var retry = true;
    var n = randomIntFromInterval(1, nomi.length) - 1;
    while (retry) {
      if (nomi[n] != null) {
        list[i] = nomi[n];
        nomi[n] = null;
        retry = false;
      }
    }
  }
  var counter = 0;
  for (let i = 0; i < list.length; i++) {
    var elemento = document.createElement('span');
    elemento.textContent = nomi[i];
    NodoDiv.appendChild(elemento);
    counter++;
    if (counter % 3 == 0) {
      NodoDiv.appendChild(document.createElement('br'));
    }
  }
}
bottone.addEventListener('click', aggiungiAllaLista);
gr.addEventListener('click', raggruppa);

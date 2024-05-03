var lista = document.getElementById("list");
var bottone = document.getElementById("button");
var casella = document.getElementById("name");
var nomi = [];

var bottoneGruppo = document.getElementById("gruppi");
var dropdown = document.getElementById("numero");

function aggiungiAllaLista() {
  var elemento = document.createElement("li");
  elemento.innerHTML = casella.value;
  nomi.push(casella.value);
  lista.appendChild(elemento);
}

function raggruppa() {
  var indice = 0;
}

bottone.addEventListener("click", aggiungiAllaLista);

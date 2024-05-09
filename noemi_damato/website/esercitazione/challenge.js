var lista = document.getElementById("list");
var bottone = document.getElementById("button");
var casella = document.getElementById("name");
var nomi = [];

var bottoneGruppo = document.getElementById("gruppi");
var dropdown = document.getElementById("numero");
function aggiungiAllaLista() {
  var elemento = document.createElement("li");
  elemento.innerHTML = casella.value;
  lista.appendChild(elemento);
}

bottone.addEventListener("click", aggiungiAllaLista);

function raggruppa() {
  var indice0;
}

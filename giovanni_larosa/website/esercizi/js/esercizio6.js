const pulsante = document.getElementById("bottone");
const paragrafo = document.getElementById("paragrafo");
function elimina() {
  paragrafo.style.display = "none";
}
pulsante.addEventListener("click", elimina);

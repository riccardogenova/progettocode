const apri = document.getElementById("apri");
const chiudi = document.getElementById("chiudi");
let paragrafo = document.getElementById("paragrafo");
function mostra() {
  paragrafo.style.display = "inline";
}
apri.addEventListener("click", mostra);
function nascondi() {
  paragrafo.style.display = "none";
}
chiudi.addEventListener("click", nascondi);

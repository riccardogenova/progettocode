// seleziono il paragrafo
const paragrafo = document.getElementById("paragrafo");
function changeColor() {
  paragrafo.style.color = "red";
}
function changeSize() {
  paragrafo.style.fontSize = "50px";
}
function reSizeColor() {
  paragrafo.style.color = "black";
  paragrafo.style.fontSize = "16px";
}
// aggiunti eventi di cambio colore e dimensioni
paragrafo.addEventListener("mouseover", changeColor);
paragrafo.addEventListener("mouseover", changeSize);
paragrafo.addEventListener("mouseout", reSizeColor);

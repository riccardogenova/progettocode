//modifica il colore e la dimensione del testo di un paragrafo quando l'utente passa il mouse sopra.
const paragraph = document.getElementById("colorparagraph");
function changetext() {
  colorparagraph.style.color = "pink";
  colorparagraph.style.fontSize = "36px";
}
colorparagraph.addEventListener("mousover", changetext);
const colorparagraph = document.getElementById("colorparagraph");
function restoretext() {
  colorparagraph.style.color = "black";
  colorparagraph.style.fontSize = "16px";
}
colorparagraph.addEventListener("mousout", restoretext);

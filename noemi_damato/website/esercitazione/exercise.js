//bottone che si rimuove
const button = document.querySelector(`button`);
button.addEventListener(`click`, function remove() {
  button.remove();
});

// bottone contatore
let counter = document.getElementById("counter");
function incrementa() {
  let currentCount = parseInt(counter.textContent);
  currentCount++;
  counter.textContent = currentCount;
}
// nascondere e mostrare un paragrafoquando si clicca sui bottoni specifici
function hideparagraph() {
  var paragraph = document.getElementById("paragraph");
  paragraph.style.display = "none";
}
function showparagraph() {
  var paragraph = document.getElementById("paragraph");
  paragraph.style.display = "block";
}
//modifica il colore e la dimensione del testo di un paragrafo quando l'utente passa il mouse sopra.
const colortext = document.getElementById("changetext");
function changetext() {
  colortext.style.color = "pink";
  colortext.style.fontSize = "36px";
}
restoretext.addEventListener("mouseover", colortext);
const restoretext = document.getElementById("changetext");
function changetext() {
  restoretext.style.color = "black";
  restoretext.style.fontSize = "16px";
}
restoretext.addEventListener("mouseout", restoretext);
// esercizio da sistemare

//Al Clic, cambia il colore del testo di un paragrafo in rosso.
const redparagraph = document.getElementById("paragraph");
function paragraph() {
  redparagraph.style.color = "red";
}
redparagraph.addEventListener("click", paragraph);

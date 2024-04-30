//`2_Modifica lo stile di un elemento tramite JavaScript. Scrivi una funzione in JavaScript che modifica il colore e la dimensione del testo di un paragrafo quando l'utente passa il mouse sopra.`
var element = document.getElementById("testo");
element.addEventListener('oninput', change);
function change() {
  element.style.color = red;
  element.style.fontSize = "50px";

}
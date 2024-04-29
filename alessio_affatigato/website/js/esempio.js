// 1_Nascondi e mostra elementi. Usa JavaScript per nascondere un paragrafo con un contenuto a caso, quando si clicca su un bottone e
// mostrarlo quando si clicca su un altro.
// 2_Modifica lo stile di un elemento tramite JavaScript. Scrivi una funzione in JavaScript che modifica il colore e la dimensione del
// testo di un paragrafo quando l'utente passa il mouse sopra.
// 3.Cambia lo sfondo di una pagina. Crea un dropdown con diverse opzioni di colore. Quando un'opzione viene selezionata, cambia il
//  colore di sfondo della pagina usando JavaScript.

//Primo esercizio
function nascondiParagrafo(params) {
  document.getElementById("paragrafo").style.display = "None";
}
function mostraParagrafo() {
  document.getElementById("paragrafo").style.display = "block";
}

//Secondo esercizio
document.getElementById("paragrafo").onmouseover = function () {
  mouseOver();
};

document.getElementById("paragrafo").onmouseout = function () {
  mouseOut();
};

function mouseOver() {
  const paragrafo = document.getElementById("paragrafo");
  paragrafo.style.color = "red";
  paragrafo.style.fontSize = "24px";
}

function mouseOut() {
  const paragrafo = document.getElementById("paragrafo");
  paragrafo.style.color = "black";
  paragrafo.style.fontSize = "16px";
}

// Terzo esercizio
function changeBackgroundColor() {
  var selectedColor = document.getElementById("colorisfondo").value;
  document.body.style.backgroundColor = selectedColor;
}

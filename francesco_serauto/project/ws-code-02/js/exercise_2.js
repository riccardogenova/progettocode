// 1_Nascondi e mostra elementi. Usa JavaScript per nascondere un paragrafo con un contenuto a caso, quando si clicca su un bottone e mostrarlo quando si clicca su un altro.
const paragrafro = document.getElementById("pDaModificare");
const bottoneMostra = document.getElementById("mostra");
const bottoneNascondi = document.getElementById("nascondi");
function nascondi() {
  paragrafro.style.visibility = "hidden";
}
bottoneNascondi.addEventListener("click", nascondi);
function mostra() {
  paragrafro.style.visibility = "visible";
}
bottoneMostra.addEventListener("click", mostra);
// 2_Modifica lo stile di un elemento tramite JavaScript. Scrivi una funzione in JavaScript che modifica il colore e la dimensione del testo di un paragrafo quando l'utente passa il mouse sopra.
paragrafro.addEventListener("mouseover", function () {
  paragrafro.style.color = "orange";
  paragrafro.style.fontSize = "50px";
});
// 3.Cambia lo sfondo di una pagina. Crea un dropdown con diverse opzioni di colore. Quando un'opzione viene selezionata, cambia il colore di sfondo della pagina usando JavaScript.
function cambiaSfondo() {
  const menuTendina = document.getElementById("colori").value;
  const bg = document.querySelector(".excon0");
  bg.style.backgroundColor = menuTendina;
}
document.getElementById("colori").addEventListener("change", cambiaSfondo);

"use strict";
//1_Al Clic, cambia il colore del testo di un paragrafo in rosso.
const paragrafoCODE = document.getElementById("code-2");
const bottoneCambiaColore = document.getElementById("cambiaColore");
function cambiaColore() {
  paragrafoCODE.style.color = "red";
}
bottoneCambiaColore.addEventListener("click", cambiaColore);
// 2_Nascondi un elemento quando viene cliccato.
const bottoneNascondiParagrafo = document.getElementById("nascondiParagrafo");
function nascondiParagrafo() {
  paragrafoCODE.style.visibility = "hidden";
}
bottoneNascondiParagrafo.addEventListener("click", nascondiParagrafo);
// 2_Mostra un elemento quando viene cliccato.
const bottoneMostraParagrafo = document.getElementById("mostraParagrafo");
function mostraParagrafo() {
  paragrafoCODE.style.visibility = "visible";
}
bottoneMostraParagrafo.addEventListener("click", mostraParagrafo);
// 3_Al Clic, aggiungi un nuovo paragrafo al div esistente.
const bottoneAggiungiP = document.getElementById("aggiungiParagrafo");
function aggiungiParagrafo() {
  const contenitore = document.querySelector(".excon0");
  const nuovoParagrafo = document.createElement("p");
  nuovoParagrafo.textContent = "Progetto CODE";
  contenitore.appendChild(nuovoParagrafo);
}
bottoneAggiungiP.addEventListener("click", aggiungiParagrafo);
// 4_Al Clic, cambia il testo di un elemento specifico.
const bottoneCambiaTesto = document.getElementById("cambiaTesto");
function cambiaTesto() {
  bottoneCambiaTesto.textContent = Math.random();
}
bottoneCambiaTesto.addEventListener("click", cambiaTesto);
// 5_Al Clic, aggiungi una classe CSS a un elemento.
const bottoneAggiungiClasse = document.getElementById("aggiungiClasse");
function aggiungiClasse() {
  bottoneAggiungiClasse.classList.add("bottonejs");
}
bottoneAggiungiClasse.addEventListener("click", aggiungiClasse);
//6_Al Clic di un bottone, rimuovi un altro elemento specifico dal DOM.
const bottoneEliminaEsistente = document.getElementById("eEE");
bottoneEliminaEsistente.addEventListener("click", function () {
  paragrafoCODE.remove();
});
//7_ Al Clic di un bottone, sostituisci un elemento esistente con un nuovo elemento.
const bottoneSostituisci = document.getElementById("sostituisci");
function sostituisci() {
  const nuovoElemento = document.createElement("h1");
  nuovoElemento.textContent = "Nuovo Elemento";
  paragrafoCODE.replaceWith(nuovoElemento);
}
bottoneSostituisci.addEventListener("click", sostituisci);

//8_Al clic di un elemento, modifica una proprietà CSS di un elemento.
const bottoneModificaCSS = document.getElementById("modificaCSS");
const box = document.querySelector(".excon0");
function modificaCSS() {
  box.style.backgroundColor = "red";
}
bottoneModificaCSS.addEventListener("click", modificaCSS);

// 9_ In JavaScript (non CSS) cambia il colore di sfondo di un elemento quando il mouse passa sopra.
function cambiaSfondo() {
  box.style.backgroundColor = "black";
}
box.addEventListener("mouseover", cambiaSfondo);
// 10_ cambia l'immagine visualizzata quando l'utente clicca su un bottone.
const bottoneCambiaImg = document.getElementById("cambiaIMG");
const Immagine = document.getElementById("imgDaCambiare");
function cambiaImmagine() {
  Immagine.src =
    "https://e7.pngegg.com/pngimages/22/973/png-clipart-computer-icons-tag-html-coder-angle-triangle-thumbnail.png";
}
bottoneCambiaImg.addEventListener("click", cambiaImmagine);
// 11_Al Clic di un bottone, aggiungi un nuovo paragrafo prima di un elemento esistente.
const bottoneAggiungiElemento = document.getElementById("aggiungiElemento");
function aggiungiElemento() {
  const nuovoParagrafo = document.createElement("p");
  nuovoParagrafo.textContent = "Progetto CODE";
  paragrafoCODE.appendChild(nuovoParagrafo);
}
bottoneAggiungiElemento.addEventListener("click", aggiungiElemento);
// 14_Mostra o nascondi un elemento ogni volta che si clicca su un bottone.
const bottoneMostraNascondi = document.getElementById("mostraNascondi");
function mostraNascondi() {
  if (paragrafoCODE.style.visibility === "hidden") {
    paragrafoCODE.style.visibility = "visible";
    bottoneMostraNascondi.textContent = "Nascondi";
  } else {
    paragrafoCODE.style.visibility = "hidden";
    bottoneMostraNascondi.textContent = "Mostra";
  }
}
bottoneMostraNascondi.addEventListener("click", mostraNascondi);
// 15_ Aggiungi un elemento al DOM dopo un ritardo di 5 secondi.
function delayFunc() {
  const nuovoElemento = document.createElement("h1");
  const contenitore = document.querySelector(".excon0");
  nuovoElemento.textContent = "Delay 5sec";
  nuovoElemento.style.color = "white";
  nuovoElemento.style.padding = "20px 0px";
  nuovoElemento.style.fontSize = "50px";
  contenitore.appendChild(nuovoElemento);
}
setTimeout(delayFunc, 5000);

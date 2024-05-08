// Al Clic, cambia il colore del testo di un paragrafo in rosso.
const redP = document.getElementById("clickRed");
redP.addEventListener("click", function redClick() {
  redP.style.color = "red";
});

// Nascondi un elemento quando viene cliccato.
const hideP = document.getElementById("hideParagraf");
hideP.addEventListener("click", function paragrafHide() {
  hideP.style.display = "none";
});

// Al Clic, aggiungi un nuovo paragrafo al div esistente.
const fatherDiv = document.getElementById("fatherDiv");
const buttonP = document.getElementById("buttonMagic");
buttonP.addEventListener("click", function paragrafAppear() {
  let newElement = document.createElement("p");
  newElement.textContent = "paragrafo creato con js";
  fatherDiv.appendChild(newElement);
});

// Al Clic, cambia il testo di un elemento specifico.
redP.addEventListener("click", function changeP() {
  redP.textContent = "il mio testo è cambiato con js";
});

// 5_Al Clic, aggiungi una classe CSS a un elemento.
const aggiungiClass = document.getElementById("classAdd");
aggiungiClass.addEventListener("click", function classAdd() {
  aggiungiClass.classList.add("classjs");
});
// 6_Al Clic di un bottone, rimuovi un altro elemento specifico dal DOM.
buttonP.addEventListener("click", function hide() {
  aggiungiClass.style.display = "none";
});
// 7_ Al Clic di un bottone, sostituisci un elemento esistente con un nuovo elemento.
const buttonC = document.getElementById("bottoneCambio");
const paraCambio = document.getElementById("cambio");
buttonC.addEventListener("click", function cambiato() {
  paraCambio.textContent = "cambiato contenuto con il bottone sopra";
});

// 8_Al clic di un elemento, modifica una proprietà CSS di un elemento.

paraCambio.addEventListener("click", function changeBackground() {
  paraCambio.style.backgroundColor = "gray";
});

// 9_ In JavaScript (non CSS) cambia il colore di sfondo di un elemento quando il mouse passa sopra.
paraCambio.addEventListener("mouseover", function changeBackground() {
  paraCambio.style.backgroundColor = "green";
});

// 10_ cambia l'immagine visualizzata quando l'utente clicca su un bottone.
const img = document.getElementById("img");
const buttonImage = document.getElementById("imgButton");
const newImg = document.getElementById("immagineAppare");
buttonImage.addEventListener("click", function buttonImageChange() {
  img.style.display = "none";
  let newImage = document.createElement("img");
  newImage.src =
    "https://i.makeagif.com/media/7-20-2021/BwmmvZ.gif"; /*elemento.scr='link dell'immagine o del cotenuto desiderato' questo
  src serve per immettere un link*/
  newImage.alt = "jungle diff"; // con .alt si va a creare la descrizione dell'immgaine//
  newImg.appendChild(newImage);
  // Aggiungi un elemento al DOM dopo un ritardo di 5 secondi.
  setTimeout(
    buttonImageChange(),
    5
  ); /*setTimeout serve a ritardare una funzione, per farla funzionare 
  a bisogno di due cose cio che deve ritardare e il tempo di "ritardo" (cosa deve ritardare, il tempo)*/
});

// 11_Al Clic di un bottone, aggiungi un nuovo paragrafo prima di un elemento esistente.
buttonImage.addEventListener("click", function appearParagrafBefore() {
  let createNewPara = document.createElement("p");
  createNewPara.textContent = "sono stato create dal bottone sotto l'immagine";
  fatherDiv.appendChild(createNewPara);
});
// 14_Mostra o nascondi un elemento ogni volta che si clicca su un bottone.
const bothButton = document.getElementById("changeAndHide");
bothButton.addEventListener("click", function hideOrShow() {
  if (redP.style.display === "block") {
    redP.style.display = "none";
  } else {
    redP.style.display = "block";
  }
});

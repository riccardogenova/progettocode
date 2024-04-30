// Al Clic, cambia il colore del testo di un paragrafo in rosso

const napoleon = document.getElementById("napoleone");
napoleon.addEventListener("click", function napoleonColor() {
  napoleon.style.color = "red";
});

// Nascondi un elemento quando viene cliccato

const nascondiP = document.getElementById("clickHide");
nascondiP.addEventListener("click", function pHide() {
  nascondiP.style.display = "none";
});

const backP = document.getElementById("sfondo");
backP.addEventListener("click", function pback() {
  backP.style.backgroundColor = "purple";
});

// Clic di un bottone, rimuovi un altro elemento specifico dal DOM
const button = document.getElementById("clicca");
button.addEventListener("click", function napoleonHide() {
  napoleon.style.display = "none";
  return;
});

// Al clic di un elemento, modifica una proprietà CSS di un elemento

const pColor = document.getElementById("changeCss");
pColor.addEventListener("click", function colorPChange(params) {
  pColor.style.color = "yellow";
});

// In JavaScript (non CSS) cambia il colore di sfondo di un elemento quando il mouse passa sopra

const passaP = document.getElementById("passa");
passaP.addEventListener("mouseover", function changeOnMouse() {
  passaP.style.backgroundColor = "orange";
});

// Al Clic, aggiungi un nuovo paragrafo al div esistente.

var divAdd = document.getElementById("aggiungi");

divAdd.addEventListener("click", function addP() {
  var newElement = document.createElement("p");
  newElement.textContent = "elemento creato con javascript";
  divAdd.appendChild(newElement);
});

// Al Clic, aggiungi una classe CSS a un elemento

napoleon.addEventListener("click", function name(params) {
  napoleon.classList.add("classjs");
});

// Al Clic di un bottone, sostituisci un elemento esistente con un nuovo elemento.
backP.addEventListener("click", function cambioContenutoP() {
  backP.textContent = "ho cambiato il contenuto con js";
});

const buttonHC = document.getElementById("domHide");
const pChange = document.getElementById("contenutoCambio");
const h1Create = document.getElementById("h1Img");

const img = document.querySelector("img");

buttonHC.addEventListener("click", function hideElementDom() {
  pChange.textContent = "jgl diff"; //Al Clic, cambia il testo di un elemento specifico//
  const newElementH1 = document.createElement("h1");
  newElementH1.textContent = "titolo creato con js";
  img.style.display = "none";
});

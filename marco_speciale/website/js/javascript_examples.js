var HIddenbutton = document.getElementById("hidden");
hidden.addEventListener("click", function () {
  hidden.style.display = "none";
});

const button = document.querySelector("button");
var numero = 0;
button.addEventListener("click", function () {
  console.log(numero++);
});

var para = document.getElementById("parafrago");
paragrafo.addEventListener("mouseover", function colorFontChange() {
  paragrafo.style.color = "red";
  paragrafo.style.fontSize = "30px";
});

var testo = document.getElementById("text");
var buttonShow = document.getElementById("mostra");
var buttonHidden = document.getElementById("nascondi");
var father = document.getElementById("pade");

nascondi.addEventListener("click", function hide() {
  testo.style.display = "none";
});

mostra.addEventListener("click", function show() {
  text.style.display = "block";
});

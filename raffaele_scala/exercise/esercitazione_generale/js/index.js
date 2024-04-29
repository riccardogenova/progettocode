const mostra = document.getElementById("mostra");
const nascondi = document.getElementById("nascondi");
var testo = document.getElementById("testo");
var menu = document.getElementById("menu");

mostra.addEventListener("click", function () {
  testo.style.display = "block";
});
nascondi.addEventListener("click", function () {
  testo.style.display = "none";
});

testo.addEventListener("mouseover", function () {
  testo.style.fontSize = "36px";
  testo.style.color = "red";
});
testo.addEventListener("mouseleave", function () {
  testo.style.fontSize = "24px";
  testo.style.color = "black";
  testo.style.margin = "0";
});
menu.addEventListener("change", function () {
  var selectedColor = menu.value;
  document.body.style.backgroundColor = selectedColor;
});

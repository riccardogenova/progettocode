var accendi = document.getElementById("ON");
var spegni = document.getElementById("OFF");
var testo = document.getElementById("paragrafo");

spegni.addEventListener("click", function () {
  testo.style.display = "none";
});
accendi.addEventListener("click", function () {
  testo.style.display = "";
});

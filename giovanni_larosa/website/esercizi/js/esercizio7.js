const bottone = document.getElementById("bottone");
const paragrafo = document.getElementById("paragrafo");
const sostituto = document.getElementById("sostituto");
function togli() {
  paragrafo.style.display = "none";
}
function appari() {
  sostituto.style.display = "block";
}
bottone.addEventListener("click", togli);

bottone.addEventListener("click", appari);

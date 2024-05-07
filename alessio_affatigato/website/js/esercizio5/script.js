document.addEventListener("DOMContentLoaded", function () {
  var pulsante = document.getElementById("cambiaclassebttn");
  pulsante.addEventListener("click", function () {
    var paragrafo = document.getElementById("paragrafo");
    paragrafo.className = "nuovaclasse";
  });
});

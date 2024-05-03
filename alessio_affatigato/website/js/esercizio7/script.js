document.addEventListener("DOMContentLoaded", function () {
  var sostituisci = document.getElementById("sostituisci");
  sostituisci.addEventListener("click", function () {
    var contenitore = document.getElementById("contenitore");
    var sostitutivo = document.createElement("p");
    sostitutivo.textContent = "Puzzi";
    var dasostituire = document.getElementById("dasostituire");
    contenitore.replaceChild(sostitutivo, dasostituire);
  });
});

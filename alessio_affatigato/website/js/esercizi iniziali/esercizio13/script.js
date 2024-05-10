document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    var nuovoElemento = document.createElement("p");
    nuovoElemento.textContent =
      " Lorem ipsum dolor sit amet consectetur adipisicing elit.";
    document.body.appendChild(nuovoElemento);
  }, 5000);
});

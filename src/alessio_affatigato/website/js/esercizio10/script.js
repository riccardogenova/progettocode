document.addEventListener("DOMContentLoaded", function () {
  var cane = document.getElementById("cane");
  var bottone = document.getElementById("cambia");

  bottone.addEventListener("click", function cambiaimmagine() {
    if (cane.src.endsWith("cane_con_fucile.jpeg"))
      cane.src = "cane_con_pistola.jpeg";
    else {
      cane.src = "cane_con_fucile.jpg";
    }
  });
});

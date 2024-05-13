<<<<<<< HEAD
document.addEventListener("DOMContentLoaded", function () {
  var cane = document.getElementById("cane");
  var bottone = document.getElementById("cambia");

  bottone.addEventListener("click", function cambiaimmagine() {
    if (cane.src.endsWith("cane_con_fucile.jpeg"))
      cane.src = "cane_con_pistola.jpeg";
    else {
      cane.src = "cane_con_fucile.jpg";
=======
/** @format */

document.addEventListener('DOMContentLoaded', function () {
  var cane = document.getElementById('cane');
  var bottone = document.getElementById('cambia');

  bottone.addEventListener('click', function cambiaimmagine() {
    if (cane.src.endsWith('cane_con_fucile.jpeg')) cane.src = 'cane_con_pistola.jpeg';
    else {
      cane.src = 'cane_con_fucile.jpg';
>>>>>>> f7e743fef29b4a744b1bd460b4833d16bbe37790
    }
  });
});

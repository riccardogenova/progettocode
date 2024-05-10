/** @format */

//Cambia lo sfondo di una pagina con un dropdown
function changecolours() {
  var dropdown = document.getElementById('dropdown');
  document.body.style.backgroundColor = dropdown.value;
}
dropdown.addEventListener('change', changecolours);

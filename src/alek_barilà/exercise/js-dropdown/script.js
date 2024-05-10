/** @format */

var dropdown = document.getElementById('cambiacolore');

dropdown.addEventListener('change', function () {
  var selectedColor = dropdown.value;

  document.body.style.backgroundColor = selectedColor;
});

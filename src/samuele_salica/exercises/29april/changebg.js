/** @format */

const tendina = document.getElementById('tendina');

function changeColor() {
  document.body.style.backgroundColor = tendina.value;
}

tendina.addEventListener('change', changeColor);

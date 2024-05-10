/** @format */

var apriti = document.getElementById('paragrafodue');
const passaqui = document.getElementById('paragrafouno');
function mostra() {
  paragrafodue.style.display = 'block';
}
function cambia() {
  apriti.textContent = 'sono cambiato';
  console.log;
}
passaqui.addEventListener('click', mostra);

apriti.addEventListener('click', cambia);

/** @format */

function cambiaTesto() {
  var nuovoTesto = prompt('Inserisci il nuovo testo:');
  var paragrafo = document.getElementById('paragrafo');
  if (nuovoTesto !== null && nuovoTesto !== '') {
    paragrafo.textContent = nuovoTesto;
  }
}
console.log(cambiaTesto);

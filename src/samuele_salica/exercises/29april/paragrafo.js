/** @format */

// seleziono i 2 bottoni e il paragrafo
const mostra = document.getElementById('mostrabottone');

const nascondi = document.getElementById('nascondibottone');

const paragrafo = document.getElementById('paragrafo');

// aggiungo un eventlistener al bottone nascondi
nascondi.addEventListener('click', function () {
  paragrafo.style.display = 'none';
});

// // aggiungo un eventlistener al bottone mostra
mostra.addEventListener('click', function () {
  paragrafo.style.display = 'block';
});

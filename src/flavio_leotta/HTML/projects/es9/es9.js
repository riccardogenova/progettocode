/** @format */

var elemento = document.getElementById('elemento_con_sfondo');

// Aggiungiamo un event listener per l'evento mouseover
elemento.addEventListener('mouseover', function () {
  // Cambiamo il colore di sfondo quando il mouse passa sopra
  this.style.backgroundColor = 'lightblue';
});

// Aggiungiamo un event listener per l'evento mouseout
elemento.addEventListener('mouseout', function () {
  // Ripristiniamo il colore di sfondo originale quando il mouse esce dall'elemento
  this.style.backgroundColor = '#f0f0f0';
});

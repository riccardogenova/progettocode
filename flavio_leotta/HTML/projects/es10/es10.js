function cambiaImmagine() {
  var immagine = document.getElementById('immagine');
  // Controllo per verificare quale immagine è attualmente visualizzata
  if (immagine.src.endsWith('immagine1.jpg')) {
    immagine.src = 'immagine2.jpg'; // Cambiamo l'immagine
    immagine.alt = 'Immagine 2';
  } else {
    immagine.src = 'immagine1.jpg'; // Cambiamo l'immagine
    immagine.alt = 'Immagine 1';
  }
}

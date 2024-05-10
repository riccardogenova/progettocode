/** @format */

function aggiungiDopoRitardo() {
  setTimeout(function () {
    var contenitore = document.getElementById('contenitore');
    var nuovoElemento = document.createElement('p');
    nuovoElemento.textContent = 'Questo è il nuovo elemento aggiunto dopo 5 secondi.';
    contenitore.appendChild(nuovoElemento);
  }, 5000); // 5000 millisecondi = 5 secondi
}

// Chiamiamo la funzione quando il documento è stato caricato completamente
document.addEventListener('DOMContentLoaded', function () {
  // Aggiungiamo l'elemento dopo un ritardo di 5 secondi
  aggiungiDopoRitardo();
});

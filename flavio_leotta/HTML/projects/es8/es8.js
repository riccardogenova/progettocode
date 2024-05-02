<button onclick="sostituisciElemento()">Sostituisci Elemento</button>;
function sostituisciElemento() {
  // Creiamo un nuovo elemento
  var nuovoElemento = document.createElement('h2');
  nuovoElemento.textContent = 'Questo è il nuovo elemento';

  // Troviamo l'elemento da sostituire
  var elementoDaSostituire = document.getElementById('elemento_da_sostituire');

  // Troviamo il contenitore dell'elemento
  var contenitore = document.getElementById('contenitore');

  // Sostituiamo l'elemento con il nuovo elemento
  contenitore.replaceChild(nuovoElemento, elementoDaSostituire);
}

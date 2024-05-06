function aggiungiParagrafo() {
  // Creiamo un nuovo elemento paragrafo
  var nuovoParagrafo = document.createElement('p');
  // Aggiungiamo del testo al nuovo paragrafo
  var testo = document.createTextNode(
    'Questo è un nuovo paragrafo aggiunto prima del secondo paragrafo esistente.'
  );
  nuovoParagrafo.appendChild(testo);

  // Troviamo l'elemento paragrafo esistente che vogliamo precedere
  var paragrafoDaSostituire = document.getElementById(
    'paragrafo_da_sostituire'
  );

  // Troviamo il genitore dell'elemento paragrafo esistente
  var genitore = paragrafoDaSostituire.parentNode;

  // Aggiungiamo il nuovo paragrafo prima dell'elemento paragrafo esistente
  genitore.insertBefore(nuovoParagrafo, paragrafoDaSostituire);
}

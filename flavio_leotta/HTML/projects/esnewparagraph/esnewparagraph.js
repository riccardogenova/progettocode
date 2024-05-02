function aggiungiParagrafo() {
  var nuovoParagrafo = document.createElement('p');
  var testo = document.createTextNode('Nuovo paragrafo.');
  nuovoParagrafo.appendChild(testo);

  var divEsistente = document.getElementById('il_mio_div');

  divEsistente.appendChild(nuovoParagrafo);
}

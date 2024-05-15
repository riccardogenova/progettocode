/** @format */

document.addEventListener('DOMContentLoaded', function () {
  var bottone = document.getElementById('bottone');

  bottone.addEventListener('click', function aggiungip() {
    var paragrafo = document.getElementById('paragrafo');
    var nuovoParagrafo = document.createElement('p');
    nuovoParagrafo.textContent = 'paragrafo superiore';
    paragrafo.parentNode.insertBefore(nuovoParagrafo, paragrafo);
  });
});

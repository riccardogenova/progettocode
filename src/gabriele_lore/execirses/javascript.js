/** @format */

//1_Nascondi e mostra elementi. Usa JavaScript per nascondere un paragrafo con un contenuto a caso, quando si clicca su un bottone e mostrarlo quando si clicca su un altro.
var element = document.getElementById('tasto');
element.addEventListener('click', function () {
  document.getElementById('testo').setAttribute('hidden', 'true');
});

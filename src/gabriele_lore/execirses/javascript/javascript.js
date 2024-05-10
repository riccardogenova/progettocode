/** @format */

//1_Nascondi e mostra elementi. Usa JavaScript per nascondere un paragrafo con un contenuto a caso, quando si clicca su un bottone e mostrarlo quando si clicca su un altro.
var element = document.getElementById('tasto');
function change() {
  document.getElementById('testo').setAttribute('hidden', 'true');
}
element.addEventListener('click', change);

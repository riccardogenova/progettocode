// Nascondi e mostra elementi. Usa JavaScript per nascondere un paragrafo con un contenuto a caso,
// quando si clicca su un bottone e mostrarlo quando si clicca su un altro.

const paragrafo = document.querySelector('p');
const mostraParagrafo = document.getElementById('mostra');
const nascondiParagrafo = document.getElementById('nascondi');

nascondiParagrafo.addEventListener('click', () => {
    paragrafo.style.display='none';
});

mostraParagrafo.addEventListener('click', () => {
    paragrafo.style.display='block';
});

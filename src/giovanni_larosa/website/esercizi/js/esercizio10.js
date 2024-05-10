/** @format */

const Immagine = document.getElementById('immagine');
const bottone = document.getElementById('bottone');
function cambia() {
  Immagine.style.display = 'none';
}
bottone.addEventListener('click', cambia);
document.createElement('img');
var messi = document.createElement('img');
messi.src =
  'https://elcomercio.pe/resizer/JdIj1R6uA-AgNcEP8aGiqFlXEzc=/980x0/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/KFEUST6ZHVGMRIA4L3VUFWUXFM.jpg';
document.body.appendChild('messi');
messi.style.display = 'none';
function inserisci() {
  messi.style.display = 'inline';
}
bottone.addEventListener('click', inserisci);

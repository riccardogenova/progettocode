/** @format */

//10_ cambia l'immagine visualizzata quando l'utente clicca su un bottone.
function change() {
  document
    .getElementById('img')
    .setAttribute(
      'src',
      'https://cdnvb1.haiper.ai/jobs/6624f200d31bc2fbbf1a506e/662f90a4d4f67a74c238411c/result.mp4.thumbnail',
    );
}
document.getElementById('rosso').addEventListener('click', change);

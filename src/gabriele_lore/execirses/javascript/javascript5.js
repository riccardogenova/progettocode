/** @format */

//2_Nascondi un elemento quando viene cliccato.
//1_Al Clic, cambia il colore del testo di un paragrafo in rosso.
function hide() {
  document.getElementById('testo').setAttribute('hidden', 'true');
}
document.getElementById('testo').addEventListener('click', hide);

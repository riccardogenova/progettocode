/** @format */

let contatore = document.getElementById('counter');

function incrementa() {
  let contatoreAttuale = parseInt(contatore.textContent);
  contatoreAttuale++;
  contatore.textContent = contatoreAttuale;
}

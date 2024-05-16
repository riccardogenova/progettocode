/** @format */

const contatore = document.getElementById('counter');
const bottone = document.querySelector('button');

function incrementa() {
  let contatoreAttuale = parseInt(contatore.textContent);
  contatoreAttuale++;
  contatore.textContent = contatoreAttuale;
}


bottone.addEventListener('click', incrementa);

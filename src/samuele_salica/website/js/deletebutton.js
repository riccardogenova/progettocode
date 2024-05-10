/** @format */

// seleziono l'elemento pulsante dall'html (prende l'elemento button)
var button = document.querySelector('button');
//aggiungo un gestore di eventi al pulsante (da un evento di click)
button.addEventListener('click', function () {
  //rimuovo il pulsante al click del pulsante (ritorna allo stato base)
  button.parentNode.removeChild(button);
});

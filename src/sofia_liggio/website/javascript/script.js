/** @format */

//esercizio 1//

// function elimina() {
//   const DeletedButton = document.getElementById('delete');

//   DeletedButton.remove(elimina);
// }

// let contatore = 0;

// function incrementa() {
//   contatore++;

//   document.getElementById('amount').textContent = contatore;
// }
// reset //

// function reset() {
//   contatore = 0;

//   document.getElementById('amount').textContent = contatore;
// }

//esercizio 2//
const hideButton = document.getElementById('hide');
const showButton = document.getElementById('show');
const content = document.getElementById('content');

hideButton.addEventListener('click', function contentHidden() {
  content.style.display = 'none';
});

showButton.addEventListener('click', function contentHidden() {
  content.style.display = 'block';
});

// esercizio 3//

// var changeColor = document.getElementById('content');

// changeColor.addEventListener('mouseover', function changeColor() {
//   content.style.color = red;
// });

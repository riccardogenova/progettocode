/** @format */

var text = document.getElementById('text');
var removeButton = document.getElementById('removeButton');

function removeText() {
  text.remove();
}

removeButton.addEventListener('click', removeText);

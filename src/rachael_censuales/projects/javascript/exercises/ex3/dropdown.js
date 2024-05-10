/** @format */

var menu = document.getElementById('menu');

menu.addEventListener('change', function changeBackground() {
  var selected = menu.value;
  switch (selected) {
    case 'opzione1':
      document.body.style.backgroundColor = 'red';
      break;
    case 'opzione2':
      document.body.style.backgroundColor = 'black';
      break;
    case 'opzione3':
      document.body.style.backgroundColor = 'green';
      break;
  }
});

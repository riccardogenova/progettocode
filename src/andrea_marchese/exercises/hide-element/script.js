/** @format */

const showButton = document.getElementById('showBtn');
const hideButton = document.getElementById('hideBtn');
const elementToHide = document.getElementById('displayText');

showButton.addEventListener('click', function () {
  elementToHide.style.display = 'block';
});

hideButton.addEventListener('click', function () {
  elementToHide.style.display = 'none';
});

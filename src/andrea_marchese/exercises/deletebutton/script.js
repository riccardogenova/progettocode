/** @format */

const btn = document.getElementById('btn');

btn.addEventListener('click', function () {
  btn.parentNode.removeChild(btn);
});

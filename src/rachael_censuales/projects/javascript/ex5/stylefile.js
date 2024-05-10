/** @format */

var text = document.getElementById('text');

text.addEventListener('mouseover', function changeStyle() {
  text.style.color = 'red';
  text.style.fontSize = '100px';
});

text.addEventListener('mouseout', function resetStyle() {
  text.style.color = 'black';
  text.style.fontSize = '20px';
});

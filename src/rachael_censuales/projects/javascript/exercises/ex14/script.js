/** @format */

function showElement() {
  const newElement = document.createElement('div');
  newElement.textContent = 'ho detto hey';
  document.body.appendChild(newElement);
}

setTimeout(showElement, 5000);

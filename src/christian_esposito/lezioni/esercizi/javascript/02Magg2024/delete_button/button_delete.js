/** @format */

const removeButton = document.getElementById('element');

const remove = () => {
  removeButton.remove();
};

removeButton.addEventListener('click', remove);

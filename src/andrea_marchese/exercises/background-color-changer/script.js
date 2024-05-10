/** @format */

const colorDropdown = document.getElementById('color-dropdown');

colorDropdown.addEventListener('change', function () {
  document.body.style.backgroundColor = colorDropdown.value;
});

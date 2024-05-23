/** @format */

document.addEventListener('DOMContentLoaded', function () {
  var cancellatore = document.getElementById('cancellatore');
  cancellatore.addEventListener('click', function () {
    var paragrafo = document.getElementById('dacancellare');
    paragrafo.remove();
  });
});

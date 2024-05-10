/** @format */

document.addEventListener('DOMContentLoaded', function () {
  var bottoneNascondi = document.getElementById('bottoneNascondi');
  var paragafoDaNascondere = document.getElementById('paragafoDaNascondere');

  bottoneNascondi.addEventListener('click', function nascondiParagrafo() {
    if (paragafoDaNascondere.classList.contains('nascosto')) {
      paragafoDaNascondere.classList.remove('nascosto');
    } else {
      paragafoDaNascondere.classList.add('nascosto');
    }
  });
});

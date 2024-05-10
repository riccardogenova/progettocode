document.addEventListener("DOMContentLoaded", function (params) {
  var cancellatore = document.getElementById("cancellatore");
  cancellatore.addEventListener("click", function () {
    var paragrafo = document.getElementById("dacancellare");
    paragrafo.remove();
  });
});

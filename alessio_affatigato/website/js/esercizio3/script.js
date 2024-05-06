function aggiungiParagrafo() {
  var nuovoParagrafo = document.createElement("p");
  var testoParagrafo = document.createTextNode("lorem ipsum...");
  nuovoParagrafo.appendChild(testoParagrafo);
  var contenitore = document.getElementById("contenitore");
  contenitore.appendChild(nuovoParagrafo);
}

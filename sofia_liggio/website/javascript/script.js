function elimina() {
  const DeletedButton = document.getElementById("delete");

  DeletedButton.remove(elimina);
}

let contatore = 0;

function incrementa() {
  contatore++;

  document.getElementById("amount").textContent = contatore;
}

function reset() {
  contatore = 0;

  document.getElementById("amount").textContent = contatore;
}

function myFunction() {
  //iniziamo con definire la funzione
  var cambiabot = document.getElementById('Cambia'); //al suo interno si mette al variabile e cosa modifica
  if (cambiabot.style.display === 'none') {
    // metti l'if se cambia lo stile
    cambiabot.style.display = 'block'; // qui rimane un bottone se non cliccato
  } else {
    // e l'else in cui sparisce se cliccato
    cambiabot.style.display = 'none';
  }
}



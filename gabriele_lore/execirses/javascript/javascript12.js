//9_ In JavaScript (non CSS) cambia il colore di sfondo di un elemento quando il mouse passa sopra.
function change()
{
    document.getElementById("sfondo").style.backgroundColor = "red";
}
document.getElementById("rosso").addEventListener("mouseover", change);
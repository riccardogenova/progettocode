//6_Al Clic di un bottone, rimuovi un altro elemento specifico dal DOM.
var container = document.getElementById("contenitore");
function change()
{
    container.remove();
}
document.getElementById("pulsante").addEventListener("click", change);
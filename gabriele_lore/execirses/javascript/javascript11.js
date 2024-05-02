//8_Al clic di un elemento, modifica una proprietà CSS di un elemento.
function change()
{
    document.body.style.backgroundColor = "red";
}
document.getElementById("rosso").addEventListener("click", change);
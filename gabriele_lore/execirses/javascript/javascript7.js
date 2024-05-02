//4_Al Clic, cambia il testo di un elemento specifico.
function write()
{
    document.getElementById("scrivi").innerHTML = "<p id=\"testo\">Testo</p>";
}
document.getElementById("pulsante").addEventListener("click", write);

//3_Al Clic, aggiungi un nuovo paragrafo al div esistente
function write()
{
    document.getElementById("scrivi").innerHTML = document.getElementById("scrivi").innerHTML + "<p id=\"testo\">Testo</p>";
}
document.getElementById("pulsante").addEventListener("click", write);

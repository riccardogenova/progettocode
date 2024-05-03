//1_Al Clic, cambia il colore del testo di un paragrafo in rosso.
function red()
{
    document.getElementById("testo").style.color = "red";
}
document.getElementById("tasto").addEventListener("click", red);
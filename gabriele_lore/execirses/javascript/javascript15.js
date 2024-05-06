//14_Mostra o nascondi un elemento ogni volta che si clicca su un bottone.
var nascosto=false;
function hide()
{
    if(nascosto)
    {
        document.getElementById("testo").setAttribute("hidden", "false");
        nascosto = false;
        document.getElementById("button").value = "Nascondi";
    }
    else
    {
        document.getElementById("testo").setAttribute("hidden", "true");
        nascosto = true;
        document.getElementById("button").value = "Mostra";
    }
    
}
document.getElementById("button").addEventListener("click", hide);
## Metodi Javascript

- **addEventListener** è un metodo in JavaScript che consente di ascoltare eventi su un elemento HTML e di eseguire una funzione quando l'evento si verifica. Questo metodo è utilizzato per aggiungere un "gestore di eventi" a un elemento DOM (Document Object Model).
  Sintassi:
  element.addEventListener(event, function,)
- **element**: è l'elemento HTML su cui si desidera ascoltare l'evento.
- **event**: è il tipo di evento che si desidera ascoltare, ad esempio "click", "mouseover", "keydown", ecc.
- **function**: è la funzione che verrà eseguita quando l'evento si verifica.
  es:
  assegno una variabile
  var button = document.getElementById("myButton");
  button.addEventListener("click", function() {
  alert("Hai cliccato sul pulsante!");
  dove button è attribuito dal nome della mia variabile es:(button) addevent listener è appunto il metodo,click mouseover è il tipo di evento messo tra gli apici; la funzione è ad es: un alert come sopra.
  eventi su .addeventlistener:

1. Mouse Events:

- click: Viene attivato quando viene fatto clic sull'elemento.
- dblclick: Viene attivato quando viene fatto doppio clic sull'elemento.
- mouseover: Viene attivato quando il puntatore del mouse entra nell'area dell'elemento
- mouseout: Viene attivato quando il puntatore del mouse esce dall'area dell'elemento.
- mousemove: Viene attivato quando il puntatore del mouse si sposta sull'elemento.

2. Keyboard Events:

- keydown: Viene attivato quando una tastiera viene premuta mentre il focus è sull'elemento.
- keyup: Viene attivato quando un pulsante della tastiera viene rilasciato mentre il focus è sull'elemento.
- keypress: Viene attivato quando un pulsante della tastiera viene premuto mentre il focus è sull'elemento e la tastiera produce un carattere visualizzabile.

3. Form Events:

- submit: Viene attivato quando il modulo viene inviato.
- reset: Viene attivato quando il modulo viene resettato.
- change: Viene attivato quando il valore di un elemento di input, di selezione o di testo

4. Window Events:

- load: Viene attivato quando il caricamento della pagina è completato.
- resize: Viene attivato quando la finestra del browser viene ridimensionata.
- scroll: Viene attivato quando si fa lo scrolling della pagina

- **document.getElementById**
  è un metodo in JavaScript che viene utilizzato per selezionare un elemento HTML dal DOM (Document Object Model) utilizzando l'ID dell'elemento. es: nel caso di un div class .bottone nel caso di un id#bottone.
  Sintassi di base:
  var element = document.getElementById(id);
  Id è È il valore dell'attributo "id" dell'elemento HTML che si desidera selezionare.
  **.getElementById Non ha eventi specifici**

  - **document.querySelector()**: Seleziona il primo elemento che corrisponde a un selettore CSS specificato.
  - **document.querySelectorAll(): Seleziona tutti gli elementi che corrispondono a un selettore CSS specificato.**

# CSS

## Comandi e descrizione

**CSS**, acronimo di _Cascading Style Sheets_, è un linguaggio utilizzato per definire la presentazione di una pagina web, incluso il layout, i colori e i tipi di carattere.
I comandi principali per usare CSS sono:

1. **Selettori**:I selettori identificano gli elementi HTML ai quali applicare gli stili. Alcuni esempi comuni includono:

   - Selettore di tipo: **'p'** seleziona tutti i paragrafi.
   - Selettore di classe: **'.classe'** seleziona tutti gli elementi con la classe specificata.
   - Selettore di ID: **'#id'** seleziona un elemento con l'ID
     specificato.

2. **Proprietà CSS**: Le proprietà definiscono gli stili che si desidera applicare agli elementi selezionati. Alcuni esempi includono:

   - **'color'**: imposta il colore del testo.
   - **'font-size'**: imposta la dimensione del carattere.
   - **'background-color'**: imposta il colore dello sfondo.
   - **'border'**: imposta lo stile, il colore e lo spessore del bordo.

3. **Valori CSS**: I valori sono specificati per le proprietà CSS e definiscono l'aspetto degli elementi. Alcuni esempi includono:

   - Colore: **'red'**, **'#00ff00'**, **'rgba(255, 0, 0, 0.5)'**
   - Dimensione del carattere: **'16px'**, **'1em'**, **'2rem'**
   - URL: **'url('percorso/dell/immagine.jpg')'**
   - Posizione: **'center'**, **'left'**, **'50%'**

4. **Commenti CSS**: Puoi aggiungere commenti nel tuo codice CSS per rendere più comprensibile il tuo lavoro agli altri sviluppatori o a te stesso in futuro:

```markdown
**/_ Questo è un commento CSS _/**.
```

5. **Box Model**: Il Box Model è un concetto fondamentale in CSS che descrive come gli elementi HTML sono rappresentati come scatole rettangolari con contenuto, padding, bordi e margine. Le proprietà principali associate al Box Model sono:

   - **'width'** e **'height'**: definiscono la larghezza e l'altezza dell'elemento.
   - **'padding'**: spazio tra il contenuto dell'elemento e il suo bordo.
   - **'border'**: bordo intorno all'elemento.
   - **'margin'**: spazio esterno intorno all'elemento, che separa gli elementi tra loro.

6. **'Float'**: La proprietà float consente di spostare un elemento a sinistra o a destra all'interno del suo contenitore, consentendo ad altri elementi di avvolgerlo. È spesso usato per creare layout a più colonne.

7. **Regole CSS**: Le regole CSS combinano un selettore con uno o più dichiarazioni di stile. Ad esempio:

```markdown
p {
color: blue;
font-size: 16px;
}
```

8. **Media Queries**: Le media queries consentono di applicare stili diversi in base alle dimensioni dello schermo o ad altre caratteristiche del dispositivo. Ad esempio:

```markdown
@media screen and (max-width: 600px) {
/_ Stili per schermi con larghezza massima di 600px _/
body {
font-size: 14px;
}
}
```

9. **Posizionamento**: CSS offre diverse opzioni per posizionare gli elementi sulla pagina:

   - position: static: è il valore predefinito e l'elemento viene posizionato secondo il normale flusso del documento.
   - position: relative: l'elemento viene posizionato relativamente rispetto alla sua posizione originale.
   - position: absolute: l'elemento viene posizionato rispetto al primo genitore che non ha position: static.
   - position: fixed: l'elemento viene posizionato rispetto alla finestra del browser e rimane fisso anche quando si scorre la pagina.

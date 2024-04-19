# Cosa è CSS?

Acronimo di _Cascading Style Sheets_, è un linguaggio di stile utilizzato per definire l'aspetto e il layout di un documento **HTML**. In poche parole, mentre l'HTML si occupa di definire la struttura e il contenuto di una pagina web, il CSS si occupa di definire come tale contenuto deve essere presentato.

---

Ecco alcune funzionalità:

1. **Selezionare gli elementi**: Il CSS consente di selezionare gli elementi HTML ai quali si desidera applicare uno stile. Questa selezione può essere fatta utilizzando gli elementi HTML stessi (come tag, classi o ID) o le loro relazioni gerarchiche con altri elementi.

2. **Definire gli stili**: Una volta selezionati gli elementi, è possibile definire gli stili che si desidera applicare. Gli stili includono cose come il colore del testo, il tipo di carattere, il padding, il margine, la dimensione e il posizionamento degli elementi sulla pagina.

3. **Applicare gli stili**: Una volta definiti gli stili, vengono applicati agli elementi selezionati. Questo avviene attraverso il collegamento del file CSS al documento HTML o incorporando direttamente il CSS nel documento HTML stesso.

4. **Cascata**: Il termine "_cascata_" si riferisce al modo in cui vengono gestiti i conflitti di stile. Se più regole CSS si applicano allo stesso elemento, il browser seguirà un certo ordine di priorità per determinare quale regola utilizzare. Questo ordine è influenzato dalla specificità delle regole, dall'ordine in cui sono dichiarate e dalla presenza di eventuali stili inline direttamente negli elementi HTML.

---

In sintesi, il CSS è fondamentale per controllare l'aspetto e il layout di una pagina web e consente di separare la struttura del contenuto dalla sua presentazione visuale, migliorando la flessibilità e la manutenibilità dei siti web.

# Come si utilizza?

1. **Creare un file CSS**: Innanzitutto, crea un nuovo file di testo e salvalo con estensione ".css". Questo sarà il tuo file CSS, dove scriverai tutte le regole di stile.

2. **Collegare il file CSS al tuo documento HTML**: All'interno della sezione `<head>` del tuo documento HTML, aggiungi un tag `<link>` per collegare il file CSS. Il tag `<link>` ha tre attributi principali: **rel**, che specifica il tipo di relazione tra il documento corrente e il file collegato, **type**, che specifica il tipo _MIME_ del documento collegato (generalmente text/css per i file CSS) e **href**, che specifica l'URL del file CSS.

```html
<!DOCTYPE html>
<html lang="it">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Titolo della tua pagina</title>
    <link rel="stylesheet" type="text/css" href="style.css" />
  </head>
</html>
```

3. **Scrivere le regole di stile nel file CSS**: Ora puoi iniziare a scrivere le regole di stile nel tuo file CSS. Ogni regola di stile è composta da un **selettore** e da una serie di dichiarazioni. Il selettore indica a quali elementi HTML si applicheranno le dichiarazioni di stile. Le dichiarazioni di stile specificano gli attributi che si desidera modificare e i relativi valori.

   Ad esempio, se volessi rendere tutti i paragrafi di colore rosso, il tuo file CSS potrebbe contenere:

```css
p {
  color: red;
}
```

4. **Salva e ricarica la pagina**: Salva entrambi i file (HTML e CSS) e ricarica la tua pagina nel browser. Ora dovresti vedere i cambiamenti di stile riflessi nel tuo sito web.

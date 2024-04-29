# CSSOM

![grafico CSSOM e DOM](https://miro.medium.com/v2/resize:fit:720/format:webp/0*Fp3mesmVsWB7z0OD)

## Cos'è il CSSOM?

CSSOM è simile al DOM (Document Object Model), è fondamentalmente la versione CSS del DOM. DOM mappa il documento HTML come una struttura ad albero, in cui ogni nodo è un oggetto che rappresenta una parte del documento.

Quando il browser esegue il rendering del sito Web, CSS è il linguaggio che definisce lo stile di rendering e il risultato di un sito Web; CSSOM è il risultato della mappatura del browser dei nodi della pagina con il codice CSS associato.

```
 h1{
    font-size: 1.5em;
    color: #414141;
  }

  .box{
    display: flex;
    width: 300px;
    margin: 15px;
    text-align: center;
  }

/* css code exmaple */
```

![grafico](https://miro.medium.com/v2/resize:fit:720/format:webp/0*RME-Yge0TELqvm8S.png)
I browser Web eseguono il rendering di una pagina in quattro passaggi principali:

Processo di rendering della pagina Web
Il browser Web esamina il documento HTML e crea il DOM
Il browser Web esamina il documento CSS e crea il CSSOM
Il browser Web collega il CSSOM al DOM per creare un albero di rendering
Il browser Web visualizza le informazioni
Cosa possiamo fare con CSSOM?
È normale che gli sviluppatori utilizzino JavaScript per aggiungere, rimuovere e modificare elementi di un sito Web, operazione nota anche come manipolazione DOM JavaScript.

```
document.querySelector('h1').textContent ="Ciao mondo!" ;

//esempio di manipolazione del DOM JS
//cambia il contenuto testuale dell'elemento h1 in Hello World
```

Anche se non è comunemente visto, JavaScript potrebbe anche essere utilizzato per manipolare CSSOM, perché tecnicamente è un'API JS. Modificando i fogli di stile utilizzati per caricare la pagina, gli sviluppatori possono modificare il layout e progettare una pagina Web utilizzando JavaScript.

Possiamo accedere ai fogli di stile di un sito web utilizzando il comando:

```
documento . styleSheets
```

Questo comando JS visualizzerà l'array di oggetti CSSStyleSheet utilizzati dalla pagina Web, mentre ogni foglio di stile è un oggetto e ogni regola in un foglio di stile è un oggetto.

### Esempio

1. **Disabilitare un foglio di stile**

documento . fogli di stile [ 1 ]. disabilitato = vero
È molto comune che una pagina web utilizzi diversi fogli di stile per diverse query multimediali. Con questo comando gli sviluppatori sono in grado di disabilitare e abilitare un intero foglio di stile identificandone il numero di indice.

2 **Manipolare i fogli di stile in base al titolo**

documento . EnableStyleSheetsForSet ( 'qualche titolo del foglio di stile' )
Il titolo è una proprietà del foglio di stile che può essere personalizzata e il nome del titolo fa distinzione tra maiuscole e minuscole. Questo comando abiliterà tutti i fogli di stile con il titolo denominato e disabiliterà tutti gli altri fogli di stile. I fogli di stile senza titolo non verranno influenzati da questo comando.

3 **Modifica una regola CSS selezionata di un foglio di stile**

documento . styleSheets [ 0 ]. cssRules [ 0 ]. stile . backgroundColor = "acqua" ;
// esempio di modifica di una specifica regola CSS di un foglio di stile
// identificando il foglio di stile e il numero di indice della regola CSS
Come accennato in precedenza, i fogli di stile sono oggetti e le regole CSS sono oggetti all'interno dei fogli di stile. Pertanto, identificando il numero di indice del foglio di stile e della regola CSS, gli sviluppatori sono in grado di modificare una specifica regola CSS. L'esempio mostra la modifica del colore di sfondo.

Per aggi
4 **Aggiunta di una nuova regola CSS a un foglio di stile**

```
var stylesheet = document.styleSheets[0].cssRules;
var end = stylesheet.length - 1;
stylesheet.insertRule("body { background-image: url('http://cdn.sstatic.net/Sites/stackoverflow/img/favicon.ico'); }", end);
```

Per aggiungere una nuova regola CSS a un foglio di stile, dobbiamo prima identificare l'indice del foglio di stile e ottenere un riferimento alla fine di un foglio di stile.

5 **Elimina una regola CSS selezionata da un foglio di stile**

documento . styleSheets [ 0 ]. cssRules . eliminaRegole [ 0 ]
L'eliminazione delle regole CSS è simile all'aggiunta di una regola. Identificare il numero di indice del foglio di stile e della regola CSS è la parte principale del processo.

Anche se la manipolazione JS CSSOM non è comunemente usata, è comunque utile per gli sviluppatori conoscere il concetto e come funziona un sito web.

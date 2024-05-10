<!-- @format -->

# CSS: Fogli di Stile a Cascata

## Che cos'è CSS?

CSS (Cascading Style Sheets) è un linguaggio di fogli di stile utilizzato per descrivere la presentazione di un documento scritto in HTML o XML (compresi vari linguaggi XML come SVG o XHTML). CSS descrive come gli elementi dovrebbero essere visualizzati sullo schermo, sulla carta, nella voce parlata, o su altri media.

## A cosa serve CSS?

CSS è usato per controllare l'aspetto visivo delle pagine web. Senza CSS, le pagine web sarebbero molto meno attraenti e molto più difficili da navigare. CSS consente una vasta gamma di stili visivi, efficienze di layout e animazioni. Qui sono elencate alcune delle funzionalità principali di CSS:

- **Layout della Pagina**: Gestione delle dimensioni, del posizionamento e dello spaziamento degli elementi della pagina.
- **Stilizzazione del Testo**: Controllo su font, dimensioni del testo, colore del testo, spaziatura tra lettere, e altro.
- **Colori e Sfondi**: Impostazione dei colori di sfondo e delle immagini per gli elementi e l'intera pagina.
- **Adattabilità ai Dispositivi**: Realizzazione di layout che funzionano su diversi dispositivi con schermi di varie dimensioni (responsive design).
- **Effetti Visivi**: Creazione di ombre, trasparenze, bordi arrotondati, ecc.

## Come si usa CSS?

CSS può essere inserito nei documenti HTML in tre modi:

1. **Inline**: Direttamente nell'elemento HTML usando l'attributo `style`.

   ```html
   <p style="color: blue;">Questo paragrafo è blu.</p>
   ```

2. **Interno**: Nel tag `<head>` di un documento HTML, racchiuso dentro un tag `<style>`.

   ```html
   <style>
     body {
       background-color: #f4f4f4;
     }
   </style>
   ```

3. **Esterno**: Collegando un file CSS esterno attraverso il tag `<link>` all'interno del `<head>` del documento HTML.

   ```html
   <link rel="stylesheet" href="stile.css" />
   ```

### Esempio di CSS Esterno

```css
/* stile.css */
body {
  background-color: #f4f4f4;
  font-family: 'Arial', sans-serif;
}

h1 {
  color: navy;
  margin-top: 20px;
}
```

Questo esempio di file CSS esterno applica uno sfondo grigio chiaro a tutto il corpo del documento, imposta il tipo di font e colora di blu navy i titoli di primo livello.

### Perché è importante CSS?

L'utilizzo di CSS per la stilizzazione delle pagine web porta numerosi vantaggi, tra cui la separazione del contenuto dalla presentazione, una maggiore accessibilità, e il controllo più flessibile e dettagliato dell'aspetto visivo del sito web. CSS è essenziale per costruire esperienze web ricche e coinvolgenti.

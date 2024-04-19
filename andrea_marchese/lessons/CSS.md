# Introduzione a CSS (Cascading Style Sheets)

Il CSS (Cascading Style Sheets) è un linguaggio di stile utilizzato per definire l'aspetto e il layout dei documenti HTML (Hypertext Markup Language) e XML (eXtensible Markup Language). Con CSS, è possibile controllare colori, font, spaziatura, dimensioni e posizioni degli elementi in una pagina web.

## Prerequisiti

Prima di iniziare questa lezione, assicurati di avere familiarità con i seguenti concetti:

- HTML: comprensione di base della struttura e degli elementi HTML.
- Selezione degli elementi: comprensione di come selezionare elementi HTML utilizzando selettori CSS.
- Box model: comprensione di come funziona il modello di box CSS, che include margini, bordi, padding e content.

## Sintassi di base di CSS

Il CSS è costituito da un insieme di regole che specificano il modo in cui gli elementi HTML devono essere visualizzati. Ogni regola CSS è composta da un selettore e da un blocco di dichiarazioni.

Ecco la sintassi di base:

```css
selettore {
  proprietà: valore;
  /* Altre dichiarazioni */
}
```

- **Selettore**: indica gli elementi HTML ai quali si applicheranno le regole CSS.
- **Proprietà**: specifica quale aspetto dell'elemento viene modificato.
- **Valore**: definisce il valore della proprietà.

## Esempio di utilizzo di CSS

Supponiamo di voler applicare uno stile a tutti i paragrafi (`<p>`) e agli elementi con classe "titolo" (`<h1>`).

```css
/* Stilizza tutti i paragrafi */
p {
  font-size: 16px;
  color: #333;
}

/* Stilizza gli elementi con classe "titolo" */
.titolo {
  font-size: 24px;
  font-weight: bold;
  color: #007bff; /* Colore blu */
}
```

In questo esempio:

- Tutti i paragrafi avranno una dimensione del carattere di 16px, un colore del testo #333 (grigio scuro).
- Gli elementi con classe "titolo" avranno una dimensione del carattere di 24px, un peso del carattere in grassetto e un colore del testo #007bff (blu).

## Applicazione di CSS

Ci sono diversi modi per applicare CSS a un documento HTML:

1. **Stile incorporato**: inserisci il CSS direttamente nel documento HTML utilizzando il tag `<style>` nell'intestazione.
2. **Stile esterno**: collega un file CSS esterno al documento HTML utilizzando il tag `<link>` nell'intestazione.
3. **Stile inline**: applica lo stile direttamente a un elemento HTML utilizzando l'attributo `style`.

## Conclusioni

Questa lezione ti ha fornito una panoramica di base su CSS e su come può essere utilizzato per stilizzare documenti HTML. Continua a praticare e sperimentare con diverse regole CSS per acquisire familiarità con questo linguaggio di stile potente e versatile.

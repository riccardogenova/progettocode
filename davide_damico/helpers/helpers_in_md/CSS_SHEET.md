# CSS Cheat Sheet

## Selettori

- `*` Seleziona tutti gli elementi
- `#id` Seleziona l'elemento con l'id specifico
- `.class` Seleziona tutti gli elementi con la classe specifica
- `element` Seleziona tutti gli elementi di quel tipo

## Proprietà di Testo

- `color: #333;` Imposta il colore del testo
- `font-family: Arial;` Imposta il tipo di font
- `font-size: 14px;` Imposta la dimensione del font
- `font-weight: bold;` Imposta il grassetto
- `text-align: center;` Allinea il testo al centro
- `line-height: 1.6;` Imposta l'altezza della linea

## Proprietà di Background

- `background-color: #999;` Imposta il colore di sfondo
- `background-image: url('img.jpg');` Imposta un'immagine di sfondo
- `background-repeat: no-repeat;` Impedisce la ripetizione dell'immagine di sfondo
- `background-position: center;` Posiziona l'immagine di sfondo al centro

## Box Model

- `width: 100px;` Imposta la larghezza
- `height: 200px;` Imposta l'altezza
- `padding: 10px;` Imposta il padding
- `border: 1px solid #000;` Imposta il bordo
- `margin: 20px;` Imposta il margine

## Posizionamento

- `position: absolute;` Imposta il posizionamento assoluto
- `top: 10px;` Distanza dall'alto
- `right: 20px;` Distanza dalla destra
- `z-index: 100;` Gestisce l'ordine di sovrapposizione

## Flexbox

- `display: flex;` Imposta il display a flex per un layout flessibile
- `justify-content: center;` Allinea gli elementi orizzontalmente al centro
- `align-items: center;` Allinea gli elementi verticalmente al centro
- `flex-direction: row;` Imposta la direzione degli elementi flex

## Grid

- `display: grid;` Imposta il display a grid per un layout a griglia
- `grid-template-columns: repeat(3, 1fr);` Definisce tre colonne di eguale larghezza
- `grid-gap: 10px;` Imposta la distanza tra le griglie

## Pseudo-classi

- `:hover` Applica uno stile quando un elemento viene sorvolato
- `:focus` Applica uno stile quando un elemento è focalizzato
- `:active` Applica uno stile quando un elemento è cliccato

## Transizioni

- `transition: all 0.3s ease;` Applica una transizione su tutte le proprietà

## Media Queries

- `@media (max-width: 600px) { ... }` Applica stili per schermi fino a 600px di larghezza

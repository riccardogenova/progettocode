![alt](https://i.ibb.co/WBtgXXc/CSSCheat.png)

### 1. **Selezione degli Elementi**

```css
/* Seleziona tutti gli elementi di tipo 'p' */
p {
  /* Stili qui */
}

/* Seleziona un elemento con l'id 'header' */
#header {
  /* Stili qui */
}

/* Seleziona un elemento con la classe 'box' */
.box {
  /* Stili qui */
}

/* Seleziona un elemento che è figlio diretto di un elemento con la classe 'container' */
.container > p {
  /* Stili qui */
}
```

### 2. **Dimensioni e Posizionamento**

```css
/* Imposta la larghezza di un elemento */
.element {
  width: 100px;
}

/* Imposta altezza e larghezza di un elemento */
.element {
  width: 100px;
  height: 50px;
}

/* Imposta i margini dell'elemento */
.element {
  margin-top: 10px;
  margin-right: 20px;
  margin-bottom: 10px;
  margin-left: 20px;
}

/* Imposta il padding dell'elemento */
.element {
  padding: 10px;
}
```

### 3. **Tipografia**

```css
/* Imposta il colore del testo */
.element {
  color: #333;
}

/* Imposta il font */
.element {
  font-family: Arial, sans-serif;
}

/* Imposta la dimensione del carattere */
.element {
  font-size: 16px;
}

/* Imposta il grassetto */
.element {
  font-weight: bold;
}

/* Imposta lo stile del testo */
.element {
  font-style: italic;
}

/* Imposta la decorazione del testo */
.element {
  text-decoration: underline;
}
```

### 4. **Colori e Sfondi**

```css
/* Imposta il colore di sfondo */
.element {
  background-color: #eee;
}

/* Imposta il colore del bordo */
.element {
  border: 1px solid #000;
}

/* Imposta il colore del testo */
.element {
  color: #333;
}

/* Imposta il colore di sfondo tramite immagine */
.element {
  background-image: url("path/to/image.jpg");
}
```

### 5. **Effetti e Transizioni**

```css
/* Aggiunge ombra */
.element {
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
}

/* Aggiunge bordi arrotondati */
.element {
  border-radius: 5px;
}

/* Applica una transizione */
.element {
  transition: property duration timing-function delay;
}
```

### 6. **Liste**

```css
/* Rimuove i punti elenco dalle liste non ordinate */
ul {
  list-style-type: none;
}

/* Modifica il tipo di elenco */
ul {
  list-style-type: circle; /* puoi usare 'square', 'disc', 'decimal', ecc. */
}

/* Modifica l'immagine dell'elenco */
ul {
  list-style-image: url("path/to/image.png");
}
```

### 7. **Display e Visibilità**

```css
/* Nasconde un elemento */
.element {
  display: none;
}

/* Imposta la visibilità di un elemento */
.element {
  visibility: hidden;
}

/* Cambia il tipo di display di un elemento */
.element {
  display: block; /* Puoi usare anche 'inline', 'inline-block', 'flex', ecc. */
}
```

### 8. **Flexbox**

```css
/* Abilita Flexbox per il contenitore */
.container {
  display: flex;
}

/* Imposta la direzione del flusso */
.container {
  flex-direction: row; /* o 'column' */
}

/* Imposta l'allineamento degli elementi lungo l'asse principale */
.container {
  justify-content: center; /* o 'flex-start', 'flex-end', ecc. */
}

/* Imposta l'allineamento degli elementi lungo l'asse trasversale */
.container {
  align-items: center; /* o 'flex-start', 'flex-end', 'stretch', ecc. */
}
```

### 9. **Trasformazioni**

```css
/* Ruota un elemento */
.element {
  transform: rotate(45deg);
}

/* Scala un elemento */
.element {
  transform: scale(1.5);
}

/* Trasla un elemento */
.element {
  transform: translate(50px, 50px);
}
```

### 10. **Animazioni**

```css
/* Definisci un'animazione */
@keyframes nomeAnimazione {
  0% {
    /* Stili all'inizio dell'animazione */
  }
  100% {
    /* Stili alla fine dell'animazione */
  }
}

/* Applica un'animazione a un elemento */
.element {
  animation: nomeAnimazione 2s ease-in-out infinite; /* nome, durata, timing-function, ripetizione */
}
```

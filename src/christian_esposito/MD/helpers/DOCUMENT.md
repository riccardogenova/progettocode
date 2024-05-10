<!-- @format -->

L'oggetto **document** in JavaScript è un elemento fondamentale che rappresenta l'intero documento HTML caricato nella finestra del browser. Fornisce un'interfaccia completa per accedere, modificare e manipolare la struttura, il contenuto e lo stile del documento. Ecco una descrizione dettagliata dell'oggetto document:

1. Accedere alla struttura del documento:

   - document.documentElement: Questa proprietà restituisce l'elemento radice del documento, che in genere è l'elemento <html>.

   - document.head: Questa proprietà fornisce l'accesso all'elemento <head> del documento, consentendo di modificarne il contenuto, come meta tag, collegamenti e script.

   - document.body: Questa proprietà fornisce l'accesso all'elemento <body> del documento, consentendo di manipolarne il contenuto, come testo, immagini e altri elementi HTML.

2. Creare nuovi elementi e nodi di testo:

   - document.createElement(tagName): Questo metodo crea un nuovo elemento HTML del tipo specificato (ad esempio, <div>, <p>, <img>).

   - document.createTextNode(text): Questo metodo crea un nodo di testo contenente il contenuto di testo specificato.

3. Modificare la struttura del documento:

   - document.appendChild(childNode): Questo metodo aggiunge il nodo figlio specificato (elemento o nodo di testo) alla fine del nodo padre.

   - document.insertBefore(newNode, referenceNode): Questo metodo inserisce il nodo figlio specificato prima del nodo di riferimento specificato all'interno del nodo padre.

   - document.removeChild(childNode): Questo metodo rimuove il nodo figlio specificato dal suo nodo padre.

4. Selezionare gli elementi:

   - document.getElementById(id): Seleziona l'elemento con l'attributo ID univoco specificato.

   - document.getElementsByClassName(className): Restituisce un HTMLCollection di tutti gli elementi con il nome di classe specificato.

   - document.querySelector(cssSelector): Seleziona il primo elemento che corrisponde al selettore CSS specificato.

   +document.querySelectorAll(cssSelector): Restituisce un NodeList di tutti gli elementi che corrispondono al selettore CSS specificato.

5. Manipolare il contenuto e gli attributi degli elementi:

   - element.innerHTML: Ottiene o imposta il contenuto HTML dell'elemento (inclusi gli elementi figli).

   - element.textContent: Ottiene o imposta il contenuto di testo dell'elemento (esclusi i tag HTML).

   - element.getAttribute(attributeName): Ottiene il valore dell'attributo specificato per l'elemento.

   - element.setAttribute(attributeName, attributeValue): Imposta il valore dell'attributo specificato per l'elemento.

   - element.removeAttribute(attributeName): Rimuove l'attributo specificato dall'elemento.

6. Gestire gli eventi:

   - document.addEventListener(eventType, eventHandler): Aggiunge un listener di eventi al documento per il tipo di evento specificato (ad esempio, "click", "scroll", "keydown").

<!-- @format -->

In JavaScript, esistono due modi principali per impedire il comportamento predefinito di un evento:

1. **Utilizzo di `event.preventDefault()`:** Questo metodo è l'approccio più comune e diretto. È disponibile all'interno dell'oggetto evento passato alla funzione che gestisce l'evento. La chiamata a `event.preventDefault()` comunica efficacemente al browser di non eseguire l'azione predefinita associata all'evento.

   Ad esempio, per impedire l'invio predefinito di un modulo:

   ```javascript
   const mioModulo = document.getElementById('mioModulo');
   mioModulo.addEventListener('submit', function (event) {
     event.preventDefault(); // Impedisce l'invio predefinito del modulo
     // Gestire qui l'invio del modulo in modo personalizzato
   });
   ```

2. **Restituire `false` dalla funzione che gestisce l'evento:** Questo metodo è applicabile principalmente alle funzioni che gestiscono eventi associate utilizzando l'attributo `on` nell'HTML. Se la funzione che gestisce l'evento restituisce `false`, il browser non eseguirà l'azione predefinita.

   Ecco un esempio di come impedire il comportamento predefinito di un link:

   ```html
   <a href="#" onclick="return false;">Clicca qui (predefinito impedito)</a>
   ```

   **Punti chiave:**

   - **Specificità dell'evento:** Assicurarsi che la funzione che gestisce l'evento sia associata all'evento specifico che si desidera controllare (ad esempio, `click`, `submit`, `change`, ecc.).

   - **Propagazione dell'evento:** `event.preventDefault()` influisce solo sull'elemento target corrente e non interrompe la propagazione dell'evento. Se è necessario impedire ulteriore gestione dell'evento nella catena degli eventi, utilizzare `event.stopPropagation()`.

   - **Metodi alternativi:** Alcuni eventi specifici hanno i loro metodi di prevenzione, come `event.cancelBubble` per i browser più vecchi. Consultare la documentazione per l'evento specifico con cui stai lavorando.

   **Scegliere il metodo giusto:**

   - **`event.preventDefault()`:** Generalmente preferito per il JavaScript moderno e offre un maggiore controllo sulla gestione degli eventi.
   - **Restituire `false`:** Utile per le funzioni che gestiscono eventi definite in linea utilizzando l'attributo `on` nell'HTML.

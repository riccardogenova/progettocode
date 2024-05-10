<!-- @format -->

# COSA E' CSS?

CSS _(Cascading Style Sheets)_ è un linguaggio di stile utilizzato per definire l'aspetto e la formattazione di documenti HTML (HyperText Markup Language) e XML _(eXtensible Markup Language)_. Permette di controllare l'aspetto visivo di una pagina web, inclusi elementi come layout, colori, tipografia, spaziatura e molto altro ancora.

Le regole CSS sono composte da un selettore che indica quale elemento HTML verrà modificato e da una serie di dichiarazioni che specificano le proprietà dello stile da applicare a quell'elemento. Ad esempio:
p {
color: blue;
font-size: 16px;
}
In questo esempio, il selettore p indica tutti gli elementi < p > (paragrafi) all'interno del documento HTML. Le dichiarazioni all'interno delle parentesi graffe {} specificano che il testo all'interno dei paragrafi sarà di colore blu e avrà una dimensione del carattere di 16 pixel.

Le regole CSS possono essere applicate direttamente all'interno del documento HTML utilizzando l'elemento < style > all'interno della sezione < head >, oppure possono essere esterne, contenute in file separati con estensione .css, e richiamate nell'HTML tramite l'elemento < link >.

CSS è uno strumento essenziale per la progettazione di siti web moderni e consente ai progettisti e agli sviluppatori di separare la struttura del contenuto HTML dalla sua presentazione visiva, migliorando la manutenibilità, la flessibilità e l'accessibilità complessiva del sito.

Questo sistema è stato proposto per la prima volta nel 1994 da Håkon Wium Lie e Bert Bos. Tuttavia, il primo standard ufficiale è stato pubblicato dal World Wide Web Consortium (W3C) nel dicembre 1996 con **CSS1**. Questo è stato seguito da **CSS2** nel maggio 1998 e **CSS3**, che è stato suddiviso in moduli e ha iniziato ad essere rilasciato nel corso degli anni successivi.

# A COSA SERVE CSS?

CSS è un elemento fondamentale per creare esperienze web moderne, attraenti e funzionali. Attraverso il controllo preciso dell'aspetto visivo dei documenti web, CSS contribuisce a migliorare l'usabilità, l'accessibilità e l'esperienza complessiva degli utenti online. Serve a diversi scopi cruciali nell'ambito dello sviluppo web:

1. **Presentazione visiva**. Il ruolo principale è definire l'aspetto visivo di un sito web. Attraverso CSS, è possibile controllare il colore, il layout, la dimensione del testo, il margine, il padding e molti altri aspetti dell'interfaccia utente.

2. **Separazione dei contenuti e della presentazione**. Una delle caratteristiche più importanti, è la sua capacità di separare la struttura dei contenuti (definita da HTML) dalla loro presentazione visiva. Questo migliora la manutenibilità del codice, facilita le modifiche di stile e permette di adattare facilmente lo stesso contenuto a diversi dispositivi e formati.

3. **Responsività e adattabilità**. CSS consente di creare siti web responsivi che si adattano automaticamente a diversi dispositivi e dimensioni dello schermo, creando un'esperienza utente ottimale su desktop, tablet e dispositivi mobili.

4. **Accessibilità**. Può essere utilizzato per migliorare l'accessibilità dei siti web, ad esempio, attraverso la definizione di colori contrastanti per testo e sfondo, la gestione della lettura tramite stili di testo e altre tecniche di design inclusivo.

5. **Compatibilità tra browser**. Aiuta a garantire che un sito web sia visualizzato in modo coerente su diversi browser e dispositivi. Tuttavia, ci possono essere sfide nella gestione della compatibilità tra browser, e talvolta è necessario utilizzare prefissi specifici del browser o tecniche di fallback per ottenere risultati uniformi.

![alt](https://i.ibb.co/7kxDZYF/markdown.png)

## Markdown

Markdown è un linguaggio di formattazione leggero e facile da usare per la scrittura di testo semplice con formattazione basilare. È comunemente utilizzato per formattare documenti, note, pagine web, README nei repository GitHub e molto altro ancora. Ecco una sintesi delle principali funzionalità di Markdown e della sua formattazione:

## Storia

John Gruber, con il contributo sostanziale di Aaron Swartz, ha creato il linguaggio Markdown nel 2004 con l'obiettivo di permettere alle persone "di scrivere usando un formato testo semplice da scrivere e leggere e, opzionalmente, di convertirlo in XHTML (o HTML) strutturalmente valido”.

Prendendo spunti dalle convenzioni esistenti per scrivere testo semplice nelle email, come setext, il linguaggio è stato progettato per essere leggibile così com'è, senza che sembri marcato con tags o istruzioni di formattazione, diversamente dal testo formattato con un linguaggio di markup come Rich Text Format (RTF) o HTML, che mostrano chiaramente istruzioni di formattazione.

Gruber ha scritto uno script in Perl chiamato Markdown.pl che converte un testo marcato in un XHTML o HTML ben formattato e sostituisce i segni di minore ('<') e la e commerciale con le relative entità. Può essere usato da solo oppure come plugin di Blosxom o Movable Type, oppure come un filtro di testo per BBEdit. È distribuito con una licenza BSD.

Da allora, Markdown è stato re-implementato da altri come un modulo di Perl disponibile su CPAN (Text::Markdown), e in vari altri linguaggi di programmazione.

Siti come GitHub, reddit, Diaspora, Stack Exchange, OpenStreetMap, e SourceForge usano varianti di Markdown per facilitare le discussioni fra gli utenti.

## Standardizzazione e CommonMark

Non esiste uno standard univocamente definito per Markdown, a eccezione dell'articolo originale di John Gruber e della sua implementazione che alcuni considerano una forma del cosiddetto abandonware. Questo ha portato a una frammentazione del linguaggio dato che differenti produttori ne scrivono la propria variante per correggere errori o per aggiungere funzionalità non previste originariamente.

Dal 2012 fino al 2014, un gruppo di persone capeggiate da Jeff Atwood hanno portato avanti quella che Atwood ha descritto come uno "sforzo di standardizzazione". Un sito web di comunità ora si prefigge l'obiettivo di "documentare vari strumenti e risorse disponibili, di documentare autori e sviluppatori così come implementatori delle varie implementazioni di markdown". Nel settembre del 2014 Gruber ha obiettato sull'uso di "Markdown" nel nome di questo gruppo e del suo prodotto che per questa ragione è stato rinominato in "CommonMark".

È anche disponibile uno strumento (chiamato Babelmark2) che "confronta l'output delle varie implementazioni" per "promuovere la discussione su come e se alcuni aspetti poco chiari delle specifiche di Markdown debbano essere chiarite". Gruber ha fatto notare che una completa standardizzazione sarebbe un errore: "Siti (e persone) diverse hanno necessità differenti. Nessuna sintassi farebbe tutti felici."

Presso la IETF è in corso la procedura per standardizzare lo Internet media type text/markdown, indipendente dalla sintassi. Si pianifica di sottoporre al IESG la Internet-Draft, draft-ietf-appsawg-text-markdown, nell'aprile 2015. La comunità che ruota intorno a Markdown è invitata a sottoporre proposte per guidare il processo di standardizzazione.

## Estensioni

Una quantità di linguaggi di markup leggeri estendono Markdown implementando caratteristiche aggiuntive (come tabelle, note a piè pagina, liste di definizioni e Markdown all'interno di blocchi HTML) originariamente non disponibili con la sintassi di Markdown: esempi di questi linguaggi sono Markdown Extra, MultiMarkdown, Maruku, Kramdown e l'estensione Pandoc. In alcuni casi, questo ha lo scopo di permettere la conversione in formati alternativi al HTML come LaTeX, RTF e DocBook.

Molte implementazioni omettono intenzionalmente il supporto all'enfasi all'interno di parole. Nella implementazione originale di Markdown, un costrutto come my_long_variable è interpretato come una richiesta di aggiungere enfasi alle lettere "long" a metà della parola. Molti utenti trovano questo comportamento confusionale, per questa ragione molte implementazioni successive come PHP Markdown e Python Markdown non implementano questa caratteristica per impostazione di default.

Lo scritto "Thoughts on Markdown" riporta che John Gruber, sviluppatore originario, non ha risposto alle discussioni a proposito delle estensioni a Markdown e dichiara "Markdown sta cambiando, con o senza di lui".

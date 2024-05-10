<!-- @format -->

# Cos'è Git?

![icona di git](./img/git-icon.png)

**Git** è un sistema di controllo delle **versioni**, progettato per gestire progetti di qualsiasi dimensione con comodità ed efficienza. Viene utilizzato principalmente dagli sviluppatori di software per tenere traccia delle modifiche del codice durante lo sviluppo di un progetto.

**Git** registra ogni modifica del codice dando la possibilità di fare un rollback (tornare ad una versione precedente) qualora si presentasse la necessità.

## Qual è la storia di Git?

**Git** è un termine gergale inglese che indica una persona giovane o un giovane poco affidabile. Tuttavia, nel suo contesto il nome "Git" è stato scelto da **_Linus Torvalds_**, con l'intento di creare un nome un pò sarcastico, suggerendo che fosse un sistema "testardo" o "difficile" da usare. In realtà **Git** è diventato estremamente popolare nello sviluppo software, nonostante il suo nome possa dare un'idea di ostinazione e difficoltà.

## Quali sono i comandi più comuni?

Ecco alcuni esempi di comandi **Git** ordinati in un flusso logico tipico di utilizzo **Git** da effettuare tramite terminale con il loro significato:

1. `git init` // Inizializza un nuovo repository Git nella directory corrente.
2. `git clone [URL]` // Clona un repository Git esistente dalla sua URL remota sulla tua macchina locale.
3. `git remote add [URL]` // Collega il repository remoto a quello locale.
4. `git remote -v` // Mostra i repository remoti collegati e le rispettive URL.
5. `git add [file]` // Aggiunge un file al tuo "staging area", preparandolo per essere committato.
6. `git commit -m [messaggio]` // Committa le modifiche presenti nel tuo staging area con un messaggio di commit descrittivo.
7. `git status` // Mostra lo stato attuale del tuo repository Git, inclusi i file modificati, i file nel staging area e altro.
8. `git diff` // Mostra le differenze tra il working directory e l'area di staging.
9. `git reset [file]` // Rimuove un file dallo staging area, mantenendo le modifiche nel working directory.
10. `git rm [file]` // Rimuove un file dal repository Git.
11. `git branch` // Visualizza l'elenco dei rami nel repository.
12. `git checkout [branch]` // Passa a un altro ramo del repository.
13. `git checkout -b [nome_branch]` // Crea un nuovo ramo e passa ad esso in un'unica operazione.
14. `git merge [branch]` // Unisce un altro ramo al ramo attuale.
15. `git branch -d [branch]` // Elimina un ramo locale dopo averlo unito al ramo principale.
16. `git branch -m [nuovo_nome]` // Rinomina il ramo attuale.
17. `git tag [tagname]` // Crea un nuovo tag per un commit specifico.
18. `git log` // Controlli la lista dei commit in ordine cronologico.
19. `git revert [commit]` // Annulla un commit specifico, creando un nuovo commit che annulla le modifiche introdotte da quello specifico.
20. `git cherry-pick [commit]` // Applica le modifiche introdotte da un commit specifico su un altro ramo.
21. `git rebase [branch]` // Riapplica i commit del ramo corrente sopra il ramo specificato, spesso utilizzato per mantenere una storia dei commit più pulita.
22. `git bisect` // Utilizzato per il debugging, aiuta a identificare il commit che ha introdotto un bug.
23. `git push origin main` // Carica i tuoi commit locali sul repository remoto.
24. `git pull origin main` // Aggiorna il tuo repository locale con le modifiche dal repository remoto.
25. `git fetch` // Recupera i dati dal repository remoto senza unire i cambiamenti nel tuo repository locale.
26. `git stash` // Nasconde le modifiche locali temporaneamente, permettendo di lavorare su un'altra parte del codice.

Questo ordine riflette il flusso tipico di lavoro con Git, partendo dalla creazione e gestione del repository locale, passando per la gestione delle modifiche e dei rami, fino all'interazione con repository remoti e operazioni avanzate come il debugging e la gestione dei tag.

## Dove uso questi comandi?

I comandi **Git** vengono utilizzati principalmente tramite la riga di comando o la shell del tuo sistema operativo. Ecco come puoi utilizzarli:

1.  **Apri il terminale o la shell**: Prima di tutto, apri il terminale o la shell del tuo sistema operativo. Puoi farlo cercando "Terminale" (su macOS e Linux) o "Prompt dei comandi" (su Windows) nel menu di avvio.
2.  **Naviga nella directory del tuo progetto**: Utilizza il comando `cd` per navigare nella directory del tuo progetto. Ad esempio, se il tuo progetto si trova nella cartella "Progetto", digita `cd Progetto`.
3.  **Esegui i comandi Git**: Una volta nella directory del tuo progetto, puoi utilizzare i comandi Git come descritto in precedenza. Ad esempio, per inizializzare un nuovo repository Git, esegui `git init`. Per clonare un repository esistente, esegui `git clone [URL]`, e così via.

Ricorda che è importante essere nella **directory corretta** del tuo progetto quando esegui i comandi Git, in modo che i comandi agiscano sul \*\*
\*\*.

Se preferisci un'interfaccia grafica, ci sono anche client Git con interfaccia utente che ti permettono di eseguire le operazioni Git utilizzando un'interfaccia grafica anziché la riga di comando. Alcuni esempi includono GitHub Desktop, GitKraken e SourceTree.

# Cos'è GitHub?

![github icona](./img/github-icon.png)

**GitHub** è una piattaforma di hosting di codice basata su Git. Fornisce agli sviluppatori uno spazio per ospitare i propri repository (un archivio di dati ed informazioni), collaborare con altri sviluppatori, gestire le problematiche e i progetti con le varie funzionalità presenti.

**GitHub** è diventato uno degli strumenti più popolari per lo sviluppo collaborativo di software open source, ma viene utilizzato anche per progetti privati e commerciali.

## In conclusione...

In breve, **Git** è il sistema di controllo delle versioni utilizzato per gestire le modifiche al codice sorgente, mentre **GitHub** è una piattaforma basata su **Git** che fornisce strumenti aggiuntivi per la collaborazione e la gestione dei progetti software.

# Markdown: Una breve guida

Il Markdown è un linguaggio di formattazione leggero e facile da usare per la creazione di documenti testuali formattati. È comunemente utilizzato per scrivere documentazione, messaggi di forum, pagine web, e persino per scrivere articoli su piattaforme come GitHub o Medium. In questa breve guida, esploreremo le basi del Markdown e alcuni dei suoi elementi più comuni.

## Intestazioni

Le intestazioni in Markdown vengono create aggiungendo uno o più simboli `#` prima del testo. Più simboli `#` indicano un'intestazione di livello inferiore. Ad esempio:

```markdown
# Intestazione di Livello 1

## Intestazione di Livello 2

### Intestazione di Livello 3
```

## Testo Formattato

È possibile formattare il testo utilizzando simboli di asterisco `*` o trattini bassi `_` per enfatizzare o rendere in grassetto il testo. Ad esempio:

```markdown
_Testo in corsivo_
**Testo in grassetto**
```

## Liste

Markdown supporta sia liste ordinate che non ordinate. Le liste non ordinate possono essere create utilizzando simboli `-`, `+` o `*`, mentre le liste ordinate utilizzano numeri seguiti da un punto. Esempi:

```markdown
- Elemento 1
- Elemento 2
- Elemento 3

1. Primo elemento
2. Secondo elemento
3. Terzo elemento
```

## Link

I link possono essere inseriti utilizzando la seguente sintassi:

```markdown
[Testo del link](URL_del_link)
```

Ad esempio:

```markdown
[Visita Google](https://google.com)
```

## Immagini

Le immagini possono essere incorporate utilizzando la sintassi simile a quella dei link, ma precedendo il testo con un punto esclamativo `!`. Ad esempio:

```markdown
![Testo alternativo dell'immagine](URL_dell'immagine)
```

Che verrà visualizzato in questo modo:

![Immagine a caso](https://picsum.photos/200)

## Citazioni

Le citazioni possono essere inserite utilizzando il simbolo `>` all'inizio della riga. Esempio:

```markdown
> Questa è una citazione.
```

## Codice

Per formattare blocchi di codice, puoi usare tre backticks ``` seguiti dal nome del linguaggio di programmazione. Ad esempio:

\```javascript
console.log("Hello, world!")
\```

Che verrà visto in questo modo:

```javascript
console.log('Hello, world!');
```

## Linee Orizzontali

Per inserire una linea orizzontale, puoi utilizzare tre o più trattini `-`, asterischi `*`, o trattini bassi `_`. Esempio:

```markdown
---
```

## Conclusioni

Questa è solo una breve panoramica del Markdown e delle sue caratteristiche più comuni. Con queste semplici regole, puoi creare documenti formattati in modo chiaro e leggibile senza dover affrontare la complessità dei linguaggi di markup più avanzati. Spero che questa guida ti sia stata utile per iniziare con il Markdown!

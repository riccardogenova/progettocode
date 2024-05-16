## FORK
*Un fork in GitHub è una copia di un repository esistente che viene creata all'interno del tuo account GitHub. I fork sono comunemente utilizzati quando si desidera contribuire a un progetto open source senza avere il permesso di modificare direttamente il repository originale. Con un fork, puoi apportare modifiche al codice nel tuo fork personale senza influenzare il repository originale. Una volta apportate le modifiche, puoi inviare una richiesta di pull al repository originale per chiedere al proprietario del progetto di includere le tue modifiche nel progetto principale.*

*I fork sono un concetto fondamentale in GitHub e sono ampiamente utilizzati nel lavoro collaborativo e nell'open source. Consentono a chiunque di contribuire a un progetto senza richiedere autorizzazioni speciali e permettono ai proprietari del progetto di controllare le modifiche prima di includerle nel repository principale.*

Inoltre offre molti vantaggi, per esempio:
- Indipendenza: Dopo il fork, hai il pieno controllo sul tuo repository. Puoi modificare il codice, aggiungere funzionalità e risolvere bug senza influenzare il repository originale.

- Sincronizzazione: Puoi sincronizzare il tuo fork con il repository originale per integrare le sue modifiche. Questo garantisce che il tuo fork rimanga aggiornato con le ultime modifiche del progetto principale.

- Contribuzione: Fork e pull request sono fondamentali per contribuire su GitHub. Dopo aver apportato modifiche significative, puoi inviare una richiesta di pull al repository originale per chiedere al proprietario di considerare le tue modifiche per l'inclusione nel progetto principale.

- Sperimentazione: I fork consentono di sperimentare nuove idee senza influenzare direttamente il progetto principale. Puoi testare diverse modifiche e soluzioni nel tuo fork e, se necessario, condividerle con la comunità attraverso una richiesta di pull.

- Accesso ai dati: Anche se i fork sono privati per impostazione predefinita, puoi renderli pubblici per consentire ad altri di visualizzare e contribuire al tuo lavoro.

## VIM

VIM è un editor di testo molto potente e altamente configurabile, che è spesso disponibile nei terminali dei sistemi Unix-like, compresi quelli che potresti usare per interagire con GitHub tramite interfaccia a riga di comando.

- Utilizzo su GitHub: Quando interagisci con GitHub tramite il terminale, potresti dover modificare file di testo, come i file di configurazione o il codice sorgente. Vim può essere uno strumento utile per questo scopo, poiché ti consente di modificare i file direttamente dal terminale senza dover aprire un editor grafico separato.

- Comandi di base di Vim: Vim ha una curva di apprendimento ripida per i principianti, ma offre un'ampia gamma di funzionalità una volta che si impara a utilizzarlo. Alcuni comandi di base includono:

- `i`: Passa alla modalità di inserimento per iniziare a modificare il testo.

- `Esc`: Esci dalla modalità di inserimento e torna alla modalità di comando.

- `:w`: Salva le modifiche al file.

-`:q`: Chiudi Vim.

- `:wq` o `ZZ`: Salva e chiudi Vim contemporaneamente.

## Come eliminare un branch in remoto

- `git push origin --delete nome_branch`

## doc, fix, feat

- Nel momento in cui vado ad effettuare un commit, all'interno degli apici, prima di scrivere qualsiasi commento, inserisco uno dei tre termini visti sopra, quindi doc, fix oppure feat che vanno seguiti con i `:`, ad esempio:

- `doc: "commento"` ;
- `fix: "commento"` ;
- `feat: "commento"` ;


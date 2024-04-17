- init: inizia una repository nella cartella corrente.  Crea una nuova directory .git (nascosta) che contiene
tutti i file di configurazione e i metadati necessari per gestire il repository.
- add: aggiunge un file alla repository.
- commit: Crea un nuovo commit ("versione") con i file presenti nel repository. I commit rappresentano una sorta di “istantanea” del repository e descrivono
le modifiche che abbiamo fatto. Queste modifiche possono riguardare tutto il
progetto, come cambiamenti del codice, creazione o cancellazione di nuovi file
o cartelle ecc., e il comando non le salva direttamente nel repository locale o
remoto, ma le prepara aggiungendole ad una "staging area", ovvero una sorta
di "area temporanea". Una volta aggiunte le modifiche a quest’area, è possibile
effettuare il commit.
- remote add <alias> <URL>: collega un repository locale ad uno remoto.
- checkout <branch>: switch ad una branch.
- checkout -b <branch>: crea e switcha ad una branch.
- checkout -d <branch>: eliminara una branch.
- merge: unione di piu' branch.
  - - Merge: Questo è il merge di base, dove le modifiche dal ramo di sviluppo vengono applicate direttamente al ramo di destinazione. Sul sito di GitHub si gestisce automaticamente il processo di merge, risolvendo i conflitti se necessario.
  - - Squash base: In un squash merge, tutti i commit nel ramo di sviluppo vengono compressi in un singolo commit prima di essere uniti al ramo di destinazione. Questo è utile per mantenere la cronologia del repository più pulita e per ridurre il rumore dei commit.
  - - ReBase merge: Un rebase merge riapplica i commit dal ramo da mergare al punto in cui il ramo di destinazione è stato originariamente creato. Questo può dare l'impressione che il lavoro nel ramo di sviluppo sia stato fatto "sopra" il lavoro nel ramo di destinazione. Il rebase merge modifica la storia del repository, il che può causare problemi di conflitto e rendere la tracciabilità delle modifiche più complicata rispetto al base merge. In particolare, il rebase merge viene utilizzato per integrare i cambiamenti di una branch in un'altra, e riscrive la storia dei commit per sembrare come se la branch che viene unita fosse stata sviluppata direttamente partendo dalla branch di destinazione. Quando si esegue un rebase merge, i commit dalla branch che si sta unendo vengono riprodotti sulla cima della branch di destinazione. Questo significa che ogni commit della branch che si unisce viene "applicato" uno per uno sulla branch di destinazione. Ciò può comportare la modifica dei commit originali per adattarli alla storia della branch di destinazione.
- reset <hash del commit>: va indietro ad una commit.
- log: lista delle commit della branch corrente.
- status: stato della repository.
- branch: lista delle branch.  
- checkout -m <nome>: rinomina il branch corrente.
- push origin --delete: elimina il branch corrente remoto.
- clone: clona una repository.

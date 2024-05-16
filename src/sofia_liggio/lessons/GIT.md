<!-- @format -->

# Git: Sistema di Controllo Versione

Git è un sistema di controllo versione distribuito, cioè un tipo di software usato per tenere traccia delle modifiche apportate ai file nel tempo. Questo permette di tornare a versioni precedenti di un file, o di confrontare le modifiche nel tempo, permettendo agli sviluppatori di collaborare efficacemente tra loro.

È stato creato da Linus Torvalds nel 2005 per gestire lo sviluppo del kernel Linux. Torvalds era alla ricerca di un sistema che potesse gestire grandi progettiin modo efficiente e distribuito, a differenza di altri sistemi esistenti ma centralizzati.

## Come funziona

Ogni sviluppatore che lavora su un progetto ha una copia completa dell'intero _repository_, dove si tiene traccia di tutte le modifiche tracciate. Ogni volta che viene salvata una nuova versione di un file (o un insieme di file), Git registra quella "istantanea" del progetto, permettendoti di ritornare a quella versione in qualsiasi momento. Questo offre diversi vantaggi, inclusa la possibilità di lavorare in modo indipendente senza dover essere costantemente connessi a un server centrale.

## Principali utilizzi

- **Controllo delle versioni**: tiene traccia di tutte le modifiche apportate nel tempo, consentendo agli sviluppatori di vedere chi ha fatto cosa e quando. Questo semplifica il ripristino delle versioni precedenti del codice, se necessario.

- **Collaborazione**: più sviluppatori possono lavorare contemporaneamente sullo stesso progetto, modificando file e combinando le loro modifiche utilizzando il sistema di branching e merging.

- **Branching e Merging**: consente agli sviluppatori di creare rami separati del repository, chiamati "branch", per sviluppare nuove funzionalità o risolvere problemi senza influenzare il codice principale. Successivamente, è possibile unire ("merge") i rami in modo sicuro e coerente.

- **Tracciamento delle modifiche**: consente agli sviluppatori di vedere esattamente cosa è stato cambiato, quando e da chi. Questo è utile per identificare rapidamente il momento in cui è stata introdotta una determinata funzionalità o un bug.

- **Backup**: utilizzando repository Git su server remoti, è possibile avere un backup completo del codice sorgente del progetto. Questo offre una maggiore sicurezza e affidabilità rispetto a semplici copie dei file.

- **Flusso di lavoro flessibile**: è altamente flessibile, può essere adattato a una vasta gamma di flussi di lavoro di sviluppo e configurato per supportare le esigenze specifiche del team.

<!-- @format -->

# **Cos'è Git?**

![GITHUB](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh0iYSBsZhe42ukPlUJCKADF4t3P9iTEG-iX46Dcso&s)(https://github.com)

### **_Git_** è un sistema di controllo di **versionamento** _open source_ che permette di salvare sia sul vostro computer che su un server più versioni di uno stesso file o di un progetto che potete andare poi a modificare nel tempo

## **Funzionalità**

**1)** **_Sicurezza_**  
**Git** è stato progettato considerando come priorità assoluta l'integrità del _[codice sorgente](https://it.wikipedia.org/wiki/Codice_sorgente)_ gestito. Il contenuto dei file e le vere relazioni tra file e directory, le versioni, i tag e i commit, tutti oggetti nel repository Git, sono protetti da un algoritmo di hashing, sicuro a livello di crittografia, chiamato SHA1. Questo algoritmo protegge il codice e la cronologia delle modifiche da modifiche accidentali e dannose e garantisce la completa tracciabilità della cronologia

**2)** **_Cronologia e reversibilità_**  
Se avete bisogno di fare dei **backup** periodici o giornalieri di quello che state facendo è utile a confrontare le modifiche tra una versione e l'altra di un file che può essere sia un file contenente codice sia un file di testo sia anche dei file binari
avete anche la possibilità di tornare ad una versione precedente del lavoro in maniera semplice.

`COMMIT`
Un commit in **Git** rappresenta uno snapshot dei file nel tuo repository in un determinato momento. Quando esegui un commit, stai effettivamente registrando le modifiche apportate ai file nel repository in quel momento specifico.
Ecco cosa include un commit:

1. **Modifiche ai File**: Ogni commit registra le modifiche apportate ai file nel repository. Queste modifiche possono essere aggiunte, eliminate o modificate.

2. **Messaggio di Commit**: Ogni commit è accompagnato da un messaggio di commit che fornisce una breve descrizione delle modifiche apportate. Questo messaggio aiuta gli altri sviluppatori (e te stesso in futuro) a capire il motivo delle modifiche apportate.

3. **Hash del Commit**: Ogni commit ha un hash SHA univoco che lo identifica in modo univoco all'interno del repository. Questo hash è utile per riferirsi a un commit specifico in operazioni successive, come il rollback o il riferimento a un commit specifico.

I commit sono fondamentali in Git perché consentono di tenere traccia delle modifiche al codice nel tempo e di collaborare con altri sviluppatori in modo efficace. Ogni commit rappresenta un passo avanti nel progresso del progetto e offre la possibilità di tornare indietro nel tempo se necessario, mantenendo la storia del codice trasparente e ben documentata.

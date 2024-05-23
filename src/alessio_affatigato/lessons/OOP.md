<!-- @format -->

# Programmazione orientata agli oggetti ( OOP )

In OOP, le caratteristiche di un oggetto vengono denominate proprietà e le azioni sono dette metodi.
Le azioni altro non sono che "le cose che un oggetto è in grado di fare" mentre le sue caratteristiche rappresentano i dati che le azioni stesse possono utilizzare per eseguire le operazioni che da esse ci si aspetta.

### I Metodi

I **metodi** sono le _azioni_ che un oggetto è in grado di compiere
In generale, potremmo delineare almeno tre buone regole per identificare i metodi da associare ad un oggetto:

- Un oggetto che abbia **uno o due soli metodi** deve fare riflettere. Potrebbe essere perfettamente lecito definire un oggetto del genere (ed è sicuramente possibile farlo praticamente) ma, spesso, un oggetto creato con questi requisiti indica la necessità di "mescolarlo" con un altro oggetto con simile definizione.

- Ancora più **da evitare sono gli oggetti con nessun metodo**. È bene che un oggetto incapsuli (vedremo meglio in seguito cosa si intenda con tale terminologia) dentro sé sia informazioni (le proprietà), sia azioni (i metodi, appunto). In linea di massima, un oggetto senza metodi può facilmente essere convertito in uno o più attributi da assegnare ad un altro oggetto.

- Sicuramente **da evitare sono anche gli oggetti con troppi metodi**. Un oggetto, in generale, dovrebbe avere un insieme facilmente gestibile di proprie responsabilità. Assegnare ad un oggetto troppe azioni, potrebbe rendere ardua la manutenzione futura dello stesso oggetto. È consigliabile, in questo caso, cercare di spezzare l'oggetto in due oggetti più piccoli e semplificati.

### Le Proprietà

Le **proprietà** rappresentano i _dati_ dell'oggetto, ovvero le informazioni su cui i metodi possono eseguire le loro elaborazioni.
Un oggetto per essere ben definito deve contenere le proprietà che gli competono e non tutte quelle che gli si potrebbero comunque attribuire.
In generale, esistono tre tipologie di proprietà:

- **Gli attributi** rappresentano quelle proprietà che descrivono le caratteristiche peculiari di un oggetto (ad esempio, riferendoci ad una persona: altezza, peso).

- **I componenti**, invece, sono identificabili in quelle proprietà che sono atte a svolgere delle azioni (testa, corpo, mani, gambe).

- **I peer objects** definiscono delle proprietà che a loro volta sono identificate e definite in altri oggetti (ad esempio: l'automobile posseduta da una persona).

---

### Le Classi

Il termine più importante e rappresentativo nella Programmazione ad Oggetti è quello di _Classe_.
**Una classe** rappresenta una categoria particolare di oggetti e funge da tipo per un determinato oggetto ad essa appartenente (dove con tipo si intende il tipo di dato, come lo sono gli interi o le stringhe).
Più oggetti software che hanno le stesse proprietà e gli stessi metodi possono essere raggruppati in una classe ben definita di oggetti
Dunque, una classe rappresenta, sostanzialmente, una categoria particolare di oggetti e, dal punto di vista della programmazione, è anche possibile affermare che una classe funge da tipo per un determinato oggetto ad essa appartenente.

Diremo, inoltre, che un particolare oggetto che appartiene ad una classe costituisce **un'istanza della classe** stessa.
L'univocità di ogni istanza viene definita con il termine di **identità (identity)**: ogni oggetto ha una propria identità ben distinta da quella di tutte le altre possibili istanze della stessa classe a cui appartiene l'oggetto stesso.
Naturalmente, le proprietà di un oggetto possono avere valori che variano nel tempo.Si definisce stato di un oggetto, l'insieme dei valori delle sue proprietà in un determinato istante di tempo. Se cambia anche una sola proprietà di un oggetto, il suo stato varierà di conseguenza.

L'insieme dei metodi che un oggetto è in grado di eseguire viene definito, invece, **comportamento** (behavior).
Insomma, appare sempre più chiaro come un oggetto rappresenti un'entità a sé stante, ben definita che, nel corso dell'elaborazione, sia soggetta ad una creazione, ad un suo utilizzo e, infine, alla sua distruzione.

---

### Relazioni

Le più comuni relazioni tra classi, in un programma ad Oggetti sono identificabili in tre tipologie:

- **Associazioni** (Use Relationship):
  Una classe è associata ad un'altra se è possibile "navigare" da oggetti della prima classe ad oggetti della seconda classe seguendo semplicemente un riferimento ad un oggetto.

- **Aggregazioni** (Containment Relationship):
  L'aggregazione è una forma di associazione più forte: una classe ne aggrega un'altra se esiste tra le due classi una relazione di tipo "intero-parte".Ad esempio la classe Azienda aggrega la classe Persona perché una ditta (che costituisce l'"intero") è composta da persone (che costituiscono la "parte").

- **Specializzazioni** (Inheritance Relationship):
  Un oggetto di classe A deriva da un oggetto di classe B se A è in grado di compiere tutte le azioni che l'oggetto B è in grado di compiere.
  Inoltre l'oggetto di classe A è in grado di eseguire anche azioni che l'oggetto B non può compiere.

---

### Ereditarietà

**L'ereditarietà** appresenta un meccanismo che consente di creare nuovi oggetti che siano basati su altri già definiti.
Si definisce **oggetto figlio (child object)** quello che eredita tutte o parte delle proprietà e dei metodi definiti nell'**oggetto padre (parent object)**.

Esempio di ereditarietà:

```
class Impiegato
{
    private String nome;
    private String salario;
    private String matricola;
    private int anniDiServizio;
    public Impiegato(String n, double s, String m, int ads)
    {
        nome = n;
        salario = s;
        matricola = m;
        anniDiServizio = ads;
    }
    public void incrementaSalario(double percentuale)
    {
        salario *= 1 + percentuale / 100;
    }
    public void stampaInfo()
    {
        System.out.println(nome + " " + salario + " " + matricola);
    }
    public String getNome()
    {
        return nome;
    }
    public int getAnniServizio()
    {
        return anniDiServizio;
    }
}

class Manager extends Impiegato
{
    private String nomeSegretaria;
    public Manager(String n, double s, String m, int ads)
    {
        super(n, s, m, ads);
        nomeSegretaria = "";
    }
    public void incrementaSalario(double percentuale)
    {
        // Aggiunge alla percentuale lo 0.5% per ogni anno di servizio
        double bonus = 0.5 * getAnniServizio();
        super.incrementaSalario(percentuale + bonus)
    }
    public String getNomeSegretaria()
    {
        return nomeSegretaria;
    }
    public void setNomeSegretaria(String nome)
    {
        nomeSegretaria = nome;
    }
}
```

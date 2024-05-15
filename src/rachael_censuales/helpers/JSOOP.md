<!-- @format -->

## Javascript Objected Oriented Programming - OOP JS

Javascript è un linguaggio di programmazione a oggetti.
Ciò vuol dire che l'importante non è tanto l'implementazione del codice, bensì le caratteristiche e le azioni che si possono svolgere.
Il paradigma OOP è dunque costituito da un numero variabile di componenti (**oggetti**), i quali interagiscono tra di essi attraverso lo scambio di messaggi.
In un linguaggio OOP bisogna principalmente essere in grado di identificare gli oggetti e saperne gestire l'interazione degli uni con gli altri.

In poche parole, le azioni, chiamate **metodi** sono le cose che un oggetto è in grado di fare, mentre le caratteristiche dell'oggetto vengono chiamate **proprietà**.

### Gli oggetti.

Un oggetto per essere ben definito deve contenere le proprietà che effettivamente gi competono e non tutte quelle che gli si potrebbero attribuire, quindi bisogna porsi la domanda "quali proprietà sono necessarie affinché l'oggetto sia in grado di eseguire le proprie azioni?"
Distinguendole in:

- Attributi: caratteristiche di un oggetto
- Componenti: proprietà atte a svolgere delle azioni.

Gli oggetti, possono essere creati in modi differenti:

- Definizione e Creazione di un Oggetto singolo
  `let persona = {
nome:'Rachele', 
cognome:'Consuelo', 
anni:25 }`

- Definizione e Creazione di un Oggetto singolo con la keyword new:
  In questo caso viene creata l’istanza dell’oggetto senza definire, in fase di creazione,
  le sue proprietà
  ▪ var objectName = new Object();
  • Definizione di un Costruttore Oggetto
  In questo caso, si costruisce un costruttore attraverso il quale possono essere creati
  degli Oggetti dello stesso tipo del costruttore.
  Praticamente analogo al concetto di Classe

  ```
  function persona(nome, cognome, età) {

     this.nome = nome;
     this.cognome = cognome;
     this.età = età;

     }

  ```

- Una volta definito il costruttore, gli Oggetti singoli possono essere creati come
  segue:
  `var obj1 = new person(“nomeValue”, “cognomeValue”, etàValue)`

### Le classi

Quando più oggetti hanno le stesse proprietà e gli stessi metodi, possono essere raggruppati in una classe, la quale rappresenta una particolare _categoria di oggetti_ e funge da "tipo" per un determinato oggetto.
Un particolare oggetto che appartiene ad una classe costituisce un'istanza della classe.

```
class Persona {

constructor(nome, cognome) {

this.nome = nome;

this.cognome = cognome;

}

}
```

_Il nome della classe è "persona" ed il comando this serve per associare le proprietà ed i metodi all'oggetto che andremo a creare mediante la classe._
Il costruttore è un metodo speciale all'interno di una classe che viene chiamato quando viene creata un'istanza della classe. E' utilizzato per inizializzare le proprietà dell'oggetto.
\_Nell'esempio, il costruttore accetta i parametri 'nome' e 'cognome' e li assegna alle proprietà corrispondenti all'oggetto.

All'interno della classe si può inoltre dichiarare una 'funzione' con scritto ciò che si vuole far fare alla classe, la quale verrà poi eseguita sulla classe stessa.

Le classi ci aiutano a organizzare il nostro codice in modi più strutturati. Questo possiamo farlo attraverso dei fondamentali principi OOP.

## Principi OOP in Javascript

### Incapsulamento

L'incapsulamento è la delimitazione delle interfacce interne da quelle esterne.
Nella programmazione orientata ad oggetti, le proprietà ed i metodi sono divisi in due gruppi:

- Interfaccia interna: accessibili dagli altri metodi della classe, ma non dall'esterno;
- Interfaccia esterna: accessibili anche dall'esterno della classe.
  L'oggetto deve avere la capacità di imporre regole di accesso dall'esterno ai propri membri, così da nascondere i dettagli interni fornendo un'interfaccia pubblica che permetta di interagire con esso.

### Aggregazione

L'aggregazione è la capacità di un oggetto di contenere altri oggetti.

let persona = {
nome: 'Rachele',
cognome: 'Consuelo',
indirizzo: {
via: "Via Salve",
numero: "12"
}
}

Questo consente la creazione di gerarchie di oggetti.

### Ereditarietà

L'ereditarietà in un linguaggio OO, permette di definire un campo (Oggetto Padre) con caratteristiche comuni a tutte le finestre del programma (Oggetti Figli), le quali avranno a loro volta altre caratteristiche definite nelle rispettive classi.

In OOP ogni oggetto derivante da una classe padre ha la possibilità di ignorare uno o più metodi in essa definiti riscrivendo tali metodi al suo interno. **"Overriding"**.

### Polimorfismo

Il polimorfismo è l'attitudine di un oggetto a mostrare più implementazioni per una singola funzionalità.

Il polimorfismo consente ad oggetti differenti (ma collegati tra loro) la flessibilità di rispondere in modo differente allo stesso tipo di messaggio.

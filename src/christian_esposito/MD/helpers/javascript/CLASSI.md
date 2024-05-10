<!-- @format -->

## Creare classi in JavaScript: Una guida dettagliata

Le classi JavaScript, introdotte con ECMAScript 2015 (ES6), offrono un modo strutturato per creare oggetti con caratteristiche e comportamenti simili. Pensile come dei modelli o delle stampe per la creazione di oggetti che condividono proprietà e metodi comuni.

**Sintassi base:**

```javascript
class NomeClasse {
  // Proprietà (variabili)
  proprietà1;
  proprietà2;

  // Metodi (funzioni)
  metodo1() {
    // Codice del metodo
  }

  metodo2() {
    // Codice del metodo
  }
}
```

**Spiegazione della sintassi:**

- `class`: Parola chiave che indica l'inizio della definizione della classe.
- `NomeClasse`: Nome identificativo della classe, scritto con camelCase.
- `{}`: Blocco di codice che contiene le proprietà e i metodi della classe.
- `proprietà1; proprietà2;`: Elenco delle proprietà della classe, separate da punto e virgola. Le proprietà sono variabili con valori associati.
- `metodo1()`, `metodo2()`: Esempi di metodi della classe. I metodi sono funzioni associate alla classe che eseguono azioni o restituiscono valori.

**Creare un'istanza (oggetto) da una classe:**

```javascript
const istanza1 = new NomeClasse();
const istanza2 = new NomeClasse();
```

- `new`: Parola chiave che indica la creazione di un nuovo oggetto.
- `NomeClasse()`: Chiamata al costruttore della classe. Il costruttore è un metodo speciale che viene eseguito automaticamente quando viene creata un'istanza della classe. Può essere utilizzato per inizializzare le proprietà dell'oggetto.

**Accedere alle proprietà e ai metodi di un'istanza:**

```javascript
istanza1.proprietà1 = 'valore1';
istanza2.proprietà2 = 'valore2';

console.log(istanza1.metodo1()); // Esegue il metodo1 di istanza1
console.log(istanza2.metodo2()); // Esegue il metodo2 di istanza2
```

- `istanza1.proprietà1`: Accesso alla proprietà `proprietà1` dell'istanza `istanza1`.
- `istanza1.metodo1()` : Chiamata al metodo `metodo1` dell'istanza `istanza1`. I metodi vengono richiamati utilizzando l'oggetto su cui vengono eseguiti e la parentesi con eventuali argomenti.

**Esempio dettagliato:**

Creiamo una classe `Persona` per rappresentare le persone:

```javascript
class Persona {
  constructor(nome, cognome, età) {
    this.nome = nome;
    this.cognome = cognome;
    this.età = età;
  }

  stampaInfo() {
    console.log(`Nome: ${this.nome} ${this.cognome}`);
    console.log(`Età: ${this.età} anni`);
  }
}
```

- Il costruttore `constructor` inizializza le proprietà `nome`, `cognome` e `età` dell'oggetto con i valori passati come argomenti.
- Il metodo `stampaInfo` stampa le informazioni della persona su console.

**Utilizzo della classe:**

```javascript
const persona1 = new Persona('Mario', 'Rossi', 30);
const persona2 = new Persona('Laura', 'Bianchi', 25);

persona1.stampaInfo(); // Stampa le informazioni di persona1
persona2.stampaInfo(); // Stampa le informazioni di persona2
```

**Vantaggi dell'utilizzo delle classi:**

- **Organizzazione del codice:** Migliora la leggibilità e la manutenibilità del codice raggruppando le caratteristiche simili.
- **Riutilizzo:** Permette di creare facilmente nuovi oggetti con le stesse caratteristiche di base.
- **Ereditarietà:** Consente di creare classi figlie che ereditano proprietà e metodi dalle classi genitore (**relazione is-a**).
- **Polimorfismo:** Permette di implementare metodi con lo stesso nome in classi diverse, ma con comportamenti differenti (**stesso nome, diverso comportamento**).

**Note aggiuntive:**

- Le proprietà e i metodi dichiarati all'interno di una classe sono visibili solo alle istanze create da quella classe (**ambito privato**).
- Per utilizzare le proprietà e i metodi di una classe all'esterno, è necessario crearne un'istanza.
- Esistono modi alternativi per creare oggetti

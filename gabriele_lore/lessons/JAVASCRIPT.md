JavaScript è un linguaggio di programmazione multi paradigma orientato agli eventi, utilizzato sia nella programmazione lato client web che lato server (Node.js), siti web e applicazioni web, di effetti dinamici 
interattivi tramite funzioni di script invocate da eventi innescati a loro volta in vari modi dall'utente sulla pagina web in uso (mouse, tastiera, caricamento della pagina ecc...).

# Elementi

## Eventi

Esistono varie categorie di eventi:

- Eventi attivabili dai tasti del mouse
- Eventi attivabili dai movimenti del mouseì
- Eventi attivabili dall'utente con la tastiera
- Eventi attivabili dalle modifiche dell'utente

### Eventi attivabili dai tasti del mouse

- onClick: attivato quando si clicca su un oggetto;
- onDblClick: attivato con un doppio click;

### Propagazione degli eventi

Triggerando un evento si triggerrano anche quelli dei contenitori padri.

## Implementazione

Il tag HTML <script> viene utilizzato per definire uno script lato client (JavaScript).
L'elemento contiene istruzioni script oppure punta a un file di script esterno tramite l'attributo 'src'.

```
<script>
document.getElementById("demo").innerHTML = "Hello JavaScript!";
</script>
```

Il tag HTML <noscript> definisce un contenuto alternativo da mostrare agli utenti che hanno disabilitato gli script nel browser o che non supportano gli script:

```
<noscript>Sorry, your browser does not support JavaScript!</noscript>
```

## Variabili

Esistono tre tipi di variabili:
- const per le constanti
- var e let

## Operatori logici

### OR

Vero se almeno una delle due conidioni è vera

```
||
```
### AND

Vero se le due condizioni sono vere

```
&&
```
### Negato

Nega il risultato di una cosa

```
!
```

## Operatori di confronto

- ==: confronta contenuto
- !=: diverso da
- ===: confronta contenuto e tipo
- !==: diverso da contenuto e tipo

## Condizioni di esistenza

!variabile è falsa.
!!variabile è falsa se il contenuto è vuoto.
!!0 è false e !!>=1 di vero.

## Variabili costanti
- NaN
- Infinity

# Funzioni

Una funzione è un blocco di istruzioni, dotato di una lista di argomenti (eventualmente vuota) e che può avere un nome (anche se non è necessario). Una funzione può restituire un valore tramite l'istruzione return.

Ogni funzione è un'istanza di Function, un tipo di oggetto base. Le funzioni possono essere create e assegnate come ogni altro oggetto:

```
   var myFunc1 = new Function("alert('Hello')");
   var myFunc2 = myFunc1;
   myFunc2();
```

## Lista di funzioni

- element.clone(false): clona un nodo senza copiare gli elementi.
- element.removeListener(event): rimuovi un evento
- element.preventDefault: usato per prevenire l'effetto di propagazione.

# Classi

Le classi JavaScript sono dei tipi di dato definiti dall'utente, possiedono proprietà e metodi e vengono utilizzate per creare componenti riutilizzabili.

Creazione di una classe in javascript:

```
class <nome>
{
   constructor()
   {

   }
}
```

Ogni variabile proprietà viene creata automaticamente se dichiarata.

Il metodo constructor viene chiamato ogni qualvolta che si inizializza un oggetto.

Per inizializzare un oggetto:

```
<nome> <nome_oggetto> = new <nome>();
```

Per accedere alle propietà e metodi dell'oggetto si usa il punto.

Esempio d'uso:

```
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

const person1 = new Person('John', 30);
person1.greet();
```

## Metodi statici

I metodi statici sono metodi associati alla classe, ma non a nessun oggetto particolare. Per creare un metodo statico, si utilizza la parola chiave static prima del nome del metodo. 

```
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }

  static generateName() {
    const names = ['John', 'Jane', 'Bob'];
    const index = Math.floor(Math.random() * names.length);
    return names[index];
  }
}

const name = Person.generateName();
console.log(name);
```

## Ereditarietà delle classi

L'ereditarietà della classe è un modo per estendere la funzionalità di una classe creando una nuova classe che eredita da un altra classe originale. La nuova classe eredita tutti i metodi e le proprietà della originale e può anche avere metodi e proprietà aggiuntivi propri. Per creare una classe che eredita da un'altra classe, si utilizza la parola chiave extends.

```
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

class Student extends Person {
  constructor(name, age, grade) {
    super(name, age);
    this.grade = grade;
  }
}

const student1 = new Student('John', 30, 'A');
console.log(student1);
```

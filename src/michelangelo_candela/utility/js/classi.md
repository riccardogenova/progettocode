<!-- @format -->

# classe

`è una struttura fondamentale nella programmazione orientata agli oggetti (OOP) che rappresenta un modello per creare oggetti. Essa raggruppa dati (attributi o campi) e comportamenti (metodi o funzioni) correlati in un'unica entità. I dati all'interno di una classe sono generalmente rappresentati come variabili di istanza (istanze di classe) e i comportamenti come funzioni di istanza. Le classi forniscono un modo per organizzare il codice in modo modulare, facilitando la gestione e la manutenzione del software.`

**_Definizione_**: `Una classe è un costrutto che definisce uno schema per creare oggetti, specificando i dati che gli oggetti possono contenere (attributi) e le operazioni che possono essere eseguite su di essi (metodi).`

Una classe può essere istanziata per creare oggetti che seguono lo schema definito dalla classe stessa. Ogni oggetto creato da una classe è un'istanza di quella classe, con accesso agli stessi attributi e metodi definiti nella classe.

In breve, una classe definisce la struttura generale di un tipo di oggetto, mentre gli oggetti rappresentano istanze specifiche di quella classe, con dati unici e comportamenti associati.

# Esempi di Classi:

```java
public class Person {
    String name;
    int age;

    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public void greet() {
        System.out.println("Hello, my name is " + name + " and I am " + age + " years old.");
    }
}



class Auto {
    constructor (marca,modello,anno,carburante)
    this.marca = marca;
    this.modello = modello;
    this.carburante = carburante;
    this.kmPercorsi = 0;
}

guida(km) {
    const consumoPerKm = 0.05;
    const carburanteNecessario = km + consumoPerKm

    if (this.carburante >= carburanteNecessario) {
        this.kmPercorsi += km;
        this.carburante -= carburanteNecessario;
        return 'hai guidato ' + km + ' km';
    }
}

new //serve a richiamare un costruttore
const persona = {} //serve a creare un oggetto, con costruttore
const persona2 = new Object() //serve a creare un oggetto, ma senza costruttore
class Persona {
    constructor (nomeIniziale) {
        this.name = nomeIniiziale;
}
}


```

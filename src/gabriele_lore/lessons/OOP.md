<!-- @format -->

# OOP

La programmazione orientata agli oggetti, è un paradigma di programmazione che permette di definire oggetti software in grado di interagire gli uni con gli altri attraverso lo scambio di messaggi. Per "scambio di messaggi" s'intende la capacità degli oggetti di chiamare i metodi pubblici di altri oggetti, per esempio passandogli dati da elaborare e ricevendo il risultato della loro elaborazione.

Tra gli altri vantaggi della programmazione orientata agli oggetti:

- fornisce un supporto naturale alla modellazione software degli oggetti del mondo reale o del modello astratto da riprodurre;
- permette una più facile gestione e manutenzione di progetti di grandi dimensioni;
- l'organizzazione del codice sotto forma di classi favorisce la modularità e il riuso di codice.

La programmazione ad oggetti prevede di raggruppare in alcune parti circoscritte del codice sorgente, chiamate classi, che sono la dichiarazione delle strutture dati e delle procedure che operano su di esse. Le classi, quindi, costituiscono dei modelli astratti, che a tempo di esecuzione vengono invocate per istanziare o creare oggetti software relativi alla classe invocata. Questi ultimi sono dotati di attributi (dati) e metodi (procedure) secondo quanto definito/dichiarato dalle rispettive classi.

Un linguaggio di programmazione ad oggetti prevede tre principi:

- incapsulamento: rendere publico ed accessebile solo il neccessario.
- ereditarietà: permette essenzialmente di definire delle classi a partire da altre già definite.
- polimorfismo: fare una cosa in piu' modi, tecnicamente oggetti di classi diverse, ma dotati di una stessa interfaccia comune: lo stesso codice eseguibile può essere utilizzato con istanze di classi diverse, aventi una superclasse comune.

## Incapsulamento

```
class Hero{
    //variabile privata
    #power;
    getPower()
    {
        return this.#power;
    }
}
```

## Ereditarietà

```
class veicolo {
    trazione;
    tipo;
    numero_ruote;
}
class automobile extends veicolo {
    motore;
    colore;
}
```

## Polimorfismo

Poli significa molti e morfismo significa trasformare una forma in un'altra. Polimorfismo significa che la stessa funzione con firme diverse viene chiamata più volte.

Caratteristiche del polimorfismo:

- I programmatori possono utilizzare ripetutamente lo stesso nome di metodo.
- Il polimorfismo ha l'effetto di ridurre il numero di funzionalità che possono essere accoppiate insieme.

```
class firstClass {
	add() {
		console.log("First Method")
	}
}
class secondClass extends firstClass {
	add() {
		console.log(30 + 40);
	}
}
class thirdClass extends secondClass {
	add() {
		console.log("Last Method")
	}
}
let ob = new firstClass();
let ob2 = new secondClass();
let ob3 = new thirdClass();
ob.add();
ob2.add();
ob3.add();


```

<!-- @format -->

# OPP

Per **OOP** si intende la programmazione orientata suggli oggetti.
Le classi sono delle funzioni che servono a creare "oggetti" con delle proprietà già impostate
Essa ha dei principi fondamentali.

1 incapsulamento
2 ereditarietà
3 polimorfismo

## 1 Incapsulamento

L'incapsulamento è la capacità di concentrare più dati e funzioni in un unica classe/oggetto

```javascript
class Macchina {
  constuctor(nome, nascità) {
    //il costructor è una funzione che serve a creare un "oggetto" in base ai paramtrei assegnati si può "giocare" creando nuovi oggetti
    this.nome = nome;
    this.nascita = nascita;
  }

  storia() {
    console.log(`Storia di ${this.nome} da ${this.nascita}`);
  }
}

const newMacchina = new Macchina('Ferrari', 1947);
newmacchina.storia();
```

## 2 Eritarietà

Creando una classe è possibile fare in modo che un'altra classe ne erediti le proprietà e le funzioni

```javascript
class Macchina {
  constructor(nome, nascita) {
    this.nome = nome;
    this.nascita = nascita;
  }
}

class NuovaFerrari extends Macchina {
  //con extends si può ereditare le proprietà di una classe creata in precedenza, essa è pure una parola chiave
  constructor(nome, nascita, modello, cavalli) {
    super(nome, nascita); //la parola super serve per ereditare le proprietà e le funzioni ed una parola chiave
    this.modello = modello;
    this.cavalli = cavalli;
  }
}

const modello = new NuovaFerrari('Ferrari', 1947, 'F12', 350);
```

## 3 Polimorfismo

Per rendere un minimo suciro e fare in modo che nessuno acceda alla classe
basterà mettere un # davanti le proprietà/varibili creato allinterno della classe stessa,
le proprità chiuse

```javascript
class Macchina {
  #nome;
  #nascita;
  constructor(nome, nascita) {
    this.#nome = nome;
    this.#nascita = nascita;
  }
}

const saluta = new Macchina('ferrari', 1956);
console.log(saluta.nome); //sulla console spunterà undefined
```

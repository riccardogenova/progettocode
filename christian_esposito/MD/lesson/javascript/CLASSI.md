# CLASSI

Le classi in JavaScript sono un modo per raggruppare proprietà e metodi correlati per creare oggetti. Pensale come a dei modelli o a delle stampe per la creazione di oggetti con caratteristiche simili. 

Le classi forniscono un modo più chiaro e sintetico per creare oggetti e gestire l'ereditarietà

**Sintassi base:**

```javascript
class NomeClasse {
  //costruttore
  constructor(proprieta1, proprieta2){
    this.proprieta1;
    this.proprieta2;
  }
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

**Creare un'istanza (oggetto):**

```javascript
const istanza1 = new NomeClasse();
const istanza2 = new NomeClasse();
```

**Accedere alle proprietà e ai metodi:**

```javascript
istanza1.proprietà1 = "valore1";
istanza2.proprietà2 = "valore2";

console.log(istanza1.metodo1()); // Esegue il metodo1 di istanza1
console.log(istanza2.metodo2()); // Esegue il metodo2 di istanza2
```

## COSTRUTTORE
Viene eseguito quando viene istanziato l'oggetto con la key word new
ed all'interno inserire i dati richiesti e se non esistono posso crearli e affibbiargli un valore


**Vantaggi delle classi:**

* **Organizzazione del codice:** Migliora la leggibilità e la manutenibilità del codice raggruppando le caratteristiche simili.
* **Riutilizzo:** Permette di creare facilmente nuovi oggetti con le stesse caratteristiche di base.
* **Ereditarietà:** Consente di creare classi figlie che ereditano proprietà e metodi dalle classi genitore (**relazione is-a**).
* **Polimorfismo:** Permette di implementare metodi con lo stesso nome in classi diverse, ma con comportamenti differenti (**stesso nome, diverso comportamento**).

**Esempi di utilizzo:**

* Creare classi per rappresentare oggetti reali (es. `Persona`, `Auto`, `Prodotto`).
* Gestire interfacce utente (es. creare classi per pulsanti, caselle di testo, menu).
* Sviluppare giochi (es. creare classi per personaggi, nemici, oggetti di gioco).

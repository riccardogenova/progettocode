/* Esercizio 5: Classe Gruppo
Crea una classe Gruppo che rappresenta un gruppo di persone. Ogni persona è un oggetto con le proprietà nome e età. 
La classe deve includere i seguenti metodi:
- aggiungiPersona(persona): aggiunge una persona al gruppo.
- rimuoviPersona(nome): rimuove la persona con il nome specificato.
- trovaPersonaPerNome(nome): restituisce la persona con il nome specificato.
- etàMedia(): restituisce l'età media delle persone nel gruppo.
- personeSopraEtà(età): restituisce un array con tutte le persone che hanno un'età superiore a quella specificata. */

class Group {
   person = [];
} 

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    addPerson(person) {
        const addingPerson = new Person();
        this.person.push(Group);
    }

    removePerson(person) {
        this.person = this.person.filter(
    }

}

const person1 = new Person ("Sofia", 29);
console.log(person1.name);
console.log(person1.age);



removePerson(person) {
    
}

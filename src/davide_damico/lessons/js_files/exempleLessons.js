/** @format */

// Modi per scrivere una struttura

//Metodo1
const persona = {
  name: 'Davide',
  lastName: 'Damico',
  age: 30,
};

console.log(persona.name);

const persona2 = { name: 'Davide', lastName: 'Damico', age: 30 };
console.log(persona2.name);

//Metodo2
// const persona3 = new Object({ name: 'Davide' });

//Metodo3

class Persona {
  constructor(name, lastName, age) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
  }
}

const persona4 = new Persona('Andrea', 'Rotto', 30);
console.log(persona4);

const persona5 = new Persona('Lorenzo', 'Botto', 30);
console.log(persona5);

//Da imparare a memoria la struttura:

class QualsiasiNome {
  constructor(name, kw, targa) {
    this.name = name;
    this.power = kw;
    this.plate = targa;
  }
}

const example = new QualsiasiNome();
console.log(example);

//Nuovo

class Automobile {
  constructor(name) {
    this.name = name;
  }

  run() {
    console.log('Auto');
  }
}

const automobile = new Automobile('Panda');
console.log(automobile.run);
console.log(automobile.name);

console.log('\n Testo e spaziatura');
console.log('\n');

// 14.05

class HeroDC {
  message = "I'm a loser!";

  constructor() {
    console.log('init');
  }

  getMessage() {
    console.log('get message');
  }
}

console.log(HeroDC);
console.log('\n');

class PersonaExemple2 {
  constructor(name, lastName, age) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
  }

  saluta() {
    console.log(`Ciao , io sono ${this.name} e sono single`);
  }
}

const PersonaExemple = new PersonaExemple2('Davide', 'Damico', 30);
PersonaExemple.saluta();
console.log('\n');

//commentato per il test:lint
// extends serve per estendere la classe
// class Eroe {
//   name = 'Tony Stark';
// }

// class Hero extends Eroe {
//   nickname = 'Iron Man';
// }

// come fare col constructor

class Personaa {
  constructor(initialName) {
    this.name = initialName;
  }
}

new Personaa('Andrea');

class Heroa extends Personaa {
  constructor(initialName, initialNickname) {
    super(initialName);
    this.nickname = initialNickname;
  }
}

const Heroa2 = new Heroa();

console.log(Heroa2);
console.log('\n');

// static = rendere la funzione metodo della classe stessa
class Esempio {
  static saluta() {
    console.log('Ciao');
  }
}

Esempio.saluta();

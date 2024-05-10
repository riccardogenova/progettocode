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
const persona3 = new Object({ name: 'Davide' });

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

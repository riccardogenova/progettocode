<!-- @format -->

# Il concetto di Entità

In javascript, diversamente da alcuni linguaggi di programmazione orientati agli oggetti o nei sistemi di database relazionali, il concetto di **"Entità"** non è definito in modo univoco.
Questo termine può essere inteso in diversi contesti che coinvolgo diversi tipi di dati, ad esempio: la programmazione in Javascript, specie lavorando con oggetti, classi e dati strutturati.

## Ecco alcune interpretazioni

- **_Oggetti come Entità:_**

In JavaScript, gli oggetti sono una struttura di dati fondamentale che può essere utilizzata per rappresentare entità nel senso di "cose" del mondo reale con proprietà e comportamenti. Un oggetto può essere considerato un'entità se rappresenta un'entità logica del dominio dell'applicazione.

**_Esempio di oggetto come entità:_**

```js
const utente = {
  id: 1,
  nome: 'Mario',
  cognome: 'Rossi',
  email: 'mario.rossi@example.com',
  saluta: function () {
    console.log(`Ciao, sono ${this.nome} ${this.cognome}`);
  },
};

utente.saluta(); // Output: Ciao, sono Mario Rossi
```

- **_Classi come Entità:_**

Con l'introduzione delle classi in ECMAScript 6 (ES6), è diventato più facile creare modelli di entità più strutturati. Le classi permettono di definire un modello per creare oggetti che condividono le stesse proprietà e metodi.

```js
class Utente {
  constructor(id, nome, cognome, email) {
    this.id = id;
    this.nome = nome;
    this.cognome = cognome;
    this.email = email;
  }

  saluta() {
    console.log(`Ciao, sono ${this.nome} ${this.cognome}`);
  }
}

// Creazione di un'istanza di Utente
const utente1 = new Utente(1, 'Mario', 'Rossi', 'mario.rossi@example.com');
utente1.saluta(); // Output: Ciao, sono Mario Rossi
```

- **_Entità in contesti di gestione dati:_**

Quando si lavora con librerie e framework per la gestione dei dati come Redux o con ORM (Object-Relational Mapping) come Sequelize, il concetto di entità può assumere un significato specifico relativo alla rappresentazione di record di database o stato dell'applicazione.

**_Esempio con Redux:_**

In **Redux**, uno **"state slice"** può rappresentare un insieme di entità nel contesto di uno stato globale dell'applicazione.

```js
const initialState = {
  utenti: [],
};

function utentiReducer(state = initialState, action) {
  switch (action.type) {
    case 'AGGIUNGI_UTENTE':
      return {
        ...state,
        utenti: [...state.utenti, action.payload],
      };
    default:
      return state;
  }
}
```

**Esempio con Sequelize:**

In **Sequelize**, un modello rappresenta **un'entità di database**.

```js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql',
});

const Utente = sequelize.define('Utente', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cognome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

(async () => {
  await sequelize.sync({ force: true });
  const nuovoUtente = await Utente.create({
    nome: 'Mario',
    cognome: 'Rossi',
    email: 'mario.rossi@example.com',
  });
  console.log(nuovoUtente.toJSON());
})();
```

Per concludere, in Javascript il concetto di **"entità"** può essere interpretato in vari modi a seconda del contesto. Può rappresentare oggetti e classi nel codice, oppure entità di gestione dati in contesti di stato dellìapplicazione o databse.
Un oncetto è flessibile e adattabile, il che rende JavaScript un linguaggio versatile per molteplici scenari di sviluppo.

# Il concetto di Relazione

In JavaScript, il concetto di **"relazione"** può essere interpretato in diversi contesti, soprattutto quando si tratta di strutture di dati, oggetti, database e interazioni tra componenti di un'applicazione.

- **_Relazione tra oggetti:_**

Gli oggetti in JavaScript possono avere relazioni tra loro attraverso **riferimenti**. Un oggetto può contenere riferimenti ad altri oggetti, stabilendo una relazione che può essere di tipo **uno-a-uno**, **uno-a-molti** o **molti-a-molti**.

**_Relazione Uno-a-Uno:_**

Un oggetto contiene un riferimento a un altro singolo oggetto.

```js
const autore = {
  nome: 'Mario',
  cognome: 'Rossi',
};

const libro = {
  titolo: 'Introduzione a JavaScript',
  autore: autore, // relazione uno-a-uno
};

console.log(libro.autore.nome); // Output: Mario
```

**_Relazione Uno-a-Molti:_**

Un oggetto contiene un riferimento a un **array** di oggetti.

```js
const scuola = {
  nome: 'Scuola Primaria',
  classi: [
    { nome: 'Prima A', studenti: 25 },
    { nome: 'Prima B', studenti: 20 },
  ], // relazione uno-a-molti
};

console.log(scuola.classi[0].nome); // Output: Prima A
```

**_Relazione Molti-a-Molti:_**

Utilizzo di array per rappresentare una relazione molti-a-molti.

```js
const studenti = [
  { id: 1, nome: 'Luca' },
  { id: 2, nome: 'Anna' },
];

const corsi = [
  { id: 1, titolo: 'Matematica', studenti: [1, 2] },
  { id: 2, titolo: 'Inglese', studenti: [2] },
];

console.log(corsi[0].studenti.includes(1)); // Output: true
```

- **_Relazioni in contesti di gestione dati_**

Quando si lavora con database e ORM (Object-Relational Mapping) in JavaScript, come Sequelize, le relazioni tra entità sono esplicitamente definite utilizzando associazioni.

**_Sequelize Esempio:_**

Definizione di relazioni uno-a-molti e molti-a-molti con Sequelize.

```js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql',
});

const Autore = sequelize.define('Autore', {
  nome: DataTypes.STRING,
  cognome: DataTypes.STRING,
});

const Libro = sequelize.define('Libro', {
  titolo: DataTypes.STRING,
});

// Relazione uno-a-molti
Autore.hasMany(Libro);
Libro.belongsTo(Autore);

// Relazione molti-a-molti
const Studente = sequelize.define('Studente', { nome: DataTypes.STRING });
const Corso = sequelize.define('Corso', { titolo: DataTypes.STRING });

const StudenteCorso = sequelize.define('StudenteCorso', {});
Studente.belongsToMany(Corso, { through: StudenteCorso });
Corso.belongsToMany(Studente, { through: StudenteCorso });

(async () => {
  await sequelize.sync({ force: true });

  const mario = await Autore.create({ nome: 'Mario', cognome: 'Rossi' });
  const libroJS = await Libro.create({ titolo: 'Introduzione a JavaScript' });
  await mario.addLibro(libroJS);

  const luca = await Studente.create({ nome: 'Luca' });
  const corsoMath = await Corso.create({ titolo: 'Matematica' });
  await luca.addCorso(corsoMath);

  console.log(await mario.getLibri()); // Output: [ { titolo: 'Introduzione a JavaScript' } ]
  console.log(await luca.getCorsi()); // Output: [ { titolo: 'Matematica' } ]
})();
```

- **_Relazioni tra componenti di un'applicazione_**

In applicazioni complesse, soprattutto con framework come React, Vue o Angular, le relazioni tra componenti sono fondamentali per la gestione dello stato e la comunicazione.

**_Esempio con React:_**

Relazioni tra componenti genitore e figli.

```js
import React from 'react';

const Figlio = ({ nome }) => {
  return <div>Nome del figlio: {nome}</div>;
};

const Genitore = () => {
  const nomeFiglio = 'Luca';
  return (
    <div>
      <h1>Genitore</h1>
      <Figlio nome={nomeFiglio} /> {/* Relazione genitore-figlio */}
    </div>
  );
};

export default Genitore;
```

Per concludere, il concetto di **"Relazione"** in Javascript è versatile e applicabile in vari contesti, dai semplici oggetti alle complesse strutture di dati e componenti di applicazioni.

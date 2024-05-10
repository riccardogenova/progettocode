/** @format */

const insertInput = document.getElementById('input_text');
const btnInsert = document.getElementById('btnInsert');
const optionPlaces = document.getElementById('posti');
const btnRandom = document.getElementById('random');
const table = document.getElementById('table');
const groupeTable = document.getElementById('tableGroupe');
const btnDelete = document.getElementById('filter');
const inputDelete = document.getElementById('inputDelete');
const btnSave = document.getElementById('saveData');

const nameArray = [];
const groupeArray2D = [];

function addList() {
  if (insertInput.value == '') {
    window.alert('Inserire un Testo');
    btnInsert.disabled = true;
  } else if (!nameArray.includes(insertInput.value.toUpperCase())) {
    nameArray.push(insertInput.value.toUpperCase());
    btnInsert.disabled = true;
  } else {
    window.alert('nome esistente');
  }

  insertInput.value = '';
  const list = nameArray.map(x => {
    const listElement = document.createElement('li');
    listElement.textContent = x;
    return listElement;
  });
  table.textContent = '';
  table.append(...list);
  btnDisableDelete();
}

const btnDisableInsert = () => {
  const hasInputValue = insertInput.value.trim() !== '';
  if (hasInputValue) {
    btnInsert.disabled = false;
  } else {
    btnInsert.disabled = true;
  }
};

const btnDisableDelete = () => {
  console.log(nameArray.length);
  if (nameArray.length == 0) {
    btnDelete.disabled = true;
  } else {
    btnDelete.disabled = false;
  }
};

const deleteMember = () => {
  const del = nameArray.filter(e => {
    return e !== insertInput.value.toUpperCase();
  });

  const filterList = del.map(d => {
    const listFilter = document.createElement('li');
    listFilter.textContent = d;
    return listFilter;
  });
  inputDelete.value = '';
  table.textContent = '';
  console.log('pre slice', nameArray);
  nameArray.slice(1, nameArray.length);
  console.log('post slice', nameArray);

  // pop+ while and .slice(0, .lenght) non FUNZIONANO
  nameArray.length = 0; // l'unico metodo per eliminare tutti gli elementi dalla lista.......wtf
  nameArray.push(...del);
  table.append(...filterList);
  insertInput.value = '';
  window.alert('ricordati di salvare la nuova lista');

  btnDisableDelete();
  btnDisableInsert();
};

const randomGroupe = () => {
  const copyGroupe = [...nameArray];
  const insertGroupe = [];
  const division = [];

  groupeTable.textContent = '';

  while (copyGroupe.length > 0) {
    let numGruppo = Math.min(optionPlaces.value, copyGroupe.length);
    const groupe = [];
    for (let i = 0; i < numGruppo; i++) {
      let numero = Math.floor(Math.random() * copyGroupe.length);
      groupe.push(copyGroupe.splice(numero, 1)[0]);
    }
    division.push(groupe);
  }

  division.map(g => {
    if (!insertGroupe.includes(g)) {
      const list = document.createElement('ol');

      g.map(e => {
        const orderList = document.createElement('li');
        orderList.textContent = e;
        list.appendChild(orderList);
      });

      groupeTable.appendChild(list);
      insertGroupe.push(g);
    }
  });
};

const saveList = () => {
  const jsonData = JSON.stringify(nameArray);
  // console.log("pre if",localStorage.getItem("listGroupe").length)
  if (localStorage.getItem('listGroupe') == null) {
    localStorage.setItem('listGroupe', jsonData);
    console.log('into if', jsonData);
    window.alert('lista salvata con successo');
  } else if (localStorage.getItem('listGroupe') !== null) {
    localStorage.setItem('listGroupe', jsonData);
    console.log('into if', jsonData);
    window.alert('Hai sovrascritto la lista di partecipanti');
  }
  btnDisableDelete();
};

const showListStorage = () => {
  const localData = localStorage.getItem('listGroupe');
  if (localData != null) {
    const stringData = JSON.parse(localData);
    nameArray.push(...stringData);
    console.log('arrayName', nameArray);
    console.log('stringData', stringData);
    const showData = stringData.map(d => {
      const listElement = document.createElement('li');
      listElement.textContent = d;
      return listElement;
    });
    table.append(...showData);
  }
  btnDisableDelete();
};

showListStorage();
btnDisableDelete();

insertInput.addEventListener('input', btnDisableInsert);
btnInsert.addEventListener('click', addList);
btnRandom.addEventListener('click', randomGroupe);
btnDelete.addEventListener('click', deleteMember);
btnSave.addEventListener('click', saveList);

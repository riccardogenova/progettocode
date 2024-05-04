const insertInput = document.getElementById("input_text")
const btnInsert = document.getElementById("btnInsert")
const optionPlaces = document.getElementById("posti")
const btnRandom = document.getElementById("random")
const table = document.getElementById("table")
const groupeTable = document.getElementById("tableGroupe")
const btnFilter = document.getElementById("filter")
const inputDelete = document.getElementById("inputDelete")

const nameArray = []
const groupeArray2D = []
    
function addList () {
    if(insertInput.value == ""){
        window.alert("Inserire un Testo")
        btnInsert.disabled = true;
    }else if (!nameArray.includes(insertInput.value.toUpperCase()))  {
        nameArray.push(insertInput.value.toUpperCase())
        btnInsert.disabled = true;
    }else{
        window.alert("nome esistente")
    }

    insertInput.value = ""
        const list = nameArray.map((x) => {
                const listElement = document.createElement("li")
                listElement.textContent = x
                return listElement
            })
            table.textContent = ""
            table.append(...list)
}

const btnDisable = ()=>{

    const hasInputValue = insertInput.value.trim() !== '';
    if (hasInputValue) {
        btnInsert.disabled = false;
      } else {
        btnInsert.disabled = true;
      }
}

const deleteMember = () =>{
    
    const del = nameArray.filter(e => { return e !== inputDelete.value.toUpperCase();})

    const filterList = del.map((d) => {
        const listFilter = document.createElement("li")
        listFilter.textContent = d
        return listFilter
    })
    inputDelete.value = ""
    table.textContent = ""
    table.append(...filterList)


}

const randomGroupe = () => {
    
    const copyGroupe = [...nameArray];
    const insertGroupe = [];
    const division = [];
    
    groupeTable.textContent = "";

    while (copyGroupe.length > 0) {
        let numGruppo = Math.min(optionPlaces.value, copyGroupe.length);
        const groupe = [];
        for (let i = 0; i < numGruppo; i++) {
            let numero = Math.floor(Math.random() * copyGroupe.length);
            groupe.push(copyGroupe.splice(numero, 1)[0]);
        }
        division.push(groupe);
    }

    division.map((g) => {
        if (!insertGroupe.includes(g)) {
            const list = document.createElement("ol");

            g.map((e) => {
                const orderList = document.createElement("li");
                orderList.textContent = e;
                list.appendChild(orderList);
            });

            groupeTable.appendChild(list);
            insertGroupe.push(g);
        }
    });
}


insertInput.addEventListener("input",btnDisable)
btnInsert.addEventListener("click", addList)
btnRandom.addEventListener("click",randomGroupe )
btnFilter.addEventListener("click", deleteMember)

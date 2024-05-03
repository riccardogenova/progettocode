const insertInput = document.getElementById("input_text")
const btnInsert = document.getElementById("btnInsert")
const optionPlaces = document.getElementById("posti")
const btnRandom = document.getElementById("random")
const table = document.getElementById("table")
const groupeTable = document.getElementById("tableGroupe")

const nameArray = []
const groupeArray2D = []

const numberPlace =  optionPlaces.addEventListener("change", function numberPlace() {
    console.log("n posti", optionPlaces.value)
    optionPlaces.value
})






console.log("2s", groupeArray2D)
    


function addList () {
console.log(nameArray)
    if(insertInput.value == ""){
        window.alert("Inserire un Testo")
        btnInsert.disabled = true;
    }else if (!nameArray.includes(insertInput.value.toUpperCase()))  {
        // console.log(nameArray.includes(insertInput.value))
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




const btnDisable = ( )=>{

    const hasInputValue = insertInput.value.trim() !== '';
    if (hasInputValue) {
        btnInsert.disabled = false;
      } else {
        btnInsert.disabled = true;
      }
}

const randomGroupe = () => {
    const copyGroupe = [...nameArray];
    const division = [];
    groupeTable.textContent = "";
    const insertGroupe = [];

    while (copyGroupe.length > 0) {
        let numEstratti = Math.min(optionPlaces.value, copyGroupe.length);
        const groupe = [];
        for (let i = 0; i < numEstratti; i++) {
            let numero = Math.floor(Math.random() * copyGroupe.length);
            groupe.push(copyGroupe.splice(numero, 1)[0]);
        }
        division.push(groupe);
    }

    division.forEach((g) => {
        if (!insertGroupe.includes(JSON.stringify(g))) {
            const lista = document.createElement("ol");

            g.forEach((e) => {
                const orderList = document.createElement("li");
                orderList.textContent = e;
                lista.appendChild(orderList);
            });

            groupeTable.appendChild(lista);
            insertGroupe.push(JSON.stringify(g));
        }
    });
}















insertInput.addEventListener("input",btnDisable)
btnInsert.addEventListener("click", addList)
btnRandom.addEventListener("click",randomGroupe )

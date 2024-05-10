/** @format */

class ApptodoList {
  todoList = [];

  addTodo(todoName) {
    this.todoList = [...this.todoList, { description: todoName, status: false, id: Math.random() }];
    console.log(this.todoList);
  }

  removeTodo(idTodo) {
    function onFilter(el) {
      return idTodo !== el.id;
    } // ho scelto un parametro che ho chiamato 'idTodo', l'ho filtrato per far ritornare un nuovo array con gli elementi diversi dal parametro che ho scelto

    const newTodo = this.todoList.filter(onFilter); //ho applicato il filter, chiamando la funzione creata in precedenza
    console.log(newTodo);
    this.todoList = newTodo; //ho applicato le modifiche all'array iniziale, perché il filter non modifica l'array originale
  }

  toggleTodoList(idTodo) {
    function onFilter(el) {
      return idTodo === el.id;
    } //ho creato una funzione che filtra un elemento uguale al parametro che gli ho passato 'idTodo' // Tipuzzailculo.<3 nana malefica

    const idList = this.todoList.filter(onFilter); //ho assegnato una variabile alla funzione perché mi restituisce un array copia filtrato di quello originale
    console.log(idList);
    //    idList[0].status = true - così setto un valore al parametro
    if (idList[0].status === true) {
      //ho recuperato la posizione dell'array con il valore che mi serviva (idList[0]), entrando dentro l'oggetto ho preso l'elemento su cuidovevo lavorare (.status)
      //ho cambiato il valore solo se originariamente è true // porcodio('gesù')
      idList[0].status = false;
    } else {
      idList[0].status = true;
    }
  }

  // Tipuzzailculo.<3 nana malefica

  UpdateToDo(idTodo, newDescription) {
    function onFilter(el) {
      return idTodo === el.id;
    }
    const updateId = this.todoList.filter(onFilter);
    updateId[0].description = newDescription;
  }
}

// porcodio('gesù')

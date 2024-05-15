// sviluppa app di una lista di cose da fare con delle funzionalità come:
//  (aggiungi, rimuovi e modifica elemento) e che abbia scritto vero o falso se e fatta o no.
class ApptodoList {
  todoList = [];

  addTodo(todoName) {
    this.todoList = [
      ...this.todoList,
      { description: todoName, status: false, id: Math.random() },
    ];
    console.log(this.todoList);
  }

  removeTodo(idTodo) {
    function onFilter(el) {
      return idTodo !== el.id;
    }

    const newTodo = this.todoList.filter(onFilter);
    console.log(newTodo);
    this.todolist = newTodo;
  }

  toggleTodoList(idTodo) {
    function onFilter(el) {
      return idTodo === el.id;
    }
    const idList = this.todoList.filter(onFilter);
    console.log(idList);
    if (idList[0].status === true) {
      idList[0].status = false;
    } else {
      idList[0].status = true;
    }
  }
}

/** @format */

class AppTodoList {
  todos = [];
  //function

  addTodo(description, idNew) {
    this.todos = [...this.todos, { description: description, status: false, id: idNew }];
    console.log('ELEMENTO AGGIUNTO');
  }

  removeTodo(idRemove) {
    const remove = this.todos.filter(e => {
      return idRemove !== e.id;
    });
    this.todos = remove;
    //   console.log("Remove",remove)
    //   console.log("newTodo", this.todos)
  }

  updateTodoDescription(newDescription, id) {
    const filtDoto = this.todos.filter(e => {
      return id === e.id;
    });
    // console.log("filtDoto", filtDoto)

    filtDoto[0].description = newDescription;

    // console.log("nedDesc", newDesc)
    // console.log("todoWhitNewDesc",this.todos)
  }

  updateStatus(id) {
    const filtDoto = this.todos.filter(e => {
      return id === e.id;
    });
    // console.log(filtDoto)
    filtDoto[0].status = !filtDoto[0].status;
    // console.log("typeof", newStatus)
    // console.log("new todo Status",this.todos)
  }

  todoList() {
    console.log('getTodoFunction', this.todos);
  }
}

const tod = new AppTodoList();
tod.addTodo('hello World', 1);
tod.addTodo('Hello mdf', 2);
tod.addTodo('Hello mdf', 3);
tod.todoList;

tod.removeTodo(1);
tod.todoList;
tod.updateTodoDescription('ciao', 3);
tod.todoList;
tod.updateStatus(2);
tod.todoList;
tod.updateStatus(2);
tod.todoList;
//   console.log(tod.todos)

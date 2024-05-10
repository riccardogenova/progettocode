class AppToDoList {
  todos = []; //{(description: "spesa", status: true/false, id: 1233)}

  addTodo(todoName) {
    this.todos = [
      ...this.todos,
      { description: todoName, status: false, id: Math.random() },
    ];
  }
  removeTodo(idTodo) {
    function onFilter(todo) {
      if (idTodo !== todo.id) return true;
      else return false;
    }
    const newtodos = this.todos.filter(onFilter);
    this.todos = newtodos;
  }

  updateTodo(idTodo, newdescription) {
    function onMap(todo) {
      if (todo.id === idTodo) {
        return { ...todo, description: newdescription };
      } else {
        return todo;
      }
    }
  }

  makeremoveTodoAsDone(idTodo) {
    function onMap(todo) {
      if (todo.id === idTodo) {
        return { ...todo, status: !todo.status };
      } else {
        return todo;
      }
    }
  }
}

const myApp = new AppToDoList();

window.app = myApp;

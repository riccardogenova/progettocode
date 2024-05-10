class AppTodolist {
  Todos = [];
  addTodo(description) {
    this.Todos = [
      ...this.Todos,
      { description: description, status: false, id: Math.random },
    ];
  }
  removeTodo(idTodo) {
    function onfilter(todo) {
      if (idTodo !== todo.id) return true;
      return false;
    }
    this.Todos = this.Todos.filter(todo);
  }
  updateTodo(idTodo) {
    function onmap(todo, newdescription) {
      if (idTodo === todo.id) {
        todo.description = newdescription;
        return todo;
      }
      this.Todos = this.Todos.map(onmap);
    }
  }
  makeToasDone(idTodo) {
    function makeToasDone(idTodo) {
      if (idTodo === id) {
        idTodo.status !== idTodo.status;
        return idTodo;
      }
      this.Todos = this.Todos.map(makeToasDone);
    }
  }
}

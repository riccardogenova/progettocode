class AppTodoList {
  todos = [];

  addTodo(todoName) {
    this.todos = [
      ...this.todos,
      { desctription: todoName, status: false, id: Math.random() },
    ];
    console.log(this.todos);
  }

  removeTodo(idTodo) {
    function onFilter(todo) {
      if (idTodo !== todo.id) return true;
      return false;
    }
    const newTodo = this.todos.filter(onFilter);
    this.todos = newTodo;
    console.log(this.todos);
  }

  toggleTodoStatus(idTodo) {
    function onMap(todo) {
      if (todo.id === idTodo) {
        return { ...todo, status: !todo.status };
      } else return todo;
    }
    const toggleTodoList = this.todos.map(onMap);
    this.todos = toggleTodoList;
    console.log(this.todos);
  }

  updateTodo(idTodo, newDescription) {
    function changeDescription(todo) {
      if (idTodo === todo.id) {
        return { ...todo, desctription: newDescription };
      } else return todo;
    }
    const updateDescription = this.todos.map(changeDescription);
    this.todos = updateDescription;
    console.log(this.todos);
  }
}

const appTodo = new AppTodoList();

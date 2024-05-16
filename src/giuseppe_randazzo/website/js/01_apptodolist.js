/** @format */

class AppTodoList {
  todos = [];

  addTodo(todoName) {
    this.todos = [...this.todos, { description: todoName, status: false, id: Math.random() }];
  }

  removeTodo(idTodo) {
    function onFilter(todo) {
      return idTodo !== todo.id;
    }
    const newTodos = this.todos.filter(onFilter);
    this.todos = [...newTodos];
  }

  makeRemoveTodoAsDone(idTodo) {
    function onMap(todo) {
      if (idTodo === todo.id) {
        return { ...todo, status: !todo.status };
      }
      return todo;
    }
    const newTodos = this.todos.map(onMap);
    this.todos = [...newTodos];
  }

  updateTodo(idTodo, newDescription) {
    function onMap(todo) {
      if (idTodo === todo.id) {
        return { ...todo, description: newDescription };
      } else return todo;
    }
    const newTodos = this.todos.map(onMap);
    this.todos = [...newTodos];
  }
}
const toDoList = new AppTodoList();
toDoList.addTodo('Prova');

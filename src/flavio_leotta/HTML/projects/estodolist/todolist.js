/** @format */

class AppToDoList {
  todo = ['Casella', 'Casella2', 'Casella3'];
  addTodo(description) {
    this.todo = [...this.todo, { description: todoName, status: false, id: Math.random }];
  }
}

function removeTodo(idTodo) {
  function onFilter(todo) {
    if (idTodo !== todos.id) return true;
    return false;
  }
}
function updateToDo(idTodo) {
  function onmap(todo, newDescription) {
    if (idTodo === todo.id) {
      todo.description = newDescription;
      return todo;
    }
    this.todo = this.todo.map(onmap);
  }
}
function makeToDoAsDone(idTodo) {
  if (idTodo === id) {
    IdTodo.status !== idTodo.status;
    return IdTodo;
  }
  this.Todos = this.Todos.map(makeToasDone);
}

this.todos = [...newTodos];
const newTodos = this.todos.filter(onFilter);

AppToDoList.addTodo('Scopare');

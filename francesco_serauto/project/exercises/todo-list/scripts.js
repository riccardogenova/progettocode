"use strict";
class AppTodoList {
  todos = [];

  addTodo(description, idTodo) {
    this.todos = [
      ...this.todos,
      { description: description, status: false, idTodo: idTodo },
    ];
    console.log(`Aggiunto alla lista ${description} ✅`);
  }
  removeTodo(idTodo) {
    function onFilter(todo) {
      if (idTodo !== todo.idTodo) {
        return true;
      } else {
        return false;
      }
    }
    this.todos = this.todos.filter(onFilter);
    console.log(`Rimosso dalla lista ID = ${idTodo} ✅`);
    console.log("Lista aggiornata:", this.todos);
  }
  toggleTodoStatus(idTodo) {
    function toggle(todo) {
      if (idTodo === todo.idTodo) {
        return { ...todo, status: !todo.status };
      } else {
        return todo;
      }
    }
    this.todos = this.todos.map(toggle);
    console.log(`Stato del todo con ID ${idTodo} cambiato ✅`);
    console.log("Lista aggiornata:", this.todos);
  }
  updateTodo(idTodo, newDescription) {
    function update(todo) {
      if (idTodo === todo.idTodo) {
        return { ...todo, description: newDescription };
      } else {
        return todo;
      }
    }
    this.todos = this.todos.map(update);
    console.log(`Todo con ID ${idTodo} aggiornato ✅`);
    console.log("Lista aggiornata:", this.todos);
  }
}

const todo = new AppTodoList();
todo.addTodo("Spesa", 1);
todo.addTodo("Dormire", 2);
todo.addTodo("Cucinare", 3);
todo.removeTodo(1);
todo.toggleTodoStatus(2);
todo.toggleTodoStatus(3);
todo.toggleTodoStatus(2);
todo.toggleTodoStatus(3);
todo.updateTodo(2, "Svegliarsi bello elegante");
todo.updateTodo(3, "Studiare");

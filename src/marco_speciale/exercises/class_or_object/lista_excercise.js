/** @format */

class Lista {
  todos = [];

  addTodos(desc) {
    this.todo = [...this.todos, { descrizione: desc, done: false, id: Math.random() }];
  }

  removeTodos(idTask) {
    function onFilter(d) {
      if (d.id !== idTask) {
        return true;
      }
      return false;
    }
  }

  status(idTask, newDesc) {
    function onMap(task) {
      if (task.id !== newDesc) {
        task.descrizione = newDesc;
      }
      return task;
    }
  }

  toggle(idTask) {
    function onMap(task) {
      task.done = !task.done;
    }
    return task;
  }
}
const obj = new Lista();

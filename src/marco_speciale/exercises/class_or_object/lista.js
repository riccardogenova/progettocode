/** @format */

class Lista {
  todos = [];

  addTodos(desc) {
    this.todos = [...this.todos, { descrizione: desc, done: false, id: Math.random() }];
  }

  removeTodos(idTask) {
    function onFilter(d) {
      if (d.id !== idTask) {
        return true;
      }
      return false;
    }
    this.todos = this.todos.filter(onFilter);
  }

  status(newDesc) {
    function onMap(task) {
      if (task.id !== newDesc) {
        task.descrizione = newDesc;
      }
      return task;
    }
    this.todos = this.todos.map(onMap);
  }

  toggle() {
    function onMap(task) {
      return (task.done = !task.done);
    }
    onMap();
  }
}
const obj = new Lista();
obj.toggle();

/** @format */

class Application {
  #todos = []; // {descrizione: , done: true/false, id: }

  addTask(descr) {
    this.#todos = [...this.#todos, { descrizione: descr, done: false, id: Math.random() }];
  }
  removeTask(idTask) {
    function onFilter(task) {
      return task.id !== idTask;
    }
    this.#todos = this.#todos.filter(onFilter);
  }
  updateTask(idTask, descrNuova) {
    function onMap(task) {
      if (task.id === idTask) {
        task.descrizione = descrNuova;
      }
      return task;
    }
    this.#todos = this.#todos.map(onMap);
  }
  toggle(idTask) {
    function onMap(task) {
      if (task.id === idTask) {
        task.done = !task.done;
      }
      return task;
    }
    this.#todos = this.#todos.map(onMap);
  }
  getTodos() {
    return this.#todos;
  }
}
const app = new Application();
app.addTask("Spesa");

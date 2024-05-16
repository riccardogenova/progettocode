//sviluppare un'applicazione in js che permette di gestire una to do list
class AppTodoList {
    todos = [];

    addTodo(description){
        this.todos = [...this.todos, {description:description, id:Math.random(), done: false}]
    }
    removeTodo(idTodo){
        
    }

    makeTodoAsDone(idTodo){}

    removeTodoAsDone(idTodo){}

    updateTodo(idTodo, newDescription){
        function onMap()
    }
}
var app = new AppTodoList()
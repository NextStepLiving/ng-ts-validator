import { Todo } from '../../models/todo';
export class AddTodoController {
    constructor() {
        console.log('todoList', this.todoList);
    }
    newTodoSubmit() {
        var todo = new Todo();
        todo.title = this.newTodoTitle;
        todo.completed = false;
        this.todoList.push(todo);
        this.newTodoTitle = null;
    }
}

//# sourceMappingURL=./../components/add-todo/add-todo-controller.js.map
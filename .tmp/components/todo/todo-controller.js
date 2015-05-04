import { Todo } from '../../models/todo';
export class TodoController {
    constructor() {
        var todo = new Todo();
        todo.title = 'Todo 1';
        todo.completed = false;
        this.todoList = [todo];
    }
}

//# sourceMappingURL=./../components/todo/todo-controller.js.map
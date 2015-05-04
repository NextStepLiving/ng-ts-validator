import { Todo } from '../../models/todo';

export class TodoController {

    public todoList: Array<Todo>;

    constructor() {
        var todo = new Todo();
        todo.title = 'Todo 1';
        todo.completed = false;
        this.todoList = [todo];
    }
}
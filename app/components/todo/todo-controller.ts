import { Todo } from '../../models/todo';

export class TodoController {

    public todoList: Array<Todo>;

    constructor() {
        this.todoList = [];
    }
}
import { Todo } from '../../models/todo';

export class TodoListController {

    /**
     * bound with bindToController from the TodoList component
     */
    public todoList: Array<Todo>;

    constructor() {}

    public removeTodo(index: number): void {
        this.todoList.splice(index, 1);
    }

    public toggleCompleteness(index: number): void {
        this.todoList[index].completed = !this.todoList[index].completed;
    }
}
import { Todo } from '../../models/todo';

export class AddTodoController {


    /**
     * bound with ng-model on the input field
     */
    public newTodoTitle: string;

    /**
     * bound by bindToController in component definition
     */
    public todoList: Array<Todo>;


    constructor() {
        console.log('todoList', this.todoList);
    }

    public newTodoSubmit(): void {
        var todo = new Todo();
        todo.title = this.newTodoTitle;
        todo.completed = false;
        this.todoList.push(todo);

        this.newTodoTitle = null;
    }
}
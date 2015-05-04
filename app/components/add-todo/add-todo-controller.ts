import { Todo } from '../../models/todo';

export class AddTodoController {


    public newTodoTitle: string;

    /**
     * This property is bound by bindToController in component definition
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
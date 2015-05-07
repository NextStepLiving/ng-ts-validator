import { Todo } from '../../models/todo';
import _ from 'lodash';

export class TodoController {

    public todoList: Array<Todo>;
    public hideCompleted: boolean;

    constructor() {
        this.todoList = [];
    }


}
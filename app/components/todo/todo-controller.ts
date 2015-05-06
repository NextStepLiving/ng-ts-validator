import { Todo } from '../../models/todo';
import _ from 'lodash';

export class TodoController {

    public todoList: Array<Todo>;

    constructor() {
        this.todoList = [];
    }


}
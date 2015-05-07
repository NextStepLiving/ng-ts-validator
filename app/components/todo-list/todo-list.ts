import { TodoListController } from './todo-list-controller';

export let todoList = function () {
    return {
        restrict: 'E',
        templateUrl: 'components/todo-list/todo-list.html',
        scope: {},
        controller: TodoListController,
        controllerAs: 'vm',
        bindToController: {
            todoList: '=',
            hideCompleted: '='
        }
    };
};
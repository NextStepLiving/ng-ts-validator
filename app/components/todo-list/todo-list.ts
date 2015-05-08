import { TodoListController } from './todo-list-controller';

export let todoList: ng.IDirectiveFactory = function (): ng.IDirective {

    return {
        restrict: 'E',
        templateUrl: 'components/todo-list/todo-list.html',
        scope: {
            todoList: '=',
            hideCompleted: '='
        },
        controller: TodoListController,
        controllerAs: 'vm',
        bindToController: true
    };
};
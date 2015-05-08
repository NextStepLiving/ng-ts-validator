import { AddTodoController } from './add-todo-controller';

export let addTodo = function (): ng.IDirective {
    return {
        templateUrl: 'components/add-todo/add-todo.html',
        restrict: 'E',
        scope: {
            todoList: '='
        },
        controller: AddTodoController,
        controllerAs: 'vm',
        bindToController: true
    };
};

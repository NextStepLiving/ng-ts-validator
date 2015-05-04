import { AddTodoController } from './add-todo-controller';

export let addTodo = function () {
    return {
        templateUrl: '/components/add-todo/add-todo.html',
        restrict: 'E',
        scope: {},
        controller: AddTodoController,
        controllerAs: 'vm',
        bindToController: true
    };
};

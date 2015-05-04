/**
 * Created by dpavao on 4/28/15.
 */
console.log('main.ts was executed');
import 'angular';
import 'angular-new-router';

/**
 * Routeable Components
 */
import { ExampleController } from 'components/example/example-controller';
import { TodoController } from 'components/todo/todo-controller';

import { addTodo } from 'components/add-todo/add-todo';
import { todoList } from 'components/todo-list/todo-list';
import { ApplicationController } from 'application-controller';
import applicationConfig from 'application-config';



var app = angular.module('app', ['ngNewRouter']);

app.config(applicationConfig);
app.controller('ApplicationController', ApplicationController);
app.controller('ExampleController', ExampleController);
app.controller('TodoController', TodoController);

app.directive('todoList', todoList);
app.directive('addTodo', addTodo);



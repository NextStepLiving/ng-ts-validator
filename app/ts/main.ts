/**
 * Created by dpavao on 4/28/15.
 */
console.log('main.ts was executed');
import 'angular';
import 'angular-new-router';
import { ExampleController } from './components/example/example-controller';
import { ApplicationController } from './application-controller';
import applicationConfig from './application-config';
import { addTodo } from './components/add-todo/add-todo';


var app = angular.module('app', ['ngNewRouter']);

app.config(applicationConfig);
app.controller('ApplicationController', ApplicationController);
app.controller('ExampleController', ExampleController);

app.directive('addTodo', addTodo);


/**
 * Created by dpavao on 4/28/15.
 */

import 'angular';

/**
 * Routeable Components
 */
import { ExampleController } from './components/example/example-controller';
import { ApplicationController } from './application-controller';

import { ngModelDecorator } from './directives/ng-model-decorator';



var app: ng.IModule = angular.module('app', []);
app.config(ngModelDecorator);

app.controller('ApplicationController', ApplicationController);
app.controller('ExampleController', ExampleController);


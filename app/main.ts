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
import { tsValidatorErrors } from './directives/ts-validator-errors/ts-validator-errors';

var app: ng.IModule = angular.module('ng-ts-validator', []);
app.config(ngModelDecorator);

app.controller('ApplicationController', ApplicationController);
app.controller('ExampleController', ExampleController);
app.directive('tsValidatorErrors', tsValidatorErrors);

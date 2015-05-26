/**
 * Created by dpavao on 4/28/15.
 */

import 'angular';
import { ngModelDecorator } from './directives/ng-model-decorator';
import { tsValidatorErrors } from './directives/ts-validator-errors/ts-validator-errors';
import { ApplicationController } from './application-controller';

var app: ng.IModule = angular.module('ng-ts-validator', []);
app.config(ngModelDecorator);

app.directive('tsValidatorErrors', tsValidatorErrors);
app.controller('ApplicationController', ApplicationController);

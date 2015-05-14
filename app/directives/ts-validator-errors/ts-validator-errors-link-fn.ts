import { ng } from 'angular';

export var linkFn: ng.IDirectiveLinkFn = function (scope, element: ng.IAugmentedJQuery, attrs: ng.IAttributes, formController: ng.IFormController) {
    scope.vm.forForm = formController;
};
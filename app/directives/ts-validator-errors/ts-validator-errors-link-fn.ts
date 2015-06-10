/// <reference path="./../../../../../../typings/tsd.d.ts" />



export let linkFn = function (scope, element: ng.IAugmentedJQuery, attrs: ng.IAttributes, formController: ng.IFormController) {
    scope.vm.forForm = formController;
};

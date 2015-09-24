/// <reference path="./../../../../../../typings/tsd.d.ts" />



export let linkFn = function (scope, element: ng.IAugmentedJQuery, attrs, formController: ng.IFormController) {
    element.css('display', 'none');
    setTimeout(function () {
        element.css('display', 'block');
    }, 200);
    scope.vm.forError = scope.$parent.$eval(scope.vm.forError);
    scope.vm.forForm = formController;

    scope.vm.repositionErrors = function () {
        element.css('top', element.parent().height());
    };
};

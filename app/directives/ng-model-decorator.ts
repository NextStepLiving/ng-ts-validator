import { IValidatorObject } from '../libs/ts-validator/ts-validator';


export let ngModelDecorator = function ($provide) {

    var ngModelDirective = function ($delegate: Array<any>, $compile) {
        // var directive: ng.IDirective = $delegate[0];
        var directive: ng.IDirective = $delegate[0];

        var origCompile: ng.IDirectiveCompileFn = directive.compile;

        directive.compile = function (element: ng.IAugmentedJQuery) {
            var origPrePost: ng.IDirectivePrePost = origCompile.apply(this, arguments);
            var origPre = origPrePost.pre;

            origPrePost.pre = function (scope: ng.IScope, element: ng.IAugmentedJQuery, attrs, ctrls: Array<any>) {
                origPre.apply(this, arguments);

                var modelNameBits = attrs.ngModel.split('.');
                var name = modelNameBits.pop();
                var modelStr = modelNameBits.join('.');
                var model = scope.$eval(modelStr);
                var ngModelController: ng.INgModelController = ctrls[0];
                var ngFormController: ng.IFormController = ctrls[1];




                if (typeof model._validators !== 'undefined' && typeof model._validators[name] !== 'undefined') {

                    model._validators[name].forEach(function (validatorObj:IValidatorObject) {
                        validatorObj.ngModelController = ngModelController;
                        validatorObj.ngFormController = ngFormController;
                        validatorObj.model = model;

                        ngModelController.$validators[validatorObj.name] = validatorObj.validate.bind(validatorObj);

                        let formControllerName: string = ngFormController.$name;
                        let modelControllerName: string = ngModelController.$name;

                    });
                }

            };

            return origPrePost;
        };

        return $delegate;
    };
    ngModelDirective.$inject = ['$delegate', '$compile'];



    $provide.decorator('ngModelDirective', ngModelDirective);
};

ngModelDecorator.$inject = ['$provide'];

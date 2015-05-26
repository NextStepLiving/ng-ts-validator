import { TsValidatorErrorsController } from './ts-validator-errors-controller';
import { tsValidatorErrorsTemplate } from './ts-validator-errors-template';
import { linkFn } from './ts-validator-errors-link-fn';



export let tsValidatorErrors = function (): ng.IDirective {
    return {
        restrict: 'E',
        require: '^form',
        scope: {
            forError: '=',
            forModel: '=',
            forField: '@'
        },
        controller: TsValidatorErrorsController,
        link: linkFn,
        controllerAs: 'vm',
        bindToController: true,
        template: tsValidatorErrorsTemplate()
    }
};

import { TsValidatorErrorsController } from './ts-validator-errors-controller';
import { linkFn } from './ts-validator-errors-link-fn';

console.log('linkFn', linkFn);

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
        templateUrl: 'directives/ts-validator-errors/ts-validator-errors.html'
    }
};
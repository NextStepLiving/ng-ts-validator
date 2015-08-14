export let tsValidatorErrorsTemplate = function () {
    return [
        '<div ng-show="vm.show()">',
        '<div class="ts-validator-errors-arrow"></div>',
        '<div class="ts-validator-errors-container ts-validator-error-for-{{vm.forField}}">',
        '<div ng-repeat="(errorName, errorMessage) in vm.forModel._errorMessages[vm.forField]" ng-show="vm.forForm[vm.forField].$error[errorName]" class="ts-validator-error ts-validator-error-for-{{errorName}}">',
        '{{errorMessage}}',
        '</div>',
        '</div>',
        '</div>'
    ].join("\n");
};

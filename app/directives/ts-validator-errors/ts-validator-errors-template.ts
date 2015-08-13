export let tsValidatorErrorsTemplate = function () {
    return [
        '<div ng-show="(vm.forForm[vm.forField].$dirty || vm.forForm.$submitted) && vm.forForm.$invalid" class="ts-validator-error-for-{{vm.forField}}">',
        // '<div ng-repeat="(errorName, errorMessage) in vm.forModel._errorMessages[vm.forField]" ng-show="vm.forError[errorName] == true" class="ts-validator-error ts-validator-error-for-{{errorName}}">',
        '<div ng-repeat="(errorName, errorMessage) in vm.forModel._errorMessages[vm.forField]" ng-show="vm.forForm[vm.forField].$error[errorName]" class="ts-validator-error ts-validator-error-for-{{errorName}}">',
        '{{errorMessage}}',
        '</div>',
        '</div>'
    ].join("\n");
};

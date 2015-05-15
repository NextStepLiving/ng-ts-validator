export let tsValidatorErrorsTemplate =[
    '<div ng-show="(vm.forForm[vm.forField].$dirty || vm.forForm.$submitted) && vm.forForm.$invalid">',
    '<div ng-repeat="(errorName, errorMessage) in vm.forModel._errorMessages[vm.forField]" ng-show="vm.forError[errorName] == true">',
        '{{errorMessage}}',
    '</div>',
'</div>'].join("\n");
        ]
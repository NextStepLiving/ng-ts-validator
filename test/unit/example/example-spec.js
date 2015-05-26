import 'angular';
import 'angular-mocks';



describe('an example test', function () {

    beforeEach(module('ng-ts-validator'));

    it ('should know that true is true', function () {
        expect(true).to.be.true;

    });

    it ('should be able to run the app and get references to the angular stuff', inject(function ($controller, $rootScope) {
        debugger;
        var scope = $rootScope.$new();
        var controller = $controller('ApplicationController', { $scope: scope });
        expect(controller).to.not.be.undefined;
        expect(controller.testModel).to.not.be.undefined;
    }));
});

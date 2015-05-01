import angular from 'angular';
import { Main } from 'app/ts/main';
import { Core } from 'app/ts/core/core';
import 'angular-mocks'

describe('an example test', function () {

    beforeEach(function () {
        Main.run();
        module('core');
    });
    it ('should know that true is true', function () {
        expect(true).to.be.true
    });

    it ('should be able to import Angular', function () {
        expect(angular).not.to.be.undefined;
    });

    it ('should be able to run the app and get references to the angular stuff', inject(function ($controller, $rootScope) {

        debugger;
        //var CoreController = $controller('CoreControlelr', {$scope: $rootScope.$new()});

        //expect(CoreController).to.be.defined;
    }));
});

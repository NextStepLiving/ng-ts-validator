
import 'angular';
import 'angular-mocks';



describe('an example test', function () {

    beforeEach(module('app'));

    it ('should know that true is true', function () {
        expect(true).to.be.true
    });

    it ('should be able to run the app and get references to the angular stuff', inject(function ($controller, $rootScope) {
        var scope = $rootScope.$new();
        var controller = $controller('TodoController', { $scope: scope });

        expect(controller).to.be.defined;
        expect(controller.todoList).to.be.instanceOf(Array);
    }));
});

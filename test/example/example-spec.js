import angular from 'angular';
import { Main } from 'app/ts/main';

describe('an example test', function () {

    beforeEach(function () {

    });
    it ('should know that true is true', function () {
        expect(true).to.be.true
    });

    it ('should be able to import Angular', function () {
        expect(angular).not.to.be.undefined;
    });

    it ('should be able to run the app and get references to the angular stuff', inject(function ($controller) {
        Main.run();
        //var CoreController = $controller('CoreControlelr');
        expect(CoreController).to.be.defined;
    }));
});

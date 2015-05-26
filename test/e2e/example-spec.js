var TestPage = require('./page-objects/test-page.js'),
    chai = require('chai'),
    chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
var expect = chai.expect;



describe('protractor tests', function () {

    var testPage;

    beforeEach(function () {
        testPage = new TestPage();
    });

    it ('should be able to open a browser and look for stuff', function () {

        testPage.findTestPropertyInput().sendKeys('hello-world');
        expect(testPage.findTestPropertyInput().getAttribute('value')).to.eventually.equal('hello-world');
    });

    it ('should be able to find other things too', function () {

        testPage.findTestProperty2Input().sendKeys('hello-world2');
        expect(testPage.findTestProperty2Input().getAttribute('id')).to.eventually.equal('test-property-2');
    });


});

describe('validator errors', function () {
    var testPage;

    beforeEach(function () {
        testPage = new TestPage();
    });

    it ('should show error messages when the form is submitted with empty text values', function () {

        testPage.submitForm();

        $$('ts-validator-errors').each(function (el) {
            expect(el.isDisplayed()).to.eventually.be.true;
        });
    });

    it ('should show more than one error message at a time if more than one fails', function () {
        testPage.findTestProperty3Input().sendKeys('300');

        var container = $('.ts-validator-error-for-testProperty3');
        expect(container.element(by.css('.ts-validator-error-for-max')).isDisplayed()).to.eventually.be.true;
        expect(container.element(by.css('.ts-validator-error-for-pattern')).isDisplayed()).to.eventually.be.true;
    });

});

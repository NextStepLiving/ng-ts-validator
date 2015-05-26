var TestPage = function () {
    browser.get('http://localhost:8001');
};

TestPage.prototype.findTestPropertyInput = function () {
    return element(by.model('appCtrl.testModel.testProperty'));
};

TestPage.prototype.findTestProperty2Input = function () {
    return element(by.model('appCtrl.testModel.testProperty2'));
};

TestPage.prototype.findTestProperty3Input = function () {
    return element(by.model('appCtrl.testModel.testProperty3'));
};

TestPage.prototype.findErrorMessagesForProperty3 = function () {
    return element.all(by.repeater('(errorName, errorMessage) in vm.forModel._errorMessages[vm.forField]'));
};

TestPage.prototype.submitForm = function () {
    element(by.id('submit-btn')).click();
};


module.exports = TestPage;

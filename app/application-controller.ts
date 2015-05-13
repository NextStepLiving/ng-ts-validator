import { TestModel } from './models/test-model';

export class ApplicationController {

    public testModel: TestModel;

    constructor() {
        var testModel = new TestModel();
        testModel.testProperty = 'foo bar';
        this.testModel = testModel;
    }
}
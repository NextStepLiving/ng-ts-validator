import { TestModel } from './models/test-model';

export class ApplicationController {

    public testModel: TestModel;

    constructor() {
        this.testModel = new TestModel();
    }
}
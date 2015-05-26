import { TestModel } from './models/test-model';

export class ApplicationController {

    public testModel: TestModel;
    public testForm: ng.IFormController;

    constructor() {
        this.testModel = new TestModel();
    }

    public onSubmit() {
        if (this.testForm.$valid) {
            console.log('form is valid do all the things');
        } else {
            console.log('form is invalid dont do shit');
        }
    }
}

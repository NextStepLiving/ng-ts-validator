import { BaseModel, modelProp, notEmpty } from '../libs/ts-validator/ts-validator';

export class TestModel extends BaseModel {

    @modelProp
    @notEmpty('TestProperty can not be empty')
    public testProperty: string;

}
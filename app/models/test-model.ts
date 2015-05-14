import { BaseModel, modelProp, notEmpty, min} from '../libs/ts-validator/ts-validator';

export class TestModel extends BaseModel {

    @modelProp
    @notEmpty('TestProperty can not be empty')
    @min({min: 10, message: 'test property must be greater than 10'})
    public testProperty: string;

}
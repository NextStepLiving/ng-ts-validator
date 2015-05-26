import { BaseModel, modelProp, notEmpty, min, max, pattern} from '../libs/ts-validator/ts-validator';

export class TestModel extends BaseModel {

    @modelProp
    @notEmpty('TestProperty can not be empty')
    @min({min: 11, message: 'test property must be greater than 10'})
    public testProperty: string;


    @modelProp
    @notEmpty('TestProperty2 can not be empty')
    @max({max: 9, message: 'test property 2 must be less than 10'})
    public testProperty2: number;

    @modelProp
    @pattern({pattern: /^[0-9]{2}$/, message: 'must be a two digit number'})
    @max({max: 20, message: 'can not be more than 20'})
    public testProperty3: string;
}

# Angular TypeScript Validator [![Build Status](https://travis-ci.org/NextStepLiving/ng-ts-validator.svg?branch=master)](https://travis-ci.org/NextStepLiving/ts-validator)

This project is an Angular 1.x wrapper for TypeScript Validator (https://github.com/NextStepLiving/ts-validator)

PLEASE NOTE: This is all a work in progress and is likely to change in the near future. Especially when considering that TypeScript 1.5 is still currently in beta.


## Getting Started
Copy this repo into an Angular 1.x app (this has been tested against 1.4.0-rc.2). I haven't found a good way to install 3rd party TypeScript code. I'm currently using git submodules. If any one has a better way I would love to know. I'm currently doing something like
```bash
$: git submodule add git@github.com:NextStepLiving/ng-ts-validator ./libs/ng-ts-validator

# then

$: git submodule update --init --recursive
# the above is necessary because ng-ts-validator has a submodule for ts-validator in it.
```
(Will definitely find a better way to handle the dependency management soon)


Include the ng-ts-validator module as a dependency in your Angular app
```typescript
import 'angular';
import 'libs/ng-ts-validator/ng-ts-validator';

angular.module('my-module', ['ng-ts-validator'])
```

Define your model with TypeScript Validator decorators to define your validation
```typescript
// person-model.ts
import { BaseModel } from './libs/ng-ts-validator/ng-ts-validator';

export class Person extends BaseModel {
    
    @modelProp
    @notEmpty('First name can not be empty')
    public firstName: string;
    
    @modelProp
    @notEmpty('Last name can not be empty')
    public lastName: string;
    
    @modelProp
    @min({min: 10, message: 'Age must be greater than 10'})
    public age: number;
    
}
```
For more information on available decorators in TypeScript Validator see https://github.com/NextStepLiving/ts-validator

Define your controller with an instance of your model on the scope. With controller as syntax it would look like
```typescript
// person-controller.ts
import { PersonModel } from './person-model';


export class ExampleController {
    
    public personModel: PersonModel;
    
    constructor() {
        this.personModel = new PersonModel();
    }
}
```

Add your person model properties to a form in your Angular template. 
```html
<div ng-controller="ExampleController as vm">

    <form name="vm.personForm">
        <div>
            <input name="firstName" type="text" ng-model="vm.personModel.firstName" />
            <ts-validator-errors for-error="vm.personForm.firstName.$error" for-model="vm.personModel" for-field="firstName"></ts-validator-errors>
        </div>

        <div>
            <input name="lastName" type="text" ng-model="vm.personModel.lastName" />
            <ts-validator-errors for-error="vm.personForm.lastName.$error" for-model="vm.personModel" for-field="lastName"></ts-validator-errors>
        </div>

        <div>
            <input name="age" type="text" ng-model="vm.personModel.age" />
            <ts-validator-errors for-error="vm.personForm.age.$error" for-model="vm.personModel" for-field="age"></ts-validator-errors>
        </div>
    </form>
</div>

```

When Angular validation runs it will run the validators from ts-validator and show the appropriate error messages in the <ts-validator-errors /> directive.

More to come soon...

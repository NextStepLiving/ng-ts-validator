import _ from 'lodash';


export class Core {

    private testMessage:string;

    constructor() {
        this.testMessage = 'If you see this log message, it worked!';
    }

    public test():void {
        console.log(this.testMessage);
    }
}


export class TsValidatorErrorsController {

    public forModel;
    public forField;
    public forError;
    public forForm;
    public repositionErrors;

    public show() {
        // (vm.forForm[vm.forField].$dirty || vm.forForm.$submitted) && vm.forForm.$invalid
        if ((this.forForm[this.forField].$dirty || this.forForm.$submitted) && this.forForm[this.forField].$invalid) {
            this.repositionErrors();
            return true;
        } else {
            return false;
        }
    }


}

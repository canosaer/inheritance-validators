class EmailValidator extends BaseValidator{super(a,s){console.log("EmailValidator")}validate(a){/^\w+@\w+\.\w{2,3}$/.test(a)?(this.isValid=!0,this.errorMessage=""):(this.isValid=!1,this.errorMessage="Invalid email format")}}
//# sourceMappingURL=email-validator.js.map
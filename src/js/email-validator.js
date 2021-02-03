class EmailValidator extends BaseValidator{
    super(element, options){
        console.log(`EmailValidator`)
    }

    validate(value) {
        var emailRE = /^\w+@\w+\.\w{2,3}$/
        if(!emailRE.test(value)){
            this.isValid = false
            this.errorMessage = `Invalid email format`
        } else {
            this.isValid = true
            this.errorMessage = ``
        }
    }
}
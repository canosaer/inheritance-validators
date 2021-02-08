class EmailValidator extends BaseValidator{
    super(element, options){
        console.log(`EmailValidator`)
    }

    validate(value) {
        var emailRE = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w{2,}([-.]\w{2,})*$/
        if(!emailRE.test(value)){
            this.isValid = false
            this.errorMessage = `Invalid email format`
        } else {
            this.isValid = true
            this.errorMessage = ``
        }
    }
}
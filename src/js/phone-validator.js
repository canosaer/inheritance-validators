class PhoneValidator extends BaseValidator {
    validate(value) {
        var fullnameRE = /^\w+\s+\w{2,}$/
        if(!fullnameRE.test(value)){
            this.isValid = false
            this.errorMessage = `Please enter your full name`
        } else {
            this.isValid = true
            this.errorMessage = ``
        }
    }
}
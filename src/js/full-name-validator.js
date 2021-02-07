class FullNameValidator extends BaseValidator {
    validate(value) {
        this.value = value.trim()
        var fullnameRE = /^\w+\s+(\w+\s+)*\w{2,}$/
        if(!fullnameRE.test(this.value)){
            this.isValid = false
            this.errorMessage = `Please enter your full name`
        } else {
            this.isValid = true
            this.errorMessage = ``
        }
    }
}
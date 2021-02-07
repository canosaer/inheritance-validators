class PhoneValidator extends BaseValidator {
    validate(value) {
        this.value = value.trim()
        var phoneRE = /^\(?\d{3}[\s.\-\)]?\s?\d{3}[\s.\-]?\d{4}$/
        if(!phoneRE.test(this.value)){
            this.isValid = false
            this.errorMessage = `Please enter a valid phone number`
        } else {
            this.isValid = true
            this.errorMessage = ``
        }
    }
}
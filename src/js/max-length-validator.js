class MaxLengthValidator extends BaseValidator {
    validate(value) {
        this.value = value.trim()
        if(this.value.length > this.options.maxLength){
            this.isValid = false
            this.errorMessage = `Too long`
        } else {
            this.isValid = true
            this.errorMessage = ``
        }
    }
}
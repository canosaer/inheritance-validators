class MinLengthValidator extends BaseValidator {
    validate(value) {
        this.value = value.trim()
        if(this.value.length < this.options.minLength){
            this.isValid = false
            this.errorMessage = `Not long enough`
        } else {
            this.isValid = true
            this.errorMessage = ``
        }
    }
}
class MinLengthValidator extends BaseValidator {
    validate(value) {
        this.value = value.trim()
        if(this.value.length < this.options.minLength){
            const logFail = this.element.dataset.validLog+`0`
            this.element.setAttribute(`data-valid-log`, logFail)
            this.errorMessage = `Not long enough`
        } else {
            const logPass = this.element.dataset.validLog+`1`
            this.element.setAttribute(`data-valid-log`, logPass)
        }
    }
}
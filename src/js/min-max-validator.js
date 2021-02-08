class MinMaxValidator extends BaseValidator {
    validate(value) {
        this.value = value.trim()
        if(this.value.length >= this.options.min && this.value.length <= this.options.max){
            const logPass = this.element.dataset.validLog+`1`
            this.element.setAttribute(`data-valid-log`, logPass)
            const checks = (parseInt(this.element.dataset.validChecks)+1)
            this.element.setAttribute(`data-valid-checks`, checks.toString())
        } else {
            const logFail = this.element.dataset.validLog+`0`
            this.element.setAttribute(`data-valid-log`, logFail)
            const checks = (parseInt(this.element.dataset.validChecks)+1)
            this.element.setAttribute(`data-valid-checks`, checks.toString())
            this.element.setAttribute(`data-error-message`,`Must be between ${this.options.min} and ${this.options.max} characters`)
        }
    }
}
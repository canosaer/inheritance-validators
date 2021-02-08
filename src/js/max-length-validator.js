class MaxLengthValidator extends BaseValidator {
    validate(value) {
        this.value = value.trim()
        if(this.value.length > this.options.maxLength){
            const logFail = this.element.dataset.validLog+`0`
            this.element.setAttribute(`data-valid-log`, logFail)
            const checks = (parseInt(this.element.dataset.validChecks)+1)
            this.element.setAttribute(`data-valid-checks`, checks.toString())
            this.element.setAttribute(`data-error-message`,`Too long`)
        } else {
            const logPass = this.element.dataset.validLog+`1`
            this.element.setAttribute(`data-valid-log`, logPass)
            const checks = (parseInt(this.element.dataset.validChecks)+1)
            this.element.setAttribute(`data-valid-checks`, checks.toString())
        }
    }
}
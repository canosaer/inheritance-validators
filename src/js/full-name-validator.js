class FullNameValidator extends BaseValidator {
    validate(value) {
        this.value = value.trim()
        var fullnameRE = /^\w+\s+(\w+\s+)*\w{2,}$/
        if(!fullnameRE.test(this.value)){
            const logFail = this.element.dataset.validLog+`0`
            this.element.setAttribute(`data-valid-log`, logFail)
            const checks = (parseInt(this.element.dataset.validChecks)+1)
            this.element.setAttribute(`data-valid-checks`, checks.toString())
            this.element.setAttribute(`data-error-message`,`Please enter your full name`)
        } else {
            const logPass = this.element.dataset.validLog+`1`
            this.element.setAttribute(`data-valid-log`, logPass)
            const checks = (parseInt(this.element.dataset.validChecks)+1)
            this.element.setAttribute(`data-valid-checks`, checks.toString())
        }
    }
}
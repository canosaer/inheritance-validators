class PhoneValidator extends BaseValidator {
    validate(value) {
        this.value = value.trim()
        var phoneRE = /^1?\(?\d{3}[\s.\-\)]?\s?\d{3}[\s.\-]?\d{4}$/
        if(!phoneRE.test(this.value)){
            const logFail = this.element.dataset.validLog+`0`
            this.element.setAttribute(`data-valid-log`, logFail)
            const checks = (parseInt(this.element.dataset.validChecks)+1)
            this.element.setAttribute(`data-valid-checks`, checks.toString())
            this.element.setAttribute(`data-error-message`,`Please enter a valid phone number`)
        } else {
            const logPass = this.element.dataset.validLog+`1`
            this.element.setAttribute(`data-valid-log`, logPass)
            const checks = (parseInt(this.element.dataset.validChecks)+1)
            this.element.setAttribute(`data-valid-checks`, checks.toString())
        }
    }
}
class EmailValidator extends BaseValidator{
    super(element, options){
        console.log(`EmailValidator`)
    }

    validate(value) {
        var emailRE = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w{2,}([-.]\w{2,})*$/
        if(!emailRE.test(value)){
            const logFail = this.element.dataset.validLog+`0`
            this.element.setAttribute(`data-valid-log`, logFail)
            const checks = (parseInt(this.element.dataset.validChecks)+1)
            this.element.setAttribute(`data-valid-checks`, checks.toString())
            this.element.setAttribute(`data-error-message`,`Invalid email format`)
        } else {
            const logPass = this.element.dataset.validLog+`1`
            this.element.setAttribute(`data-valid-log`, logPass)
            const checks = (parseInt(this.element.dataset.validChecks)+1)
            this.element.setAttribute(`data-valid-checks`, checks.toString())
        }
    }
}
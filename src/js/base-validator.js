class BaseValidator{
    constructor(element, options){
        this.element = element
        this.options = options
        this.errorMessageEl = element.parentElement.querySelector(`.error`)
        this.validatorString = element.dataset.validate.trim()
        this.validatorCount = 1
        
        this.setup()
    }

    setup() {
        for(let i=0;i<this.validatorString.length;i++){
            if(this.validatorString[i]===` ` && this.validatorString[i+1]!==` `){
                this.validatorCount++
            }
        }

        const numValidators = document.createAttribute(`data-num-validators`)
        numValidators.value = this.validatorCount.toString()
        this.element.setAttributeNode(numValidators)

        const validLog = document.createAttribute(`data-valid-log`)
        validLog.value = ``
        this.element.setAttributeNode(validLog)

        const validChecks = document.createAttribute(`data-valid-checks`)
        validChecks.value = `0`
        this.element.setAttributeNode(validChecks)

        const errorMessageAttribute = document.createAttribute(`data-error-message`)
        errorMessageAttribute.value = ``
        this.element.setAttributeNode(errorMessageAttribute)

        this.element.addEventListener(`change`, this.handleChange)
    }

    handleChange = (evt) => {
        const el = evt.target
        const newValue = el.value

        this.errorMessage = ``
        this.validate(newValue)
        if(this.element.dataset.validChecks === this.element.dataset.numValidators){
            let relevantLog = this.element.dataset.validLog.substring(this.element.dataset.validLog.length-this.validatorCount, this.element.dataset.validLog.length)
            if (!relevantLog.includes(`0`)){
                this.errorMessageEl.textContent = ``
            } 
            else{
                this.errorMessageEl.textContent = this.element.dataset.errorMessage
            } 
            this.element.dataset.validChecks = `0`
            this.element.dataset.validLog = ``
        }
    }

}
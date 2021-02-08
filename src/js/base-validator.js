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

        
        this.element.addEventListener(`change`, this.handleChange)
    }

    handleChange = (evt) => {
        const el = evt.target
        const newValue = el.value

        this.validate(newValue)
        this.errorMessageEl.textContent = this.errorMessage
    }

}
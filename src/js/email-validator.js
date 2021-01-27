class EmailValidator extends BaseValidator{
    super(element, options){
        console.log(`EmailValidator`)
    }

    validate(value) {
        if(value.indexOf(`@`)===-1){
            this.invalid = false
            this.errorMessage = `Invalid email format`
        } else {
            this.invalid = true
            this.errorMessage = ``
        }
    }
}
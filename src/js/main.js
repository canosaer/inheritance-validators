const allLimitedFields = document.querySelectorAll(`[data-limit]`)

allLimitedFields.forEach((element) => {
    const charLimited = new CharLimiter(element, element.dataset)
})

const allEmailFields = document.querySelectorAll(`[data-validate*="email"]`)

allEmailFields.forEach((element) => {
    const emailValidated = new EmailValidator(element, element.dataset)
})

const allNameFields = document.querySelectorAll(`[data-validate*="full-name"]`)

allNameFields.forEach((element) => {
    const fullNameValidated = new FullNameValidator(element, element.dataset)
})

const allPhoneFields = document.querySelectorAll(`[data-validate*="us-phone"]`)

allPhoneFields.forEach((element) => {
    const phoneValidated = new PhoneValidator(element, element.dataset)
})

const allMinFields = document.querySelectorAll(`[data-validate*="min-length"]`)

allMinFields.forEach((element) => {
    const minValidated = new MinLengthValidator(element, element.dataset)
})

const allMaxFields = document.querySelectorAll(`[data-validate*="max-length"]`)

allMaxFields.forEach((element) => {
    const maxValidated = new MaxLengthValidator(element, element.dataset)
})

const allMinMaxFields = document.querySelectorAll(`[data-validate*="minmax"]`)

allMinMaxFields.forEach((element) => {
    const minmaxValidated = new MinMaxValidator(element, element.dataset)
})
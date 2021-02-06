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

const allPhoneFields = document.querySelectorAll(`[data-validate*="full-name"]`)

allPhoneFields.forEach((element) => {
    const phoneValidated = new PhoneValidator(element, element.dataset)
})

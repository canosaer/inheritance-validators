const allLimitedFields=document.querySelectorAll("[data-limit]");allLimitedFields.forEach((a=>{new CharLimiter(a,a.dataset)}));const allEmailFields=document.querySelectorAll('[data-validate*="email"]');allEmailFields.forEach((a=>{new EmailValidator(a,a.dataset)}));const allNameFields=document.querySelectorAll('[data-validate*="full-name"]');allNameFields.forEach((a=>{new FullNameValidator(a,a.dataset)}));const allPhoneFields=document.querySelectorAll('[data-validate*="us-phone"]');allPhoneFields.forEach((a=>{new PhoneValidator(a,a.dataset)}));const allMinFields=document.querySelectorAll('[data-validate*="min-length"]');allMinFields.forEach((a=>{new MinLengthValidator(a,a.dataset)}));const allMaxFields=document.querySelectorAll('[data-validate*="max-length"]');allMaxFields.forEach((a=>{new MaxLengthValidator(a,a.dataset)}));const allMinMaxFields=document.querySelectorAll('[data-validate*="minmax"]');allMinMaxFields.forEach((a=>{new MinMaxValidator(a,a.dataset)}));
//# sourceMappingURL=main.js.map
class BaseValidator{constructor(e,t){this.element=e,this.options=t,this.errorMessageEl=e.parentElement.querySelector(".error"),this.setup()}setup(){this.element.addEventListener("change",this.handleChange)}handleChange=e=>{const t=e.target.value;console.log("handleChange",t),this.validate(t),this.errorMessageEl.textContent=this.errorMessage}}
//# sourceMappingURL=base-validator.js.map
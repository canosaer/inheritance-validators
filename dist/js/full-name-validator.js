class FullNameValidator extends BaseValidator{validate(t){this.value=t.trim();if(/^\w+\s+(\w+\s+)*\w{2,}$/.test(this.value)){const t=this.element.dataset.validLog+"1";this.element.setAttribute("data-valid-log",t);const e=parseInt(this.element.dataset.validChecks)+1;this.element.setAttribute("data-valid-checks",e.toString())}else{const t=this.element.dataset.validLog+"0";this.element.setAttribute("data-valid-log",t);const e=parseInt(this.element.dataset.validChecks)+1;this.element.setAttribute("data-valid-checks",e.toString()),this.element.setAttribute("data-error-message","Please enter your full name")}}}
//# sourceMappingURL=full-name-validator.js.map
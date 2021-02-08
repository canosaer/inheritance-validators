class BaseValidator{constructor(t,e){this.element=t,this.options=e,this.errorMessageEl=t.parentElement.querySelector(".error"),this.validatorString=t.dataset.validate.trim(),this.validatorCount=1,this.setup()}setup(){for(let t=0;t<this.validatorString.length;t++)" "===this.validatorString[t]&&" "!==this.validatorString[t+1]&&this.validatorCount++;const t=document.createAttribute("data-num-validators");t.value=this.validatorCount.toString(),this.element.setAttributeNode(t);const e=document.createAttribute("data-valid-log");e.value="",this.element.setAttributeNode(e);const a=document.createAttribute("data-valid-checks");a.value="0",this.element.setAttributeNode(a);const s=document.createAttribute("data-error-message");s.value="",this.element.setAttributeNode(s),this.element.addEventListener("change",this.handleChange)}handleChange=t=>{const e=t.target.value;if(this.errorMessage="",this.validate(e),this.element.dataset.validChecks===this.element.dataset.numValidators){this.element.dataset.validLog.substring(this.element.dataset.validLog.length-this.validatorCount,this.element.dataset.validLog.length).includes("0")?this.errorMessageEl.textContent=this.element.dataset.errorMessage:this.errorMessageEl.textContent="",this.element.dataset.validChecks="0",this.element.dataset.validLog=""}}}
//# sourceMappingURL=base-validator.js.map
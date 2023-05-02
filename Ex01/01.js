import { LightningElement, track } from 'lwc';
export default class CalculatorInLwc extends LightningElement {
    
    @track primeiro;
    @track segundo;
    
    mostra = false;
    
    resultValue;
    
    numero1(event) {
        this.primeiro = parseInt(event.target.value);
    }
    numero2(event) {
        this.segundo = parseInt(event.target.value);
    }
    
    add() {
        this.resultValue = parseInt(this.primeiro) + parseInt(this.segundo);
    }
    mult() {
        this.resultValue = this.primeiro * this.segundo;
    }
    sub() {
        this.resultValue = this.primeiro - this.segundo;
    }
    div() {
        if (this.primeiro == 0 || this.segundo == 0) {
            alert("Não é possivi")
        this.resultValue = this.primeiro / this.segundo;
    }
}
    
    handleOnClick() {

        this.mostra = !this.mostra;
    }
    handleClickClear() {
        this.resultValue = "";
        this.primeiro = "";
        this.segundo = "";
    }
}

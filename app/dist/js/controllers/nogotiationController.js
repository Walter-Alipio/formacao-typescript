import { Negotiation } from "../models/negociation.js";
import { Negociations } from "../models/wrapperNegotiations.js";
import { NegociationsView } from "../views/negociationsView.js";
export class NegotiationController {
    constructor() {
        //o tipo da variável já é inferido pelo ts quando atribuímos a ela um valor em sua declaração 
        this.negociations = new Negociations();
        this.negociationsView = new NegociationsView('#negociacoesView');
        this.inputDate = document.querySelector('#data');
        this.inputAmount = document.querySelector('#quantidade');
        this.inputValue = document.querySelector('#valor');
        this.negociationsView.update();
    }
    addNegotiation() {
        const negotiation = this.createNegotiation();
        this.negociations.addNegotiation(negotiation);
        console.log(this.negociations);
        this.cleanForm();
    }
    createNegotiation() {
        //Com o tipo definido, o TS já sugere formas de converter automaticamente o valor que vem do input
        return new Negotiation(this.inputDate.valueAsDate, this.inputAmount.valueAsNumber, this.inputValue.valueAsNumber);
    }
    cleanForm() {
        this.inputDate.value = '';
        this.inputAmount.value = '';
        this.inputValue.value = '';
        this.inputDate.focus();
    }
}

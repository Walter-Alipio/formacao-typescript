import { Negotiation } from "../models/negociation.js";
import { Negotiations } from "../models/wrapperNegotiations.js";
import { MessageView } from "../views/messageView.js";
import { NegotiationsView } from "../views/negotiationsView.js";
export class NegotiationController {
    constructor() {
        //o tipo da variável já é inferido pelo ts quando atribuímos a ela um valor em sua declaração 
        this.negociations = new Negotiations();
        this.negociationsView = new NegotiationsView('#negociacoesView');
        this.messageView = new MessageView('#mensagemView');
        this.inputDate = document.querySelector('#data');
        this.inputAmount = document.querySelector('#quantidade');
        this.inputValue = document.querySelector('#valor');
    }
    addNegotiation() {
        const negotiation = this.createNegotiation();
        this.negociations.addNegotiation(negotiation);
        this.updateView();
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
    updateView() {
        this.negociationsView.update(this.negociations);
        this.messageView.update('Negociação adicionada com sucesso');
    }
}

import { DaysOfTheWeek } from "../enums/daysOfTheWeek.js";
import { Negotiation } from "../models/negociation.js";
import { Negotiations } from "../models/wrapperNegotiations.js";
import { MessageView } from "../views/messageView.js";
import { NegotiationsView } from "../views/negotiationsView.js";
export class NegotiationController {
    constructor() {
        this.negociations = new Negotiations();
        this.negociationsView = new NegotiationsView('#negociacoesView', true);
        this.messageView = new MessageView('#mensagemView');
        this.inputDate = document.querySelector('#data');
        this.inputAmount = document.querySelector('#quantidade');
        this.inputValue = document.querySelector('#valor');
    }
    addNegotiation() {
        const negotiation = Negotiation.createFrom(this.inputDate.value, this.inputAmount.value, this.inputValue.value);
        if (!this.itIsWorkingDay(negotiation.date)) {
            return this.messageView.update('Apenas negociações em dias úteis são aceitas.');
        }
        this.negociations.addNegotiation(negotiation);
        this.updateView();
        this.cleanForm();
    }
    itIsWorkingDay(date) {
        return date.getDay() > DaysOfTheWeek.SUNDAY
            && date.getDay() < DaysOfTheWeek.SATURDAY;
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

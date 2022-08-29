var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { domInject } from "../decorators/domInjector.js";
import { Inspect } from "../decorators/inspect.js";
import { LogRuntime } from "../decorators/logRuntime.js";
import { DaysOfTheWeek } from "../enums/daysOfTheWeek.js";
import { Negotiation } from "../models/negociation.js";
import { Negotiations } from "../models/wrapperNegotiations.js";
import { MessageView } from "../views/messageView.js";
import { NegotiationsView } from "../views/negotiationsView.js";
export class NegotiationController {
    constructor() {
        this.negociations = new Negotiations();
        this.negociationsView = new NegotiationsView('#negociacoesView');
        this.messageView = new MessageView('#mensagemView');
        this.negociationsView.update(this.negociations);
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
__decorate([
    domInject('#data')
], NegotiationController.prototype, "inputDate", void 0);
__decorate([
    domInject('#quantidade')
], NegotiationController.prototype, "inputAmount", void 0);
__decorate([
    domInject('#valor')
], NegotiationController.prototype, "inputValue", void 0);
__decorate([
    Inspect(),
    LogRuntime()
], NegotiationController.prototype, "addNegotiation", null);

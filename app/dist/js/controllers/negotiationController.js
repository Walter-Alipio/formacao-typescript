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
import { Negotiation } from "../models/negotiation.js";
import { Negotiations } from "../models/wrapperNegotiations.js";
import { serviceNegotiations } from "../services/serviceNegotiations.js";
import { MessageView } from "../views/messageView.js";
import { NegotiationsView } from "../views/negotiationsView.js";
import { print } from "../utils/print.js";
export class NegotiationController {
    constructor() {
        this.negotiations = new Negotiations();
        this.serviceNegotiations = new serviceNegotiations();
        this.negotiationsView = new NegotiationsView('#negociacoesView');
        this.messageView = new MessageView('#mensagemView');
        this.negotiationsView.update(this.negotiations);
    }
    addNegotiation() {
        const negotiation = Negotiation.createFrom(this.inputDate.value, this.inputAmount.value, this.inputValue.value);
        if (!this.itIsWorkingDay(negotiation.date)) {
            return this.messageView.update('Apenas negociações em dias úteis são aceitas.');
        }
        this.negotiations.addNegotiation(negotiation);
        print(negotiation, this.negotiations);
        this.updateView();
        this.cleanForm();
    }
    importData() {
        this.serviceNegotiations
            .getDaysNegociations()
            .then(todaysNegotiation => {
            return todaysNegotiation.filter(todaysNegotiation => {
                return !this.negotiations
                    .list()
                    .some(negotiation => negotiation.isEqual(todaysNegotiation));
            });
        })
            .then(todaysNegotiation => {
            for (let negociation of todaysNegotiation) {
                this.negotiations.addNegotiation(negociation);
            }
            this.negotiationsView.update(this.negotiations);
        });
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
        this.negotiationsView.update(this.negotiations);
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

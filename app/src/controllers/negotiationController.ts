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

export class NegotiationController{
  //TS possui inerentemente a tipagem para lhe dar com JS. Ex: HTMLInputElement
  @domInject('#data')
  private inputDate: HTMLInputElement;
  @domInject('#quantidade')
  private inputAmount: HTMLInputElement;
  @domInject('#valor')
  private inputValue: HTMLInputElement;
  //o tipo da variável já é inferido pelo ts quando atribuímos a ela um valor em sua declaração 
  private negotiations = new Negotiations();

  private serviceNegotiations = new serviceNegotiations();

  private negotiationsView = new NegotiationsView('#negociacoesView');
  private messageView = new MessageView('#mensagemView');

  constructor(){
    this.negotiationsView.update(this.negotiations);
  }

  @Inspect()
  @LogRuntime()
  public addNegotiation(): void {
  //Com o tipo definido, o TS já sugere formas de converter automaticamente o valor que vem do input
    const negotiation = Negotiation.createFrom(
      this.inputDate.value,
      this.inputAmount.value,
      this.inputValue.value
    )

    if(!this.itIsWorkingDay(negotiation.date)){
     return this.messageView.update('Apenas negociações em dias úteis são aceitas.');
    }

    this.negotiations.addNegotiation(negotiation);
    print(negotiation, this.negotiations);
    this.updateView();
    this.cleanForm();
  }

  public importData(): void{

    this.serviceNegotiations
      .getDaysNegociations()
      .then(todaysNegotiation => {
        return todaysNegotiation.filter(todaysNegotiation => {
          return !this.negotiations
            .list()
            .some(negotiation => negotiation.isEqual(todaysNegotiation));
        })
      })
      .then(todaysNegotiation => {
        for(let negociation of todaysNegotiation){
          this.negotiations.addNegotiation(negociation);
        }
        this.negotiationsView.update(this.negotiations);
     })
  }

  private itIsWorkingDay(date: Date): boolean{
    return date.getDay() > DaysOfTheWeek.SUNDAY 
        && date.getDay() < DaysOfTheWeek.SATURDAY;  
  }

  private cleanForm(): void {
    this.inputDate.value = '';
    this.inputAmount.value = '';
    this.inputValue.value = '';
    this.inputDate.focus();
  }

  private updateView(): void{
    this.negotiationsView.update(this.negotiations);
    this.messageView.update('Negociação adicionada com sucesso');
  }
}

  /*
    Existem 2 formas de fazer um casting explícito, conforme a baixo:
      this.inputDate = <HTMLInputElement>document.querySelector('#data');
      this.inputAmount = document.querySelector('#quantidade') as HTMLInputElement;
  */
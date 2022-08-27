import { LogRuntime } from "../decorators/logRuntime.js";
import { DaysOfTheWeek } from "../enums/daysOfTheWeek.js";
import { Negotiation } from "../models/negociation.js";
import { Negotiations } from "../models/wrapperNegotiations.js";
import { MessageView } from "../views/messageView.js";
import { NegotiationsView } from "../views/negotiationsView.js";

export class NegotiationController{
  //TS possui inerentemente a tipagem para lhe dar com JS. Ex: HTMLInputElement
  private inputDate: HTMLInputElement;
  private inputAmount: HTMLInputElement;
  private inputValue: HTMLInputElement;
  //o tipo da variável já é inferido pelo ts quando atribuímos a ela um valor em sua declaração 
  private negociations = new Negotiations();

  private negociationsView = new NegotiationsView('#negociacoesView', true);
  private messageView = new MessageView('#mensagemView');

  constructor(){
  //Existem 2 formas de fazer um casting explícito, conforme a baixo:
    this.inputDate = <HTMLInputElement>document.querySelector('#data');
    this.inputAmount = document.querySelector('#quantidade') as HTMLInputElement;
    this.inputValue = document.querySelector('#valor') as HTMLInputElement;
    this.negociationsView.update(this.negociations);
  }
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

    this.negociations.addNegotiation(negotiation);
    this.updateView();
    this.cleanForm();
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
    this.negociationsView.update(this.negociations);
    this.messageView.update('Negociação adicionada com sucesso');
  }
}
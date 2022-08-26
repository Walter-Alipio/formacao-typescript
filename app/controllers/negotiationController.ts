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

  private negociationsView = new NegotiationsView('#negociacoesView');
  private messageView = new MessageView('#mensagemView');

  constructor(){
    this.inputDate = document.querySelector('#data');
    this.inputAmount = document.querySelector('#quantidade');
    this.inputValue = document.querySelector('#valor');
    
  }

  public addNegotiation(): void {
    const negotiation = this.createNegotiation();
    this.negociations.addNegotiation(negotiation);
    this.updateView();
    this.cleanForm();
  }
  
  private createNegotiation(): Negotiation {
    //Com o tipo definido, o TS já sugere formas de converter automaticamente o valor que vem do input
    return  new Negotiation(
      this.inputDate.valueAsDate,
      this.inputAmount.valueAsNumber,
      this.inputValue.valueAsNumber
    );
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
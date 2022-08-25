import { Negotiation } from "../models/negociation.js";
import { Negociations } from "../models/wrapperNegotiations.js";
import { NegociationsView } from "../views/negociationsView.js";

export class NegotiationController{
  //TS possui inerentemente a tipagem para lhe dar com JS. Ex: HTMLInputElement
  private inputDate: HTMLInputElement;
  private inputAmount: HTMLInputElement;
  private inputValue: HTMLInputElement;
  //o tipo da variável já é inferido pelo ts quando atribuímos a ela um valor em sua declaração 
  private negociations = new Negociations();

  private negociationsView = new NegociationsView('#negociacoesView');

  constructor(){
    this.inputDate = document.querySelector('#data');
    this.inputAmount = document.querySelector('#quantidade');
    this.inputValue = document.querySelector('#valor');
    this.negociationsView.update();
  }

  addNegotiation(): void {
    const negotiation = this.createNegotiation();
    this.negociations.addNegotiation(negotiation);
    console.log(this.negociations);
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
}
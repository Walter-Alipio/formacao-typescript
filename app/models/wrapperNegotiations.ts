import { Negotiation } from "./negociation.js";

//wrapper pattern
export class Negociations{
  // <T> "T" tipo. "< >" generics
  //Array<Negotiation>
  private negociations: Negotiation[] = [];

  addNegotiation(negociation: Negotiation){
    this.negociations.push(negociation);
  }

  //ReadonlyArray<Negotiation>
  list(): readonly Negotiation[]{
    return this.negociations;
  }

}
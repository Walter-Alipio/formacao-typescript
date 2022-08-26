import { Negotiation } from "./negociation.js";

//wrapper pattern
export class Negotiations{
  // <T> "T" tipo. "< >" generics
  //Array<Negotiation>
  private negotiations: Negotiation[] = [];

  addNegotiation(negociation: Negotiation){
    this.negotiations.push(negociation);
  }

  //ReadonlyArray<Negotiation>
  list(): readonly Negotiation[]{
    return this.negotiations;
  }

}
import { Negotiation } from "./negotiation.js";

//wrapper pattern
export class Negotiations{
  // <T> "T" tipo. "< >" generics
  //Array<Negotiation>
  private negotiations: Negotiation[] = [];

  addNegotiation(negotiation: Negotiation){
    this.negotiations.push(negotiation);
  }

  //ReadonlyArray<Negotiation>
  list(): readonly Negotiation[]{
    return this.negotiations;
  }

   public toText(): string{
    return JSON.stringify(this.negotiations, null, 2);
  }

}
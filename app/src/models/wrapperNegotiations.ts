
import { Model } from "../interfaces/objectModel.js";
import { Negotiation } from "./negotiation.js";

//wrapper pattern
export class Negotiations implements Model<Negotiations>{
  // <T> "T" tipo. "< >" generics
  //Array<Negotiation>
  private negotiations: Negotiation[] = [];

  addNegotiation(negotiation: Negotiation){
    this.negotiations.push(negotiation);
  }

  //ReadonlyArray<Negotiation>
  public list(): readonly Negotiation[]{
    return this.negotiations;
  }

   public toText(): string{
    return JSON.stringify(this.negotiations, null, 2);
  }

  public isEqual(negotiations: Negotiations): boolean {
    return JSON.stringify(this.negotiations) === JSON.stringify(negotiations.list());
  }

}
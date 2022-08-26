//wrapper pattern
export class Negotiations {
    constructor() {
        // <T> "T" tipo. "< >" generics
        //Array<Negotiation>
        this.negotiations = [];
    }
    addNegotiation(negociation) {
        this.negotiations.push(negociation);
    }
    //ReadonlyArray<Negotiation>
    list() {
        return this.negotiations;
    }
}

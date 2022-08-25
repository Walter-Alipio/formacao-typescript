//wrapper pattern
export class Negociations {
    constructor() {
        // <T> "T" tipo. "< >" generics
        //Array<Negotiation>
        this.negociations = [];
    }
    addNegotiation(negociation) {
        this.negociations.push(negociation);
    }
    //ReadonlyArray<Negotiation>
    list() {
        return this.negociations;
    }
}

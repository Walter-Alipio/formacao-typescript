export class Negotiations {
    constructor() {
        this.negotiations = [];
    }
    addNegotiation(negociation) {
        this.negotiations.push(negociation);
    }
    list() {
        return this.negotiations;
    }
}

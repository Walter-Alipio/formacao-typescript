export class Negotiation {
    constructor(_date, amount, value) {
        this._date = _date;
        this.amount = amount;
        this.value = value;
    }
    get date() {
        const date = new Date(this._date.getTime());
        return date;
    }
    get volume() {
        return this.amount * this.value;
    }
    toText() {
        return `
				Data: ${this.date},
				Quantidade: ${this.amount},
				Valor: ${this.value}
			`;
    }
    static createFrom(dateString, amountString, valueString) {
        const regex = /-/g;
        const date = new Date(dateString.replace(regex, ","));
        const amount = parseInt(amountString);
        const value = parseFloat(valueString);
        return new Negotiation(date, amount, value);
    }
}
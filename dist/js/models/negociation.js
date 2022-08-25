export class Negotiation {
    // private _date: Date;
    // private _amount: number;
    // private _value: number;
    //utilizando no construtor uma forma reduzida de declaração, própria do ts.
    constructor(_date, amount, value) {
        this._date = _date;
        this.amount = amount;
        this.value = value;
    }
    //getter com programação defensiva 
    get date() {
        const date = new Date(this._date.getTime());
        return date;
    }
    get volume() {
        return this.amount * this.value;
    }
}

export class Negotiation {
	/*
		private _date: Date;
		private _amount: number;
		private _value: number;
	*/

	//utilizando no construtor uma forma reduzida de declaração, própria do ts.
	constructor(
		private _date: Date, 
		public readonly amount: number, 
		public readonly value: number
		) {}

		
		//getter com programação defensiva 
		get date(){
			const date = new Date(this._date.getTime());
			return date;
		}
		
		get volume(): number{
			return this.amount * this.value;
		}

		public toText(): string{
			return `
				Data: ${this.date},
				Quantidade: ${this.amount},
				Valor: ${this.value}
			`;
		}

		public static createFrom(dateString: string, amountString: string, valueString: string): Negotiation{
			const regex = /-/g;
    	const date = new Date(dateString.replace(regex,","));
			const amount = parseInt(amountString);
			const value = parseFloat(valueString);
			return  new Negotiation(
      date,
      amount,
      value
      );
		}

}

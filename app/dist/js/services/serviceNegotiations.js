import { Negotiation } from "../models/negotiation.js";
export class serviceNegotiations {
    getDaysNegociations() {
        return fetch('http://localhost:8080/dados')
            .then(res => res.json())
            .then((data) => {
            return data.map(todayData => {
                return new Negotiation(new Date(), todayData.vezes, todayData.montante);
            });
        });
    }
}

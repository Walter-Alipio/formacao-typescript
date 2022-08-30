import { daysNegotiation } from "../interfaces/todaysNegotiation.js";
import { Negotiation } from "../models/negotiation.js";

export class serviceNegotiations{

  public getDaysNegociations(): Promise<Negotiation[]>{
    return  fetch('http://localhost:8080/dados')
     .then(res => res.json())
     .then((data: daysNegotiation[])=>{
        return data.map(todayData => {
          return new Negotiation(
            new Date(),
            todayData.vezes, 
            todayData.montante
          );
        })
     })
  }
}
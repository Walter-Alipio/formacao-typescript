import { Negociations } from "../models/wrapperNegotiations.js";
import { View } from "./view.js";

//criando um template para tabela dinâmica
export class NegociationsView extends View<Negociations>{


  protected template(model: Negociations): string{
    return `
    <table class= "table table-hover table-bordered">
      <thead>
        <tr>
          <th>DATA</th>
          <th>QUANTIDADE</th>
          <th>VALOR</th>
        </tr>
      </thead>
      <tbody>
      ${
        model.list().map(negociation => {
          return `
            <tr>
              <td>${this.formatDate(negociation.date)}</td>
              <td>${negociation.amount}</td>
              <td>${negociation.value}</td>
            </tr>
          `
        }).join('')
      }
      </tbody>
    <table>
    `;
  }

  private formatDate(date: Date): string{
    return new Intl.DateTimeFormat().format(date)
  }
}
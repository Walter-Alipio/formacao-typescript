//usando o poder dos generics <T>, a classe que estende View precisa declarar qual tipo deve ser usado.
export abstract class View<T>{//classes abstratas não podem ser instanciadas diretamente
  
  //protected permite que os elementos filhos também acessem a propriedade
  protected element: HTMLElement;
  constructor(selector: string){
    this.element = document.querySelector(selector);
  }

  //metodo abstrato precisa ser implementado pelas classes filhas
  protected abstract template(model: T ): string;

  public update(model: T): void{
    const template = this.template(model);
    this.element.innerHTML = template;
  }
}
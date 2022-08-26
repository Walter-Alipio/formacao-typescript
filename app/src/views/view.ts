//usando o poder dos generics <T>, a classe que estende View precisa declarar qual tipo deve ser usado.
export abstract class View<T>{//classes abstratas não podem ser instanciadas diretamente
  
  //protected permite que os elementos filhos também acessem a propriedade
  protected element: HTMLElement;
  private escape = false;

  //criando parâmetro escape opcional
  constructor(selector: string, escape?: boolean){
    const element = document.querySelector(selector); 

    if(element){
      this.element = element as HTMLElement;
    }else{
      throw Error (`O elemento ${element} não existe no DOM.`);
    }

    if(escape){
      this.escape = escape;
    }
  }

  //metodo abstrato precisa ser implementado pelas classes filhas
  protected abstract template(model: T ): string;

  public update(model: T): void{
    let template = this.template(model);
    if(this.escape){
      template = template.replace(/<script>[\s\S]*?<script>/,'');
    }
    this.element.innerHTML = template;
  }
}
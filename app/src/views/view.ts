import { Inspect } from "../decorators/inspect.js";
import { LogRuntime } from "../decorators/logRuntime.js";

//usando o poder dos generics <T>, a classe que estende View precisa declarar qual tipo deve ser usado.
export abstract class View<T>{//classes abstratas não podem ser instanciadas diretamente
  
  //protected permite que os elementos filhos também acessem a propriedade
  protected element: HTMLElement;

  //criando parâmetro escape opcional
  constructor(selector: string){
    const element = document.querySelector(selector); 

    if(element){
      this.element = element as HTMLElement;
    }else{
      throw Error (`O elemento ${element} não existe no DOM.`);
    }
  }

  //metodo abstrato precisa ser implementado pelas classes filhas
  protected abstract template(model: T ): string;

  // @LogRuntime(true)
  // @Inspect()
  public update(model: T): void{
    let template = this.template(model);
    this.element.innerHTML = template;
  }
}

//Quando a mais de um decorator, eles serão empilhados e o que estiver mais alto no topo da pilha será resolvido primeiro.
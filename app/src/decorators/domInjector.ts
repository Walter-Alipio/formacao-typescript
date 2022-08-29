//decorator de propriedade
export function domInject(selector: string){
  return function(
    target: any,
    propertyKey: string
  ){
    let element: HTMLElement; //criando um cache para o getter
    const getter = function(){  // definindo novo getter para o prototype
      if(!element){
        element = <HTMLElement>document.querySelector(selector); 
      }
     return element
    }
    Object.defineProperty(target, propertyKey, { get: getter });  //alterando propriedades do prototype
  }
}
export function Inspect(){
  return function(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ){
    const originalMethod = descriptor.value;
    descriptor.value = function(...args: any[]){
      console.log(`--- Método: ${propertyKey}`);
      console.log(`------ Parâmetros: ${JSON.stringify(args)}`);
      const returnOriginal = originalMethod.apply(this,args);
      console.log(`------ Retorno: ${JSON.stringify(returnOriginal)}`);
      return returnOriginal;
    }

    return descriptor;
  }
}

/*
  Quando o decorator não receberá nenhum parâmetro, não é preciso retornar uma função ex:

  export function Inspect(
    target: any,
    ...
  ){
    ...
    return descriptor;
  }

  E ele deve ser chamado sem os "( )"
  @Inspect

  Não utilizaremos dessa forma para manter as chamadas mais coesas.
*/
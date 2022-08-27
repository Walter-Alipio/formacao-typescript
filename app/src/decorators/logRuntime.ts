export function LogRuntime(inSeconds: boolean = false){
  return function(
    target: any,  //É a função construtora (método estático) ou o Prototype
    propertyKey: string,  //Nome do método que está sendo decorado
    descriptor: PropertyDescriptor  //Tem a referência para o método original
  ) {
    const origianlMethod = descriptor.value;
    descriptor.value = function(...args: any[]){
      let divider = 1;
      let unit = 'milissegundos';
      if(inSeconds){
        divider = 1000;
        unit = 'segundos  '
      }
      const temp1 = performance.now();
      const origianlReturn = origianlMethod.apply(this, args);//chama método original
      const temp2 = performance.now();
      console.log(`${propertyKey}, tempo de execução: ${(temp2-temp1)/divider} ${unit}`);
      origianlReturn
    }
    return descriptor;
  }
}

//  Decorator de método
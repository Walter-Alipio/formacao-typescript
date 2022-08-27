export function LogRuntime(){
  return function(
    target: any,
    propertykey: string,
    descriptor: PropertyDescriptor
  ) {
    const origianlMethod = descriptor.value;
    descriptor.value = function(...args: any[]){
      const temp1 = performance.now();
      const origianlReturn = origianlMethod.apply(this, args);//chama método original
      const temp2 = performance.now();
      console.log(`${propertykey}, tempo de execução: ${(temp2-temp1)/1000} segundos`);
      origianlReturn
    }
    return descriptor;
  }
}

//  Decorator de método
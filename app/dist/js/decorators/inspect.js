export function Inspect() {
    return function (target, propertyKey, descriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args) {
            console.log(`--- Método: ${propertyKey}`);
            console.log(`------ Parâmetros: ${JSON.stringify(args)}`);
            const returnOriginal = originalMethod.apply(this, args);
            console.log(`------ Retorno: ${JSON.stringify(returnOriginal)}`);
            return returnOriginal;
        };
        return descriptor;
    };
}

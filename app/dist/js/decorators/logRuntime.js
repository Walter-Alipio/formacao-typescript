export function LogRuntime() {
    return function (target, propertykey, descriptor) {
        const origianlMethod = descriptor.value;
        descriptor.value = function (...args) {
            const temp1 = performance.now();
            const origianlReturn = origianlMethod.apply(this, args);
            const temp2 = performance.now();
            console.log(`${propertykey}, tempo de execução: ${(temp2 - temp1) / 1000} segundos`);
            origianlReturn;
        };
        return descriptor;
    };
}

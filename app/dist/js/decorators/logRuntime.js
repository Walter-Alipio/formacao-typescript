export function LogRuntime(inSeconds = false) {
    return function (target, propertyKey, descriptor) {
        const origianlMethod = descriptor.value;
        descriptor.value = function (...args) {
            let divider = 1;
            let unit = 'milissegundos';
            if (inSeconds) {
                divider = 1000;
                unit = 'segundos  ';
            }
            const temp1 = performance.now();
            const origianlReturn = origianlMethod.apply(this, args);
            const temp2 = performance.now();
            console.log(`${propertyKey}, tempo de execução: ${(temp2 - temp1) / divider} ${unit}`);
            origianlReturn;
        };
        return descriptor;
    };
}

export function escape() {
    return function (target, propertyKey, descriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args) {
            let returnOriginal = originalMethod.apply(this, args);
            if (typeof returnOriginal === 'string') {
                returnOriginal = returnOriginal.replace(/<script>[\s\S]*?<script>/, '');
            }
            return returnOriginal;
        };
        return descriptor;
    };
}

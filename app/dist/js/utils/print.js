export function print(...args) {
    for (let arg of args) {
        console.log(arg.toText());
    }
}

//usando o poder dos generics <T>, a classe que estende View precisa declarar qual tipo deve ser usado.
export class View {
    constructor(selector) {
        this.element = document.querySelector(selector);
    }
    update(model) {
        const template = this.template(model);
        this.element.innerHTML = template;
    }
}

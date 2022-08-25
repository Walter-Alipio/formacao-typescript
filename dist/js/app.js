import { NegotiationController } from './controllers/negotiationController.js';
const controller = new NegotiationController();
const form = document.querySelector('.form');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    controller.addNegotiation();
});

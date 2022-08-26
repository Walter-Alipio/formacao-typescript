import { NegotiationController } from './controllers/negotiationController.js';

const controller = new NegotiationController();
const form = document.querySelector('.form');

if(!form){
  throw Error ('Não foi possível iniciar a aplicação.');
}
form.addEventListener('submit', (event: Event) =>{
  event.preventDefault();
  controller.addNegotiation();
});



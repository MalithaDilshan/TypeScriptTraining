import { Invoice } from './classes/Invoice.js';
import { ListTemplate } from './classes/ListTemplate.js';
import { Payments } from './classes/Payment.js';
// const anchor = document.querySelector('a')!;
// if(anchor) {
//   console.log(anchor.href);
// }
// console.log(anchor.href);
// const invoice1 = new Invoice('Timmy', 'Buying foods', 250 );
// const invoice2 = new Invoice('Novy', 'Got dress', 524 );
// let invloices : Invoice[] = [];
// invloices.push( invoice1 );
// invloices.push( invoice2 );
// invloices.forEach( inv =>
//   {
//     console.log( inv.client, inv.amount, inv.format() );
//   }
// )
//-------------------------------------------------------------------------------------------------------------------------------------------------
//const form = document.querySelector('form')!;
const form = document.querySelector('.new-item-form');
// console.log(form.children);
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let values;
    values = [tofrom.value, details.value, amount.valueAsNumber];
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payments(...values);
    }
    // console.log( document.format() );
    list.render(doc, type.value, 'start');
});

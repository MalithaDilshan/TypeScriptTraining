import { Invoice }  from './classes/Invoice.js';
import { ListTemplate } from './classes/ListTemplate.js';
import { Payments }  from './classes/Payment.js';
import { HasFormatter } from './interfaces/HasFormatter.js';


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
const form = document.querySelector('.new-item-form') as HTMLFormElement;
// console.log(form.children);

const type = document.querySelector('#type') as HTMLInputElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul)


form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    let values : [string, string, number];
    values = [tofrom.value, details.value, amount.valueAsNumber];

    let doc : HasFormatter;
    if( type.value === 'invoice')
    {
      doc = new Invoice( ...values );
    }
    else
    {
      doc = new Payments( ...values );
    }

    // console.log( document.format() );
    list.render(doc, type.value, 'start' );

});
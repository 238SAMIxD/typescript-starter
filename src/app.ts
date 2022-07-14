/* eslint-disable prettier/prettier */
import Invoice from './Modules/Invoice.js';

const anchor = document.querySelector('a');
console.log(anchor?.href);

const form = document.querySelector('form.new-item-form') as HTMLFormElement;
console.log(form.method);

const type = document.querySelector('#type') as HTMLInputElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;
console.log(type, tofrom, details, amount);

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});

const inv = new Invoice('Samuel', 'laundry', 20);
console.error(inv.format());

/* eslint-disable prettier/prettier */
import Invoice from './Modules/Invoice.js';
import Payment from './Modules/Payment.js';
import Formatter from './Modules/Formatter.js';

interface Person {
    name: string;
    age: number;

    speak(what: string): void;
    spends(howMuch: number): number;
}

const form = document.querySelector('form.new-item-form') as HTMLFormElement;
const type = document.querySelector('#type') as HTMLInputElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    let doc: Formatter;
    if(type.value === 'invoice') {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    } else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
});

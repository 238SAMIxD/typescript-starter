/* eslint-disable prettier/prettier */
import Invoice from './Modules/Invoice.js';
import Payment from './Modules/Payment.js';
import Formatter from './Modules/Formatter.js';
import ListTemplate from './Modules/ListTemplate.js';

const form = document.querySelector('form.new-item-form') as HTMLFormElement;
const type = document.querySelector('#type') as HTMLInputElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;
const ul: HTMLUListElement = document.querySelector('ul.item-list')!;
const list = new ListTemplate(ul);

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    let doc: Formatter;
    if(type.value === 'invoice') {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    } else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }

    list.render(doc, type.value, 'start');
});


const addUID = <T extends {name: string, age: number}>(obj: T) => {
    const uid = Math.floor(Math.random() * 10);
    return {...obj, uid};
};
console.log(addUID({name: 'Han', age: 20, isMale: true}));

interface Resource<T> {
    uid: number,
    name: string,
    data: T
}
const res: Resource<string> = {
    uid: 0,
    name: 'OMG',
    data: 'nope'
};
console.log(res);

enum Games {
    LOL, CSGO, WOW, LOR, TFT
}
console.log(Games);
console.log(Games.TFT);

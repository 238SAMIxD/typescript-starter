/* eslint-disable prettier/prettier */
import Invoice from './Modules/Invoice.js';
import Payment from './Modules/Payment.js';
const me = {
    name: 'Samuel',
    age: 21,
    speak(text) {
        console.log(text);
    },
    spends(amount) {
        return amount;
    }
};
console.log(me);
const anchor = document.querySelector('a');
console.log(anchor === null || anchor === void 0 ? void 0 : anchor.href);
const form = document.querySelector('form.new-item-form');
console.log(form.method);
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
console.log(type, tofrom, details, amount);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    console.log(doc.format());
});
const inv = new Invoice('Samuel', 'laundry', 20);
console.error(inv.format());
//# sourceMappingURL=app.js.map
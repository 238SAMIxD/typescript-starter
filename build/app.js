/* eslint-disable prettier/prettier */
import Invoice from './Modules/Invoice.js';
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
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
const inv = new Invoice('Samuel', 'laundry', 20);
console.error(inv.format());
//# sourceMappingURL=app.js.map
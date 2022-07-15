/* eslint-disable prettier/prettier */
import Invoice from './Modules/Invoice.js';
import Payment from './Modules/Payment.js';
import ListTemplate from './Modules/ListTemplate.js';
const form = document.querySelector('form.new-item-form');
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
const ul = document.querySelector('ul.item-list');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, 'start');
});
const addUID = (obj) => {
    const uid = Math.floor(Math.random() * 10);
    return Object.assign(Object.assign({}, obj), { uid });
};
console.log(addUID({ name: 'Han', age: 20, isMale: true }));
const res = {
    uid: 0,
    name: 'OMG',
    data: 'nope'
};
console.log(res);
var Games;
(function (Games) {
    Games[Games["LOL"] = 0] = "LOL";
    Games[Games["CSGO"] = 1] = "CSGO";
    Games[Games["WOW"] = 2] = "WOW";
    Games[Games["LOR"] = 3] = "LOR";
    Games[Games["TFT"] = 4] = "TFT";
})(Games || (Games = {}));
console.log(Games);
console.log(Games.TFT);
let a = ['Dog', 12, false];
a[0] = false;
a = ['abc', true, 0];
const tuple = ['Sure', 42, false];
console.log(tuple);
//# sourceMappingURL=app.js.map
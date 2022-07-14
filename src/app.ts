/* eslint-disable prettier/prettier */
class Invoice {
    constructor(private client: string, private details: string, private amount: number) {}

    format() {
        return `${this.client} owes $${this.amount} for ${this.details}`;
    }

    getClient() {
        return this.client;
    }

    getDetails() {
        return this.details;
    }

    getAmount() {
        return this.amount;
    }
}

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

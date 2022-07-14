/* eslint-disable prettier/prettier */
import Formatter from './Formatter.js';

export default class Payment implements Formatter {
    constructor(private recipient: string, private details: string, private amount: number) {}

    format() {
        return `${this.recipient} received $${this.amount} for ${this.details}`;
    }

    getClient() {
        return this.recipient;
    }

    getDetails() {
        return this.details;
    }

    getAmount() {
        return this.amount;
    }
}

/* eslint-disable prettier/prettier */
import Formatter from './Formatter.js';

export default class Invoice implements Formatter {
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

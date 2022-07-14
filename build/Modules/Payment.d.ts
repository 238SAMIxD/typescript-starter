import Formatter from './Formatter.js';
export default class Payment implements Formatter {
    private recipient;
    private details;
    private amount;
    constructor(recipient: string, details: string, amount: number);
    format(): string;
    getClient(): string;
    getDetails(): string;
    getAmount(): number;
}
